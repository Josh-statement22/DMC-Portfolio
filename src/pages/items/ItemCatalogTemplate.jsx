import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck } from "lucide-react";

export default function ItemCatalogTemplate({
  sectionLabel,
  heroTitle,
  heroDescription,
  categories,
  items,
  catalogTitle,
  brochureTitle,
  brochureFile,
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const featuredItem = items[0];

  const filteredItems = items.filter((item) => {
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    const query = searchTerm.trim().toLowerCase();
    const matchSearch =
      query.length === 0 ||
      item.name.toLowerCase().includes(query) ||
      item.sku.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-white text-blue-950">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-blue-100 font-semibold mb-4">{sectionLabel}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.96] max-w-4xl">{heroTitle}</h1>
          <p className="mt-5 text-blue-100 text-lg max-w-3xl leading-relaxed">{heroDescription}</p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-blue-50/40 border-y border-blue-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-2xl border border-blue-200 bg-white p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-blue-700 font-semibold mb-3">Featured Item</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">{featuredItem.name}</h2>
            <p className="text-blue-900/80 leading-relaxed mb-5">{featuredItem.description}</p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-700 font-semibold mb-1">SKU</p>
                <p className="font-semibold text-blue-950">{featuredItem.sku}</p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-700 font-semibold mb-1">Application</p>
                <p className="font-semibold text-blue-950">{featuredItem.application}</p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-700 font-semibold mb-1">Availability</p>
                <p className="font-semibold text-blue-950">{featuredItem.stock}</p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-700 font-semibold mb-1">Lead Time</p>
                <p className="font-semibold text-blue-950">{featuredItem.leadTime}</p>
              </div>
            </div>

            <button
              type="button"
              className="px-6 py-3 rounded-md bg-blue-800 text-white hover:bg-blue-900 transition-colors font-semibold inline-flex items-center gap-2"
            >
              Request Quotation <ArrowRight size={18} />
            </button>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-blue-200 bg-white p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-blue-700 font-semibold mb-4">Item Inquiry</p>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {["Category", "Application", "Quantity", "Timeline"].map((label) => (
                <div key={label} className="rounded-md border border-blue-200 bg-slate-50 px-3 py-3 text-sm text-slate-500">
                  {label}
                </div>
              ))}
            </div>
            <div className="rounded-md border border-blue-200 bg-slate-50 px-3 py-3 text-sm text-slate-500 mb-5">Item Name / SKU</div>
            <button type="button" className="w-full px-5 py-3 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors">
              Request Availability
            </button>
            <p className="mt-4 text-sm text-blue-900/80 leading-relaxed">
              Share your required item details so we can provide lead time, availability, and quotation support.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-3">Catalog</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{catalogTitle}</h2>
          </div>

          <div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div className="flex flex-wrap gap-2.5">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                    activeCategory === category
                      ? "bg-blue-800 border-blue-800 text-white"
                      : "bg-white border-blue-200 text-blue-900 hover:bg-blue-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search item or SKU"
              className="w-full lg:w-72 px-3.5 py-2.5 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <article key={item.sku} className="rounded-xl border border-blue-200 bg-white p-5 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 overflow-hidden rounded-lg border border-blue-100 bg-blue-50">
                  <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
                </div>
                <p className="text-xs uppercase tracking-[0.14em] text-blue-700 font-semibold mb-2">{item.sku}</p>
                <h3 className="text-xl font-semibold text-blue-950 mb-2">{item.name}</h3>
                <p className="text-sm text-blue-900/80 mb-3">{item.description}</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-blue-950">Category:</span> {item.category}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-950">Application:</span> {item.application}
                  </p>
                  <p>
                    <span className="font-semibold text-blue-950">Lead Time:</span> {item.leadTime}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
          <article className="rounded-xl border border-blue-200 bg-blue-50/60 p-5">
            <div className="inline-flex h-10 w-10 rounded-full bg-blue-100 text-blue-800 items-center justify-center mb-3">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-blue-900/80">Top-grade items with verified specifications and dependable quality checks before release.</p>
          </article>
          <article className="rounded-xl border border-blue-200 bg-blue-50/60 p-5">
            <div className="inline-flex h-10 w-10 rounded-full bg-blue-100 text-blue-800 items-center justify-center mb-3">
              <Truck size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliable Fulfillment</h3>
            <p className="text-blue-900/80">Structured delivery coordination aligned with project timelines and operational requirements.</p>
          </article>
          <article className="rounded-xl border border-blue-200 bg-blue-50/60 p-5">
            <div className="inline-flex h-10 w-10 rounded-full bg-blue-100 text-blue-800 items-center justify-center mb-3">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-2">After-Sales Support</h3>
            <p className="text-blue-900/80">Responsive support team ready to assist with product guidance and follow-through service.</p>
          </article>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-950 to-blue-900 text-white p-6 sm:p-8">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <img
                  src={`https://placehold.co/900x1200/1e3a8a/ffffff?text=${encodeURIComponent(brochureTitle)}`}
                  alt={`${brochureTitle} cover`}
                  className="w-full h-56 sm:h-64 object-cover rounded-md"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.18em] text-blue-100/85 font-semibold mb-3">Downloadable Brochure</p>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{brochureTitle}</h3>
              <p className="text-blue-100/95 leading-relaxed mb-6">
                Download the latest catalog with SKU references, item groups, and availability notes for your accreditation
                and sourcing evaluation.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={brochureFile}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-blue-900 font-semibold hover:bg-blue-50 transition-colors"
                >
                  Download Brochure (PDF) <ArrowRight size={16} />
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/50 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Request Updated Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
