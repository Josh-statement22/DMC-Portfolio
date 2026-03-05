import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const ui = {
    section: 'py-24 px-4 sm:px-6 lg:px-8',
    container: 'max-w-7xl mx-auto',
    eyebrow: 'text-xs uppercase tracking-[0.24em] text-black mb-4',
    eyebrowSection: 'text-sm sm:text-base uppercase tracking-[0.2em] text-black mb-4 font-semibold',
    heading: 'text-5xl sm:text-6xl font-bold text-blue-950 tracking-tight',
    headingSection: 'text-3xl sm:text-4xl font-bold text-blue-950 tracking-tight',
    primaryBtn:
      'px-8 py-3 bg-blue-800 text-white hover:bg-blue-900 rounded-md font-semibold inline-flex items-center gap-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    secondaryBtn:
      'px-6 py-3 border border-blue-200 text-blue-900 hover:bg-blue-50 rounded-md font-semibold inline-flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    card: 'rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300',
  };

  const heroSlides = [
    {
      type: 'image',
      src: '',
      alt: 'Industrial plant at sunset',
      eyebrow: 'D. Michael Co (DMC) Enterprises Corp',
      heading: 'Your Reliable Supply Partner for Critical Industries.',
      description: 'A growing company engaged in supplying and selling for construction, power plant, mining, and industrial operations.',
      glanceTitle: 'At a Glance',
      metrics: [
        { value: '500+', label: 'Major Projects Delivered' },
        { value: '98%', label: 'Client Satisfaction Rate' },
        { value: '15+', label: 'Years of Field Expertise' },
      ],
      panelNote: 'Built for mission-critical environments where safety, schedule, and performance matter.',
    },
    {
      type: 'video',
      src: 'https://cdn.coverr.co/videos/coverr-workers-walking-through-a-factory-1579/1080p.mp4',
      poster: '',
      eyebrow: 'Quality and Service Commitment',
      heading: 'Best Quality. Excellent Service. Great Reputation.',
      description: 'We insist on delivering top-grade products with reliable quality and responsive after-sales service.',
      glanceTitle: 'Operational Impact',
      metrics: [
        { value: '24/7', label: 'Field Operations Coverage' },
        { value: '120+', label: 'Specialized Engineers' },
        { value: '99.9%', label: 'Safety Compliance Focus' },
      ],
      panelNote: 'Disciplined execution standards for high-risk, high-value operations.',
    },
    {
      type: 'image',
      src: '',
      alt: 'Engineer inspecting large-scale infrastructure',
      eyebrow: 'Accreditation Support',
      heading: 'Complete Company Profile for Your Evaluation.',
      description: 'Access our product lines, business partner references, and legal documents for accreditation review.',
      glanceTitle: 'Engineering Value',
      metrics: [
        { value: '90+', label: 'Certified Specialists' },
        { value: '40%', label: 'Faster Project Turnaround' },
        { value: '30%', label: 'Average Cost Optimization' },
      ],
      panelNote: 'Precision planning that reduces risk before it reaches the field.',
    },
    {
      type: 'video',
      src: 'https://cdn.coverr.co/videos/coverr-engineer-checking-the-gauges-1575/1080p.mp4',
      poster: '',
      eyebrow: 'Long-Term Partnership',
      heading: 'Built to Grow with Your Operations.',
      description: 'We sincerely look forward to establishing a strong and lasting business relationship with your organization.',
      glanceTitle: 'Lifecycle Confidence',
      metrics: [
        { value: '25+', label: 'Years Asset Lifecycle Support' },
        { value: '85%', label: 'Repeat Enterprise Clients' },
        { value: '100%', label: 'Commitment to Quality Delivery' },
      ],
      panelNote: 'Partnerships focused on long-term value, not one-time delivery.',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const marketSectors = [
    {
      key: 'building',
      title: 'Construction',
      image: '',
      p1: 'We supply construction materials and equipment for civil, commercial, and industrial projects with dependable quality and schedule support.',
      p2: 'From groundwork to turnover requirements, our team ensures practical coordination, responsive service, and reliable product availability for continuous site progress.',
    },
    {
      key: 'industrial',
      title: 'Industrial Materials',
      image: '',
      p1: 'We provide industrial-grade materials and equipment suited for process plants, fabrication facilities, and production-critical operations.',
      p2: 'Our supply approach prioritizes durability, compliance, and after-sales support so your teams can maintain uptime and long-term operational performance.',
    },
    {
      key: 'infrastructure',
      title: 'Power-plant',
      image: '',
      p1: 'We support power-plant projects through reliable supply of essential materials and equipment for generation, maintenance, and plant upgrades.',
      p2: 'With quality-focused sourcing and responsive delivery coordination, we help plant teams reduce delays and sustain safe, stable operations.',
    },
    {
      key: 'mining',
      title: 'Mining',
      image: '',
      p1: 'Mining operations depend on durable equipment and dependable material supply under high-demand field conditions, and this is where DMC delivers.',
      p2: 'We provide mining-ready products with practical logistics support and committed after-sales service to help reduce downtime and protect productivity.',
    },
    {
      key: 'power',
      title: 'Automotive',
      image: '',
      p1: 'Our automotive line includes dependable parts, maintenance products, and workshop essentials for fleet and transport-related operations.',
      p2: 'We focus on consistent product quality and fast support so clients can keep vehicles and equipment in service-ready condition.',
    },
    {
      key: 'ppe',
      title: 'PPE',
      image: '',
      p1: 'We supply personal protective equipment that supports site safety standards across construction, industrial, power, and mining environments.',
      p2: 'From daily-use safety gear to specialized protective items, we deliver reliable PPE quality backed by responsive customer support.',
    },
  ];
  const productCategories = [
    {
      name: 'Heavy Machinery',
      image: '',
      useCase: 'Earthworks and heavy lifting',
      leadTime: '5-10 days',
    },
    {
      name: 'Structural Steel',
      image: '',
      useCase: 'Bridges and industrial frames',
      leadTime: '3-7 days',
    },
    {
      name: 'Industrial Valves',
      image: '',
      useCase: 'Flow control and safety systems',
      leadTime: '2-5 days',
    },
    {
      name: 'Process Piping',
      image: '',
      useCase: 'Plant and utility lines',
      leadTime: '4-8 days',
    },
     {
      name: 'Technological Equipment',
      image: '',
      useCase: 'Plant and utility lines',
      leadTime: '4-8 days',
    },
  ];
  const specializedServices = [
    {
      title: 'Bulk Logistics & Delivery',
      text: 'Coordinated transport planning for large-volume and time-critical materials.',
      image: '',
      placeholder: 'Integrated Logistics',
    },
    {
      title: 'Technical Consultation',
      text: 'Application-focused guidance to ensure fit, compliance, and performance.',
      image: '',
      placeholder: 'Engineering Advisory',
    },
    {
      title: 'Equipment Maintenance',
      text: 'Preventive and corrective support to maximize uptime and extend asset life.',
      image: '',
      placeholder: 'Lifecycle Support',
    },
    {
      title: 'Custom Fabrication',
      text: 'Tailored fabrication solutions aligned to your project specifications.',
      image: '',
      placeholder: 'Built-to-Spec Solutions',
    },
  ];
  const caseStudies = [
    {
      title: 'Visayas Bridge Expansion',
      supply: 'Supplied 5,000 tons of structural steel for a major transport corridor.',
      outcome: 'Delivered 5 days ahead of schedule.',
      image: '',
    },
    {
      title: 'Luzon Energy Upgrade',
      supply: 'Provided industrial valves and process lines for a utility modernization project.',
      outcome: 'Reduced commissioning delays by 18%.',
      image: '',
    },
    {
      title: 'Mindanao Mining Complex',
      supply: 'Delivered heavy equipment and on-site technical support for phase-one expansion.',
      outcome: 'Achieved zero critical delivery incidents.',
      image: '',
    },
  ];
  const partners = [
    {
      name: 'San Miguel',
      image: '',
    },
    {
      name: 'Ayala',
      image: '',
    },
    {
      name: 'Megawide',
      image: '',
    },
    {
      name: 'Aboitiz',
      image: '',
    },
    {
      name: 'DMCI',
      image: '',
    },
    {
      name: 'Meralco',
      image: '',
    },
    {
      name: 'JGC Philippines',
      image: '',
    },
    {
      name: 'EEI',
      image: '',
    },
  ];
  const trustHighlights = [
    'Top-Grade Products',
    'Reliable Quality',
    'After-Sales Service',
    'Accreditation-Ready Documents',
  ];
  const differentiators = [
    {
      title: 'Execution Discipline',
      value: '98%',
      detail: 'On-time milestone performance across managed project scopes.',
    },
    {
      title: 'Technical Depth',
      value: '120+',
      detail: 'Engineers and specialists supporting complex environments.',
    },
    {
      title: 'Mobilization Speed',
      value: '72 hrs',
      detail: 'Average deployment window for urgent operational requirements.',
    },
    {
      title: 'Quality Assurance',
      value: '100%',
      detail: 'Inspection-driven delivery process from planning to turnover.',
    },
  ];
  const legalCredentialSlots = [
    'SEC Registration',
    'BIR Certificate of Registration',
    'Business Permit',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const [activeSector, setActiveSector] = useState(marketSectors[0].key);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);

  const currentSlide = heroSlides[activeSlide];
  const selectedSector = marketSectors.find((sector) => sector.key === activeSector) || marketSectors[0];
  const carouselWindowSize = 3;
  const getVisibleItems = (items, startIndex) =>
    Array.from({ length: Math.min(carouselWindowSize, items.length) }, (_, index) => {
      const itemIndex = (startIndex + index) % items.length;
      return items[itemIndex];
    });
  const visibleServiceCards = getVisibleItems(specializedServices, activeServiceSlide);

  const goToNextServiceSlide = () => {
    setActiveServiceSlide((prev) => (prev + 1) % specializedServices.length);
  };
  const goToPrevServiceSlide = () => {
    setActiveServiceSlide((prev) => (prev - 1 + specializedServices.length) % specializedServices.length);
  };
  const sectionDivider = (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
      </div>
    </div>
  );

  return (
    <div className="bg-white text-blue-950 antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={`${slide.type}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'image' ? (
              <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
            ) : (
              <video
                className="h-full w-full object-cover"
                autoPlay={index === activeSlide}
                muted
                loop
                playsInline
                poster={slide.poster}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-blue-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/65 to-blue-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-28 sm:py-32">
          <div className="max-w-5xl mx-auto space-y-7 text-center">
              <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-slate-200 font-semibold">
                {currentSlide.eyebrow}
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.94] max-w-5xl mx-auto">
                {currentSlide.heading}
              </h1>
              <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                {currentSlide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-md font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-slate-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  Explore Solutions <ArrowRight size={20} />
                </Link>
              </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'w-10 bg-white' : 'w-5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to ${slide.type} slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="max-w-7xl mx-auto rounded-2xl border border-blue-200 bg-white shadow-lg p-5 sm:p-6">
          <div className="grid lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.18em] text-black font-semibold mb-2">Trusted by Industry Leaders</p>
              <p className="text-black/85 text-sm">Built for clients who require quality supply, reliable service, and long-term support.</p>
            </div>
            <div className="lg:col-span-8 flex flex-wrap gap-2.5">
              {trustHighlights.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-900 text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {sectionDivider}

      {/* 3. Why DMC */}
      <section className={`${ui.section} bg-white`}>
        <div className={ui.container}>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-5xl sm:text-6xl lg:text-7xl uppercase tracking-[0.06em] text-blue-800 font-black leading-none">WHY DMC?</p>
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 tracking-tight leading-[0.92]">
                Built for reliability when every delivery matters.
              </h2>
              <div className="mt-6 h-1.5 w-36 rounded-full bg-blue-700" />
              <div className="mt-8 space-y-5">
                {differentiators.map((item) => (
                  <div key={item.title}>
                    <p className="text-3xl sm:text-4xl font-extrabold text-blue-900">{item.value}</p>
                    <p className="text-sm uppercase tracking-[0.16em] text-black font-semibold mt-1">{item.title}</p>
                    <p className="text-black/85 leading-relaxed mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-blue-200">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80"
                  alt="DMC engineering and field execution"
                  className="h-[560px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-blue-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-white text-xs uppercase tracking-[0.16em] font-semibold mb-2">Execution Standard</p>
                  <p className="text-blue-100 leading-relaxed">
                    Disciplined planning, field-ready response, and quality-focused delivery from start to turnover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {sectionDivider}

      {/* 4. Featured Projects / Case Studies */}
      <section className={`${ui.section} bg-white`}>
        <div className={ui.container}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="pl-4 border-l-4 border-blue-500">
              <p className={ui.eyebrowSection}>Featured Projects / Contracts</p>
              <h2 className={`${ui.headingSection} max-w-3xl`}>
                Proven results on complex, high-stakes programs.
              </h2>
              <div className="mt-4 h-1 w-28 rounded-full bg-blue-700" />
            </div>
            <Link to="/finished-contracts" className={`self-start md:self-auto ${ui.secondaryBtn}`}>
              View Project Portfolio <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((project) => (
              <article key={project.title} className={`${ui.card} overflow-hidden`}>
                <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-950 mb-3">{project.title}</h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-black font-semibold mb-1">Challenge</p>
                  <p className="text-black/85 mb-3">{project.supply}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-black font-semibold mb-1">Result</p>
                  <p className="inline-flex items-center gap-2 text-emerald-700 font-semibold">
                    <CheckCircle2 size={16} />
                    {project.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {sectionDivider}

      {/* 5. Organizational Strength */}
      <section className={`${ui.section} bg-white`}>
        <div className={ui.container}>
          <div className="grid lg:grid-cols-12 gap-8">
            <article className="lg:col-span-7 rounded-2xl border border-blue-200 bg-white p-6 sm:p-8">
              <p className={ui.eyebrowSection}>Organizational Strength</p>
              <h2 className={ui.headingSection}>Leadership and governance built for accountability.</h2>
              <div className="mt-4 h-1 w-28 rounded-full bg-blue-700" />
              <p className="mt-5 text-black/85 leading-relaxed">
                View our full organizational structure and legal credentials to understand how DMC maintains
                disciplined operations, compliance, and delivery control.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/about" className={ui.primaryBtn}>
                  View Organizational Structure <ArrowRight size={18} />
                </Link>
                <Link to="/about" className={ui.secondaryBtn}>
                  View Company Profile
                </Link>
              </div>
            </article>

            <article className="lg:col-span-5 rounded-2xl border border-blue-200 bg-blue-50/40 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-black font-semibold mb-4">Legal Credentials</p>
              <div className="space-y-3">
                {legalCredentialSlots.map((item) => (
                  <div key={item} className="rounded-xl border border-blue-200 bg-white px-4 py-3 text-blue-950 font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
      {sectionDivider}

      {/* 6. Corporate Responsibility */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/50">
        <div className={ui.container}>
          <div className="grid lg:grid-cols-12 gap-8">
            <article className="lg:col-span-7 rounded-2xl border border-blue-200 bg-white p-6 sm:p-8">
              <p className={ui.eyebrowSection}>Corporate Responsibility</p>
              <h2 className={ui.headingSection}>Safe operations, responsible growth, long-term impact.</h2>
              <div className="mt-4 h-1 w-28 rounded-full bg-blue-700" />
              <p className="mt-5 text-black/85 leading-relaxed">
                Our responsibility framework puts safety, health, and environmental standards at the center of every
                project while promoting meaningful community participation.
              </p>
              <Link to="/corporate-responsibility" className="mt-6 inline-flex items-center gap-2 text-blue-800 font-semibold hover:text-blue-900">
                Explore Responsibility Framework <ArrowRight size={16} />
              </Link>
            </article>

            <article className="lg:col-span-5 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-950 to-blue-900 p-6 sm:p-8 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-blue-100/80 font-semibold mb-4">Core Values</p>
              <div className="flex flex-wrap gap-2">
                {['Quality', 'Customer Orientation', 'Flexibility', 'Transparency', 'Optimization'].map((value) => (
                  <span key={value} className="px-3 py-2 rounded-full border border-white/25 bg-white/10 text-sm font-medium">
                    {value}
                  </span>
                ))}
              </div>
              <Link to="/core-values" className="mt-6 inline-flex items-center gap-2 text-white font-semibold">
                Read Our Core Values <ArrowRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>
      {sectionDivider}

      {/* 7. Market Sectors */}
      <section className={`${ui.section} bg-blue-50/50`}>
        <div className={ui.container}>
          <div className="mb-10 pl-4 border-l-4 border-blue-500">
            <p className={ui.eyebrowSection}>Market Sectors / Industries We Serve</p>
            <h2 className={ui.headingSection}>Where we are built to deliver.</h2>
            <div className="mt-4 h-1 w-28 rounded-full bg-blue-700" />
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {marketSectors.map((sector) => (
              <button
                key={sector.key}
                type="button"
                onClick={() => setActiveSector(sector.key)}
                className={`px-5 py-2.5 rounded-full border transition-all ${
                  sector.key === activeSector
                    ? 'bg-blue-900 text-white font-semibold border-blue-900 shadow-md'
                    : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50 hover:text-blue-900 font-medium'
                }`}
              >
                {sector.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch transition-all duration-300">
            <div className="rounded-xl overflow-hidden border border-blue-200">
              <img
                src={selectedSector.image}
                alt={selectedSector.title}
                className="w-full h-full min-h-[320px] object-cover transition-transform duration-700 ease-out"
              />
            </div>

            <div className="rounded-xl border border-blue-200 bg-white p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">{selectedSector.title}</h3>
              <p className="text-black/85 leading-relaxed mb-4">{selectedSector.p1}</p>
              <p className="text-black/85 leading-relaxed mb-8">{selectedSector.p2}</p>
              <Link to="/finished-contracts" className={ui.primaryBtn}>
                View Projects <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {sectionDivider}

      {/* 8. Services & Specialization */}
      <section className={`${ui.section} bg-white`}>
        <div className={ui.container}>
          <div className="mb-10 lg:mb-12">
            <div className="pl-4 border-l-4 border-blue-500">
              <p className={ui.eyebrowSection}>Services & Expertise</p>
              <h2 className={ui.headingSection}>More than supply. We provide total project support.</h2>
              <div className="mt-4 h-1 w-28 rounded-full bg-blue-700" />
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={goToPrevServiceSlide}
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-blue-200 bg-white text-blue-900 hover:bg-blue-50 transition-colors inline-flex items-center justify-center shadow-md"
              aria-label="Previous services"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goToNextServiceSlide}
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-blue-200 bg-white text-blue-900 hover:bg-blue-50 transition-colors inline-flex items-center justify-center shadow-md"
              aria-label="Next services"
            >
              <ChevronRight size={18} />
            </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleServiceCards.map((service, index) => (
              <article key={`${service.title}-${activeServiceSlide}-${index}`} className={`${ui.card} overflow-hidden`}>
                <div className="relative w-full h-[360px] overflow-hidden group text-left">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-blue-200 via-blue-100 to-white" />
                  )}
                  <div className="absolute inset-0 transition-colors duration-300 bg-blue-950/40 group-hover:bg-blue-950/60" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-blue-100 text-xs uppercase tracking-[0.14em] mb-2">{service.placeholder}</p>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-blue-100/95 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.text}
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 bg-white/15 text-white group-hover:bg-white group-hover:text-blue-900">
                      View More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            {specializedServices.map((service, index) => (
              <button
                key={`service-dot-${service.title}`}
                type="button"
                onClick={() => setActiveServiceSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeServiceSlide ? 'w-8 bg-blue-800' : 'w-2 bg-blue-300 hover:bg-blue-400'
                }`}
                aria-label={`Show ${service.title}`}
              />
            ))}
          </div>
        </div>
      </section>
      {sectionDivider}

      {/* 9. Our Products */}
      <section className={`${ui.section} bg-white`}>
        <div className={ui.container}>
          <div className="mb-10 lg:mb-12">
            <div className="pl-4 border-l-4 border-blue-500">
              <p className={ui.eyebrowSection}>Our Products</p>
              <h2 className={ui.headingSection}>High-demand categories for industrial operations.</h2>
              <div className="mt-4 h-1 w-28 rounded-full bg-blue-700" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[260px]">
            {productCategories.map((item, index) => {
              const spanClass =
                index === 0
                  ? 'lg:col-span-5 lg:row-span-2'
                  : index === 1
                  ? 'lg:col-span-4'
                  : index === 2
                  ? 'lg:col-span-3'
                  : index === 3
                  ? 'lg:col-span-3'
                  : 'lg:col-span-4';

              return (
              <article key={item.name} className={`group relative overflow-hidden rounded-2xl border border-blue-200 shadow-sm ${spanClass}`}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-blue-200 via-blue-100 to-white" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-blue-100 text-xs uppercase tracking-[0.14em] mb-2">Product Category</p>
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-blue-100/95 text-sm leading-relaxed mb-4">
                    {item.useCase}. Typical lead time: {item.leadTime}.
                  </p>
                  <Link
                    to="/products-and-services"
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 bg-white/15 text-white group-hover:bg-white group-hover:text-blue-900"
                  >
                    View More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>
      {sectionDivider}

      {/* 10. Global and Local Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50/50 border-y border-blue-200">
        <div className={ui.container}>
          <div className="text-center mb-8">
            <p className={ui.eyebrowSection}>Global / Local Partners</p>
            <h2 className={ui.headingSection}>Trusted by leading organizations.</h2>
            <div className="mt-4 h-1 w-28 rounded-full bg-blue-700 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div key={partner.name} className="group relative h-32 rounded-xl overflow-hidden border border-blue-200">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-950/35 group-hover:bg-blue-950/20 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 px-3 py-2">
                  <p className="text-white text-sm font-semibold tracking-wide">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {sectionDivider}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-blue-100 font-semibold mb-4">Ready to Execute</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Begin your accreditation and sourcing process with DMC.
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Share your requirements and evaluation process. Our team will provide the needed profile, references, and legal documents for review.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-950 hover:bg-blue-50 rounded-md font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-white/60 hover:bg-white/10 rounded-md font-semibold inline-flex items-center gap-2 transition-colors"
            >
              View Capability Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

