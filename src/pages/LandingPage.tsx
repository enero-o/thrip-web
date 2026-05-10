import { Link } from "react-router-dom";
import routes from "../routes";

const features = [
  {
    title: "Airport Concierge Transfers",
    description: "Private pickup coordination, flight-aware dispatch, and premium comfort from arrival gate to destination.",
  },
  {
    title: "Chauffeur Operations",
    description: "Live route visibility and immediate reassignment support for executive mobility teams.",
  },
  {
    title: "Secure Transfer Verification",
    description: "Capture proof of payment, review confirmation status, and keep every guest journey transparent.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_16%_14%,rgba(219,170,90,0.18),transparent_32%),radial-gradient(circle_at_84%_20%,rgba(92,108,140,0.2),transparent_30%),#0C0E12] py-10 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 xl:px-12">
        <section className="relative overflow-hidden rounded-3xl border border-concierge-gold/35 bg-[rgba(16,19,26,0.9)] p-8 shadow-luxe md:p-12">
          <img src="/luxe-grain.svg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-30" />
          <img src="/luxe-ornament.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -right-8 top-5 hidden w-44 opacity-70 md:block" />
          <img src="/luxe-stars.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -left-5 bottom-6 hidden w-24 opacity-70 md:block" />
          <span className="inline-flex rounded-full bg-concierge-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-concierge-gold">
            Thrip Luxury Fleet
          </span>
          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.08em]">
            <span className="rounded-full border border-concierge-gold/45 px-3 py-1 text-concierge-ivory">White-Glove Service</span>
            <span className="rounded-full border border-concierge-gold/45 px-3 py-1 text-concierge-ivory">Priority Call Desk</span>
            <span className="rounded-full border border-concierge-gold/45 px-3 py-1 text-concierge-ivory">Corporate Accounts</span>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-concierge-ivory md:text-6xl">
            High-touch car concierge for executives, delegations, and premium guests.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-concierge-slate">
            Deliver seamless booking, payment verification, and real-time chauffeur dispatch from one polished mobility platform.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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
            <Link to={routes.termsOfService} className="rounded-md border border-concierge-gold px-5 py-3 text-sm font-semibold text-concierge-gold transition hover:bg-concierge-gold/10">
              Terms of Service
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <article key={item.title} className="relative overflow-hidden rounded-2xl border border-concierge-gold/25 bg-[rgba(16,19,26,0.9)] p-6">
              <img src="/luxe-grain.svg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-20" />
              <img src="/luxe-stars.svg" alt="" aria-hidden="true" className="mb-3 w-16 opacity-80" />
              <h2 className="mb-2 text-lg font-semibold text-concierge-ivory">{item.title}</h2>
              <p className="text-concierge-slate">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-concierge-gold/25 bg-concierge-charcoal p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="mb-2 text-2xl font-semibold text-concierge-ivory">Review our service terms and data protections.</h3>
            <p className="text-concierge-slate">Read how Thrip handles bookings, privacy, and intellectual property across every concierge request.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to={routes.privacyPolicy} className="w-fit rounded-md bg-concierge-gold px-5 py-3 text-sm font-semibold text-concierge-black transition hover:bg-concierge-gold-hover">
              Privacy Policy
            </Link>
            <Link to={routes.copyright} className="w-fit rounded-md border border-concierge-gold px-5 py-3 text-sm font-semibold text-concierge-gold transition hover:bg-concierge-gold/10">
              Copyright
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
