import ItemCatalogTemplate from "./ItemCatalogTemplate";

function Hardware() {
  const categories = ["All", "Fasteners", "Tools", "Site Essentials", "Maintenance"];
  const items = [
    {
      sku: "DMC-HDW-301",
      name: "Heavy-Duty Bolt and Nut Set",
      category: "Fasteners",
      image: "https://placehold.co/900x600/e2e8f0/0f172a?text=Bolt+and+Nut+Set",
      application: "Structural and Mechanical Works",
      stock: "Ready Stock",
      leadTime: "1-3 business days",
      description: "Industrial fastener set for secure assembly across construction and maintenance applications.",
    },
    {
      sku: "DMC-HDW-315",
      name: "Adjustable Pipe Wrench",
      category: "Tools",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Pipe+Wrench",
      application: "Piping Installation and Repair",
      stock: "Ready Stock",
      leadTime: "1-2 business days",
      description: "High-strength pipe wrench for stable grip and dependable turning control in field conditions.",
    },
    {
      sku: "DMC-HDW-329",
      name: "Industrial Sealant Pack",
      category: "Site Essentials",
      image: "https://placehold.co/900x600/e0f2fe/0f172a?text=Industrial+Sealant",
      application: "Joint and Surface Sealing",
      stock: "Made to Order",
      leadTime: "2-5 business days",
      description: "Site-ready sealant bundle for industrial joining, waterproofing, and preventive maintenance works.",
    },
    {
      sku: "DMC-HDW-344",
      name: "Facility Repair Kit",
      category: "Maintenance",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Repair+Kit",
      application: "Daily Maintenance Operations",
      stock: "Ready Stock",
      leadTime: "1-3 business days",
      description: "General-purpose repair kit for fast response to routine facility and equipment service tasks.",
    },
  ];

  return (
    <ItemCatalogTemplate
      sectionLabel="Items / Hardware"
      heroTitle="Hardware Items for Reliable Field and Facility Execution."
      heroDescription="Access dependable hardware, tools, and essentials that support day-to-day site productivity and maintenance."
      categories={categories}
      items={items}
      catalogTitle="Hardware Item Catalog"
      brochureTitle="Hardware Product Line Brochure"
      brochureFile="/brochures/dmc-hardware-brochure.pdf"
    />
  );
}

export default Hardware;