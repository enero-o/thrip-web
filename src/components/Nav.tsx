import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "@thrip/icons/logo";
import routes from "@thrip/routes";

const navItems = [
  { title: "Home", link: routes.home },
  { title: "Landing", link: routes.landing },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-concierge-gold/20 bg-concierge-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 xl:px-12">
        <div className="flex items-center gap-8">
          <Link to={routes.home}>
            <Logo />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link key={item.title} to={item.link} className="text-sm font-medium text-concierge-slate transition hover:text-concierge-ivory">
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to={routes.landing} className="text-sm font-medium text-concierge-slate transition hover:text-concierge-ivory">
            Fleet
          </Link>
          <a href="https://apps.apple.com/app/thrip" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black px-3 py-1.5 text-white transition hover:bg-neutral-900">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[9px] font-normal">Download on the</span>
              <span className="text-xs font-semibold">App Store</span>
            </span>
          </a>
        </div>

        <button
          type="button"
          className="rounded border border-concierge-gold/40 p-2 text-concierge-slate lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-concierge-gold/15 bg-concierge-charcoal px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.title} to={item.link} className="rounded px-2 py-2 text-concierge-slate hover:bg-white/5 hover:text-concierge-ivory">
                {item.title}
              </Link>
            ))}
            <a href="https://apps.apple.com/app/thrip" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-black px-4 py-2.5 text-white transition hover:bg-neutral-900">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[9px] font-normal">Download on the</span>
                <span className="text-xs font-semibold">App Store</span>
              </span>
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Nav;
