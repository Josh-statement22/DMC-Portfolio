export default function ValuedClients() {
  const clients = [
    {
      name: "San Miguel Corporation",
      sector: "Manufacturing & Infrastructure",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Ayala Group",
      sector: "Property & Utilities",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Aboitiz Group",
      sector: "Power & Industrial",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "DMCI",
      sector: "Construction & Engineering",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Meralco",
      sector: "Energy Distribution",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Megawide",
      sector: "Infrastructure Delivery",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[62vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
          alt="Client partnership meeting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/55 to-blue-950/25" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-24">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">
            Projects
          </p>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
            Valued Clients
          </h1>
          <p className="mt-5 text-blue-100 text-lg sm:text-xl max-w-3xl">
            Trusted organizations we have supported through reliable project delivery and long-term partnerships.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {clients.map((client, index) => (
              <article
                key={client.name}
                className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 ${
                  index % 3 === 0 ? "h-[320px]" : "h-[250px]"
                }`}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-full w-full object-cover grayscale-[18%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/10 to-transparent group-hover:from-blue-950/90 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xl font-semibold">{client.name}</p>
                  <p className="text-blue-100/90 text-sm">{client.sector}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
