export const PHONE = "(555) 867-5309";
export const PHONE_HREF = "tel:+15558675309";

export interface ServiceAreaData {
  slug: string;
  city: string;
  county: string;
  state: string;
  stateAbbr: string;
  population: string;
  description: string;
  localNote: string;
  nearbyCities: string[];
  commonIssues: string[];
  faq: { question: string; answer: string }[];
}

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: "modesto",
    city: "Modesto",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "218,000",
    description:
      "Modesto is the county seat of Stanislaus County and one of the largest cities in California's Central Valley. Many homes — especially in the older east and west side neighborhoods and surrounding unincorporated areas — rely on private septic systems rather than city sewer.",
    localNote:
      "Stanislaus County Environmental Resources requires periodic inspection of septic systems within 200 feet of waterways. Eagle Septic knows the local regulations and keeps your system compliant.",
    nearbyCities: ["Ceres", "Turlock", "Riverbank", "Hughson", "Waterford"],
    commonIssues: [
      "Aging clay-pipe systems in older neighborhoods",
      "High water table near the Tuolumne and Stanislaus rivers",
      "Tree root intrusion from mature urban trees",
      "Slow drain fields after heavy Central Valley rain seasons",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Modesto, CA?",
        answer:
          "Most residential septic pumping in the Modesto area runs $300–$500 depending on tank size and access. Eagle Septic provides upfront pricing with no surprise charges. Call for a free quote.",
      },
      {
        question: "Does Modesto require a permit to pump a septic tank?",
        answer:
          "Routine pumping does not require a permit. However, any repairs, alterations, or new installations in Stanislaus County require a permit from the Environmental Resources Department. Eagle Septic handles the paperwork on permitted jobs.",
      },
      {
        question: "How often should Modesto homeowners pump their septic tank?",
        answer:
          "For a family of four with a 1,000-gallon tank, every 3–5 years is the standard guideline. Homes with garbage disposals or larger households may need service every 2–3 years.",
      },
    ],
  },
  {
    slug: "turlock",
    city: "Turlock",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "74,000",
    description:
      "Turlock is a fast-growing agricultural and university city in Stanislaus County. Residential properties on the city outskirts and surrounding farmland commonly use septic systems, and CSU Stanislaus's presence means a mix of long-established and newer construction.",
    localNote:
      "Many Turlock properties adjacent to irrigation canals require extra attention to drain field placement and system capacity. Eagle Septic's technicians are familiar with local soil conditions.",
    nearbyCities: ["Modesto", "Ceres", "Atwater", "Hilmar", "Delhi"],
    commonIssues: [
      "Irrigation canal proximity affecting groundwater levels",
      "Clay-heavy soils reducing drain field absorption",
      "Older systems in established agricultural neighborhoods",
      "Increased load during summer agricultural worker seasons",
    ],
    faq: [
      {
        question: "How much does septic service cost in Turlock, CA?",
        answer:
          "Residential septic pumping in Turlock typically runs $300–$500. Agricultural or larger commercial tanks are priced separately. Call Eagle Septic for a free estimate.",
      },
      {
        question: "What septic regulations apply to Turlock properties?",
        answer:
          "Properties within Turlock city limits that are eligible for sewer connection may be required to connect. Outlying properties follow Stanislaus County Environmental Resources standards. We can advise based on your address.",
      },
      {
        question: "Do you offer emergency septic service in Turlock?",
        answer:
          "Yes. Eagle Septic offers 24/7 emergency response throughout Turlock and Stanislaus County. If you have sewage backup or a system failure, call us immediately.",
      },
    ],
  },
  {
    slug: "ceres",
    city: "Ceres",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "49,000",
    description:
      "Ceres sits directly south of Modesto along the Tuolumne River corridor. Many established residential neighborhoods and rural parcels in Ceres use private septic systems, particularly along Mitchell Road and the eastern unincorporated areas.",
    localNote:
      "Ceres properties near the Tuolumne River may face seasonal high-water-table concerns that affect system performance. Eagle Septic's team accounts for seasonal conditions in every inspection.",
    nearbyCities: ["Modesto", "Turlock", "Waterford", "Hughson", "Patterson"],
    commonIssues: [
      "Seasonal high water table near the Tuolumne River",
      "Compacted clay soils common to the area",
      "Older septic systems in mid-century neighborhoods",
      "Root intrusion from mature citrus and fruit trees",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Ceres, CA?",
        answer:
          "Most Ceres homeowners pay $300–$500 for routine septic pumping. Larger tanks or difficult access may add to the cost. Eagle Septic gives you an upfront quote before any work begins.",
      },
      {
        question: "Does Eagle Septic service rural properties near Ceres?",
        answer:
          "Yes. We service both in-city Ceres addresses and outlying rural parcels in eastern Stanislaus County. No job is too remote — call to confirm your address.",
      },
      {
        question: "What happens if my drain field is failing in Ceres?",
        answer:
          "Signs include sewage odors, wet spots in the yard, or slow indoor drains. Eagle Septic provides drain field assessment and can recommend repair vs. replacement options based on your soil and system age.",
      },
    ],
  },
  {
    slug: "riverbank",
    city: "Riverbank",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "25,000",
    description:
      "Riverbank is a small city on the Stanislaus River east of Modesto. Its older neighborhoods and semi-rural character mean many properties depend on private septic systems rather than centralized sewer infrastructure.",
    localNote:
      "Riverbank's proximity to the Stanislaus River means local soil conditions and water tables can vary significantly by parcel. Our technicians assess drainage conditions on-site at every visit.",
    nearbyCities: ["Modesto", "Oakdale", "Waterford", "Hughson", "Escalon"],
    commonIssues: [
      "Sandy river-adjacent soils requiring careful drain field sizing",
      "Older systems in Riverbank's established neighborhoods",
      "Seasonal flooding risk near the Stanislaus River",
      "Limited sewer infrastructure in outlying areas",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Riverbank, CA?",
        answer:
          "Routine residential pumping in Riverbank runs $300–$500 depending on tank size. Eagle Septic provides upfront pricing with no hidden fees.",
      },
      {
        question: "Does Eagle Septic service Riverbank on weekends?",
        answer:
          "Yes. We offer Saturday service and 24/7 emergency response throughout Riverbank and Stanislaus County.",
      },
      {
        question: "Can Eagle Septic help with septic permits in Riverbank?",
        answer:
          "For permitted work such as repairs or new system installation, Eagle Septic coordinates with Stanislaus County Environmental Resources. We handle the permit process so you don't have to.",
      },
    ],
  },
  {
    slug: "oakdale",
    city: "Oakdale",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "24,000",
    description:
      "Oakdale, the self-proclaimed 'Cowboy Capital of the World,' is a ranching and agricultural community on the eastern edge of Stanislaus County. Large rural lots and agricultural properties in the area commonly use on-site septic systems.",
    localNote:
      "Oakdale's ranching properties often have larger-capacity septic systems or multiple structures on one system. Eagle Septic has the equipment and expertise to handle agricultural and commercial-scale jobs.",
    nearbyCities: ["Riverbank", "Escalon", "Waterford", "Modesto", "Sonora"],
    commonIssues: [
      "Large-capacity agricultural and ranch septic systems",
      "Multiple-structure properties sharing one system",
      "Harder granitic soils east toward the foothills",
      "Older systems on legacy ranching properties",
    ],
    faq: [
      {
        question: "How much does septic service cost in Oakdale, CA?",
        answer:
          "Residential pumping runs $300–$500. Agricultural and larger-capacity systems are quoted separately based on tank volume. Call Eagle Septic for a free on-site estimate.",
      },
      {
        question: "Does Eagle Septic handle ranch and agricultural septic systems?",
        answer:
          "Yes. We regularly service large-capacity systems on ranch and agricultural properties in the Oakdale area. Our vacuum trucks are sized for high-volume tanks.",
      },
      {
        question: "How far east of Oakdale does Eagle Septic travel?",
        answer:
          "We cover Oakdale and surrounding communities. Call us with your address and we'll confirm coverage — we often travel beyond our standard service area for larger jobs.",
      },
    ],
  },
  {
    slug: "patterson",
    city: "Patterson",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "23,000",
    description:
      "Patterson is a growing agricultural hub in western Stanislaus County along Interstate 5. As the city expands, many older residential and agricultural properties in the area still rely on private septic systems.",
    localNote:
      "Western Stanislaus County soils around Patterson tend to be more clay-heavy near the valley floor, which can reduce drain field percolation. Eagle Septic evaluates soil performance at every inspection.",
    nearbyCities: ["Newman", "Modesto", "Los Banos", "Gustine", "Turlock"],
    commonIssues: [
      "Clay-heavy valley floor soils reducing absorption",
      "Agricultural runoff affecting local water tables",
      "Older systems on established farmsteads",
      "New development pushing older systems past capacity",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Patterson, CA?",
        answer:
          "Most residential jobs in Patterson run $300–$500. We offer upfront pricing over the phone for standard tank sizes.",
      },
      {
        question: "Do you service areas west of Patterson toward I-5?",
        answer:
          "Yes. Eagle Septic covers Patterson and surrounding western Stanislaus County communities. Call to confirm your specific address.",
      },
      {
        question: "What if my septic system fails during the rainy season in Patterson?",
        answer:
          "Heavy rains can saturate drain fields. If you notice surfacing sewage, slow drains, or odors, call us immediately. We offer emergency response 24/7.",
      },
    ],
  },
  {
    slug: "waterford",
    city: "Waterford",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "9,000",
    description:
      "Waterford is a small community along the Tuolumne River in southeastern Stanislaus County. Its rural character and older housing stock mean that private septic systems are the norm for many residents.",
    localNote:
      "Waterford properties along the Tuolumne River require attention to seasonal water table changes. Eagle Septic's team is experienced with the drainage patterns in this area.",
    nearbyCities: ["Modesto", "Ceres", "Hughson", "Turlock", "Riverbank"],
    commonIssues: [
      "High seasonal water table near the Tuolumne River",
      "Older septic systems in established neighborhoods",
      "Sandy river soils affecting drain field performance",
      "Limited municipal sewer availability",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Waterford, CA?",
        answer:
          "Residential septic pumping in Waterford typically costs $300–$500. Eagle Septic provides upfront quotes at no charge.",
      },
      {
        question: "How often should Waterford residents pump their septic tank?",
        answer:
          "Every 3–5 years is the guideline for a typical family. Homes near the Tuolumne River may benefit from more frequent inspections due to seasonal water table fluctuations.",
      },
      {
        question: "Does Eagle Septic offer inspections for home sales in Waterford?",
        answer:
          "Yes. We provide certified septic inspections for real estate transactions, including written reports. Call ahead to schedule before your closing date.",
      },
    ],
  },
  {
    slug: "hughson",
    city: "Hughson",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "7,500",
    description:
      "Hughson is a small agricultural city between Modesto and Turlock known for its orchards and farming community. Private septic systems are common throughout Hughson and the surrounding unincorporated rural areas.",
    localNote:
      "Hughson's agricultural setting means many properties have older septic systems installed during the orcharding era. Eagle Septic is experienced assessing and servicing vintage systems.",
    nearbyCities: ["Modesto", "Ceres", "Turlock", "Waterford", "Denair"],
    commonIssues: [
      "Older systems from orchard-era construction",
      "Fruit tree root intrusion into older septic components",
      "Agricultural water use affecting local aquifer levels",
      "Limited access on rural orchard properties",
    ],
    faq: [
      {
        question: "How much does septic service cost in Hughson, CA?",
        answer:
          "Routine pumping in Hughson runs $300–$500. Older systems or difficult-access rural properties may require additional assessment. Call for a free quote.",
      },
      {
        question: "Can Eagle Septic locate a buried septic tank in Hughson?",
        answer:
          "Yes. If your tank lid is buried or its location is unknown, our technicians use probing and inspection tools to locate it before pumping.",
      },
      {
        question: "How do I know if my older Hughson septic system needs replacement?",
        answer:
          "Signs include repeated backups, persistent drain field wet spots, sewage odors, and system age over 25–30 years. Eagle Septic provides an honest assessment — we'll tell you if repair is viable before recommending replacement.",
      },
    ],
  },
  {
    slug: "escalon",
    city: "Escalon",
    county: "San Joaquin",
    state: "California",
    stateAbbr: "CA",
    population: "8,000",
    description:
      "Escalon is a small city in southern San Joaquin County, just north of the Stanislaus County line. Its rural and semi-rural residential areas depend heavily on private septic systems, and Eagle Septic regularly services properties in and around Escalon.",
    localNote:
      "Escalon sits in San Joaquin County, which has its own Environmental Health requirements. Eagle Septic is familiar with both San Joaquin and Stanislaus county regulations.",
    nearbyCities: ["Riverbank", "Oakdale", "Modesto", "Manteca", "Ripon"],
    commonIssues: [
      "Sandy loam soils common to the San Joaquin Valley floor",
      "Older systems in Escalon's established neighborhoods",
      "Irrigation canal proximity affecting local hydrology",
      "Rural properties with limited maintenance history",
    ],
    faq: [
      {
        question: "Does Eagle Septic serve San Joaquin County cities like Escalon?",
        answer:
          "Yes. Escalon is within our service area. We're licensed and familiar with San Joaquin County Environmental Health regulations for septic systems.",
      },
      {
        question: "How much does septic pumping cost in Escalon, CA?",
        answer:
          "Residential pumping runs $300–$500 for most homes. Eagle Septic provides upfront quotes with no surprise fees.",
      },
      {
        question: "What are the signs of a failing septic system in Escalon?",
        answer:
          "Slow indoor drains, gurgling toilets, sewage odors indoors or in the yard, and soggy lawn patches near the drain field. If you notice any of these, call Eagle Septic for an assessment.",
      },
    ],
  },
  {
    slug: "newman",
    city: "Newman",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "12,000",
    description:
      "Newman is a western Stanislaus County agricultural community near the San Luis Reservoir. Surrounding farmland and rural residential properties rely on on-site septic systems, and Eagle Septic covers the Newman area on our regular service routes.",
    localNote:
      "Properties in the Newman area near San Luis Creek and surrounding wetlands may have special setback requirements for septic systems. Eagle Septic can advise on local compliance.",
    nearbyCities: ["Patterson", "Gustine", "Los Banos", "Turlock", "Modesto"],
    commonIssues: [
      "Clay-dominant soils reducing drain field efficiency",
      "Agricultural water table fluctuations",
      "Older farmstead systems needing modernization",
      "Remote property access for service vehicles",
    ],
    faq: [
      {
        question: "Does Eagle Septic service Newman and western Stanislaus County?",
        answer:
          "Yes. Newman is on our regular service routes. Call to schedule — we typically serve the Newman area within 1–2 business days.",
      },
      {
        question: "How much does septic pumping cost in Newman, CA?",
        answer:
          "Residential pumping in Newman runs $300–$500. Rural or large-capacity systems are priced based on volume. We provide a free quote over the phone.",
      },
      {
        question: "Can Eagle Septic service agricultural septic systems near Newman?",
        answer:
          "Yes. We service agricultural and commercial-scale septic systems throughout western Stanislaus County. Call for a site-specific quote.",
      },
    ],
  },
  {
    slug: "atwater",
    city: "Atwater",
    county: "Merced",
    state: "California",
    stateAbbr: "CA",
    population: "31,000",
    description:
      "Atwater is a Merced County city adjacent to Castle Commerce Center, a former Air Force base redeveloped into an industrial and residential community. Properties on the city fringe and surrounding rural areas use private septic systems, and Eagle Septic covers Atwater on our northern Merced County routes.",
    localNote:
      "Merced County Environmental Health Department oversees septic permits and inspections in Atwater. Eagle Septic works within Merced County regulations and can coordinate with inspectors on permitted work.",
    nearbyCities: ["Merced", "Turlock", "Los Banos", "Delhi", "Livingston"],
    commonIssues: [
      "Sandy soils from former agricultural land near Castle",
      "Older systems on the Atwater city fringe",
      "Agricultural irrigation effects on local water tables",
      "New residential development adjacent to older septic zones",
    ],
    faq: [
      {
        question: "Does Eagle Septic service Atwater and Merced County?",
        answer:
          "Yes. Atwater is within our service area. Eagle Septic is familiar with Merced County Environmental Health requirements for septic maintenance and repair.",
      },
      {
        question: "How much does septic pumping cost in Atwater, CA?",
        answer:
          "Residential pumping runs $300–$500 for most homes. Eagle Septic provides upfront pricing before any work begins.",
      },
      {
        question: "How do I find my septic tank on my Atwater property?",
        answer:
          "Your county health department may have a record of your system on file. If not, Eagle Septic can locate your tank using probing tools. We'll find it before we begin.",
      },
    ],
  },
  {
    slug: "merced",
    city: "Merced",
    county: "Merced",
    state: "California",
    stateAbbr: "CA",
    population: "90,000",
    description:
      "Merced is the county seat of Merced County and home to UC Merced, California's newest University of California campus. Outside of the central city, a significant number of residential and agricultural properties use on-site septic systems, particularly in the county's rural corridor.",
    localNote:
      "Merced County has specific requirements for septic systems near the San Joaquin River, Bear Creek, and other waterways. Eagle Septic knows the local compliance requirements and ensures your system meets standards.",
    nearbyCities: ["Atwater", "Los Banos", "Turlock", "Livingston", "Chowchilla"],
    commonIssues: [
      "Older systems in Merced's established residential neighborhoods",
      "High seasonal water table near Bear Creek and the San Joaquin River",
      "Agricultural properties with legacy septic infrastructure",
      "Rapidly developing areas where systems may be undersized",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Merced, CA?",
        answer:
          "Most residential jobs in Merced run $300–$500. Eagle Septic offers upfront pricing and free estimates over the phone for standard tank sizes.",
      },
      {
        question: "Does Eagle Septic service rural properties in Merced County?",
        answer:
          "Yes. We service rural Merced County properties, including farming operations, rural residential parcels, and properties along the San Joaquin River corridor.",
      },
      {
        question: "Can Eagle Septic handle septic inspections for real estate sales in Merced?",
        answer:
          "Yes. We provide certified septic inspections with written reports for real estate transactions throughout Merced County. Schedule early — inspections often book a week out during busy seasons.",
      },
    ],
  },
  {
    slug: "stockton",
    city: "Stockton",
    county: "San Joaquin",
    state: "California",
    stateAbbr: "CA",
    population: "320,000",
    description:
      "Stockton is the county seat of San Joaquin County and one of California's largest inland port cities. Situated on the San Joaquin River delta, Stockton has a mix of older urban neighborhoods and sprawling suburban and rural areas — many of which rely on private septic systems rather than city sewer infrastructure.",
    localNote:
      "San Joaquin County Environmental Health handles septic permits and inspections in Stockton and surrounding unincorporated areas. Eagle Septic is familiar with county requirements and can coordinate on permitted repairs and installations.",
    nearbyCities: ["Manteca", "Lodi", "Tracy", "Modesto", "Ripon"],
    commonIssues: [
      "Delta-adjacent soils with high water tables near the San Joaquin River",
      "Aging septic systems in established South and East Stockton neighborhoods",
      "Clay and silty soils reducing drain field percolation",
      "Large lot rural properties outside city sewer reach",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Stockton, CA?",
        answer:
          "Most residential septic pumping in the Stockton area runs $300–$500 depending on tank size and access. Eagle Septic provides upfront pricing with no hidden fees. Call for a free quote.",
      },
      {
        question: "Does Eagle Septic service Stockton and San Joaquin County?",
        answer:
          "Yes. Stockton is within our service area. We're licensed and experienced with San Joaquin County Environmental Health requirements for septic maintenance, repair, and installation.",
      },
      {
        question: "How do I know if my Stockton property needs septic service?",
        answer:
          "Warning signs include slow indoor drains, gurgling toilets, sewage odors, and wet or unusually green patches near your drain field. If you notice any of these, call Eagle Septic for a same-day assessment.",
      },
    ],
  },
  {
    slug: "tracy",
    city: "Tracy",
    county: "San Joaquin",
    state: "California",
    stateAbbr: "CA",
    population: "103,000",
    description:
      "Tracy is one of San Joaquin County's fastest-growing cities, situated at the junction of I-5 and I-205 near the Altamont Pass. While newer residential developments connect to city sewer, many properties on Tracy's agricultural outskirts and older western neighborhoods continue to rely on on-site septic systems.",
    localNote:
      "Tracy's rapid growth means some septic systems are being pushed to capacity as households expand. Eagle Septic evaluates system load and capacity at every service call to catch issues early.",
    nearbyCities: ["Manteca", "Stockton", "Mountain House", "Modesto", "Lathrop"],
    commonIssues: [
      "Clay-heavy valley soils reducing drain field absorption rates",
      "Systems on the outskirts underpowered for growing households",
      "Older septic infrastructure in established West Tracy neighborhoods",
      "Agricultural properties with legacy systems on large parcels",
    ],
    faq: [
      {
        question: "How much does septic service cost in Tracy, CA?",
        answer:
          "Residential pumping in Tracy runs $300–$500 for most standard tanks. Eagle Septic provides free estimates over the phone for standard sizes.",
      },
      {
        question: "Does Eagle Septic serve Tracy and the surrounding area?",
        answer:
          "Yes. Tracy is on our regular San Joaquin County service routes. We typically schedule within 1–2 business days, or same day for emergencies.",
      },
      {
        question: "My Tracy home was recently renovated — do I need a septic inspection?",
        answer:
          "If you added bathrooms, a laundry room, or significantly expanded living space, your septic system may need an assessment to confirm it can handle the increased load. Eagle Septic provides capacity evaluations.",
      },
    ],
  },
  {
    slug: "manteca",
    city: "Manteca",
    county: "San Joaquin",
    state: "California",
    stateAbbr: "CA",
    population: "85,000",
    description:
      "Manteca is a fast-growing San Joaquin County city on Highway 99 between Stockton and Modesto. Known for its strong agricultural roots and expanding residential communities, Manteca has many properties — particularly on its eastern and southern edges — that rely on private septic systems.",
    localNote:
      "Manteca's expanding development footprint means older septic systems in outlying areas are increasingly adjacent to new construction. Eagle Septic assesses system condition and capacity relative to changing neighborhood loads.",
    nearbyCities: ["Stockton", "Ripon", "Tracy", "Escalon", "Modesto"],
    commonIssues: [
      "Sandy loam soils in agricultural transition zones",
      "Older systems on Manteca's established agricultural parcels",
      "Increased system load from household expansion",
      "Proximity to irrigation canals affecting seasonal water tables",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Manteca, CA?",
        answer:
          "Residential pumping in Manteca typically runs $300–$500. Eagle Septic offers upfront quotes over the phone with no surprise charges.",
      },
      {
        question: "Does Eagle Septic service Manteca and southern San Joaquin County?",
        answer:
          "Yes. Manteca is within our regular service route. We cover the full Manteca area and surrounding unincorporated San Joaquin County properties.",
      },
      {
        question: "How often should Manteca homeowners pump their septic tank?",
        answer:
          "Every 3–5 years is the standard guideline for a household of four. Homes with garbage disposals, larger families, or older tanks may need service every 2–3 years.",
      },
    ],
  },
  {
    slug: "ripon",
    city: "Ripon",
    county: "San Joaquin",
    state: "California",
    stateAbbr: "CA",
    population: "16,000",
    description:
      "Ripon is a small agricultural city in San Joaquin County, nestled along the Stanislaus River between Modesto and Manteca. Known for its almond orchards and strong farming heritage, Ripon's rural and semi-rural properties commonly use on-site septic systems.",
    localNote:
      "Ripon's proximity to the Stanislaus River creates variable soil and water table conditions across the service area. Eagle Septic's team accounts for local drainage when inspecting and servicing systems in this area.",
    nearbyCities: ["Escalon", "Manteca", "Modesto", "Riverbank", "Stockton"],
    commonIssues: [
      "River-adjacent soils with seasonal water table variation",
      "Older systems on almond orchard and agricultural parcels",
      "Root intrusion from mature orchard trees into septic components",
      "Limited sewer infrastructure in rural Ripon neighborhoods",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Ripon, CA?",
        answer:
          "Residential pumping in Ripon runs $300–$500 depending on tank size. Eagle Septic provides upfront pricing before any work begins.",
      },
      {
        question: "Does Eagle Septic serve Ripon and San Joaquin County agricultural properties?",
        answer:
          "Yes. We regularly service agricultural and residential properties in Ripon. Our equipment handles standard and large-capacity tanks.",
      },
      {
        question: "What are signs of septic problems on orchard properties in Ripon?",
        answer:
          "Look for unusually lush patches of grass near your tank or drain field, slow drains, or sewage odors near your system. Tree root intrusion is also common on older orchard properties. Eagle Septic provides full inspection services.",
      },
    ],
  },
  {
    slug: "los-banos",
    city: "Los Banos",
    county: "Merced",
    state: "California",
    stateAbbr: "CA",
    population: "41,000",
    description:
      "Los Banos is a growing agricultural and residential city in western Merced County along Highway 152, near the San Luis Reservoir. Surrounding farmland and rural residential properties throughout the Los Banos area depend heavily on on-site septic systems, and Eagle Septic covers the region on our western service routes.",
    localNote:
      "Merced County Environmental Health oversees septic permits in Los Banos. Properties near the San Luis Reservoir and adjacent wetlands may have additional setback and environmental compliance requirements. Eagle Septic advises on local standards.",
    nearbyCities: ["Newman", "Patterson", "Gustine", "Merced", "Atwater"],
    commonIssues: [
      "Clay-heavy soils common to the western Merced County valley floor",
      "High seasonal water table near San Luis Creek and the reservoir",
      "Older farmstead systems on large agricultural parcels",
      "Remote property access requiring specialized service vehicles",
    ],
    faq: [
      {
        question: "How much does septic pumping cost in Los Banos, CA?",
        answer:
          "Residential pumping in Los Banos runs $300–$500 for standard tanks. Agricultural and high-volume systems are priced based on tank capacity. Call Eagle Septic for a free quote.",
      },
      {
        question: "Does Eagle Septic service Los Banos and western Merced County?",
        answer:
          "Yes. Los Banos is within our service coverage. We're licensed under Merced County Environmental Health standards and can handle both residential and agricultural systems.",
      },
      {
        question: "What happens if my drain field fails during the rainy season near Los Banos?",
        answer:
          "Heavy rainfall can saturate drain fields in clay-dominant soils. If you notice sewage surfacing, slow drains, or yard odors, call Eagle Septic immediately. We offer 24/7 emergency response throughout western Merced County.",
      },
    ],
  },
  {
    slug: "livingston",
    city: "Livingston",
    county: "Merced",
    state: "California",
    stateAbbr: "CA",
    population: "15,000",
    description:
      "Livingston is a small agricultural city in Merced County on Highway 99, known for its poultry processing industry and diverse farming community. Rural and semi-rural properties in and around Livingston frequently rely on private septic systems rather than municipal sewer.",
    localNote:
      "Livingston properties near the Merced River corridor may encounter higher seasonal water tables that affect drain field performance. Eagle Septic accounts for local drainage conditions at every service visit.",
    nearbyCities: ["Merced", "Atwater", "Turlock", "Hilmar", "Delhi"],
    commonIssues: [
      "High seasonal water table near the Merced River",
      "Agricultural land use adjacent to residential septic systems",
      "Older systems on established rural parcels",
      "Silty and clay-mixed soils affecting drain field absorption",
    ],
    faq: [
      {
        question: "How much does septic service cost in Livingston, CA?",
        answer:
          "Most residential jobs in Livingston run $300–$500. Eagle Septic provides upfront pricing with no hidden fees and free quotes over the phone.",
      },
      {
        question: "Does Eagle Septic serve Livingston and the surrounding Merced County area?",
        answer:
          "Yes. Livingston is on our Merced County service routes. We typically schedule within 1–2 business days, and offer same-day emergency response.",
      },
      {
        question: "Can high water from the Merced River damage my septic system in Livingston?",
        answer:
          "Yes. Flooding and high water tables can damage drain fields and cause system backups. If you suspect flood-related damage to your septic system, call Eagle Septic for an assessment before resuming normal use.",
      },
    ],
  },
  {
    slug: "gustine",
    city: "Gustine",
    county: "Merced",
    state: "California",
    stateAbbr: "CA",
    population: "6,000",
    description:
      "Gustine is a small dairy and agricultural community in western Merced County along Highway 33. With a predominantly rural character and limited municipal sewer infrastructure, most residential and agricultural properties in the Gustine area depend on private septic systems.",
    localNote:
      "Gustine's western Merced County location puts it in close proximity to wetland and vernal pool areas that carry special regulatory considerations for septic systems. Eagle Septic is familiar with Merced County Environmental Health requirements in this region.",
    nearbyCities: ["Newman", "Patterson", "Los Banos", "Turlock", "Merced"],
    commonIssues: [
      "Clay-heavy soils reducing percolation in western valley areas",
      "Proximity to seasonal wetlands requiring regulatory compliance",
      "Older dairy and agricultural septic systems needing modernization",
      "Remote rural access for service vehicles",
    ],
    faq: [
      {
        question: "Does Eagle Septic service Gustine and western Merced County?",
        answer:
          "Yes. Gustine is within our service coverage. We make regular runs through western Merced County and can typically schedule within a few days.",
      },
      {
        question: "How much does septic pumping cost in Gustine, CA?",
        answer:
          "Residential pumping runs $300–$500. Agricultural and dairy-scale systems are quoted based on volume. Call Eagle Septic for a free estimate.",
      },
      {
        question: "My Gustine property is near a wetland area — are there special septic rules?",
        answer:
          "Yes. Merced County has setback and compliance requirements for septic systems near wetlands and waterways. Eagle Septic can advise on your specific situation and coordinate with county inspectors as needed.",
      },
    ],
  },
  {
    slug: "denair",
    city: "Denair",
    county: "Stanislaus",
    state: "California",
    stateAbbr: "CA",
    population: "4,500",
    description:
      "Denair is a small unincorporated community in Stanislaus County between Turlock and Modesto, surrounded by agricultural land and orchards. Its rural character means the majority of homes and properties rely on on-site septic systems, and Eagle Septic services the Denair area as part of our central Stanislaus County routes.",
    localNote:
      "Denair sits in central Stanislaus County where agricultural irrigation activity can seasonally raise local water tables. Eagle Septic monitors system drainage at every visit and flags concerns before they become failures.",
    nearbyCities: ["Turlock", "Modesto", "Hughson", "Ceres", "Waterford"],
    commonIssues: [
      "Agricultural irrigation affecting local groundwater levels",
      "Fruit and orchard tree root intrusion into older systems",
      "Older systems on long-established rural parcels",
      "Limited service provider options in this rural corridor",
    ],
    faq: [
      {
        question: "Does Eagle Septic service Denair and central Stanislaus County?",
        answer:
          "Yes. Denair is within our standard Stanislaus County service area. We cover the full rural corridor between Turlock and Modesto, including Denair and surrounding unincorporated areas.",
      },
      {
        question: "How much does septic pumping cost in Denair, CA?",
        answer:
          "Residential pumping in Denair runs $300–$500 depending on tank size and access. Eagle Septic provides upfront pricing and free quotes over the phone.",
      },
      {
        question: "How often should I pump my septic tank in Denair?",
        answer:
          "Every 3–5 years is the standard recommendation. Rural properties with older systems or fruit trees nearby may benefit from more frequent inspections to catch root intrusion early.",
      },
    ],
  },
];

