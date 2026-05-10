const highlights = [
  {
    title: "Executive Pickup Experience",
    text: "Premium vehicles, professional chauffeurs, and discreet service for every ride.",
  },
  {
    title: "Instant Booking Control",
    text: "Set pickup, duration, and preferred class in seconds with transparent status tracking.",
  },
  {
    title: "Concierge Response Desk",
    text: "Reach a dedicated concierge line for urgent itinerary changes, airport delays, and priority guest coordination.",
  },
];

const fleet = [
  { name: "Mercedes-Benz S-Class", type: "Flagship Sedan", rate: "from N 120,000" },
  { name: "Range Rover Autobiography", type: "Luxury SUV", rate: "from N 160,000" },
  { name: "Toyota Land Cruiser VXR", type: "Executive SUV", rate: "from N 135,000" },
];

const Home = () => {
  return (
    <div className="w-full bg-concierge-black">
      <div className="bg-[radial-gradient(circle_at_12%_18%,rgba(219,170,90,0.22),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(99,113,141,0.22),transparent_32%),#0C0E12] py-10 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 xl:px-12">
          <section className="relative overflow-hidden rounded-3xl border border-concierge-gold/35 bg-[rgba(18,21,28,0.9)] p-7 shadow-luxe md:p-10">
            <img src="/luxe-grain.svg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-25" />
            <img src="/luxe-ornament.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 top-4 hidden w-40 opacity-70 md:block" />
            <span className="mb-4 inline-flex rounded-full bg-concierge-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-concierge-gold">
              Thrip Concierge
            </span>
            <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight text-concierge-ivory md:text-6xl">
              Luxury car concierge for airport runs, city transfers, and executive mobility.
            </h1>
            <p className="mb-6 max-w-3xl text-lg text-concierge-slate">
              Designed for premium guests and corporate teams who want high-comfort rides with reliable payment and dispatch operations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/app/thrip"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black px-4 py-2.5 text-white transition hover:bg-neutral-900"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-normal">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-concierge-gold/25 bg-[rgba(18,21,28,0.88)] p-5">
                <h2 className="mb-2 text-lg font-semibold text-concierge-ivory">{item.title}</h2>
                <p className="text-concierge-slate">{item.text}</p>
              </article>
            ))}
          </section>

          <section className="relative overflow-hidden rounded-2xl border border-concierge-gold/25 bg-[rgba(18,21,28,0.88)] p-6 md:p-8">
            <img src="/luxe-grain.svg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-15" />
            <p className="mb-2 font-semibold text-concierge-gold">Fleet Highlights</p>
            <div className="grid gap-4 md:grid-cols-3">
              {fleet.map((item) => (
                <article key={item.name} className="rounded-xl border border-white/10 p-4">
                  <img src="/luxe-stars.svg" alt="" aria-hidden="true" className="mb-2 w-14 opacity-80" />
                  <h3 className="mb-1 text-base font-semibold text-concierge-ivory">{item.name}</h3>
                  <p className="mb-2 text-concierge-slate">{item.type}</p>
                  <p className="font-semibold text-concierge-gold">{item.rate}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4 rounded-2xl border border-concierge-gold/25 bg-concierge-charcoal p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h3 className="mb-1 text-xl font-semibold text-concierge-ivory">Need immediate assistance for premium guest movements?</h3>
              <p className="text-concierge-slate">Download the Thrip app for white-glove booking, urgent updates, and executive ride continuity.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/app/thrip"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-white transition hover:bg-neutral-900 border border-white/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-normal">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
