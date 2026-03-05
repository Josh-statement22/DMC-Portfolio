import ItemCatalogTemplate from "./ItemCatalogTemplate";

function Construction() {
  const categories = ["All", "Cement", "Steel", "Aggregates", "Site Equipment"];
  const items = [
    {
      sku: "DMC-CON-501",
      name: "Portland Cement Type 1",
      category: "Cement",
      image: "https://placehold.co/900x600/e2e8f0/0f172a?text=Portland+Cement",
      application: "General Structural Works",
      stock: "Ready Stock",
      leadTime: "1-3 business days",
      description: "Reliable cement supply for standard construction requirements and consistent site batching.",
    },
    {
      sku: "DMC-CON-514",
      name: "Deformed Steel Rebar",
      category: "Steel",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Steel+Rebar",
      application: "Reinforced Concrete Structures",
      stock: "Ready Stock",
      leadTime: "2-4 business days",
      description: "Quality reinforcement bars for structural durability and dependable construction performance.",
    },
    {
      sku: "DMC-CON-527",
      name: "Crushed Gravel Mix",
      category: "Aggregates",
      image: "https://placehold.co/900x600/e0f2fe/0f172a?text=Crushed+Gravel",
      application: "Concrete and Base Preparation",
      stock: "Made to Order",
      leadTime: "3-6 business days",
      description: "Construction aggregates with controlled grading for concrete works and foundational layers.",
    },
    {
      sku: "DMC-CON-539",
      name: "Portable Concrete Vibrator",
      category: "Site Equipment",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Concrete+Vibrator",
      application: "Concrete Compaction",
      stock: "Made to Order",
      leadTime: "4-8 business days",
      description: "Site equipment for concrete consolidation and improved structural quality during pours.",
    },
  ];

  return (
    <ItemCatalogTemplate
      sectionLabel="Items / Construction"
      heroTitle="Construction Items for Reliable Project Delivery."
      heroDescription="Access construction materials and site equipment with dependable quality, lead times, and support."
      categories={categories}
      items={items}
      catalogTitle="Construction Item Catalog"
      brochureTitle="Construction Product Line Brochure"
      brochureFile="/brochures/dmc-construction-brochure.pdf"
    />
  );
}

export default Construction;

