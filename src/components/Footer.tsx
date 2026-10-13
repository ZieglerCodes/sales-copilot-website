import { Link } from "react-router";

import { brand } from "../config/brand";
import { BrandMark } from "./BrandMark";

const productLinks = [
  { label: "Features", to: "/#features" },
  { label: "How It Works", to: "/#how-it-works" },
  { label: "Pricing", to: "/pricing" },
];

const companyLinks = [
  { label: "Support", to: "/support" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080e18] px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <BrandMark className="h-9 w-9" />
            <span className="font-semibold text-white">{brand.name}</span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
            Private real-time AI coaching built to help salespeople understand what is happening and decide what to say next while the conversation is still happening.
          </p>

          <p className="mt-5 text-xs text-slate-600">Windows desktop application in development.</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Product</p>
          <div className="mt-4 flex flex-col gap-3">
            {productLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-slate-500 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <div className="mt-4 flex flex-col gap-3">
            {companyLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-slate-500 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <span>AI-generated guidance should be independently evaluated.</span>
      </div>
    </footer>
  );
}
