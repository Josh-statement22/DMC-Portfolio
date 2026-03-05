import { useState } from "react";
import { ArrowRight, BarChart3, Building2, Settings, ShieldCheck, Wrench } from "lucide-react";

function Services() {
  const [active, setActive] = useState(1);

  const serviceCapabilities = [
    {
      id: 1,
      icon: <Building2 size={24} />,
      title: "Enterprise Solutions",
      short: "Scalable infrastructure and integrated business systems.",
      full: "We deliver structured enterprise solutions that support operational stability, growth, and long-term business continuity.",
    },
    {
      id: 2,
      icon: <Settings size={24} />,
      title: "Operations & Technical Services",
      short: "Comprehensive operational and technical support.",
      full: "Our team provides preventive support, technical execution assistance, and responsive field coordination aligned with project requirements.",
    },
    {
      id: 3,
      icon: <ShieldCheck size={24} />,
      title: "Compliance & Risk Management",
      short: "Governance-driven frameworks and regulatory alignment.",
      full: "We help clients improve compliance confidence through practical controls, clear documentation, and accountability-focused support.",
    },
    {
      id: 4,
      icon: <BarChart3 size={24} />,
      title: "Strategic Business Consulting",
      short: "Data-driven advisory and enterprise planning.",
      full: "We provide planning support to improve process performance, resource utilization, and execution reliability.",
    },
  ];

  const processFlow = [
    { step: "01", title: "Assessment", text: "Review of operational requirements, project scope, and service priorities." },
    { step: "02", title: "Planning", text: "Service strategy, resource alignment, and implementation timeline setup." },
    { step: "03", title: "Execution", text: "Coordinated service delivery with quality checks and reporting visibility." },
    { step: "04", title: "After-Sales Support", text: "Continuous follow-through support to sustain performance and reliability." },
  ];

  const selectedService = serviceCapabilities.find((service) => service.id === active) || serviceCapabilities[0];

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[75vh] flex items-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img src="" alt="Technical service operations" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-blue-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-blue-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-24 sm:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-5">
              <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold">Services</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.96] tracking-tight">
                Service Support Designed for Reliable Project Execution.
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl leading-relaxed">
                DMC supports clients with dependable technical services, structured implementation, and responsive
                after-sales assistance across critical operations.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/20 bg-blue-950/35 backdrop-blur-md p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100/80 mb-4">Service Commitment</p>
                <div className="space-y-3 text-blue-100">
                  <p>Best Quality Delivery Standards</p>
                  <p>Excellent Service and Coordination</p>
                  <p>Great Reputation through Trusted Support</p>
                </div>
              </div>
            </div>
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
                    <p className={`${isActive ? "text-blue-100" : "text-black/80"} text-sm`}>{service.short}</p>
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
              <p className="text-black/85 text-lg leading-relaxed mb-8">{selectedService.full}</p>
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
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Service Delivery Flow</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processFlow.map((item) => (
              <article key={item.step} className="rounded-xl border border-blue-200 bg-white p-5">
                <p className="text-sm font-bold text-blue-700 mb-2">{item.step}</p>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-black/85 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">Need Service Support?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Engage DMC for responsive and structured technical service execution.
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            Share your service scope and operational timeline. Our team will provide practical support options aligned with your requirements.
          </p>
          <button className="px-8 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2">
            Contact Service Team <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;

