#!/usr/bin/env python3
"""
Scrape Veteran Flooring STL website using headless browser
"""

from playwright.sync_api import sync_playwright
import json
import time

def scrape_site(url):
    """Scrape the veteran flooring site to extract business information and existing schema"""

    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        )
        page = context.new_page()

        try:
            print(f"Loading {url}...")
            page.goto(url, wait_until='networkidle', timeout=30000)
            time.sleep(2)  # Let JS load

            # Extract page content
            content = page.content()

            # Extract specific business information
            data = {
                'url': url,
                'title': page.title(),
                'meta_description': page.locator('meta[name="description"]').get_attribute('content') if page.locator('meta[name="description"]').count() > 0 else None,
                'h1_tags': [h1.inner_text() for h1 in page.locator('h1').all()],
                'h2_tags': [h2.inner_text() for h2 in page.locator('h2').all()],
                'phone': None,
                'email': None,
                'address': None,
                'existing_schema': [],
                'services': [],
                'images': []
            }

            # Look for phone numbers in common patterns
            phone_selectors = [
                'a[href^="tel:"]',
                '[class*="phone"]',
                '[id*="phone"]',
                'text=/\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}/'
            ]

            for selector in phone_selectors:
                try:
                    if page.locator(selector).count() > 0:
                        phone_elem = page.locator(selector).first
                        phone_text = phone_elem.inner_text() if phone_elem else None
                        if phone_text and not data['phone']:
                            data['phone'] = phone_text.strip()
                            break
                except:
                    continue

            # Look for email
            email_selectors = [
                'a[href^="mailto:"]',
                '[class*="email"]',
                '[id*="email"]'
            ]

            for selector in email_selectors:
                try:
                    if page.locator(selector).count() > 0:
                        email_elem = page.locator(selector).first
                        if selector.startswith('a[href^="mailto:"]'):
                            data['email'] = email_elem.get_attribute('href').replace('mailto:', '').strip()
                        else:
                            data['email'] = email_elem.inner_text().strip()
                        break
                except:
                    continue

            # Look for address
            address_selectors = [
                '[class*="address"]',
                '[id*="address"]',
                '[itemtype*="PostalAddress"]'
            ]

            for selector in address_selectors:
                try:
                    if page.locator(selector).count() > 0:
                        addr_elem = page.locator(selector).first
                        data['address'] = addr_elem.inner_text().strip()
                        break
                except:
                    continue

            # Extract existing JSON-LD schema
            schema_scripts = page.locator('script[type="application/ld+json"]').all()
            for script in schema_scripts:
                try:
                    schema_content = script.inner_text()
                    schema_json = json.loads(schema_content)
                    data['existing_schema'].append(schema_json)
                except:
                    continue

            # Look for services mentioned
            service_keywords = ['hardwood', 'vinyl', 'laminate', 'tile', 'carpet', 'flooring', 'installation', 'repair', 'restoration']
            page_text = page.inner_text('body').lower()

            for keyword in service_keywords:
                if keyword in page_text:
                    data['services'].append(keyword)

            # Get logo and main images
            img_elements = page.locator('img').all()
            for img in img_elements[:10]:  # First 10 images
                try:
                    src = img.get_attribute('src')
                    alt = img.get_attribute('alt') or ''
                    if src and not src.startswith('data:'):
                        # Make absolute URL
                        if src.startswith('//'):
                            src = 'https:' + src
                        elif src.startswith('/'):
                            src = url.rstrip('/') + src

                        data['images'].append({
                            'src': src,
                            'alt': alt
                        })
                except:
                    continue

            # Get all text content for analysis
            body_text = page.inner_text('body')

            print("\n=== SCRAPED DATA ===")
            print(json.dumps(data, indent=2))

            print("\n=== FULL PAGE TEXT (first 2000 chars) ===")
            print(body_text[:2000])

            return data

        except Exception as e:
            print(f"Error: {e}")
            return None

        finally:
            browser.close()

if __name__ == '__main__':
    url = 'https://www.veteranflooringstl.com/'
    result = scrape_site(url)

    if result:
        # Save to file
        with open('veteran_flooring_data.json', 'w') as f:
            json.dump(result, indent=2, fp=f)
        print("\n✓ Data saved to veteran_flooring_data.json")
