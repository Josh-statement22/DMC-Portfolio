import ItemCatalogTemplate from "./ItemCatalogTemplate";

function PPE() {
  const categories = ["All", "Head Protection", "Hand Protection", "Body Protection", "Foot Protection"];
  const items = [
    {
      sku: "DMC-PPE-201",
      name: "Industrial Safety Helmet",
      category: "Head Protection",
      image: "https://placehold.co/900x600/e2e8f0/0f172a?text=Safety+Helmet",
      application: "Construction and Plant Areas",
      stock: "Ready Stock",
      leadTime: "1-3 business days",
      description: "Impact-resistant safety helmet built for daily site compliance and continuous workforce protection.",
    },
    {
      sku: "DMC-PPE-214",
      name: "Cut-Resistant Work Gloves",
      category: "Hand Protection",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Work+Gloves",
      application: "Fabrication and Material Handling",
      stock: "Ready Stock",
      leadTime: "1-2 business days",
      description: "High-grip and cut-resistant gloves designed for secure handling in demanding jobsite tasks.",
    },
    {
      sku: "DMC-PPE-227",
      name: "Reflective Safety Vest",
      category: "Body Protection",
      image: "https://placehold.co/900x600/e0f2fe/0f172a?text=Safety+Vest",
      application: "Traffic and Operations Zones",
      stock: "Ready Stock",
      leadTime: "1-3 business days",
      description: "High-visibility vest for improved worker visibility in active operational environments.",
    },
    {
      sku: "DMC-PPE-239",
      name: "Steel-Toe Safety Boots",
      category: "Foot Protection",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Safety+Boots",
      application: "Industrial and Mining Sites",
      stock: "Made to Order",
      leadTime: "3-6 business days",
      description: "Protective safety footwear with reinforced toe and durable sole for tough field conditions.",
    },
  ];

  return (
    <ItemCatalogTemplate
      sectionLabel="Items / PPE"
      heroTitle="PPE Items for Safety Compliance and Workforce Protection."
      heroDescription="Browse protective equipment aligned with strict site requirements across construction, industrial, power, and mining sectors."
      categories={categories}
      items={items}
      catalogTitle="PPE Item Catalog"
      brochureTitle="PPE Product Line Brochure"
      brochureFile="/brochures/dmc-ppe-brochure.pdf"
    />
  );
}

export default PPE;
