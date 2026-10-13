import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

import { brand } from "../config/brand";
import { BrandMark } from "./BrandMark";

const links = [
  { label: "Features", to: "/#features" },
  { label: "How It Works", to: "/#how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/#faq" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <BrandMark />
          <div>
            <div className="text-base font-bold tracking-tight text-white">{brand.name}</div>
            <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">
              Real-Time Sales Intelligence
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/#early-access"
            className="rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Get Early Access
          </Link>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-midnight px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-slate-200"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/#early-access"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-brand px-4 py-3 text-center font-semibold text-white"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
