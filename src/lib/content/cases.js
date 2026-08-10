/*
  CASE CATALOGUE RECORDS

  HOW TO ADD A CASE:
  1. Copy one complete createCase({ ... }) block below.
  2. Give the case a unique id and slug.
  3. Replace the company name, taxonomy, summary and description text.
  4. Add the external source link in `caseLink`.
  5. Optional: add an image path in `image` and a short description in `imageAlt`.
  6. Save the file. The website automatically creates:
     - a card on the Cases page
     - a detail page at /cases/your-slug/
     - a card in a matching sector tool's Case examples section

  Use `summary` for the short case-card text.
  Use `description` for the longer text on the individual case page.

  The sector badge colour is assigned automatically from the sector name.
  Existing sector names have fixed theme colours. A new sector name also works:
  the badge component generates a consistent fallback colour automatically.

  The slug becomes the page URL. Use lowercase words separated by hyphens.
  Leave caseLink as an empty string when there is no external case source yet.
  Use arrays when a taxonomy field has more than one value:
    country: ['Netherlands', 'Denmark'],
    sector: ['Plastics', 'Construction'],
    rStrategies: ['Reuse (R3)', 'Recycle (R8)']
  Arrays are the clearest option. The code also understands comma, semicolon
  and spaced slash separators if older copied text uses them.

  If an editor accidentally writes "portugal" or "PORTUGAL", it is normalised
  to "Portugal" for filtering, so duplicate filter options are avoided.
*/

/**
 * @typedef {{
 *   id: string;
 *   slug: string;
 *   companyName: string;
 *   country: string | string[];
 *   countries?: string[];
 *   countryDisplay?: string;
 *   sector: string | string[];
 *   sectors?: string[];
 *   sectorDisplay?: string;
 *   rStrategies: string[] | string;
 *   rStrategyDescription?: string;
 *   summary: string;
 *   description: string;
 *   caseLink?: string;
 *   image?: string;
 *   imageAlt?: string;
 *   filterValues?: {
 *     countries: string[];
 *     sectors: string[];
 *     rStrategies: string[];
 *   };
 * }} CaseStudy
 */

/** @type {Record<string, string>} */
const CASE_VALUE_OVERRIDES = {
  "agriculture": "Food and Agriculture",
  "agriculture and agro-processing": "Food and Agriculture",
  "agro-processing": "Food and Agriculture",
  "buildings and construction": "Construction",
  "business to business": "Business to Business",
  "construction and buildings": "Construction",
  "digital/traceability technology": "Digital/Traceability Technology",
  "electronics and ict": "Electronics and ICT",
  "finplast-prim srl": "FINPLAST-PRIM SRL",
  "food and agriculture": "Food and Agriculture",
  "food and beverage": "Food and Agriculture",
  "food and nutrients": "Food and Agriculture",
  "horesca": "HORESCA",
  "ict": "ICT",
  "it services": "IT Services",
  "products-as-a-service": "Products-as-a-Service",
  "recycle (r8)": "Recycle (R8)",
  "reduce (r2)": "Reduce (R2)",
  "refurbish (r5)": "Refurbish (R5)",
  "repair (r4)": "Repair (R4)",
  "repurpose (r6)": "Repurpose (R6)",
  "repurpose (r7)": "Repurpose (R7)",
  "rethink (r1)": "Rethink (R1)",
  "reuse (r3)": "Reuse (R3)",
  "s.r.l. \"refurb\"": "S.R.L. \"REFURB\"",
  "textiles and fashion": "Textiles",
  "unfloria srl": "Unfloria SRL",
  "uniplast srl": "UNIPLAST SRL"
};

const LOWERCASE_WORDS = new Set(['and', 'or', 'of', 'the', 'to', 'for', 'in', 'with']);

/**
 * @param {string[] | string | undefined} value
 * @returns {string[]}
 */
function splitCaseList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === 'string') {
    return value
      .split(/\s+\/\s+|[;,]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

/**
 * @param {string} value
 * @returns {string}
 */
function titleCaseTaxonomyValue(value) {
  return value
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) => {
      if (index > 0 && LOWERCASE_WORDS.has(word)) return word;
      return word
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('-');
    })
    .join(' ');
}

/**
 * Keeps taxonomy filters tidy even if editors use different casing.
 * @param {string} value
 * @returns {string}
 */
function normaliseCaseValue(value) {
  const cleanedValue = String(value).trim().replace(/\s+/g, ' ');
  const override = CASE_VALUE_OVERRIDES[cleanedValue.toLowerCase()];

  if (override) return override;

  return titleCaseTaxonomyValue(cleanedValue);
}

/**
 * Allows the template to stay stable even if a case is copied with a comma-separated string.
 * Editors should normally use an array, for example: ['Reuse (R3)', 'Recycle (R8)'].
 * @param {string[] | string | undefined} value
 * @returns {string[]}
 */
function normaliseCaseList(value) {
  return [...new Set(splitCaseList(value).map(normaliseCaseValue))];
}

/**
 * Keeps optional case fields predictable for the shared card and page templates.
 * @param {CaseStudy} caseStudy
 * @returns {CaseStudy}
 */
function createCase(caseStudy) {
  const countries = normaliseCaseList(caseStudy.country);
  const sectors = normaliseCaseList(caseStudy.sector);
  const rStrategies = normaliseCaseList(caseStudy.rStrategies);

  return {
    caseLink: '',
    image: '',
    imageAlt: '',
    rStrategyDescription: '',
    ...caseStudy,
    country: countries.join(', '),
    countries,
    countryDisplay: countries.join(', '),
    sector: sectors.join(', '),
    sectors,
    sectorDisplay: sectors.join(', '),
    rStrategies,
    filterValues: {
      countries,
      sectors,
      rStrategies
    }
  };
}

