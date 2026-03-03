import { useState } from "react";
import { ArrowRight, BarChart3, Building2, Settings, ShieldCheck, Wrench } from "lucide-react";

function Services() {
  const [active, setActive] = useState(1);

  const productCategories = [
    {
      title: "Heavy Machinery",
      text: "Reliable equipment solutions for large-scale construction and industrial workloads.",
      image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Structural Steel",
      text: "Engineered steel materials for high-performance structural and infrastructure requirements.",
      image: "https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Industrial Valves",
      text: "Durable valve systems designed for process control, safety, and long-term operations.",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Process Piping",
      text: "High-integrity piping products for critical flow systems across industrial sectors.",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const availableItems = [
    {
      code: "DMC-HM-240",
      name: "Crawler Excavator",
      category: "Heavy Machinery",
      spec: "24T class, high-duty cycle performance",
      availability: "Ready Stock",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    },
    {
      code: "DMC-SS-A572",
      name: "Structural Steel Beams",
      category: "Structural Steel",
      spec: "A572 Grade with project-cut options",
      availability: "Made to Order",
      image: "https://images.unsplash.com/photo-1577460551100-90755a67856e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      code: "DMC-IV-900",
      name: "Industrial Gate Valve",
      category: "Industrial Valves",
      spec: "ANSI 900, corrosion-resistant trim",
      availability: "Ready Stock",
      image: "https://images.unsplash.com/photo-1573989173296-5c9d2a9f0c29?auto=format&fit=crop&w=1200&q=80",
    },
    {
      code: "DMC-PP-SCH80",
      name: "Process Piping Lines",
      category: "Process Piping",
      spec: "SCH 80 piping for critical flow systems",
      availability: "Made to Order",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const serviceCapabilities = [
    {
      id: 1,
      icon: <Building2 size={24} />,
      title: "Enterprise Solutions",
      short: "Scalable infrastructure and integrated business systems.",
      full: "We design and implement enterprise-grade systems that improve performance, streamline operations, and support long-term growth.",
    },
    {
      id: 2,
      icon: <Settings size={24} />,
      title: "Operations & Technical Services",
      short: "Comprehensive operational and technical support.",
      full: "Our team provides structured operations support, preventive maintenance, and technical execution aligned with enterprise standards.",
    },
    {
      id: 3,
      icon: <ShieldCheck size={24} />,
      title: "Compliance & Risk Management",
      short: "Governance-driven frameworks and regulatory alignment.",
      full: "We help organizations remain compliant through practical governance systems, risk controls, and measurable accountability.",
    },
    {
      id: 4,
      icon: <BarChart3 size={24} />,
      title: "Strategic Business Consulting",
      short: "Data-driven advisory and enterprise planning.",
      full: "Our consultants identify optimization opportunities in cost, process, and resource planning to support stronger business outcomes.",
    },
  ];

  const processFlow = [
    { step: "01", title: "Assessment", text: "Comprehensive evaluation of project requirements and operational context." },
    { step: "02", title: "Planning", text: "Structured solution design, resource mapping, and execution strategy." },
    { step: "03", title: "Implementation", text: "Disciplined rollout with quality, compliance, and safety controls." },
    { step: "04", title: "Continuous Support", text: "Post-delivery maintenance, optimization, and long-term assistance." },
  ];

  const selectedService = serviceCapabilities.find((service) => service.id === active) || serviceCapabilities[0];

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[75vh] flex items-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80"
          alt="Industrial operations in facility"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-blue-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-24 sm:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-5">
              <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold">Products & Services</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.96] tracking-tight">
                Total Supply and Technical Support for Critical Operations.
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl leading-relaxed">
                Two core tracks define our offering: product supply for mission-critical assets and service capabilities
                for reliable execution and long-term support.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/20 bg-blue-950/35 backdrop-blur-md p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100/80 mb-4">Service Promise</p>
                <div className="space-y-3 text-blue-100">
                  <p>Outstanding quality and greatest care.</p>
                  <p>Quick and flexible solutions for any market requirement.</p>
                  <p>Local implementation backed by technical expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-700 mb-3 font-semibold">Products 01</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Product Categories</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((item) => (
              <article
                key={item.title}
                className="group relative rounded-2xl overflow-hidden min-h-[360px] border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/45 to-blue-900/20 group-hover:from-blue-950/95 transition-colors duration-300" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/40 border-y border-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-700 mb-3 font-semibold">Products 02</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Available Items Brochure</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {availableItems.map((item) => (
              <article
                key={item.code}
                className="group rounded-xl overflow-hidden border border-blue-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/30 to-transparent" />
                  <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between gap-2">
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-blue-100 uppercase">{item.code}</p>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        item.availability === "Ready Stock"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.availability}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-950 mb-1">{item.name}</h3>
                  <p className="text-sm text-blue-700 font-medium mb-2">{item.category}</p>
                  <p className="text-sm text-blue-900/80 leading-relaxed">{item.spec}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-700 mb-3 font-semibold">Services 01</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Service Capabilities</h2>
          </div>
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-3">
              {serviceCapabilities.map((service) => {
                const isActive = active === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActive(service.id)}
                    className={`w-full text-left rounded-xl border px-5 py-4 transition-all duration-300 ${
                      isActive
                        ? "border-blue-700 bg-blue-700 text-white shadow-md"
                        : "border-blue-200 bg-white text-blue-950 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {service.icon}
                      <p className="font-semibold">{service.title}</p>
                    </div>
                    <p className={`${isActive ? "text-blue-100" : "text-blue-900/75"} text-sm`}>{service.short}</p>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7 rounded-2xl border border-blue-200 bg-blue-50/50 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 mb-4">
                <Wrench size={16} />
                Service Overview
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">{selectedService.title}</h3>
              <p className="text-blue-900/80 text-lg leading-relaxed mb-8">{selectedService.full}</p>
              <button className="px-6 py-3 bg-blue-800 text-white hover:bg-blue-900 rounded-md font-semibold inline-flex items-center gap-2 transition-all duration-300">
                Request Service Consultation <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/40 border-y border-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-blue-700 mb-3 font-semibold">Services 02</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Operational Service Flow</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processFlow.map((item) => (
              <article key={item.step} className="rounded-xl border border-blue-200 bg-white p-5">
                <p className="text-sm font-bold text-blue-700 mb-2">{item.step}</p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-900/80 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">Page Summary</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            End-to-End Products and Services, Built as One Delivery System.
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            Our products provide the physical foundation of your operations, while our services ensure efficient
            planning, execution, and continuous support. Together, they create a complete, dependable solution for
            complex industrial requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-4 py-2 rounded-full border border-white/30 bg-white/10 text-sm font-medium">Product Supply</span>
            <span className="px-4 py-2 rounded-full border border-white/30 bg-white/10 text-sm font-medium">Technical Services</span>
            <span className="px-4 py-2 rounded-full border border-white/30 bg-white/10 text-sm font-medium">Operational Support</span>
            <span className="px-4 py-2 rounded-full border border-white/30 bg-white/10 text-sm font-medium">Long-Term Partnership</span>
          </div>
          <button className="px-8 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2">
            Contact Our Team <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;
