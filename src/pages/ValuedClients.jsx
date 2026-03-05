export default function ValuedClients() {
  const privateClients = [
    {
      name: "San Miguel Corporation",
      category: "Manufacturing & Infrastructure",
      image: "",
    },
    {
      name: "Ayala Group",
      category: "Property & Utilities",
      image: "",
    },
    {
      name: "Aboitiz Group",
      category: "Power & Industrial",
      image: "",
    },
    {
      name: "DMCI",
      category: "Construction & Engineering",
      image: "",
    },
    {
      name: "Meralco",
      category: "Energy Distribution",
      image: "",
    },
    {
      name: "Megawide",
      category: "Infrastructure Delivery",
      image: "",
    },
  ];

  const governmentClients = [
    {
      name: "Department of Public Works and Highways",
      category: "National Infrastructure",
      image: "",
    },
    {
      name: "Department of Transportation",
      category: "Transport Systems",
      image: "",
    },
    {
      name: "Department of Energy",
      category: "Energy Programs",
      image: "",
    },
    {
      name: "Philippine Ports Authority",
      category: "Port Development",
      image: "",
    },
    {
      name: "Bases Conversion and Development Authority",
      category: "Urban Development",
      image: "",
    },
    {
      name: "Local Government Units",
      category: "Community Facilities",
      image: "",
    },
  ];

  const renderClientShowcase = (title, subtitle, clients, sectionClassName = "") => {
    return (
      <section className={sectionClassName}>
        <div className="mb-6 sm:mb-7 flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold">Client Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 tracking-tight">{title}</h2>
          <p className="text-blue-900/75 max-w-3xl">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {clients.map((client) => (
            <article
              key={client.name}
              className="group relative h-[230px] sm:h-[250px] overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm"
            >
              <img
                src={client.image}
                alt={client.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/25 to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 p-4 sm:p-5">
                <p className="text-white font-semibold text-lg leading-snug">{client.name}</p>
                <p className="text-blue-100/95 text-sm">{client.category}</p>
              </div>
            </article>
          ))}
          </div>
      </section>
    );
  };

  return (
    <div className="bg-slate-50 text-blue-950">
      <section className="relative min-h-[58vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <img
          src=""
          alt="Client partnership meeting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-blue-950/25" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-20 sm:py-24">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">Projects</p>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
            Valued Clients
          </h1>
          <p className="mt-5 text-blue-100 text-lg sm:text-xl max-w-3xl">
            A modern showcase of organizations we support through reliable delivery and long-term trust.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          {renderClientShowcase(
            "Valued Private Clients",
            "A snapshot of private-sector partners across industrial, infrastructure, and utility projects.",
            privateClients,
            "pb-7 sm:pb-8 border-b border-blue-100"
          )}

          {renderClientShowcase(
            "Valued Government Clients",
            "Public institutions and agencies we have supported in national and local development initiatives.",
            governmentClients,
            "pt-7 sm:pt-8"
          )}
        </div>
      </section>
    </div>
  );
}
