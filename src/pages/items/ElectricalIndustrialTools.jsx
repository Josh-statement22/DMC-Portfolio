import ItemCatalogTemplate from "./ItemCatalogTemplate";

function ElectricalIndustrialTools() {
  const categories = ["All", "Power Tools", "Testing Tools", "Electrical", "Industrial Tools"];
  const items = [
    {
      sku: "DMC-EIT-401",
      name: "Cordless Impact Driver",
      category: "Power Tools",
      image: "https://placehold.co/900x600/e2e8f0/0f172a?text=Impact+Driver",
      application: "Installation and Assembly Works",
      stock: "Ready Stock",
      leadTime: "1-3 business days",
      description: "High-torque impact driver for faster fastening and efficient site installation tasks.",
    },
    {
      sku: "DMC-EIT-416",
      name: "Digital Clamp Meter",
      category: "Testing Tools",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Clamp+Meter",
      application: "Electrical Diagnostics",
      stock: "Ready Stock",
      leadTime: "1-2 business days",
      description: "Accurate measurement tool for quick electrical checks, troubleshooting, and preventive maintenance.",
    },
    {
      sku: "DMC-EIT-429",
      name: "Industrial Control Cable",
      category: "Electrical",
      image: "https://placehold.co/900x600/e0f2fe/0f172a?text=Control+Cable",
      application: "Panel and Equipment Wiring",
      stock: "Made to Order",
      leadTime: "3-7 business days",
      description: "Durable control cable suited for industrial wiring systems and long-duty electrical operations.",
    },
    {
      sku: "DMC-EIT-443",
      name: "Hydraulic Crimping Tool",
      category: "Industrial Tools",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Hydraulic+Crimper",
      application: "Cable Termination Works",
      stock: "Made to Order",
      leadTime: "4-8 business days",
      description: "Heavy-duty crimping tool built for secure cable terminations in high-demand installations.",
    },
  ];

  return (
    <ItemCatalogTemplate
      sectionLabel="Items / Electrical & Industrial Tools"
      heroTitle="Electrical and Industrial Tools for Precision Field Work."
      heroDescription="Browse tested tools and electrical essentials for installation, diagnostics, maintenance, and repair operations."
      categories={categories}
      items={items}
      catalogTitle="Electrical & Industrial Tools Catalog"
      brochureTitle="Electrical & Industrial Tools Brochure"
      brochureFile="/brochures/dmc-electrical-industrial-tools-brochure.pdf"
    />
  );
}

export default ElectricalIndustrialTools;