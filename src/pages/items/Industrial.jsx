import ItemCatalogTemplate from "./ItemCatalogTemplate";

function Industrial() {
  const categories = ["All", "Piping", "Valves", "Steel", "Mechanical"];
  const items = [
    {
      sku: "DMC-IND-101",
      name: "SCH 80 Carbon Steel Pipe",
      category: "Piping",
      image: "https://placehold.co/900x600/e2e8f0/0f172a?text=SCH+80+Pipe",
      application: "Process and Utility Lines",
      stock: "Ready Stock",
      leadTime: "2-5 business days",
      description: "High-integrity pipe suitable for industrial process systems requiring reliable pressure tolerance.",
    },
    {
      sku: "DMC-IND-112",
      name: "ANSI Gate Valve",
      category: "Valves",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=ANSI+Gate+Valve",
      application: "Flow Isolation Systems",
      stock: "Made to Order",
      leadTime: "4-8 business days",
      description: "Industrial-grade valve assembly built for stable operation and long-term service reliability.",
    },
    {
      sku: "DMC-IND-128",
      name: "Structural Steel Channel",
      category: "Steel",
      image: "https://placehold.co/900x600/e0f2fe/0f172a?text=Steel+Channel",
      application: "Plant and Facility Structures",
      stock: "Ready Stock",
      leadTime: "2-4 business days",
      description: "Engineered channel sections for fabrication, support structures, and heavy-duty framing works.",
    },
    {
      sku: "DMC-IND-143",
      name: "Industrial Coupling Set",
      category: "Mechanical",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Coupling+Set",
      application: "Rotating Equipment Alignment",
      stock: "Made to Order",
      leadTime: "3-7 business days",
      description: "Durable coupling solution for mechanical drives requiring dependable torque transfer.",
    },
  ];

  return (
    <ItemCatalogTemplate
      sectionLabel="Items / Industrial"
      heroTitle="Industrial Materials and Equipment for Heavy-Duty Operations."
      heroDescription="Source plant-ready industrial items with consistent quality, dependable lead times, and practical support."
      categories={categories}
      items={items}
      catalogTitle="Industrial Item Catalog"
      brochureTitle="Industrial Materials Brochure"
      brochureFile="/brochures/dmc-industrial-brochure.pdf"
    />
  );
}

export default Industrial;