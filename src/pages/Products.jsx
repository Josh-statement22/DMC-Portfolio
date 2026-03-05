import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Products() {
  const itemCategories = [
    {
      name: "Construction",
      path: "/products/items/construction",
      text: "Construction-ready materials and equipment for civil, structural, and site operations.",
      image: "https://placehold.co/900x600/e2e8f0/0f172a?text=Construction",
    },
    {
      name: "Automotive",
      path: "/products/items/automotive",
      text: "Automotive parts and fleet support items for transport and daily operations.",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=Automotive",
    },
    {
      name: "Industrial",
      path: "/products/items/industrial",
      text: "Industrial-grade materials and equipment for process and plant environments.",
      image: "https://placehold.co/900x600/e0f2fe/0f172a?text=Industrial",
    },
    {
      name: "PPE",
      path: "/products/items/ppe",
      text: "Protective equipment aligned with site safety and compliance requirements.",
      image: "https://placehold.co/900x600/dbeafe/0f172a?text=PPE",
    },
    {
      name: "Hardware",
      path: "/products/items/hardware",
      text: "Hardware and field essentials for installation, maintenance, and repair works.",
      image: "https://placehold.co/900x600/e2e8f0/0f172a?text=Hardware",
    },
    {
      name: "Electrical & Industrial Tools",
      path: "/products/items/electrical-industrial-tools",
      text: "Tested tools and electrical essentials for diagnostics and heavy-duty execution.",
      image: "https://placehold.co/900x600/e0f2fe/0f172a?text=Electrical+Tools",
    },
  ];

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[62vh] flex items-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img src="" alt="Products and supply operations" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-blue-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-blue-950/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-24">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">Products</p>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
            Product Lines for Construction, Industrial, and Field Operations
          </h1>
          <p className="mt-5 text-blue-100 text-lg sm:text-xl max-w-3xl">
            Select a category to view detailed item pages with catalog listings, searchable SKUs, and downloadable brochures.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 pl-4 border-l-4 border-blue-500">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-3">Item Categories</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Browse Product Subcategories</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {itemCategories.map((item) => (
              <article key={item.name} className="group rounded-2xl border border-blue-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-44 overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-blue-950 mb-2">{item.name}</h3>
                  <p className="text-blue-900/80 mb-4">{item.text}</p>
                  <Link to={item.path} className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-900">
                    Open Category <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
