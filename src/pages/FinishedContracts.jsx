import { useEffect, useState } from "react";

export default function FinishedContracts() {
  const projects = [
    {
      id: 1,
      client: "San Miguel",
      project: "Bulk Terminal Expansion",
      segment: "Infrastructure",
      description:
        "Delivered structural and mechanical scopes for a high-capacity terminal expansion with strict safety and scheduling controls.",
      cover: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
    {
      id: 2,
      client: "Aboitiz",
      project: "Power Plant Retrofit",
      segment: "Power",
      description:
        "Implemented retrofit works for critical plant systems to improve reliability, maintainability, and performance.",
      cover: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
    {
      id: 3,
      client: "DMCI",
      project: "Bridge Structural Works",
      segment: "Infrastructure",
      description:
        "Completed structural reinforcement and steel integration packages for a major bridge modernization contract.",
      cover: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
    {
      id: 4,
      client: "Meralco",
      project: "Grid Upgrade Package",
      segment: "Power",
      description:
        "Executed phased grid upgrade activities with minimal downtime and full compliance with utility standards.",
      cover: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
    {
      id: 5,
      client: "EEI",
      project: "Industrial Piping Works",
      segment: "Industrial",
      description:
        "Delivered complete piping system installation for process lines, including supports, valves, and commissioning support.",
      cover: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
    {
      id: 6,
      client: "JGC Philippines",
      project: "Process Facility Buildout",
      segment: "Industrial",
      description:
        "Supported end-to-end facility buildout from civil interfaces to mechanical completion and turnover readiness.",
      cover: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
    {
      id: 7,
      client: "Ayala",
      project: "Mixed-Use Utility Works",
      segment: "Commercial",
      description:
        "Delivered utility and systems installation across a mixed-use development with tight interface coordination.",
      cover: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
    {
      id: 8,
      client: "Megawide",
      project: "Transport Corridor Package",
      segment: "Infrastructure",
      description:
        "Completed core transport corridor scopes with controlled sequencing and high field productivity standards.",
      cover: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
  ];
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const filters = ["All", ...new Set(projects.map((item) => item.segment))];
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((item) => item.segment === activeFilter);
  const openProject = (project) => {
    setSelectedProject(project);
    setActiveSlide(0);
  };
  const closeProject = () => setSelectedProject(null);
  const nextSlide = () => {
    if (!selectedProject) return;
    setActiveSlide((prev) => (prev + 1) % selectedProject.gallery.length);
  };
  const prevSlide = () => {
    if (!selectedProject) return;
    setActiveSlide((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedProject) return;
      if (event.key === "Escape") closeProject();
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[65vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src=""
          alt="Completed industrial construction project"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/55 to-blue-950/25" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-24">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">
            Projects
          </p>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
            Finished Contracts
          </h1>
          <p className="mt-5 text-blue-100 text-lg sm:text-xl max-w-3xl">
            A visual gallery of completed client projects and delivered contracts.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-blue-800 border-blue-800 text-white"
                    : "bg-white border-blue-200 text-blue-800 hover:bg-blue-50"
                }`}
              >
                {filter}
              </button>
            ))}
            <p className="text-sm text-blue-800/80 ml-auto">{filteredProjects.length} projects shown</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openProject(item)}
                className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.cover}
                    alt={`${item.client} - ${item.project}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-blue-950/10 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-blue-900 text-xs font-semibold">
                    {item.segment}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-lg font-bold text-blue-950">{item.client}</p>
                  <p className="text-blue-800 font-medium">{item.project}</p>
                  <p className="text-sm text-blue-900/80 mt-2 line-clamp-2">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[70] bg-blue-950/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white">
            <button
              type="button"
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-md bg-white/90 text-blue-900 text-sm font-semibold hover:bg-white transition-colors"
            >
              Close
            </button>
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-8 relative bg-blue-950">
                <img
                  src={selectedProject.gallery[activeSlide]}
                  alt={`${selectedProject.client} - slide ${activeSlide + 1}`}
                  className="w-full h-[52vh] sm:h-[62vh] object-cover"
                />
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-blue-900 font-bold hover:bg-white transition-colors"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-blue-900 font-bold hover:bg-white transition-colors"
                  aria-label="Next slide"
                >
                  ›
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.gallery.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeSlide === index ? "w-7 bg-white" : "w-2 bg-white/60 hover:bg-white/90"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-700 font-semibold mb-3">{selectedProject.segment}</p>
                <h2 className="text-2xl font-bold text-blue-950 mb-2">{selectedProject.client}</h2>
                <p className="text-blue-800 font-semibold mb-4">{selectedProject.project}</p>
                <p className="text-blue-900/80 leading-relaxed mb-6">{selectedProject.description}</p>
                <div className="grid grid-cols-3 gap-2">
                  {selectedProject.gallery.map((image, index) => (
                    <button
                      key={`thumb-${index}`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`overflow-hidden rounded-md border ${
                        activeSlide === index ? "border-blue-700" : "border-blue-200"
                      }`}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="h-16 w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
