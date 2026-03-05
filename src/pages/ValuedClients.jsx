export default function ValuedClients() {
  const privateImages = import.meta.glob("../assets/img/Private/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
    eager: true,
    import: "default",
  });
  const governmentImages = import.meta.glob("../assets/img/Government/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
    eager: true,
    import: "default",
  });

  const formatClientName = (path) => {
    const filename = path.split("/").pop() || "";
    const base = filename.replace(/\.[^/.]+$/, "");
    return base
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const buildClientList = (imageMap, category) =>
    Object.entries(imageMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([path, image]) => ({
        name: formatClientName(path),
        category,
        image,
      }));

  const privateClients = buildClientList(privateImages, "Private Client");
  const governmentClients = buildClientList(governmentImages, "Government Client");

  const renderClientShowcase = (title, subtitle, clients, sectionClassName = "") => {
    return (
      <section className={sectionClassName}>
        <div className="mb-6 sm:mb-7 flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-blue-200 bg-blue-50 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-blue-700" />
            <p className="text-xs uppercase tracking-[0.2em] text-black font-semibold">Client Portfolio</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">{title}</h2>
          <div className="h-1.5 w-24 rounded-full bg-blue-700" />
          <p className="text-black/80 max-w-3xl">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {clients.map((client) => {
            const isHammerHead = client.name.toLowerCase().includes("hammer head");
            return (
              <article
                key={client.name}
                className="rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-[145px] sm:h-[160px] p-3 sm:p-4 flex items-center justify-center">
                  <img
                    src={client.image}
                    alt={client.name}
                    className={`h-full w-full object-contain ${
                      isHammerHead
                        ? "contrast-125 brightness-110 saturate-125 drop-shadow-sm scale-[1.02]"
                        : "contrast-110 saturate-105"
                    }`}
                  />
                </div>
                <div className="p-3 sm:p-4 border-t border-blue-100">
                  <p className="text-blue-950 font-semibold text-base sm:text-lg leading-snug">{client.name}</p>
                  <p className="text-black/80 text-sm">{client.category}</p>
                </div>
              </article>
            );
          })}
          </div>
      </section>
    );
  };

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[52vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950">
        <div className="absolute inset-0 bg-blue-950/30" />
        <div className="max-w-7xl mx-auto w-full py-16 sm:py-20">
          <p className="relative z-10 uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">Projects</p>
          <h1 className="relative z-10 text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
            Valued Clients
          </h1>
          <p className="relative z-10 mt-5 text-blue-100 text-lg sm:text-xl max-w-3xl">
            A showcase of organizations we support through reliable delivery and long-term trust.
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

