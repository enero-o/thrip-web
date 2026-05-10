import { instagramUrl } from "@thrip/appUrls";
import routes from "@thrip/routes";
import { Link } from "react-router-dom";

const leftNavigationData = [
  { text: "Home", link: routes.home },
  { text: "Landing", link: routes.landing },
];

const rightNavigationData = [
  { text: "Terms of Service", link: routes.termsOfService },
  { text: "Privacy Policy", link: routes.privacyPolicy },
  { text: "Copyright", link: routes.copyright },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-concierge-gold/20 bg-concierge-black px-4 py-12 md:px-16">
      <img src="/luxe-grain.svg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-20" />
      <img src="/luxe-ornament.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -left-10 top-3 hidden w-52 opacity-50 md:block" />
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.12em] text-concierge-slate/70">Concierge Navigation</p>
          <div className="grid grid-cols-2 gap-8">
            <ul className="space-y-2">
              {leftNavigationData.map(({ text, link }) => (
                <li key={text}>
                  <Link to={link} onClick={scrollToTop} className="text-sm text-concierge-ivory/85 transition hover:text-concierge-gold">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {rightNavigationData.map(({ text, link }) => (
                <li key={text}>
                  <Link to={link} onClick={scrollToTop} className="text-sm text-concierge-ivory/85 transition hover:text-concierge-gold">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 md:text-right">
          <p className="text-xs uppercase tracking-[0.12em] text-concierge-slate/70">Contact</p>
          <p className="text-xs uppercase tracking-[0.12em] text-concierge-gold/80">Thrip Concierge Co.</p>
          <p className="text-concierge-ivory">concierge@thrip.app</p>
          <p className="text-sm text-concierge-slate">+234 800 THRIP VIP</p>
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
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-concierge-gold hover:text-[#f1c67e]">
            <img src="/instagram.svg" alt="Instagram" className="h-5 w-5" />
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <img src="/luxe-stars.svg" alt="" aria-hidden="true" className="w-24 opacity-80" />
        <p className="text-center text-xs text-concierge-slate/70">© {currentYear} Thrip Concierge Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
