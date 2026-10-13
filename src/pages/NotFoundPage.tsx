import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

import { PageMeta } from "../components/PageMeta";
import { brand } from "../config/brand";

export default function NotFoundPage() {
  return (
    <>
      <PageMeta title={`Page Not Found | ${brand.name}`} description="The requested Sales Copilot page could not be found." />

      <main className="flex min-h-[75vh] items-center px-5 pb-24 pt-36 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">This page isn't part of the playbook.</h1>
          <p className="mt-5 leading-7 text-slate-400">The page you requested doesn't exist or has moved.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Return Home
          </Link>
        </div>
      </main>
    </>
  );
}