/** @type {CaseStudy[]} */
export const cases = [
  // MOLDOVA CASES
  createCase({
    id: "case-001",
    slug: "uniplast-srl",
    companyName: "UNIPLAST SRL",
    country: "Republic of Moldova",
    sector: ["Plastics"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: `Plastic waste is reprocessed into granules that can substitute virgin raw materials in new manufacturing processes; recovered HDPE and LDPE are directed into UNIPLAST's own production line to manufacture pipes and fittings for irrigation and low-pressure networks.`,
    summary: "UNIPLAST SRL recovers polyethylene waste and reprocesses it into secondary raw material used to manufacture its own pipes for irrigation and low-pressure water networks.",
    description: `UNIPLAST SRL operates an integrated circular manufacturing model in which recovered polyethylene waste is converted into secondary raw material and used within the company's own production process. Based in Chișinău, the company manufactures and distributes plastic pipes, fittings and related equipment for water supply, sewerage, irrigation, heating, gas and other technical networks. It also holds an environmental authorisation for plastic-waste management and recovery operations.

Unlike recyclers that sell recovered plastic as granulate, UNIPLAST retains more of the material's value by incorporating the secondary polyethylene directly into finished products. Collected HDPE and LDPE waste enters the company's authorised recovery process, where it is prepared and reprocessed into secondary raw material. This material is subsequently used to manufacture pipes for irrigation systems and low-pressure installations. Virgin-grade polyethylene continues to be used for applications subject to stricter technical and safety requirements, including potable-water networks.

The model connects waste recovery with an established market for agricultural and infrastructure products. Its value proposition is therefore based on transforming recovered plastic into locally manufactured pipes with a new service life, while reducing reliance on virgin polymers in technically suitable applications. According to a UNDP study on plastic-waste management in Moldova, UNIPLAST reported collecting and recovering approximately 2,400 tonnes of plastic waste annually. This figure should be reconfirmed before final publication because it reflects the study's reporting period.

The main environmental benefits are the diversion of recoverable polyethylene from disposal and the substitution of part of the virgin material input. Economically, the integrated model reduces dependence on externally supplied raw materials and captures more value internally by selling finished products rather than secondary granulate alone. EU–UNDP support awarded in 2026 will contribute to modernising or expanding the company's recycling capacity. The principal lesson is that conventional manufacturers can adopt circularity by integrating authorised waste recovery with existing production lines and clearly separating recycled-material applications according to technical requirements.`,
    caseLink: "https://uniplast.md/",
    image: "/images/cases/moldova/uniplast-srl.jpg",
    imageAlt: "UNIPLAST SRL case image"
  }),
  createCase({
    id: "case-002",
    slug: "finplast-prim-srl",
    companyName: "FINPLAST-PRIM SRL",
    country: "Republic of Moldova",
    sector: ["Plastics"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: `Plastic waste is reprocessed into granules that can substitute virgin raw materials in new manufacturing processes; other collected packaging materials are recovered and directed into appropriate recycling streams.`,
    summary: "FINPLAST-PRIM SRL collects, sorts and recycles plastic and other packaging waste into a differentiated range of recycled plastic granules sold to manufacturers.",
    description: `FINPLAST-PRIM SRL operates a circular business model based on converting plastic waste into commercially valuable secondary raw materials. Based in Bălți, northern Moldova, the company is a producer and supplier of recycled plastic granules and an authorised operator for the collection, sorting and recycling of packaging and other recyclable waste.

The model connects two customer groups within the plastics value chain. On the supply side, FINPLAST-PRIM provides waste-management services to companies that need their plastic and packaging waste collected and processed. On the demand side, it supplies manufacturers with recycled HDPE, LDPE, PP, PS and PET/PETE granules that can substitute part of their virgin raw-material input. Value is therefore created both by managing waste streams and by converting recovered plastics into marketable feedstock for new production.

Collected plastic film and rigid plastics are segregated by polymer type and quality, cleaned, shredded and reprocessed into different grades of recycled granules. The company's commercial portfolio comprises 17 recycled-plastic products, including four HDPE, six LDPE, five PP, one PS and one PET/PETE variant. This differentiated portfolio enables FINPLAST-PRIM to respond to varying manufacturing requirements rather than selling recovered plastic as an undifferentiated waste material.

The company also manages paper and cardboard, wood, glass and metal packaging, offering business clients a consolidated solution for several recyclable waste streams. Its website reports processed quantities of 2,640 tonnes of plastic, 8,280 tonnes of paper and cardboard, 620 tonnes of wood and 560 tonnes of glass, although the reporting period should be confirmed.

The model closes material loops, diverts recyclable waste from disposal and strengthens Moldova's domestic market for secondary raw materials. EU–UNDP support awarded in 2026 will help modernise or expand its recycling capacity. The principal lesson is that recycling generates greater circular and economic value when recovered waste is converted into differentiated, market-ready raw materials linked to identifiable manufacturing demand.`,
    caseLink: "https://finplast.md/",
    image: "/images/cases/moldova/finplast-prim-srl.jpg",
    imageAlt: "FINPLAST-PRIM SRL case image"
  }),
  createCase({
    id: "case-003",
    slug: "s-r-l-refurb",
    companyName: "S.R.L. \"REFURB\"",
    country: "Republic of Moldova",
    sector: ["Electronics and ICT"],
    rStrategies: ["Refurbish (R5)", "Reuse (R3)"],
    rStrategyDescription: `Used devices are evaluated, tested, repaired or upgraded, graded by condition and resold with a warranty; refurbishment is the dominant strategy, with reuse occurring when the refurbished device returns to active use for its original function.`,
    summary: "S.R.L. \"REFURB\" refurbishes, repairs and resells used electronics and ICT equipment, extending their useful life through a warranted resale model and a laptop Trade-In programme.",
    description: `S.R.L. "REFURB" operates a circular retail and service model that extends the useful life of electronics and ICT equipment through refurbishment, resale, repair and Trade-In. Based in Chișinău, the company sells both new and refurbished smartphones, laptops, desktop computers, monitors, servers, televisions and audio equipment through its physical store and online platform, refurb.md.

The circular value proposition is to offer professionally refurbished devices as a reliable and more affordable alternative to newly manufactured equipment. According to the company, IT equipment undergoes a refurbishment process that includes, but is not limited to, testing, cleaning, repairing, reconfiguring, retesting and repackaging. Following this process, devices are returned to the market as functional products intended to perform similarly to new equipment. Refurbished products are presented with detailed technical specifications, condition grades such as Refurbished A or B, and a minimum 12-month warranty in accordance with applicable legal requirements. These features differentiate the model from informal second-hand resale by reducing customer uncertainty regarding functionality, quality and after-sales protection.

The company's Trade-In programme strengthens the return loop by allowing customers to exchange an old laptop for a refurbished one. Devices are tested and evaluated by the company's engineers, after which their assessed value is deducted from the replacement product's price. According to REFURB, more than 500 customers have used this service. Products may also be purchased through interest-free instalment options, while the company advertises savings of up to 50% on selected equipment.

The model generates value by recovering the remaining functional and economic value of existing devices instead of directing them prematurely to electronic-waste treatment. It makes technology more financially accessible while delaying e-waste generation and demand for new equipment. The case demonstrates that a standardised refurbishment process, warranties, condition grading and convenient Trade-In arrangements are essential for building consumer confidence and turning refurbished electronics into a credible commercial alternative to new products.`,
    caseLink: "https://refurb.md/"
  }),
  createCase({
    id: "case-004",
    slug: "asociatia-obsteasca-banca-de-alimente-banca-de-alimente-moldova",
    companyName: "Asociația Obștească Banca de Alimente – Banca de Alimente Moldova",
    country: "Republic of Moldova",
    sector: ["Agriculture and Food"],
    rStrategies: ["Reuse (R3)"],
    rStrategyDescription: `Safe, edible products that can no longer be sold are redirected for their original purpose, human consumption; this also constitutes food-waste prevention, as products are recovered before becoming waste.`,
    summary: `Banca de Alimente Moldova recovers safe, edible surplus food from agri-food companies and redistributes it through a national network of social services supporting vulnerable people.`,
    description: `Banca de Alimente Moldova operates a nonprofit circular redistribution model that recovers safe, edible surplus food and redirects it to social services supporting vulnerable people. Established in 2021 as Moldova's first food bank, the organisation connects agri-food producers, distributors and retailers holding unsold products with charities, canteens, placement centres and other social-service providers.

Its circular value proposition is based on preserving food at its highest value — human consumption — rather than allowing it to become waste. Surplus products are collected from donor companies, checked and managed according to food-safety requirements, stored using appropriate facilities, including cold storage where necessary, and redistributed according to remaining shelf life and beneficiary needs. The model therefore depends on coordinated logistics, food-flow management and durable partnerships, not simply on accepting occasional donations.

During its first five years, Banca de Alimente recovered and redistributed 583 tonnes of food, equivalent to approximately 1,166,000 meal portions. Its national network grew to 95 donor companies and 105 partner social services, reaching more than 12,500 beneficiaries. The organisation estimates that its food-recovery activity has also avoided approximately 1,450 tonnes of greenhouse-gas emissions, while preserving the water, energy, land, labour and transport embedded in food production.

The model creates environmental value by preventing food waste, social value by improving access to food and economic value by helping donor companies avoid disposal and associated management costs. Since 2022, Banca de Alimente has been an associate member of the European Food Banks Federation, supporting peer learning and alignment with European practice. The principal lesson is that preventing food waste at scale requires reliable logistics, food-safety controls and coordinated partnerships across the entire food value chain.`,
    caseLink: "https://bancadealimente.md/",
    image: "/images/cases/moldova/asociatia-obsteasca-banca-de-alimente-banca-de-alimente-moldova.jpg",
    imageAlt: "Asociația Obștească Banca de Alimente – Banca de Alimente Moldova case image"
  }),
  createCase({
    id: "case-005",
    slug: "garma-grup-srl",
    companyName: "Garma-Grup SRL",
    country: "Republic of Moldova",
    sector: ["Agriculture and Food"],
    rStrategies: ["Recycle (R8)", "Reduce (R2)"],
    rStrategyDescription: `Biodegradable residues are biologically processed and their nutrients returned to agricultural use as organic fertilizer (Recycle); the model also decreases demand for conventional energy and synthetic fertilizers (Reduce).`,
    summary: "Garma-Grup SRL converts manure, alcohol-production residues and slaughterhouse waste into biogas, renewable electricity and organic fertilizer through anaerobic digestion.",
    description: `Garma-Grup SRL is an integrated agrifood company based in Fîrlădeni, Hîncești district, whose activities include crop cultivation, feed production, cattle farming, grain and pasta processing, ethyl-alcohol production and renewable-energy generation. Its circular business model connects these operations so that biological residues from one activity become productive inputs for another.

Manure from the company's cattle farm and organic residues from alcohol production are used as the principal feedstock for its anaerobic-digestion facility. Garma-Grup also processes organic waste received from nearby slaughterhouses, creating industrial symbiosis between livestock farming, food processing, waste management and energy production. Instead of being discarded or left to decompose, these materials are converted into biogas. According to the company, the facility can produce up to 50,000 m³ of biogas per day. The biogas is used to generate steam for alcohol production and renewable electricity through three Jenbacher cogeneration units with a combined reported capacity exceeding 3 MW. The electricity supplies the company's operations, while surplus production is delivered to the national grid.

The remaining organic material is used as fertilizer on approximately 500 hectares of company-managed agricultural land, returning nutrients to crop production and reducing dependence on synthetic fertilizers. This closes biological resource loops while improving the efficiency of the company's integrated production system.

The model generates environmental benefits by diverting organic residues from uncontrolled disposal, reducing potential soil and water pollution and replacing part of the company's conventional energy and fertilizer requirements. Economically, it transforms waste-management costs into energy savings, productive agricultural inputs and potential revenue from surplus electricity. The case demonstrates how an agrifood producer can embed circularity in its core business model by combining internal resource recovery, renewable-energy generation, nutrient recycling and partnerships with external waste generators.`,
    caseLink: "https://garma-grup.md/en/about-us/",
    image: "/images/cases/moldova/garma-grup-srl.jpg",
    imageAlt: "Garma-Grup SRL case image"
  }),
  createCase({
    id: "case-006",
    slug: "unfloria-srl",
    companyName: "Unfloria SRL",
    country: "Republic of Moldova",
    sector: ["Textiles"],
    rStrategies: ["Repair (R4)", "Refurbish (R5)", "Reduce (R2)"],
    rStrategyDescription: `Professional textile care maintains product quality and extends useful life (Repair); cleaning and restoration of feather pillows (Refurbish); lower demand for replacement textiles and in-house laundry resources (Reduce).`,
    summary: "UNFLORIA SRL provides professional textile laundry, cleaning and restoration services that extend the useful life of clients' garments, linens, carpets and feather pillows.",
    description: `UNFLORIA SRL is a textile-service company based in Ungheni that provides professional laundry, ecological dry-cleaning and textile-maintenance services to private companies, public institutions and individual customers. Its activities include washing and caring for garments, linen, workwear, knitwear, carpets and other household or institutional textiles, as well as the specialised cleaning, sanitisation and restoration of feather pillows.

The company operates through a product-as-a-service-oriented circular business model, generating value through professional textile care rather than relying exclusively on the sale of new products. Through service contracts, UNFLORIA assumes responsibility for washing, cleaning, sanitising and maintaining textiles used by its clients. The products are treated according to their material characteristics and care requirements and are returned hygienised, in good condition and suitable for continued use.

Outsourcing these activities to a specialised provider enables companies and public institutions to avoid or reduce the resources required for an in-house laundry, including investments in washing and drying equipment, energy and water consumption, detergents, maintenance costs and dedicated personnel. At the same time, clients benefit from professionally cleaned textiles that meet high hygiene and quality standards. Appropriate treatment helps preserve textile structure, appearance and functionality, extending product lifetimes and reducing replacement frequency and related expenditure.

The cleaning, sanitisation and restoration of feather pillows is particularly relevant to circularity. Existing pillows and their natural filling are recovered and restored for continued use instead of being prematurely discarded and replaced.

UNFLORIA reports using biodegradable detergents and solvents and integrating solar energy into its operations. These practices complement the service model by reducing the environmental impact of textile maintenance.

The case demonstrates how specialised and centralised textile-care services can create economic benefits for clients while slowing textile consumption and waste generation. By combining professional maintenance, high-quality sanitisation, resource-efficient service delivery and pillow restoration, UNFLORIA helps keep textile products functional and in use for longer.`,
    caseLink: "https://unfloria.md/",
    image: "/images/cases/moldova/unfloria-srl.webp",
    imageAlt: "Unfloria SRL case image"
  }),

  // ARMENIA CASES
  createCase({
    id: "case-007",
    slug: "by-botany",
    companyName: "By Botany",
    country: "Armenia",
    sector: ["Textiles"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: "Fibrous plant material (nettle) is processed into a new raw textile input, substituting virgin cotton or synthetic fiber inputs in garment manufacturing.",
    summary: `By Botany is developing Armenia's first domestically produced textile fiber from nettle plants, offering a sustainable, low-impact alternative to conventional cotton and synthetic fibers for the fashion industry.`,
    description: `By Botany is an Armenian circular startup working to establish the country's first locally sourced nettle-fiber textile supply chain. Nettle, a resilient plant requiring minimal irrigation, pesticides, or chemical treatment compared to cotton, is processed into spinnable fiber suitable for sustainable fashion products. By building out this value chain domestically, the company aims to reduce Armenia's reliance on imported textile fibers while offering designers and brands a lower-impact input material. The venture was supported through the CirculUP! circular startup grant programme, which backs early-stage Armenian businesses developing circular economy solutions. This case illustrates how novel bio-based feedstocks can be substituted for resource-intensive materials within an established industry.`,
    caseLink: "https://bybotany.am"
  }),
  createCase({
    id: "case-008",
    slug: "tobacco-waste-processing",
    companyName: "Tobacco Waste Processing",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: "Organic tobacco processing residues are biologically transformed into a nutrient input (fertilizer) for agricultural use, replacing synthetic fertilizer inputs.",
    summary: `This venture converts residual tobacco waste generated during processing into organic fertilizer, diverting agricultural by-product from disposal and reducing pollution linked to tobacco cultivation and processing.`,
    description: `This CirculUP!-supported initiative addresses a longstanding environmental problem in Armenia's tobacco-growing regions, where processing waste is often discarded or burned, contributing to soil and air pollution. The business collects tobacco waste and processes it into organic fertilizer, giving the material a productive second life while reducing the environmental burden associated with agricultural waste disposal. The resulting fertilizer can be used by local farmers, creating a closed-loop link between agricultural waste generation and agricultural input demand. This case demonstrates how sector-specific waste streams, often overlooked because of their perceived low value, can be converted into commercially useful products.`,
    caseLink: "https://circulup.am/grantees"
  }),
  createCase({
    id: "case-009",
    slug: "the-rug-code",
    companyName: "The Rug Code",
    country: "Armenia",
    sector: ["Textiles"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Zero-waste weaving practices and local wool sourcing minimise material losses and reduce reliance on long-distance, resource-intensive wool supply chains.",
    summary: `The Rug Code revives traditional Armenian rug weaving techniques using a zero-waste production approach and locally sourced wool, combining cultural heritage preservation with circular material practices.`,
    description: `The Rug Code combines Armenia's centuries-old rug-weaving tradition with modern zero-waste design principles. By sourcing wool locally and designing production processes to minimise offcuts and material loss, the business reduces the resource footprint typically associated with textile and rug manufacturing. The model also supports local wool producers and traditional artisans, linking economic and cultural sustainability with resource efficiency. This case shows how heritage crafts can be repositioned as circular economy businesses by tightening material sourcing and minimising waste at the production stage, rather than relying on end-of-life recycling.`,
    caseLink: "https://therugcode.com"
  }),
  createCase({
    id: "case-010",
    slug: "permaculture-in-armenia",
    companyName: "Permaculture in Armenia",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Regenerative, closed-loop agricultural design reduces the need for external inputs (synthetic fertilizer, irrigation) by working with natural ecosystem cycles.",
    summary: `This initiative establishes food forests in the community of Berdavan using regenerative agriculture techniques that restore soil health, increase biodiversity, and create long-term, low-input food production systems.`,
    description: `This project applies permaculture design principles to establish food forests in Berdavan, a rural Armenian community. Food forests are multi-layered planting systems that mimic natural ecosystems, combining fruit and nut trees, shrubs, and ground cover crops to produce food with minimal external inputs once established. Compared to conventional agriculture, the approach reduces dependency on synthetic fertilizers, irrigation, and other external inputs over time, while improving soil health and local biodiversity. The initiative was featured as a CirculUP! grantee case, highlighting how regenerative land-use models can be integrated into Armenia's circular economy transition, particularly in rural and agricultural contexts.`,
    caseLink: "https://circulup.am/2025/03/31/permaculture-in-armenia"
  }),
  createCase({
    id: "case-011",
    slug: "bio-oil-llc",
    companyName: "Bio Oil LLC",
    country: "Armenia",
    sector: ["Waste Management"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: "Used cooking oil, a hazardous waste stream if disposed of improperly, is chemically reprocessed into biodiesel, substituting fossil-derived diesel fuel.",
    summary: "Bio Oil LLC transforms used cooking oil collected from households and food businesses into biodiesel, operating Armenia's first EU-certified recycling system for this waste stream.",
    description: `Bio Oil LLC addresses the environmental risks posed by improperly discarded cooking oil, which can contaminate water systems and clog municipal infrastructure. The company has established Armenia's first EU-certified collection and recycling system for used cooking oil, gathering the waste from households, restaurants, and other food-service businesses. The collected oil is processed into biodiesel, a renewable fuel that can substitute for conventional diesel in various applications. This creates both an environmental benefit, by keeping a hazardous waste stream out of the environment, and an economic one, by generating a marketable fuel product. The case was recognised as a CirculUP! grantee for demonstrating a scalable circular solution to an underserved waste stream.`,
    caseLink: "https://circulup.am/2025/03/31/bio-oil-llc"
  }),
  createCase({
    id: "case-012",
    slug: "biocirc",
    companyName: "BioCirc",
    country: "Armenia",
    sector: ["Renewable Energy"],
    rStrategies: ["Rethink (R1)"],
    rStrategyDescription: "The business rethinks energy access by designing decentralised, small-footprint renewable generation equipment as an alternative to grid extension or fossil-fuel generators.",
    summary: `BioCirc manufactures small-scale, mini hydropower turbines designed to provide off-grid renewable energy solutions, particularly for rural or remote locations without reliable access to the grid.`,
    description: `BioCirc (operating under the Flowtric brand) designs and manufactures compact hydropower turbines intended for off-grid or remote installations where grid connection is impractical or costly. By harnessing local water flow, these turbines can provide a renewable, low-maintenance power source to rural communities, farms, or facilities lacking dependable electricity access. This reduces reliance on diesel generators or grid extension projects, both of which carry higher costs and environmental footprints. As a CirculUP! grantee, the venture reflects the programme's support for circular and resource-efficient technology manufacturing, extending circular economy principles beyond materials recovery into decentralised clean-energy hardware.`,
    caseLink: "https://www.facebook.com/people/Flowtric/61563534625731/"
  }),
  createCase({
    id: "case-013",
    slug: "biohumus-production",
    companyName: "Biohumus Production",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: `Agricultural organic waste is biologically converted (vermicomposting) into a fertilizer product, returning nutrients to agricultural use and substituting synthetic fertilizer inputs.`,
    summary: `This business produces organic fertilizer from agricultural waste through vermicomposting, a biological process using worms to break down organic material into nutrient-rich compost.`,
    description: `Based in the village of Sers, this venture uses vermicomposting — a controlled biological process in which worms digest organic agricultural waste — to produce biohumus, a high-quality organic fertilizer. This approach diverts agricultural residues from disposal or burning and converts them into a marketable soil amendment that can replace synthetic fertilizers for local farmers. Vermicomposting requires relatively low capital investment and can be scaled to match available waste volumes, making it well suited to rural Armenian agricultural communities. The initiative was supported as a CirculUP! grantee, reflecting the broader push to close nutrient loops within Armenia's agricultural sector.`,
    caseLink: "https://www.facebook.com/people/Sers-village/100066974256776/"
  }),
  createCase({
    id: "case-014",
    slug: "baby-gear-armenia",
    companyName: "Baby Gear Armenia",
    country: "Armenia",
    sector: ["Retail"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "A product-as-a-service rental model reduces the total volume of baby equipment manufactured and purchased by enabling shared, repeated use of the same items across multiple users.",
    summary: `Baby Gear Armenia offers a circular equipment rental service for traveling families, providing cribs, strollers, car seats, and other baby gear on a temporary-use basis rather than requiring purchase.`,
    description: `Baby Gear Armenia operates a rental service that allows traveling parents to hire baby equipment — such as cribs, strollers, and car seats — for the duration of their stay, rather than purchasing or transporting their own. This product-as-a-service model extends the useful life of each item by enabling repeated use across many families instead of single-household ownership, reducing the overall volume of baby gear that needs to be manufactured. It also removes the burden and cost for traveling families of transporting or buying bulky, short-term-use items. The business was recognised as a CirculUP! grantee for applying access-over-ownership principles to a high-turnover consumer product category.`,
    caseLink: "https://babygeararmenia.com"
  }),
  createCase({
    id: "case-015",
    slug: "skesoor-mama-home",
    companyName: "Skesoor Mama Home",
    country: "Armenia",
    sector: ["Textiles"],
    rStrategies: ["Repurpose (R6)"],
    rStrategyDescription: "Textile waste that would otherwise be discarded is redesigned and remanufactured into a different type of product (home decor items) with a new function.",
    summary: "Skesoor Mama Home upcycles textile waste into functional home decor items such as pillows and baskets, giving discarded fabric a new purpose as finished household products.",
    description: `Skesoor Mama Home collects discarded textile material and transforms it into handcrafted home decor products, including pillows, baskets, and related items. Rather than recycling the fabric back into raw fiber, the business repurposes the material directly into new finished goods, retaining more of its original value and reducing the energy-intensive reprocessing typically required for textile recycling. This approach also supports local craft production and offers consumers sustainably made home goods as an alternative to conventionally manufactured products. The venture is a CirculUP! grantee, part of the broader programme supporting Armenian circular startups working with textile waste streams.`,
    caseLink: "https://www.facebook.com/skesoormama"
  }),
  createCase({
    id: "case-016",
    slug: "natural-self-cleaning-pool",
    companyName: "Natural Self-Cleaning Pool",
    country: "Armenia",
    sector: ["Construction"],
    rStrategies: ["Rethink (R1)"],
    rStrategyDescription: `The product rethinks conventional pool design by replacing chemical water treatment with a natural filtration system, reducing chemical inputs and their associated environmental impact.`,
    summary: "This business builds chemical-free swimming pools that rely on natural biological filtration systems instead of chlorine or other synthetic chemicals to maintain water quality.",
    description: `This venture designs and builds swimming pools that use natural filtration — typically involving aquatic plants and biological filter zones — to maintain water clarity and hygiene without the addition of chlorine or other synthetic chemicals. This reduces the ongoing chemical inputs required for pool maintenance, lowers the associated environmental discharge when pool water is drained or replaced, and can reduce the health impacts associated with chemical exposure for swimmers. The approach reflects a rethinking of a conventional, resource- and chemical-intensive product category. The case was highlighted as a CirculUP! grantee for introducing a lower-impact alternative into Armenia's construction and leisure sector.`,
    caseLink: "https://circulup.am/2025/03/31/natural-self-cleaning-pool"
  }),
  createCase({
    id: "case-017",
    slug: "redline",
    companyName: "RedLine",
    country: "Armenia",
    sector: ["Furniture"],
    rStrategies: ["Reuse (R3)", "Recycle (R8)"],
    rStrategyDescription: `A trade-in programme keeps furniture in use for longer by facilitating its return and resale or refurbishment (Reuse); wood waste that can no longer be reused is processed into new modular furniture components (Recycle).`,
    summary: `RedLine repurposes wood waste into modular furniture and has launched a furniture trade-in programme that allows customers to return used pieces, extending the material's useful life across multiple product cycles.`,
    description: `RedLine is a circular furniture business that combines two complementary strategies. First, it manufactures modular furniture using recovered wood waste as an input material, reducing demand for virgin timber. Second, it operates a trade-in programme through which customers can return furniture at the end of its use cycle, allowing RedLine to refurbish, resell, or reprocess the material rather than have it discarded. Together, these approaches extend the useful life of both the wood material and the finished furniture products, forming a closed loop between production, use, and end-of-life recovery. The business was supported as a CirculUP! grantee for demonstrating an integrated circular SME model in the furniture sector.`,
    caseLink: "https://www.facebook.com/RedLineArmenia?locale=ru_RU"
  }),
  createCase({
    id: "case-018",
    slug: "maquaponics-llc",
    companyName: "MAquaponics LLC",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: "Animal manure, an organic waste stream, is processed into a water-soluble fertilizer product, substituting synthetic fertilizer inputs in crop and aquaponic agriculture.",
    summary: `MAquaponics converts animal manure into a water-soluble organic fertilizer, supporting more sustainable agricultural practices by returning nutrients from livestock waste back into crop production.`,
    description: `MAquaponics (operating under the Omniponics brand) processes animal manure into a water-soluble organic fertilizer suitable for use in conventional and aquaponic agricultural systems. This addresses a common waste-management challenge for livestock operations, where manure can otherwise become a source of water and soil pollution if not properly managed. By converting the waste into a usable fertilizer input, the business helps close the nutrient loop between livestock and crop production, reducing farmers' reliance on synthetic fertilizers. The case was supported as a CirculUP! grantee, reflecting the programme's focus on agricultural circularity in Armenia.`,
    caseLink: "https://omniponics.am/"
  }),
  createCase({
    id: "case-019",
    slug: "hdif-homeland-development-initiative-foundation",
    companyName: "HDIF (Homeland Development Initiative Foundation)",
    country: "Armenia",
    sector: ["Textiles"],
    rStrategies: ["Rethink (R1)"],
    rStrategyDescription: `Blockchain-based traceability rethinks supply chain transparency and trust mechanisms in the wool industry, enabling better material tracking that can support more circular and responsible sourcing decisions.`,
    summary: `HDIF uses blockchain technology to create a fully transparent, traceable supply chain for Armenia's wool industry, connecting wool producers, processors, and buyers through a verifiable digital record.`,
    description: `HDIF has developed a blockchain-based traceability system for Armenia's wool supply chain, allowing each stage of production — from raising livestock through processing and sale — to be recorded on a verifiable digital ledger. This transparency helps address common challenges in textile supply chains, including unclear material provenance and difficulty verifying sustainable or ethical sourcing claims. For a circular economy, better traceability can support more informed decisions about material reuse, quality grading, and end-of-life recovery of wool products. The initiative was recognised as a CirculUP! grantee for applying digital tools to strengthen sustainability and transparency in a traditional Armenian industry.`,
    caseLink: "https://hdif.org"
  }),
  createCase({
    id: "case-020",
    slug: "trimaran-dolomiti",
    companyName: "Trimaran / Dolomiti",
    country: "Armenia",
    sector: ["Hospitality"],
    rStrategies: ["Repurpose (R6)"],
    rStrategyDescription: `Rose biomass residue from greenhouse operations, a by-product with limited existing use, is processed into a new material input for manufacturing an unrelated finished product (slippers).`,
    summary: `This venture upcycles rose biomass waste from local greenhouses into raw material for manufacturing eco-friendly hotel slippers, converting an agricultural by-product into a hospitality-sector product.`,
    description: `Trimaran / Dolomiti addresses a waste stream generated by Armenia's greenhouse rose-growing industry, where large volumes of plant biomass are discarded after flower harvesting. The venture processes this rose biomass into material suitable for manufacturing eco-friendly slippers for the hospitality sector, giving the agricultural residue a new commercial application outside its original industry. This cross-sector upcycling reduces disposal volumes for greenhouse operators while supplying hotels with a more sustainable amenity product than conventional synthetic alternatives. The case was supported as a CirculUP! grantee, illustrating how by-products from one sector (agriculture) can be redirected to meet the material needs of another (hospitality).`,
    caseLink: "https://circulup.am/grantees"
  }),
  createCase({
    id: "case-021",
    slug: "antaram",
    companyName: "Antaram",
    country: "Armenia",
    sector: ["Cosmetics"],
    rStrategies: ["Repurpose (R6)"],
    rStrategyDescription: `Organic residues from herbal tea production, previously a low-value waste stream, are processed into higher-value cosmetics and essential oil products through a different production pathway.`,
    summary: `Antaram extracts high-value cosmetics ingredients and essential oils from organic waste generated during herbal tea production, turning a processing by-product into a marketable consumer product line.`,
    description: `Antaram has developed a process to extract essential oils and cosmetic-grade ingredients from the organic waste generated during herbal tea processing, such as spent plant material and residues. This upcycling approach captures additional value from a waste stream that would otherwise be discarded, while diversifying the business's product offering into the higher-margin cosmetics sector. By linking two Armenian sectors — herbal/agricultural processing and cosmetics manufacturing — the venture demonstrates how by-product valorisation can create new revenue streams for producers while reducing overall waste generation. The initiative was featured as a CirculUP! grantee.`
  }),
  createCase({
    id: "case-022",
    slug: "lukashin-agricultural-cooperative",
    companyName: "Lukashin Agricultural Cooperative",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: `Fruit processing residues (pits and peels) are reprocessed into new consumer products (oils, drinks, nutritional bars), recovering material value that would otherwise be lost to disposal.`,
    summary: `The Lukashin Agricultural Cooperative transforms fruit pits and peels, typically discarded during processing, into valuable oils, drinks, and nutritional bars, applying a zero-waste approach to fruit processing.`,
    description: `The Lukashin Agricultural Cooperative has implemented a zero-waste approach to fruit processing, developing product lines that use fruit pits and peels — by-products normally discarded during juice, jam, or dried-fruit production. These residues are processed into oils (from pits, which often contain usable fats), beverages, and nutritional bars, creating additional revenue streams from material that would otherwise represent a pure cost to dispose of. This model increases the overall value captured from each unit of raw fruit processed and reduces the volume of organic waste generated by the cooperative's operations. The case was supported as a CirculUP! grantee for demonstrating value-chain-wide resource efficiency in Armenia's agricultural cooperative sector.`,
    caseLink: "https://www.facebook.com/people/Lukashincoop/100064446382302/"
  }),
  createCase({
    id: "case-023",
    slug: "kindergartens-in-yerevan-retrofitting-case-study",
    companyName: "Kindergartens in Yerevan Retrofitting Case Study",
    country: "Armenia",
    sector: ["Construction"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: `Energy-efficient retrofitting (insulation, heating system upgrades) reduces the energy consumption of existing public buildings, lowering resource use without requiring new construction.`,
    summary: `This case study documents the social, energy, and gender-related benefits of retrofitting kindergartens in Yerevan for improved energy efficiency, as part of the UNDP-GCF building retrofit programme.`,
    description: `Produced under the Mershenq / UNDP-GCF 'De-risking and Scaling-up Investment in Energy Efficient Building Retrofits' project, this case study assesses the outcomes of retrofitting kindergartens across Yerevan for improved energy performance. Beyond the direct energy savings from improved insulation and heating systems, the study documents wider social and gender-related benefits, such as improved indoor comfort and health conditions for children and staff, and the differentiated impacts on women, who make up the majority of childcare and facility staff. The study forms part of a broader evidence base supporting Armenia's public building retrofit programme, illustrating how resource-efficiency interventions in public infrastructure can generate co-benefits beyond direct energy reduction.`,
    caseLink: "https://www.mershenq.am/en/publications/assessment-of-social-and-gender-benefits-of-energy-ecient-retrofitting-of-kindergartens"
  }),
  createCase({
    id: "case-024",
    slug: "residential-buildings-retrofits-impact-assessment",
    companyName: "Residential Buildings Retrofits Impact Assessment",
    country: "Armenia",
    sector: ["Construction"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Retrofitting existing multi-apartment buildings for improved thermal performance reduces ongoing energy consumption compared to unretrofitted housing stock.",
    summary: `This impact assessment analyzes household survey data on the outcomes of energy-efficient retrofits in multi-apartment residential buildings across Armenia, evaluating both energy and quality-of-life effects.`,
    description: `This publication, part of the Mershenq / UNDP-GCF building retrofit project, presents findings from household surveys assessing the impact of energy-efficient retrofits carried out in Armenia's multi-apartment residential buildings, a housing type that makes up a significant share of the country's urban building stock. The assessment evaluates changes in energy consumption, heating costs, and resident-reported comfort and satisfaction following retrofit interventions such as building envelope insulation and heating system upgrades. As Armenia's residential building stock is largely aging Soviet-era construction with poor thermal performance, this case provides evidence for scaling similar retrofit investments nationally, supporting both emissions reduction and improved living conditions.`,
    caseLink: "https://www.mershenq.am/en/publications/impact-of-energy-efficient-retrofits-in-residential-buildings"
  }),
  createCase({
    id: "case-025",
    slug: "energy-efficient-retrofits-in-syunik-region",
    companyName: "Energy Efficient Retrofits in Syunik Region",
    country: "Armenia",
    sector: ["Construction"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: `Regional building retrofits reduce energy consumption in existing housing and public buildings within Syunik, extending the national resource-efficiency programme to a specific geographic area.`,
    summary: `This regional factsheet summarizes the rollout and impact of energy-efficient building retrofits specifically within the Syunik region of Armenia, highlighting localized outcomes of the national retrofit programme.`,
    description: `This factsheet, produced under the Mershenq / UNDP-GCF retrofit project, provides a regional summary of energy-efficient building retrofit activities carried out in Armenia's Syunik region. It documents the scope of interventions delivered locally and the resulting energy and cost outcomes, offering a geographically specific complement to the broader national assessments of the retrofit programme. Regional case studies of this kind help demonstrate how a national resource-efficiency initiative translates into localized results, supporting continued investment and replication across other Armenian regions with differing climate and building-stock conditions.`,
    caseLink: "https://www.mershenq.am/en/publications/factsheet-syuink-region"
  }),
  createCase({
    id: "case-026",
    slug: "arminashogh-llc",
    companyName: "Arminashogh LLC",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Heat-recovery ventilation and resource-efficient baking processes reduce the energy (electricity and natural gas) required per unit of food produced.",
    summary: `Arminashogh LLC, a bakery producing cakes, pastries, and bread, modernized its ventilation system with heat recovery and adopted resource-efficient baking methods, reducing electricity use by 2.6% and natural gas use by 3.8%.`,
    description: `As a participant in the EU4Environment Resource Efficient and Cleaner Production (RECP) programme, Arminashogh LLC, a food production SME specialising in cakes, pastries, and bread, underwent a resource-efficiency audit that identified opportunities to reduce energy waste in its baking operations. The company modernised its ventilation system to incorporate heat recovery, capturing and reusing heat that would otherwise be lost from baking ovens, and adjusted its baking methods to reduce unnecessary energy use. These measures delivered measurable savings of 2.6% in electricity consumption and 3.8% in natural gas consumption, demonstrating how relatively targeted process improvements can generate meaningful resource savings for food-sector SMEs.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2024/02/Arminashogh-LLC.pdf"
  }),
  createCase({
    id: "case-027",
    slug: "ashtarak-dzoo-llc",
    companyName: "Ashtarak Dzoo LLC",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Fuel switching, lighting upgrades, and improved insulation collectively reduce the energy intensity of poultry house heating and lighting operations.",
    summary: `Ashtarak Dzoo, a leading Armenian egg production and poultry company, adopted RECP measures including switching from electric to natural gas heating, upgrading to LED lighting, and improving poultry house insulation.`,
    description: `Ashtarak Dzoo LLC is one of Armenia's leading egg production and poultry companies, and participated in the EU4Environment RECP programme to address the significant energy demands of maintaining controlled-temperature poultry houses. The company implemented several measures identified through its RECP audit: replacing electric heaters with natural gas heating (a lower-cost and often lower-emission energy source), upgrading lighting systems to LEDs to reduce electricity consumption, and improving the thermal insulation of poultry houses to reduce heat loss. Together, these interventions significantly reduced the company's overall energy footprint, illustrating how targeted efficiency measures can be applied across an intensive livestock operation.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2024/02/Ashtarak-Dzoo-LLC.pdf"
  }),
  createCase({
    id: "case-028",
    slug: "elbat-cjsc",
    companyName: "ELBAT CJSC",
    country: "Armenia",
    sector: ["Manufacturing"],
    rStrategies: ["Reduce (R2)", "Recycle (R8)"],
    rStrategyDescription: `Closed-loop water reuse recycles process water within the facility rather than discharging and re-sourcing fresh water (Recycle), reducing overall water and resource consumption (Reduce).`,
    summary: `ELBAT CJSC, a lead-acid battery manufacturer, implemented closed-loop water reuse and cooling systems following an RECP audit, reducing industrial water usage and improving the sustainability of its heavy manufacturing processes.`,
    description: `ELBAT CJSC, a lead-acid battery manufacturer, participated in an RECP audit under the EU4Environment programme to assess resource efficiency opportunities within its heavy manufacturing operations. Battery manufacturing is typically water- and energy-intensive, particularly in cooling and process stages. Following the audit, ELBAT implemented closed-loop water reuse and cooling systems, allowing process water to be recirculated and reused rather than continuously drawn from and discharged to external sources. This reduced the company's industrial water consumption and helped optimise its manufacturing processes for lower environmental impact, demonstrating that resource-efficiency principles can be applied even within traditionally resource-intensive heavy industries.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2022/04/BC-ELBAT-Armenia.pdf"
  }),
  createCase({
    id: "case-029",
    slug: "lukashin-agricultural-association-cc",
    companyName: "Lukashin Agricultural Association CC",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Solar drying and water-heating technology substitutes renewable energy for the electricity previously used in the fruit-drying process, reducing overall electricity consumption.",
    summary: `This consumer cooperative of dried-fruit producers installed convective solar dryers and solar water heaters to address high energy costs in fruit drying, cutting electricity usage by 21%.`,
    description: `The Lukashin Agricultural Association is a consumer cooperative of farmers producing dried fruit, an energy-intensive process traditionally reliant on electric or fossil-fuel-powered drying equipment. Through participation in the EU4Environment RECP programme, the cooperative identified high energy costs associated with fruit drying as a priority area for intervention. It subsequently installed convective solar dryers and solar water heaters, shifting a significant portion of its drying process to renewable solar energy. This resulted in a 21% reduction in electricity usage, a substantial efficiency gain that also reduces the cooperative's exposure to energy price volatility.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2024/02/Lukashin-CC.pdf"
  }),
  createCase({
    id: "case-030",
    slug: "galik-llc",
    companyName: "Galik LLC",
    country: "Armenia",
    sector: ["Mining and Minerals"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Optimising kiln roasting and crushing processes reduces the energy required per unit of lime produced, lowering the energy share of overall production costs.",
    summary: `Galik LLC, a lime production facility supplying the metallurgy sector, used RECP assessments to optimize its roasting kilns and crushing processes, targeting an energy footprint that made up 22% of total production costs.`,
    description: `Galik LLC operates a lime production facility in Armenia's Ararat region, supplying the domestic metallurgy sector. Lime production is highly energy-intensive due to the high-temperature roasting (calcination) process required, which had previously accounted for approximately 22% of the company's total production costs. Through an RECP assessment under the EU4Environment programme, Galik identified opportunities to optimise its roasting kilns and crushing processes to reduce energy consumption per unit of output. This case highlights how resource-efficiency interventions in energy-intensive heavy industry can directly improve cost competitiveness alongside environmental performance.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2024/02/Galik-LLC.pdf"
  }),
  createCase({
    id: "case-031",
    slug: "ararat-chanshin-llc",
    companyName: "Ararat Chanshin LLC",
    country: "Armenia",
    sector: ["Construction"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Optimised equipment and bitumen-sealing processes reduce the materials and energy consumed per unit of asphalt and gravel produced and per infrastructure contract delivered.",
    summary: `Ararat Chanshin, a road-building and civil construction company producing asphalt and crushed gravel, applied RECP methodologies to optimize equipment use and bitumen sealing processes, lowering resource consumption per contract.`,
    description: `Ararat Chanshin LLC is a road-building and civil construction company producing asphalt and crushed gravel for infrastructure projects across Armenia. Through the EU4Environment RECP programme, the company applied resource-efficiency methodologies to its production processes, combining more technologically advanced equipment with optimised bitumen sealing techniques. These changes reduced the resource consumption associated with each infrastructure contract, lowering both material waste and energy use in asphalt and gravel production. The case demonstrates how RECP principles can be applied within the construction materials sector, where resource intensity is often driven by equipment efficiency and process control.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2022/04/BC-ARARAT-CHANSIN-Armenia.pdf"
  }),
  createCase({
    id: "case-032",
    slug: "lusia-food",
    companyName: "Lusia Food",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Improved housekeeping practices and equipment modernisation reduce both organic waste generation and energy consumption per unit of food product manufactured.",
    summary: `Lusia Food, a regional food-sector SME, adopted cleaner production strategies and modernized processing equipment to reduce organic waste and lower specific energy consumption per product unit.`,
    description: `Lusia Food is a regional Armenian SME operating in the food processing sector that participated in the EU4Environment RECP programme to improve its environmental and resource performance. The company adopted cleaner production strategies, including improved 'good housekeeping' practices such as better process monitoring, spill prevention, and material handling, alongside modernising its processing equipment. These combined measures reduced the volume of organic waste generated during production and lowered the specific energy consumption required per unit of food product, illustrating how operational and equipment-level interventions can be paired for compounding resource-efficiency gains.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2024/02/Lusia-Food.pdf"
  }),
  createCase({
    id: "case-033",
    slug: "erpin-agricultural-cooperative",
    companyName: "Erpin Agricultural Cooperative",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Process improvements identified through the RECP audit reduce both biological (organic) waste generation and water consumption per unit of dairy product processed.",
    summary: `Erpin Agricultural Cooperative, a dairy processing SME, used an RECP audit to identify inefficiencies in its milk processing lines, focusing interventions on minimizing biological waste and reducing water use per unit of dairy produced.`,
    description: `Erpin Agricultural Cooperative operates a dairy processing facility that participated in the EU4Environment RECP programme to assess resource use across its milk processing lines. Dairy processing is typically both water- and waste-intensive, given the volume of water used for cleaning and processing and the biological waste (such as whey and rinse residues) generated. The RECP audit identified specific inefficiencies within Erpin's processing operations, leading to interventions focused on minimising biological waste output and reducing the water footprint associated with each unit of dairy product processed. This case reflects the programme's application to smaller agricultural cooperatives operating food processing facilities.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2024/02/Erpin.pdf"
  }),
  createCase({
    id: "case-034",
    slug: "rozfrood-llc",
    companyName: "Rozfrood LLC",
    country: "Armenia",
    sector: ["Agriculture and Food"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Process efficiency improvements and a shift toward renewable energy reduce the energy intensity of the energy-heavy freezing and cold-storage stages of food processing.",
    summary: `Rozfrood LLC, a food manufacturer in the Lori region, implemented green solutions and RECP recommendations to more efficiently process frozen fruits and vegetables, while transitioning toward renewable energy for freezing operations.`,
    description: `Rozfrood LLC is a food manufacturer based in Armenia's Lori region, specialising in the processing of frozen fruits and vegetables. Freezing and cold storage are among the most energy-intensive stages of food processing, making them a priority target for resource-efficiency interventions. Through the EU4Environment RECP programme, Rozfrood implemented green solutions and process recommendations to improve the efficiency of its freezing operations, while also taking steps to facilitate a transition toward renewable energy sources to power these processes. This case illustrates how RECP interventions can support decarbonisation of particularly energy-intensive stages within the food supply chain.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2024/02/Rozfrood-LLC.pdf"
  }),
  createCase({
    id: "case-035",
    slug: "magnon-ojsc",
    companyName: "Magnon OJSC",
    country: "Armenia",
    sector: ["Manufacturing"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Preventive environmental strategies applied through the RECP demonstration reduce raw material waste and improve overall process efficiency within the production cycle.",
    summary: `Magnon OJSC, an Armenian manufacturing SME, served as an RECP demonstration company, undergoing technical assessments to apply preventive environmental strategies aimed at decreasing raw material waste and increasing process efficiency.`,
    description: `Magnon OJSC served as a demonstration company within the EU4Environment RECP programme, meaning it underwent a more detailed technical assessment intended to showcase resource-efficiency methodologies for other Armenian manufacturing SMEs to replicate. The assessment applied preventive environmental strategies, an approach that focuses on avoiding waste and inefficiency at the source within the production process, rather than managing waste after it is generated. The resulting interventions aimed to decrease raw material waste and increase overall process efficiency across Magnon's production cycle, with the company's experience intended to serve as a reference case for the broader RECP programme in Armenia.`,
    caseLink: "https://www.eu4environment.org/app/uploads/2024/02/Magnon.pdf"
  }),

  // UKRAINE CASES
  createCase({
    id: "case-036",
    slug: "ecosoft",
    companyName: "Ecosoft",
    country: "Ukraine",
    sector: ["Waste Management"],
    rStrategies: ["Reduce (R2)", "Repair (R4)"],
    rStrategyDescription: `The rental/subscription service model reduces the total volume of equipment manufactured and sold (Reduce); ongoing maintenance, cartridge replacement, and component repair extend the operational life of each unit (Repair).`,
    summary: `Ecosoft offers water purification systems through a rental and service-based model, reducing single-use plastic and extending equipment lifespan through repair, refurbishment and upgrades.`,
    description: `Ecosoft is a leading Ukrainian manufacturer of water purification systems operating in the market for over 30 years. The company produces household filters, reverse osmosis systems, UV disinfection units, and industrial-scale installations for business, healthcare, food industry, and hospitality sectors.

In addition to selling equipment, the company offers water purification systems in a rental or subscription model with full service support. Clients receive equipment selection, installation, regular maintenance, cartridge replacement, and upgrade options without significant upfront costs.

The company applies approaches related to efficient resource use, repair, refurbishment, and equipment upgrading. It ensures long-term system operation, returns individual components into the service cycle, and enables plastic, metal, and electronic parts to be repaired or sent for recycling.

The environmental benefit lies in reducing the use of single-use plastic bottles, decreasing waste generation, and extending the service life of equipment. Regular maintenance helps avoid premature replacement of water purification systems.

The economic benefit for customers is the absence of high capital investment in equipment, predictable monthly costs, and reduced maintenance expenses.`,
    caseLink: "https://ecosoft.ua/",
    image: "/images/cases/ukraine/ecosoft.jpg",
    imageAlt: "Ecosoft case image"
  }),
  createCase({
    id: "case-037",
    slug: "optima-service",
    companyName: "Optima Service",
    country: "Ukraine",
    sector: ["Services"],
    rStrategies: ["Reduce (R2)", "Refurbish (R5)"],
    rStrategyDescription: `The service-based access model reduces the total volume of new IT hardware purchased by clients (Reduce); centralised lifecycle management enables equipment to be refurbished and returned to productive use after upgrades (Refurbish).`,
    summary: `Optima Service provides IT equipment through a Workplace as a Service model, supplying fully managed hardware, software and support that extends equipment lifespan through centralised maintenance and refurbishment.`,
    description: `Optima Service is a Ukrainian company providing IT infrastructure services and digital solutions for businesses. One of its core business areas is the Workplace as a Service (WaaS) model, through which the company supplies clients with fully equipped workplaces, including computer hardware, software, networking equipment, and technical support.

The company operates under a service-based model, enabling clients to access fully functional workplaces without the need to purchase, maintain, or manage the equipment themselves. Optima Service provides installation, updates, technical support, repair, and replacement of equipment throughout its entire lifecycle.

The company applies resource-efficient approaches focused on equipment maintenance, upgrading, refurbishment, and reuse. Centralized management of IT assets helps extend the service life of equipment, improve utilization rates, and return individual components to productive use following upgrades or refurbishment.

The environmental benefits of this model include a reduction in electronic waste generation, decreased demand for the production of new equipment, and the extension of product lifecycles. Timely maintenance and modernization help prevent the premature replacement of devices.

The economic benefits for clients include the elimination of significant upfront capital expenditures for IT equipment, predictable service costs, and reduced expenses related to technical support. For the company, the service-based model ensures stable long-term demand and more efficient management of IT assets.`,
    caseLink: "https://optima-service.ua/uk",
    image: "/images/cases/ukraine/optima-service.jpg",
    imageAlt: "Optima Service case image"
  }),
  createCase({
    id: "case-038",
    slug: "chystota-cleaning-company",
    companyName: "Chystota (Cleaning Company)",
    country: "Ukraine",
    sector: ["Services"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: `Clients pay for a cleaning outcome rather than purchasing equipment and supplies themselves; precise dosing, reusable tools, and bulk purchasing of agents reduce overall material, water, and packaging consumption.`,
    summary: `Chystota is a professional cleaning service provider whose service-based model reduces overall consumption of cleaning equipment, chemicals and packaging compared to individual ownership.`,
    description: `The cleaning company Chystota is a professional service provider with more than 15 years of experience, offering services for residential and commercial premises. The company performs regular and deep cleaning, window washing, post-renovation cleaning, upholstery cleaning, and other services. It uses its own equipment, certified professional cleaning agents, and trained staff.

The company operates under a service-based model, where the client pays for the outcome – cleanliness and order – rather than purchasing equipment, cleaning supplies, or additional tools. This approach helps reduce overall consumption of goods and resources.

The company applies the principle of efficient resource use. Thanks to staff expertise, cleaning agents are precisely dosed, efficient equipment and reusable tools are used, which reduces consumption of materials, water, and packaging. Purchasing cleaning agents in bulk also reduces single-use packaging waste.

The environmental benefit lies in reduced use of household chemicals, lower packaging waste generation, and decreased risk of water pollution. In addition, professional care for furniture, surfaces, and carpets extends their lifespan and prevents premature replacement.

The economic benefit for clients is the absence of costs for purchasing specialised equipment, professional cleaning products, and staff training. For the company, the service model ensures stable demand and scalability of services.`,
    caseLink: "https://chystota.ua",
    image: "/images/cases/ukraine/chystota-cleaning-company.jpg",
    imageAlt: "Chystota (Cleaning Company) case image"
  }),
  createCase({
    id: "case-039",
    slug: "drive-shina",
    companyName: "DRIVE SHINA",
    country: "Ukraine",
    sector: ["Automotive"],
    rStrategies: ["Repair (R4)"],
    rStrategyDescription: "Puncture, cut and deformation repairs, tread restoration, and retreading restore tyre functionality and return tyres to operational use rather than requiring premature replacement.",
    summary: `DRIVE SHINA repairs, refurbishes and retreads tyres for passenger and commercial vehicles, extending tyre service life and reducing landfill volumes and energy-intensive new tyre production.`,
    description: `DRIVE SHINA, LLC is a Ukrainian company whose key activity is tyre service. The enterprise specialises in the repair, refurbishment, and renewal of tyres for passenger and commercial vehicles, using professional diagnostic and servicing equipment.

The company's activities are aimed at maximising the use of already embedded product resources. Instead of premature replacement, the company restores tyre functionality and returns them to operational use.

DRIVE SHINA performs puncture, cut, and deformation repairs, tread restoration, structural reinforcement, and retreading – the renewal of the tread layer to extend the tyre's service life.

The environmental benefit lies in reducing the number of tyres sent to landfills or requiring energy-intensive recycling processes. Extending tyre lifespan preserves rubber, steel cord, and textile materials in use, while retreading can consume up to 70% less energy compared to producing a new tyre.

The economic benefit lies in lower costs for vehicle owners and transport companies, as tyre refurbishment is cheaper than purchasing new ones. For fleet operators, this also means less frequent procurement and reduced logistics costs.`,
    caseLink: "https://driveshina.com/",
    image: "/images/cases/ukraine/drive-shina.jpg",
    imageAlt: "DRIVE SHINA case image"
  }),
  createCase({
    id: "case-040",
    slug: "tsekh",
    companyName: "TSEKH",
    country: "Ukraine",
    sector: ["Textiles"],
    rStrategies: ["Repair (R4)"],
    rStrategyDescription: `Sole replacement, heel repair, recolouring and leather restoration replace only worn components, keeping footwear in use for additional seasons rather than being discarded and replaced.`,
    summary: `TSEKH provides professional footwear repair and restoration services, extending the useful life of shoes as an alternative to replacement and reducing demand for new footwear production.`,
    description: `TSEKH is a Ukrainian service business providing professional footwear repair, restoration, and care services. The company performs sole replacement, heel repair, recolouring, leather restoration, lining repair, and other works aimed at extending the lifespan of footwear.

The enterprise operates on the principle of maximising the use of existing products instead of prematurely replacing them with new ones. This approach helps preserve product value, reduce resource consumption, and minimise waste generation. This is particularly important for footwear, which consists of multiple materials and is difficult to recycle.

The company applies repair, restoration, and regular maintenance practices. Instead of disposal, the service replaces only worn components, improves the appearance of footwear, and keeps it in proper condition. This allows high-quality shoes to be used for several additional seasons or years.

The environmental benefit lies in waste reduction and decreased demand for new footwear production. It is estimated that producing one pair of leather shoes can generate 10-20 kg CO₂eq, while repair significantly reduces these emissions by extending product life.

The economic benefit for consumers is substantial cost savings, as repair services are significantly cheaper than purchasing new high-quality footwear.`,
    caseLink: "https://ceh.ua",
    image: "/images/cases/ukraine/tsekh.jpg",
    imageAlt: "TSEKH case image"
  }),
  createCase({
    id: "case-041",
    slug: "chystulia",
    companyName: "Chystulia",
    country: "Ukraine",
    sector: ["Textiles"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: `Shared, temporary access to professional equipment replaces the need for many individual household washing machines (one professional machine can replace 8-15 household machines), reducing overall material and resource consumption.`,
    summary: `Chystulia is a self-service laundromat giving customers temporary access to professional washing and drying equipment, reducing the number of household machines needed and cutting per-load energy and water use.`,
    description: `The Chystulia self-service laundromat provides washing and drying services in a self-service format. Customers gain access to professional washing and drying machines without the need to purchase their own equipment. The service is particularly convenient for washing bulky items, everyday clothing, and for using professional detergents.

Instead of individual ownership of equipment, consumers use it temporarily as a service. This reduces the need to produce new washing machines and increases the efficiency of existing equipment utilisation.

The company applies approaches such as temporary access to equipment, a service-based usage model, and centralised operation of resource-efficient machinery. One professional machine can replace 8-15 household washing machines, significantly reducing the consumption of steel, plastic, and electronics.

The environmental benefit lies in reduced production of household appliances, lower electronic waste generation, and more efficient resource use. Professional equipment allows a reduction in electricity consumption by 20-40% and water use by 30-50% per kilogram of laundry.

The economic benefit for clients is the absence of costs related to purchasing equipment, maintenance, repairs, and space for installation. For the business, the model ensures stable service-based revenue, high equipment utilisation, and the potential for network expansion.`,
    caseLink: "https://www.chystyulya.com.ua/",
    image: "/images/cases/ukraine/chystulia.jpg",
    imageAlt: "Chystulia case image"
  }),
  createCase({
    id: "case-042",
    slug: "samrent",
    companyName: "Samrent",
    country: "Ukraine",
    sector: ["Construction"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: `Repeated use of the same rented tools by different customers reduces the overall number of tools that need to be manufactured, lowering associated metal, plastic, energy and water consumption.`,
    summary: "Samrent rents out construction and repair tools, giving customers temporary access to equipment instead of ownership and reducing overall demand for new tool manufacturing.",
    description: `Samrent, LLC is a Ukrainian company providing rental services for construction and repair tools. The company's inventory includes concrete mixers, compressors, vibrating plates, jackhammers, power tools, and other equipment for both professional and household use.

The company provides customers with temporary access to equipment instead of ownership. This is particularly effective for one-time or short-term tasks, when purchased tools often remain unused for long periods after completion.

Through repeated use of the same tools by different customers, the overall demand for new equipment decreases, leading to reduced consumption of metal, plastic, energy, and water. Tools that have lost value for one user continue to serve other clients. In addition, the company provides regular maintenance and repair, extending the service life of equipment and maintaining high functionality.

The environmental benefit lies in reduced overproduction, lower resource consumption, and decreased CO₂ emissions associated with industrial manufacturing.

The economic benefit is shared by both parties: the company gains stable rental income, while customers can access professional tools at a significantly lower cost than purchasing them.`,
    caseLink: "https://samrent.kiev.ua",
    image: "/images/cases/ukraine/samrent.jpg",
    imageAlt: "Samrent case image"
  }),
  createCase({
    id: "case-043",
    slug: "kinder-prokat",
    companyName: "Kinder Prokat",
    country: "Ukraine",
    sector: ["Retail"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: "Sequential rental use by multiple families reduces the number of new children's products purchased and manufactured, extending each product's effective lifespan across many users.",
    summary: `Kinder Prokat rents children's products such as strollers, car seats and play equipment, allowing multiple families to sequentially use the same items and reducing new purchases of fast-outgrown goods.`,
    description: `Kinder Prokat is a local Ukrainian initiative operating in the Zakarpattia oblast. The company offers a wide range of children's products for rent, including strollers, car seats, feeding chairs, baby scales, play complexes, household appliances, and other items.

The enterprise provides customers with temporary access to products instead of purchasing them. This is particularly relevant for children's goods, which are often used only for a short period due to rapid child growth or seasonal needs.

The same product can be sequentially used by many families, which reduces the number of new purchases, lowers material consumption, and extends product lifespan.

Thanks to the rental model, customers save money, as the average usage cost is only 10-12% of the purchase price. In addition, families avoid storage costs for items that quickly become unnecessary.

The environmental benefit lies in the reduction of bulky household waste, lower consumption of plastic, metal, textiles, and electronic components, as well as reduced indirect CO₂ emissions associated with the production of new goods.`,
    caseLink: "https://kinderprokat.com.ua",
    image: "/images/cases/ukraine/kinder-prokat.jpg",
    imageAlt: "Kinder Prokat case image"
  }),
  createCase({
    id: "case-044",
    slug: "express-tehbud",
    companyName: "Express Tehbud",
    country: "Ukraine",
    sector: ["Construction"],
    rStrategies: ["Reduce (R2)"],
    rStrategyDescription: `Renting machinery to multiple clients instead of each purchasing separate equipment reduces overall demand for new machinery and the associated steel and metal resource consumption.`,
    summary: `Express Tehbud rents construction machinery such as excavators and loaders, allowing clients to access equipment functions without ownership and increasing overall equipment utilisation rates.`,
    description: `Express Tehbud is a Ukrainian company that rents out construction machinery, including excavators, loaders, aerial work platforms, dump trucks, and other equipment. Clients gain access to machinery for operational use without the need to purchase it. The company also provides servicing, technical support, repair, and logistics.

The company operates under a service-based model where clients use the function of the equipment rather than owning it. This is particularly important in the construction sector, where machinery is often used unevenly and remains idle for significant periods.

The company applies approaches such as temporary access to assets, centralized lifecycle management of equipment, increased utilisation rates, and extended service life through regular maintenance. As a result, a single unit of machinery can serve multiple clients instead of each company purchasing separate equipment.

The environmental benefit lies in reduced demand for new machinery, lower consumption of steel, non-ferrous metals, and other resources, as well as reduced generation of scrap metal and industrial waste. Planned maintenance also extends the operational lifespan of equipment.

The economic benefit for clients includes the absence of large capital expenditures on equipment purchase, flexible usage, and elimination of maintenance and downtime costs. For the company, the model ensures high asset utilisation, stable service-based revenue, and opportunities for refurbishment or resale of equipment.`,
    caseLink: "https://express-tehbud.com",
    image: "/images/cases/ukraine/express-tehbud.jpg",
    imageAlt: "Express Tehbud case image"
  }),
  createCase({
    id: "case-045",
    slug: "hempire",
    companyName: "Hempire",
    country: "Ukraine",
    sector: ["Construction"],
    rStrategies: ["Rethink (R1)"],
    rStrategyDescription: `Conventional resource-intensive construction materials are rethought and replaced with a renewable, fast-regenerating, CO2-absorbing plant-based feedstock (hemp), which after use can be reused or naturally biodegraded.`,
    summary: `Hempire manufactures eco-friendly construction materials, including blocks, plasters and insulation, from industrial hemp shives and natural lime binders, substituting renewable feedstock for resource-intensive materials.`,
    description: `HEMPIRE is a Ukrainian company producing environmentally friendly construction materials made from hemp shives (hurds) and natural lime-based binders. The company manufactures blocks, plasters, and insulation materials for energy-efficient and green construction.

The enterprise replaces traditional resource-intensive materials with renewable plant-based raw materials. Industrial hemp regenerates quickly, absorbs CO₂ during growth, and can be cultivated in Ukraine, which reduces transport costs and dependence on imported raw materials.

The use of agricultural residues – hemp shives – allows by-products to be transformed into valuable construction materials. The production process requires less energy, and after use, the materials can be reused or naturally biodegraded.

HEMPIRE products help reduce the carbon footprint in construction. For example, insulating a 100 m² house using Hempire Mix technology can reduce emissions by approximately 34 tons of CO₂ compared to conventional solutions. In addition, the materials enable energy savings of around 30% in heating and cooling costs.`,
    caseLink: "https://hempire.com.ua",
    image: "/images/cases/ukraine/hempire.jpg",
    imageAlt: "Hempire case image"
  }),
  createCase({
    id: "case-046",
    slug: "univest",
    companyName: "Univest",
    country: "Ukraine",
    sector: ["Packaging"],
    rStrategies: ["Recycle (R8)", "Rethink (R1)"],
    rStrategyDescription: `Products are designed to be recycled and returned to the production cycle after use (Recycle); plastic and polyethylene packaging materials are rethought and replaced with renewable, recyclable paper and cellulose alternatives (Rethink).`,
    summary: `Univest manufactures paper-based packaging products designed for recyclability, replacing plastic and polyethylene packaging with renewable, recyclable cellulose materials at scale.`,
    description: `Univest Company, LLC is one of the largest packaging manufacturers in Ukraine. The company operates on a full-cycle basis, producing paper cups, containers, plates, boxes, salad bowls, and molded pulp lids for HoReCa, delivery services, retail, and petrol stations.

The enterprise replaces plastic and polyethylene with renewable and recyclable materials. In particular, the company produces UniCup cups and UniLids lids, which can be recycled after use and returned into the production cycle.

The use of paper and cellulose simplifies waste recycling, reduces dependence on virgin raw materials, and decreases plastic waste generation. In addition, Univest implements resource-efficient solutions, including a solar power plant and a closed-loop water system, which reduce energy and water consumption.

The environmental benefit lies in reduced waste generation, lower CO₂ emissions, and decreased environmental pressure. At the same time, the company gains economic advantages through material circularity and reduced dependence on expensive energy resources.`,
    caseLink: "https://univest.ua",
    image: "/images/cases/ukraine/univest.jpg",
    imageAlt: "Univest case image"
  }),
  createCase({
    id: "case-047",
    slug: "eco-build-ukraine",
    companyName: "Eco Build Ukraine",
    country: "Ukraine",
    sector: ["Construction"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: `Straw, an agricultural residue often left unused or burned, is compressed and processed into structural and insulation panels, converting an agricultural by-product into a construction material input.`,
    summary: `Eco Build Ukraine manufactures structural and insulation panels from compressed straw, an agricultural by-product, substituting a renewable, carbon-sequestering material for conventional construction inputs.`,
    description: `Eco Build Ukraine is a Ukrainian manufacturer of structural and thermal insulation panels made from compressed straw. The company produces eco-friendly solutions for residential and commercial construction used in external walls, insulation systems, frame structures, and energy-efficient buildings.

The enterprise replaces traditional resource-intensive materials with renewable bio-based feedstock. The main raw material is straw – an agricultural by-product that is often left unused or burned.

The company applies approaches based on agricultural residue utilisation, production of biodegradable materials, reduction of construction-related carbon emissions, and development of local supply chains. This enables the use of local resources, reduces transportation costs, and creates added value in regional economies.

The environmental benefit lies in reduced straw burning, lower construction waste generation, and decreased CO₂ emissions. Straw contains biogenic carbon, meaning that 1 m³ of panels can sequester approximately 80-120 kg of CO₂, whereas conventional insulation materials have a significantly higher carbon footprint.

The economic benefit is reflected in lower insulation costs, faster installation, and reduced building heating expenses. Energy savings are estimated at 20-40% compared to standard solutions. Additionally, the agricultural sector gains new revenue streams from straw sales, while regions benefit from job creation and local economic development.`,
    caseLink: "https://eco-build.com.ua",
    image: "/images/cases/ukraine/eco-build-ukraine.jpg",
    imageAlt: "Eco Build Ukraine case image"
  }),
  createCase({
    id: "case-048",
    slug: "lion-recycling-ukraine",
    companyName: "Lion Recycling Ukraine",
    country: "Ukraine",
    sector: ["Plastics"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: `Plastic waste undergoes sorting, cleaning, shredding, washing and granulation, after which it is returned to the production cycle as recycled polymer granules used to manufacture new products.`,
    summary: `Lion Recycling Ukraine collects, sorts and processes plastic waste into secondary polymer granules, returning recycled material into industrial production and reducing reliance on virgin polymer resources.`,
    description: `Lion Recycling Ukraine is one of Ukraine's leading operators in the field of polymer waste recycling. The company specializes in the collection, sorting, and processing of plastic waste, followed by the production of secondary polymer granules for industrial use.

The company transforms plastic waste into high-quality raw materials for manufacturing new products. It works with various types of polymers, plastic packaging, films, and production scraps.

The waste undergoes a multi-stage treatment process, including sorting, cleaning, shredding, washing, and granulation, after which it is returned to the production cycle in the form of recycled polymer granules. These materials are used to manufacture packaging, films, pipes, construction products, and other goods.

The environmental impact includes reducing the volume of plastic waste, decreasing landfill pressure, and lowering the demand for virgin polymer resources. Plastic recycling also requires less energy compared to the production of new raw materials.

The economic impact is reflected in lower material costs for Ukrainian manufacturers. The use of recycled granules can provide savings of up to EUR 200 per tonne of raw material, reducing the production cost of finished goods. In addition, the company creates a stable market for plastic waste and generates jobs in the recycling sector.`,
    caseLink: "https://lion-recycling.com.ua",
    image: "/images/cases/ukraine/lion-recycling-ukraine.jpg",
    imageAlt: "Lion Recycling Ukraine case image"
  }),
  createCase({
    id: "case-049",
    slug: "re-inventex",
    companyName: "Re:inventex",
    country: "Ukraine",
    sector: ["Textiles"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: "Textile production offcuts are mechanically recycled into fibers that substitute virgin fiber inputs in the production of yarn, fabrics, and nonwoven materials.",
    summary: `Re:inventex operates Ukraine's first textile production waste recycling line, mechanically converting textile offcuts into fibers usable for new yarn, fabric and nonwoven materials.`,
    description: `Re:inventex is a Ukrainian textile waste recycling initiative implemented by the team of K.Tex. In 2024, the first textile production waste recycling line in Ukraine, with an annual processing capacity of up to 2,500 tonnes, was launched in Irpin. The facility processes textile offcuts generated during the production of clothing, bed linen, and other textile industry products.

The company applies a resource recovery model in which textile waste is returned to the production cycle as secondary raw material. Specialized equipment enables the mechanical recycling of textile residues into fibers that can be used in the production of yarn, fabrics, and nonwoven materials. Through this approach, the company reduces the volume of textile waste sent to landfills and decreases the demand for virgin raw materials.

The project contributes to the development of a circular textile system in Ukraine. The company collaborates with enterprises from the light industry sector and is developing a collection system for textile waste to support further recycling. In the future, the facility plans to process not only domestic but also imported secondary textile raw materials.

The environmental benefits of the project include reducing textile waste generation, lowering the burden on landfills, and decreasing the consumption of virgin materials in the textile industry. In addition, textile recycling helps reduce greenhouse gas emissions and lowers the water and energy consumption associated with the production of new textile materials.

The economic benefits of the project include the creation of a new recycling industry segment, the development of the secondary textile raw materials market, and reduced waste disposal costs. The project also creates new jobs and supports the adaptation of Ukraine's light industry to the environmental requirements of the European market.`,
    caseLink: "https://reinventex.com.ua",
    image: "/images/cases/ukraine/re-inventex.jpg",
    imageAlt: "Re:inventex case image"
  }),
  createCase({
    id: "case-050",
    slug: "util-akb",
    companyName: "Util-akb",
    country: "Ukraine",
    sector: ["Waste Management"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: `Used batteries are processed to recover lead, plastic casings, neutralised electrolytes, and non-ferrous metals, returning 95-99% of valuable materials to the production cycle for new batteries and industrial products.`,
    summary: `Util-akb collects and recycles used lead-acid batteries, recovering lead, plastics and non-ferrous metals for return into production while preventing toxic contamination from improper disposal.`,
    description: `Util-akb specializes in the collection and recycling of used batteries, including starter, traction, and stationary lead-acid batteries. The company also handles lead, damaged batteries, and individual battery components.

The company converts hazardous waste into valuable secondary raw materials. This enables not only the safe disposal of used batteries but also the return of materials into the production cycle.

During the recycling process, lead and lead alloys are recovered for the production of new batteries, plastic casings are shredded and reused, and electrolytes are neutralized for further industrial application. Non-ferrous metals, including copper, nickel, and cadmium, are also recovered and returned to recycling streams.

The environmental impact lies in preventing toxic substances from contaminating soil and water. It is estimated that a single battery can pollute around 20 m² of soil or 400 litres of water, making proper recycling highly important for environmental protection. In addition, recycling reduces the need for extracting virgin resources and lowers the carbon footprint.

The economic impact includes the recovery of 95-99% of valuable materials from lead-acid batteries, reducing raw material costs for manufacturers of new batteries and other industrial products.`,
    caseLink: "https://util-akb.com.ua/",
    image: "/images/cases/ukraine/util-akb.jpg",
    imageAlt: "Util-akb case image"
  }),
  createCase({
    id: "case-051",
    slug: "stabil-plastic",
    companyName: "Stabil Plastic",
    country: "Ukraine",
    sector: ["Plastics"],
    rStrategies: ["Recycle (R8)"],
    rStrategyDescription: `Polyethylene, polypropylene and other polymer waste streams are processed and returned to the production cycle as the base material for new construction, technical and landscaping products.`,
    summary: `Stabil Plastic manufactures construction and technical products from recycled polymer raw materials, returning plastic waste to the production cycle and reducing reliance on virgin petrochemical polymers.`,
    description: `Stabil Plastic is a Ukrainian company specializing in plastic waste recycling and the production of finished goods from recycled polymer raw materials. The company manufactures construction and technical components, polymer profiles, landscaping elements, and other industrial products.

The company returns plastic waste into the production cycle as a valuable raw material, helping reduce dependence on virgin petrochemical-based polymers.

Its operations apply approaches such as plastic waste recycling, manufacturing new products from secondary raw materials, replacing virgin polymers, and extending the lifecycle of materials. The company works with polyethylene, polypropylene, and other types of polymer waste, which, after processing, become the basis for new products.

The environmental impact includes reducing landfill waste volumes, lowering environmental pollution, and decreasing demand for petroleum-based raw materials. The use of recycled plastic can reduce emissions by 1-2 kg CO₂e per kilogram of material. If the company processes 1,000 tonnes of plastic annually, the potential reduction may amount to 1,000-2,000 tonnes of CO₂e each year.

The economic impact includes lower raw material costs, the creation of high value-added products, and the development of a local secondary materials market. In addition, polymer recycling requires 30-80% less energy than the production of virgin plastic.`,
    caseLink: "https://www.stabilplastik.com.ua/",
    image: "/images/cases/ukraine/stabil-plastic.jpg",
    imageAlt: "Stabil Plastic case image"
  }),
  createCase({
    id: "case-052",
    slug: "kuziv-craft",
    companyName: "Kuziv Craft",
    country: "Ukraine",
    sector: ["Textiles"],
    rStrategies: ["Repurpose (R6)"],
    rStrategyDescription: `Post-consumer denim, sourced from second-hand stores or individuals, is manually cut, sewn and finished into a different product category (bags) rather than being recycled back into raw fiber.`,
    summary: `Kuziv Craft is an artisan brand that upcycles discarded denim garments into handmade designer bags, giving used textiles a new function and reducing demand for virgin textile materials.`,
    description: `Kuziv Craft is a Ukrainian artisan brand specializing in the production of handmade bags created from discarded denim garments. The company transforms used jeans into unique fashion accessories through a craft-based upcycling process. Most products are manufactured on demand, while post-consumer denim is sourced from second-hand stores or collected from individuals.

The company operates on the principle of extending the useful life of textile materials by giving discarded garments a new function instead of allowing them to become waste. Through creative redesign, denim is transformed into durable bags with a higher functional and aesthetic value, reducing the need for virgin textile materials.

The production process includes the collection and selection of used jeans, cleaning, disassembly, manual cutting, sewing, and finishing. Each product is individually handcrafted, allowing the company to maximize the value of existing textile resources while minimizing production waste. The made-to-order approach also helps avoid overproduction and unnecessary inventory.

The environmental benefits include reducing textile waste generation, extending the lifetime of textile materials, and decreasing the consumption of virgin fabrics. By reusing existing denim instead of producing new textile materials, the company contributes to lower resource consumption and supports more sustainable production and consumption patterns.

The economic benefits include creating value-added products from low-cost secondary materials, supporting local craft production, and developing a market for sustainable fashion products. The business also demonstrates how small enterprises can successfully combine environmental responsibility with unique product design and customer-oriented manufacturing.`,
    caseLink: "https://instagram.com/kuziv.craft",
    image: "/images/cases/ukraine/kuziv-craft.jpg",
    imageAlt: "Kuziv Craft case image"
  })
];

/* Filter values are derived automatically, so editors maintain each value once. */
export const caseSectors = [...new Set(cases.flatMap((caseStudy) => caseStudy.filterValues?.sectors ?? []))].sort();
export const caseCountries = [...new Set(cases.flatMap((caseStudy) => caseStudy.filterValues?.countries ?? []))].sort();
export const caseRStrategies = [...new Set(cases.flatMap((caseStudy) => caseStudy.filterValues?.rStrategies ?? []))].sort();
