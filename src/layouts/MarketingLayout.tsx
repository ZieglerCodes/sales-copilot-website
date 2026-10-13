import { Outlet } from "react-router";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollManager } from "../components/ScrollManager";

export function MarketingLayout() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <ScrollManager />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
