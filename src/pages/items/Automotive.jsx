import ItemCatalogTemplate from "./ItemCatalogTemplate";

function Automotive() {
  const categories = ["All", "Engine", "Braking", "Electrical", "Filters", "Lubricants"];
  const items = [
    {
      sku: "DMC-AUTO-001",
      name: "Heavy-Duty Brake Pad Set",
      category: "Braking",
      image: "https://placehold.co/900x600/e2e8f0/0f172a?text=Brake+Pad+Set",
      application: "Fleet and Light Commercial Vehicles",
      stock: "Ready Stock",
      leadTime: "1-3 business days",
      description: "Durable braking set for high-cycle use with stable stopping performance and long service life.",
    },
    {
      sku: "DMC-AUTO-014",
      name: "Fleet Engine Oil 15W-40",
      category: "Lubricants",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Engine+Oil+15W-40",
      application: "Diesel Fleet Platforms",
      stock: "Ready Stock",
      leadTime: "1-2 business days",
      description: "High-performance oil engineered for thermal stability and reduced wear in demanding routes.",
    },
    {
      sku: "DMC-AUTO-031",
      name: "Alternator Assembly",
      category: "Electrical",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Alternator+Assembly",
      application: "Commercial Utility Vehicles",
      stock: "Made to Order",
      leadTime: "4-8 business days",
      description: "Charging-system component designed for stable output and dependable long-duty operation.",
    },
    {
      sku: "DMC-AUTO-045",
      name: "Timing Belt Kit",
      category: "Engine",
      image: "https://placehold.co/900x600/e2e8f0/0f172a?text=Timing+Belt+Kit",
      application: "Gas and Diesel Platforms",
      stock: "Ready Stock",
      leadTime: "2-4 business days",
      description: "Complete timing kit package for preventive maintenance and overhaul schedules.",
    },
  ];

  return (
    <ItemCatalogTemplate
      sectionLabel="Items / Automotive"
      heroTitle="Automotive Items for Fleet Reliability and Daily Operations."
      heroDescription="Browse dependable automotive items with clear SKU references, application details, and responsive after-sales support."
      categories={categories}
      items={items}
      catalogTitle="Automotive Item Catalog"
      brochureTitle="Automotive Product Line Brochure"
      brochureFile="/brochures/dmc-automotive-brochure.pdf"
    />
  );
}

export default Automotive;