export function getServiceArea(slug: string): ServiceAreaData | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

// Zip code → service area slug lookup map (Central Valley CA)
export const ZIP_CODE_MAP: Record<string, string> = {
  // Modesto (Stanislaus County)
  "95350": "modesto",
  "95351": "modesto",
  "95352": "modesto",
  "95354": "modesto",
  "95355": "modesto",
  "95356": "modesto",
  "95357": "modesto",
  "95358": "modesto",
  "95368": "modesto", // Salida (near Modesto)
  "95319": "modesto", // Empire (near Modesto/Ceres)

  // Turlock (Stanislaus County)
  "95380": "turlock",
  "95382": "turlock",
  "95324": "turlock", // Hilmar (near Turlock)
  "95328": "turlock", // Keyes (near Turlock)
  "95323": "turlock", // Hickman (near Turlock)

  // Ceres (Stanislaus County)
  "95307": "ceres",

  // Riverbank (Stanislaus County)
  "95367": "riverbank",

  // Oakdale (Stanislaus County)
  "95361": "oakdale",

  // Patterson (Stanislaus County)
  "95363": "patterson",
  "95313": "patterson", // Crows Landing (near Patterson/Newman)

  // Waterford (Stanislaus County)
  "95386": "waterford",

  // Hughson (Stanislaus County)
  "95326": "hughson",

  // Escalon (San Joaquin County)
  "95320": "escalon",

  // Newman (Stanislaus County)
  "95360": "newman",

  // Atwater (Merced County)
  "95301": "atwater",

  // Merced (Merced County)
  "95340": "merced",
  "95341": "merced",
  "95348": "merced",
  "95315": "merced", // Delhi (near Merced/Turlock)

  // Stockton (San Joaquin County)
  "95201": "stockton",
  "95202": "stockton",
  "95203": "stockton",
  "95204": "stockton",
  "95205": "stockton",
  "95206": "stockton",
  "95207": "stockton",
  "95208": "stockton",
  "95209": "stockton",
  "95210": "stockton",
  "95211": "stockton",
  "95212": "stockton",
  "95215": "stockton",
  "95219": "stockton",

  // Tracy (San Joaquin County)
  "95376": "tracy",
  "95377": "tracy",
  "95378": "tracy",

  // Manteca (San Joaquin County)
  "95336": "manteca",
  "95337": "manteca",
  "95330": "manteca", // Lathrop (near Manteca/Tracy)

  // Ripon (San Joaquin County)
  "95366": "ripon",

  // Los Banos (Merced County)
  "93635": "los-banos",

  // Livingston (Merced County)
  "95334": "livingston",

  // Gustine (Merced County)
  "95322": "gustine",

  // Denair (Stanislaus County)
  "95316": "denair",
};
