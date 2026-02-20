export const PHONE = "(555) 867-5309";
export const PHONE_HREF = "tel:+15558675309";
export const EMAIL = "info@eaglesepticpumping.com";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  included: string[];
  process: { step: number; title: string; description: string }[];
  warningSigns: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
  relatedPostSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "septic-tank-pumping",
    title: "Septic Tank Pumping",
    shortTitle: "Tank Pumping",
    metaTitle: "Septic Tank Pumping Service | Eagle Septic Pumping",
    metaDescription:
      "Professional septic tank pumping by licensed technicians. All tank sizes, fast service, legally disposed waste. Call Eagle Septic Pumping for a free estimate.",
    heroHeadline: "Professional Septic Tank Pumping",
    heroSubheadline:
      "Regular pumping every 3–5 years is the single most important thing you can do to protect your septic system. Our licensed technicians work quickly, cleanly, and efficiently — no surprises.",
    overview:
      "Septic tank pumping removes the accumulated solids (sludge) and floating scum from your tank before they overflow into your drain field. Once solids reach the outlet pipe, they contaminate the drain field — a repair that can cost ten times more than routine pumping. We service all tank sizes, from 500-gallon residential tanks to 5,000+ gallon commercial tanks, and dispose of all waste at licensed treatment facilities.",
    included: [
      "Full evacuation of liquid, sludge, and scum layers",
      "Tank lid locating and safe excavation if buried",
      "Visual inspection of inlet and outlet baffles",
      "Check for cracks, leaks, and structural issues",
      "Measurement of sludge and scum layers (for your records)",
      "Legally compliant waste transport and disposal",
      "Written service summary with recommended next pumping date",
    ],
    process: [
      {
        step: 1,
        title: "Schedule & Confirm",
        description:
          "Call or submit our online form. We'll confirm your tank size, location, and access needs — and give you an upfront price before we arrive.",
      },
      {
        step: 2,
        title: "Arrive & Locate",
        description:
          "Our tech arrives on time with a vacuum truck sized for your tank. If your lid is buried, we locate it and excavate carefully — no guesswork.",
      },
      {
        step: 3,
        title: "Pump & Inspect",
        description:
          "We fully evacuate the tank, then inspect baffles, walls, and the effluent level. Any issues are photographed and explained before we leave.",
      },
      {
        step: 4,
        title: "Dispose & Document",
        description:
          "All waste is transported to a licensed facility. You receive a written summary with sludge depth readings and the date for your next pumping.",
      },
    ],
    warningSigns: [
      {
        title: "Slow drains throughout the house",
        description:
          "If multiple drains are slow at once (not just one fixture), your tank may be full or the drain field may be failing.",
      },
      {
        title: "Gurgling sounds from drains or toilets",
        description:
          "Gurgling is air being displaced by rising sewage — a classic sign that your tank needs to be pumped immediately.",
      },
      {
        title: "Sewage odors indoors or in the yard",
        description:
          "Sulfur smells near drains or soggy, smelly patches of grass over the tank or drain field indicate a full or failing system.",
      },
      {
        title: "It's been more than 5 years",
        description:
          "Even if everything seems fine, solids accumulate silently. Pumping before problems start is far cheaper than emergency repairs.",
      },
    ],
    faq: [
      {
        question: "How often should a septic tank be pumped?",
        answer:
          "Most households should pump every 3–5 years, but the right frequency depends on tank size and the number of people in your home. A 1,000-gallon tank with 4 residents typically needs pumping every 3–4 years. We'll measure your sludge layer and give you a personalized recommendation at each visit.",
      },
      {
        question: "How long does pumping take?",
        answer:
          "For a standard residential tank, pumping typically takes 30–60 minutes. Larger tanks, buried lids, or difficult access can add time. We'll give you an accurate time estimate when you schedule.",
      },
      {
        question: "Do I need to be home during pumping?",
        answer:
          "Yes — we need access to the tank lid and the ability to ask questions about system history. Someone 18 or older should be available for the appointment.",
      },
      {
        question: "What happens to the waste after pumping?",
        answer:
          "All septage is transported in sealed vacuum trucks to a licensed wastewater treatment facility. We comply with all state and local regulations for waste disposal.",
      },
      {
        question: "Can I use additives to avoid pumping?",
        answer:
          "Septic additives — biological or chemical — do not eliminate the need for pumping. Solids must be physically removed. Some chemical additives can actually harm the drain field. Regular pumping is the only effective maintenance.",
      },
    ],
    relatedSlugs: [
      "tank-cleaning-maintenance",
      "septic-inspections",
      "emergency-services",
    ],
    relatedPostSlugs: [
      "how-often-pump-septic-tank",
      "warning-signs-septic-system-failing",
      "what-happens-if-you-never-pump-septic-tank",
    ],
  },
  {
    slug: "tank-cleaning-maintenance",
    title: "Tank Cleaning & Maintenance",
    shortTitle: "Cleaning & Maintenance",
    metaTitle: "Septic Tank Cleaning & Maintenance | Eagle Septic Pumping",
    metaDescription:
      "Deep septic tank cleaning removes stubborn sludge and extends system life. Maintenance plans available. Licensed, insured technicians. Free estimates.",
    heroHeadline: "Septic Tank Cleaning & Maintenance",
    heroSubheadline:
      "Beyond standard pumping, deep cleaning removes hardened buildup that shortens tank life. Our maintenance plans catch problems before they become expensive emergencies.",
    overview:
      "Standard pumping removes liquid waste and loose sludge. Deep cleaning goes further — breaking up and removing compacted sludge layers, cleaning the tank walls, and thoroughly inspecting every component. It's the difference between a quick oil change and a full vehicle service. Our maintenance plans keep your system in peak condition year-round, with scheduled inspections and priority emergency response.",
    included: [
      "Full tank pumping and liquid waste removal",
      "High-pressure interior wash to loosen compacted sludge",
      "Complete sludge and residue removal",
      "Baffle inspection, cleaning, and replacement if needed",
      "Filter cleaning (if applicable to your system)",
      "Tank wall and lid inspection for cracks or deterioration",
      "Detailed written maintenance report",
      "Optional: enroll in an annual or biennial maintenance plan",
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "We review your system's history, tank size, and current condition to determine whether standard pumping or deep cleaning is needed.",
      },
      {
        step: 2,
        title: "Pump Out",
        description:
          "We start with a full evacuation of all liquid and loose solids before beginning the deep cleaning process.",
      },
      {
        step: 3,
        title: "Deep Clean",
        description:
          "Hardened sludge is broken up and removed. Tank walls are washed, baffles are inspected and cleaned, and any filters are serviced.",
      },
      {
        step: 4,
        title: "Inspect & Report",
        description:
          "We document everything — photos of baffles, measurements, and any conditions that need attention — and provide a full written report.",
      },
    ],
    warningSigns: [
      {
        title: "Tank was last cleaned more than 7 years ago",
        description:
          "Even with regular pumping, compacted residue accumulates. Deep cleaning should follow standard pumping every few cycles.",
      },
      {
        title: "Persistent odors after pumping",
        description:
          "If odors return quickly after a recent pump-out, residue buildup on tank walls may be the cause.",
      },
      {
        title: "Slow system recovery",
        description:
          "If drain flow doesn't improve significantly after pumping, hardened buildup may be restricting outlet flow.",
      },
      {
        title: "Unknown system history",
        description:
          "Buying a new home or unsure when the tank was last serviced? A deep cleaning inspection gives you a clean slate and full documentation.",
      },
    ],
    faq: [
      {
        question: "What's the difference between pumping and cleaning?",
        answer:
          "Pumping removes liquid waste and loose sludge. Deep cleaning uses high-pressure water to break up and remove compacted sludge, clean the tank walls, and service internal components like baffles and filters. Deep cleaning is more thorough and typically recommended every 2–3 pump cycles.",
      },
      {
        question: "Do you offer maintenance plans?",
        answer:
          "Yes. Our maintenance plans include scheduled pumping and cleaning visits, priority scheduling, discounted rates, and a dedicated service record for your system. Contact us to discuss a plan sized for your household.",
      },
      {
        question: "How long does deep cleaning take?",
        answer:
          "A deep cleaning service typically takes 1–2 hours for a standard residential tank, depending on the level of buildup and tank size.",
      },
      {
        question: "Will cleaning fix a failing drain field?",
        answer:
          "Cleaning can restore proper flow through the tank and reduce organic load reaching the drain field. If the drain field itself is saturated, additional repairs may be needed — but cleaning is always the right first step.",
      },
    ],
    relatedSlugs: [
      "septic-tank-pumping",
      "septic-inspections",
      "drain-field-repair",
    ],
    relatedPostSlugs: [
      "septic-system-maintenance-guide",
      "what-not-to-flush-septic-system",
      "do-septic-tank-additives-work",
    ],
  },
  {
    slug: "septic-inspections",
    title: "Septic Inspections",
    shortTitle: "Inspections",
    metaTitle: "Septic System Inspection | Eagle Septic Pumping",
    metaDescription:
      "Certified septic inspections for real estate transactions and routine maintenance. Written reports, camera inspections available. Call Eagle Septic Pumping.",
    heroHeadline: "Certified Septic System Inspections",
    heroSubheadline:
      "Whether you're buying a home, selling, or simply due for a checkup — our thorough inspections give you a complete picture of your system's health with a written report you can trust.",
    overview:
      "A septic inspection evaluates every component of your system: the tank, baffles, distribution box, drain field, and any advanced treatment components. We offer both standard visual inspections and full camera inspections that document the inside of the tank and pipes. Our written reports meet the requirements of most lenders, buyers, and county health departments for real estate transactions.",
    included: [
      "Tank pumping prior to inspection (for accurate evaluation)",
      "Visual inspection of tank structure, lid, and risers",
      "Baffle condition assessment (inlet and outlet)",
      "Distribution box inspection",
      "Drain field evaluation (surface observation and probing)",
      "Detailed written inspection report",
      "Optional: camera inspection of tank interior and pipes",
      "Recommendations for any needed repairs or maintenance",
    ],
    process: [
      {
        step: 1,
        title: "Schedule & Prepare",
        description:
          "Let us know if this is a real estate inspection so we can coordinate with your timeline. We recommend access to any system records or previous inspection reports.",
      },
      {
        step: 2,
        title: "Pump & Open",
        description:
          "We pump the tank before inspecting so we can evaluate baffles, walls, and the outlet clearly — without floating solids obscuring the view.",
      },
      {
        step: 3,
        title: "Full System Evaluation",
        description:
          "We inspect every accessible component from tank to drain field, documenting conditions with photos and measurements.",
      },
      {
        step: 4,
        title: "Written Report",
        description:
          "You receive a signed written report within 24 hours detailing the condition of each component, any deficiencies, and recommended next steps.",
      },
    ],
    warningSigns: [
      {
        title: "You're buying or selling a home with a septic system",
        description:
          "Most lenders require a septic inspection as part of the real estate transaction. An inspection protects buyers from inheriting a failing system.",
      },
      {
        title: "It's been more than 3 years since your last inspection",
        description:
          "Routine inspections catch minor issues — deteriorating baffles, slow drain field absorption — before they become major failures.",
      },
      {
        title: "You've added household members or bedrooms",
        description:
          "Increased load on a system not designed for it accelerates wear. An inspection confirms your system can handle the new demand.",
      },
      {
        title: "You've had repairs done and want to verify the work",
        description:
          "After any repair or installation, an independent inspection confirms the work was completed correctly and the system is functioning.",
      },
    ],
    faq: [
      {
        question: "What does a septic inspection include?",
        answer:
          "Our standard inspection includes tank pumping, full tank evaluation (structure, baffles, liquid level), distribution box check, drain field surface and probe evaluation, and a written report. Camera inspections add interior tank and pipe video documentation.",
      },
      {
        question: "How long does an inspection take?",
        answer:
          "A standard inspection with pumping takes 1–2 hours. Camera inspections add 30–60 minutes. We provide the written report within 24 hours.",
      },
      {
        question: "Is an inspection required to sell my home?",
        answer:
          "Requirements vary by state and lender. Many mortgage lenders and some counties require a passing septic inspection before closing. Even where not required, buyers frequently request one. We recommend scheduling early to avoid closing delays.",
      },
      {
        question: "What happens if the system fails inspection?",
        answer:
          "If we find issues, we'll explain exactly what needs to be repaired and provide an estimate. Many issues — like replacing a baffle — are minor and inexpensive. We can perform most repairs ourselves and re-inspect after completion.",
      },
      {
        question: "Do you provide camera inspections?",
        answer:
          "Yes. Camera inspections are available as an add-on to any standard inspection. They're especially useful for older systems, systems with unknown history, or situations where a detailed interior record is needed.",
      },
    ],
    relatedSlugs: [
      "septic-tank-pumping",
      "drain-field-repair",
      "tank-cleaning-maintenance",
    ],
    relatedPostSlugs: [
      "septic-inspection-home-sale-guide",
      "septic-inspection-home-buyers-guide",
      "stanislaus-county-septic-regulations",
    ],
  },
  {
    slug: "emergency-services",
    title: "Emergency Septic Services",
    shortTitle: "Emergency Services",
    metaTitle: "24/7 Emergency Septic Service | Eagle Septic Pumping",
    metaDescription:
      "Septic backup or overflow? Call Eagle Septic Pumping 24/7 for fast emergency response. Licensed technicians, prompt service. Don't wait — call now.",
    heroHeadline: "24/7 Emergency Septic Response",
    heroSubheadline:
      "Sewage backups are a health emergency. We answer the phone around the clock, dispatch immediately, and resolve the problem fast — so you can get your home back to normal.",
    overview:
      "Septic emergencies don't follow business hours. Raw sewage in your home or yard is a serious health hazard that demands immediate action. Our emergency team is available 24 hours a day, 7 days a week, 365 days a year — including weekends and holidays. We prioritize emergency calls and aim to be on-site within hours, not days. We handle everything from sewage backups and overflows to flooded drain fields and pump failures.",
    included: [
      "24/7 phone response — a real person answers",
      "Priority same-day dispatch",
      "Emergency tank pumping to relieve system pressure",
      "Sewage backup assessment and containment advice",
      "Diagnosis of failure cause (tank, pump, distribution, drain field)",
      "Temporary solutions to restore function while permanent repairs are planned",
      "Clear estimate before any work begins",
      "After-hours service with transparent pricing",
    ],
    process: [
      {
        step: 1,
        title: "Call Us Now",
        description:
          "Call our emergency line. A live technician will ask a few quick questions to assess the situation and dispatch the right equipment.",
      },
      {
        step: 2,
        title: "Emergency Dispatch",
        description:
          "We dispatch a vacuum truck and technician immediately. We'll give you an estimated arrival time and any safety steps to take in the meantime.",
      },
      {
        step: 3,
        title: "Stabilize the System",
        description:
          "Upon arrival, we immediately pump the tank to relieve pressure and stop active backup. This stabilizes the situation while we diagnose the root cause.",
      },
      {
        step: 4,
        title: "Diagnose & Resolve",
        description:
          "We identify what caused the emergency — full tank, pump failure, pipe blockage, or drain field failure — and provide a repair plan with clear pricing.",
      },
    ],
    warningSigns: [
      {
        title: "Sewage backing up into sinks, tubs, or toilets",
        description:
          "Raw sewage backup is a health emergency. Stop using water immediately and call us. Do not attempt to plunge or clear drains yourself.",
      },
      {
        title: "Sewage smell inside the house",
        description:
          "Strong sewage odors indoors — especially near floor drains, toilets, or washing machines — indicate the system is under pressure or backing up.",
      },
      {
        title: "Soggy, foul-smelling patches in the yard",
        description:
          "Standing water or wet grass over the drain field with a sewage smell means the drain field is saturated and actively surfacing sewage.",
      },
      {
        title: "All drains suddenly slow or stopped",
        description:
          "If every drain in the house stops working at the same time, the tank is likely full or the outlet is blocked — an emergency situation.",
      },
    ],
    faq: [
      {
        question: "What should I do while waiting for emergency service?",
        answer:
          "Stop all water use in the home immediately — no flushing, no laundry, no showers. If sewage has backed up into the home, stay out of affected areas and keep children and pets away. Open windows if possible. Our technician will give you specific guidance when you call.",
      },
      {
        question: "How quickly can you respond?",
        answer:
          "We aim to be on-site within 2–4 hours for emergency calls. Response time depends on distance and active call volume. We'll give you an estimated arrival time when you call.",
      },
      {
        question: "Do you charge extra for after-hours calls?",
        answer:
          "Yes, after-hours and weekend emergency service does carry an additional fee. We'll tell you exactly what to expect in terms of pricing before dispatching so there are no surprises.",
      },
      {
        question: "Will emergency pumping fix the problem permanently?",
        answer:
          "Emergency pumping stabilizes the situation and stops active backup, but it doesn't fix the underlying cause. After pumping, we'll diagnose why the emergency occurred and provide a repair plan. Most causes are addressable — failed baffles, pump failure, or a saturated drain field.",
      },
      {
        question: "What if the drain field is the problem?",
        answer:
          "Drain field failures can't be fixed by pumping alone. We'll assess the extent of the failure and discuss repair options, which may include field rejuvenation, adding distribution lines, or full replacement. We'll be honest about what's needed and what it will cost.",
      },
    ],
    relatedSlugs: [
      "septic-tank-pumping",
      "drain-field-repair",
      "septic-inspections",
    ],
    relatedPostSlugs: [
      "septic-emergency-what-to-do",
      "sewage-smell-septic-system",
      "warning-signs-septic-system-failing",
    ],
  },
  {
    slug: "drain-field-repair",
    title: "Drain Field Repair & Restoration",
    shortTitle: "Drain Field Repair",
    metaTitle: "Drain Field Repair & Restoration | Eagle Septic Pumping",
    metaDescription:
      "Failing drain field? Eagle Septic Pumping diagnoses root causes and offers repair, rejuvenation, and full replacement. Licensed, insured. Free estimates.",
    heroHeadline: "Drain Field Repair & Restoration",
    heroSubheadline:
      "A failing drain field doesn't always mean replacement. We diagnose the cause first, then offer the most targeted — and cost-effective — solution available.",
    overview:
      "The drain field (also called a leach field or septic field) is the most vulnerable — and most expensive — component of a septic system. When it fails, sewage surfaces in the yard or backs up into the house. Causes range from soil compaction and biomat buildup to crushed pipes and complete saturation. Our approach: diagnose before you dig. We identify the root cause first so we recommend only what's truly needed — from a targeted repair to a full replacement.",
    included: [
      "Full system inspection to confirm drain field failure (not tank or pump)",
      "Soil absorption testing to assess field condition",
      "Distribution box inspection and flow testing",
      "Root intrusion and pipe damage assessment",
      "Biomat treatment options (for early-stage failures)",
      "Targeted pipe repair or replacement (for localized damage)",
      "Full drain field replacement (when restoration isn't viable)",
      "Permit assistance and county coordination",
    ],
    process: [
      {
        step: 1,
        title: "Diagnose Before Digging",
        description:
          "We inspect the tank, pump, distribution box, and field to confirm the failure and identify its cause. Many apparent drain field failures are actually fixable upstream issues.",
      },
      {
        step: 2,
        title: "Soil & Field Assessment",
        description:
          "We evaluate soil saturation, check for biomat buildup, and test distribution to determine what portion of the field is affected.",
      },
      {
        step: 3,
        title: "Repair or Restore",
        description:
          "Depending on findings, we may treat biomat, repair damaged pipes, replace a failed distribution box, or add supplemental field lines — before recommending full replacement.",
      },
      {
        step: 4,
        title: "Replace If Needed",
        description:
          "When full replacement is the right answer, we handle everything — permits, design, excavation, installation, and inspection — with full documentation.",
      },
    ],
    warningSigns: [
      {
        title: "Wet or soggy grass over the drain field",
        description:
          "Saturated, spongy ground or standing water over the field indicates sewage is surfacing rather than absorbing — a failing drain field.",
      },
      {
        title: "Sewage odor in the yard",
        description:
          "A sulfur or sewage smell in the yard, particularly over the field area, means effluent is reaching the surface.",
      },
      {
        title: "Drains slow or backing up despite recent pumping",
        description:
          "If pumping didn't resolve your slow drains, the drain field may be the problem — it's not accepting effluent from the tank.",
      },
      {
        title: "Bright green or unusually lush grass over the field",
        description:
          "Grass that's noticeably greener than the surrounding lawn is often fertilized by surfacing sewage — an early sign of drain field failure.",
      },
    ],
    faq: [
      {
        question: "Can a drain field be repaired, or does it always need replacement?",
        answer:
          "Many drain field problems can be repaired without full replacement. Biomat (a biological crust that blocks absorption) can be treated with aeration or bacterial additives in early stages. Broken pipes can be replaced. Distribution box failures can be corrected. We always look for the least invasive, most cost-effective fix first.",
      },
      {
        question: "How much does drain field repair cost?",
        answer:
          "Costs vary widely depending on the problem. A distribution box replacement may cost a few hundred dollars. Full drain field replacement typically ranges from several thousand to tens of thousands, depending on soil conditions, field size, and local permit requirements. We provide a detailed estimate after assessment.",
      },
      {
        question: "How long does drain field replacement take?",
        answer:
          "Most residential drain field replacements take 1–3 days of active work, plus time for permitting (which varies by county). We'll give you a realistic timeline during the assessment.",
      },
      {
        question: "Will my yard be restored after the work?",
        answer:
          "Excavation is required for drain field work, which will temporarily disturb the lawn. We backfill, grade, and seed or re-sod affected areas as part of our standard process.",
      },
      {
        question: "What causes a drain field to fail?",
        answer:
          "Common causes include: overloading the system (too many people, heavy water use), infrequent pumping leading to solids reaching the field, flushing non-biodegradable items, driving vehicles over the field, tree root intrusion, and natural end-of-life after 20–30 years.",
      },
    ],
    relatedSlugs: [
      "emergency-services",
      "septic-inspections",
      "new-system-installation",
    ],
    relatedPostSlugs: [
      "drain-field-failure-signs-costs",
      "drain-field-repair-vs-replacement-central-valley",
      "what-happens-if-you-never-pump-septic-tank",
    ],
  },
  {
    slug: "new-system-installation",
    title: "New Septic System Installation",
    shortTitle: "New Installation",
    metaTitle: "New Septic System Installation | Eagle Septic Pumping",
    metaDescription:
      "New home or failed system? Eagle Septic Pumping handles the full installation — permits, design, and installation. Licensed, insured. Free estimates.",
    heroHeadline: "New Septic System Installation",
    heroSubheadline:
      "Building a new home or replacing a failed system? We manage the entire process — from soil testing and system design to permits, installation, and final inspection.",
    overview:
      "Installing a new septic system is a significant project that requires soil evaluation, engineered design, county permits, careful installation, and final inspection. We manage every step so you don't have to coordinate multiple contractors or navigate county regulations alone. Our installations are designed for longevity — properly sized for your household, placed for optimal soil absorption, and built to meet or exceed current codes.",
    included: [
      "Site evaluation and soil percolation testing",
      "System design sized for your household and soil conditions",
      "Permit application and county coordination",
      "Tank procurement and delivery",
      "Full excavation and installation",
      "Distribution system installation (pipes, distribution box)",
      "Drain field installation and grading",
      "Final inspection coordination and documentation",
      "System operation walkthrough for homeowners",
    ],
    process: [
      {
        step: 1,
        title: "Site Evaluation",
        description:
          "We perform soil percolation testing and evaluate your lot to determine the right system type, size, and placement. Results drive the design — not guesswork.",
      },
      {
        step: 2,
        title: "Design & Permits",
        description:
          "We create a system design based on your soil conditions and household size, then submit permit applications to your county health department.",
      },
      {
        step: 3,
        title: "Installation",
        description:
          "Once permits are approved, we excavate, set the tank, install distribution lines, and build the drain field according to the approved design.",
      },
      {
        step: 4,
        title: "Inspection & Handoff",
        description:
          "We coordinate the county final inspection, resolve any punch-list items, and walk you through how to care for your new system.",
      },
    ],
    warningSigns: [
      {
        title: "You're building a new home without municipal sewer",
        description:
          "If your property doesn't have access to a municipal sewer connection, a septic system is required. Start the permitting process early — it can take weeks.",
      },
      {
        title: "Your existing system has failed beyond repair",
        description:
          "When a drain field fails completely or a tank collapses, replacement is the only option. We'll confirm this before recommending a new installation.",
      },
      {
        title: "Your system is more than 30 years old",
        description:
          "Systems installed before modern codes may not handle today's water use loads. An aging system may be better replaced than repeatedly repaired.",
      },
      {
        title: "You're adding significant living space or bedrooms",
        description:
          "Adding bedrooms increases the required system capacity. An existing undersized system may need to be upgraded rather than extended.",
      },
    ],
    faq: [
      {
        question: "How long does a new septic system installation take?",
        answer:
          "The installation itself typically takes 2–5 days depending on system size and soil conditions. The full timeline — including soil testing, design, and permits — is typically 4–8 weeks. We'll give you a project-specific schedule after the site evaluation.",
      },
      {
        question: "How much does a new septic system cost?",
        answer:
          "New system costs vary significantly based on system type, size, soil conditions, and local permit fees. A basic conventional system may cost $10,000–$20,000; advanced systems in challenging soils can run higher. We provide a detailed written estimate after your site evaluation.",
      },
      {
        question: "What types of septic systems do you install?",
        answer:
          "We install conventional gravity systems, pressure distribution systems, mound systems (for shallow soil depth), and aerobic treatment units. The right type is determined by your soil test results and local code requirements.",
      },
      {
        question: "Do I need permits for a new septic system?",
        answer:
          "Yes — permits are required in all jurisdictions. We handle the permit application, inspections, and final approval as part of our installation service. You won't need to navigate the county offices yourself.",
      },
      {
        question: "How do I take care of my new system?",
        answer:
          "The basics: pump the tank on schedule (every 3–5 years), avoid flushing non-biodegradable items, spread laundry loads throughout the week, and protect the drain field from vehicle traffic and deep-rooted plants. We provide a full homeowner guide after installation.",
      },
    ],
    relatedSlugs: [
      "septic-inspections",
      "drain-field-repair",
      "tank-cleaning-maintenance",
    ],
    relatedPostSlugs: [
      "how-long-does-septic-system-last",
      "stanislaus-county-septic-regulations",
      "drain-field-repair-vs-replacement-central-valley",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is ServiceData => s !== undefined);
}
