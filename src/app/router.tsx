import { Route, Routes } from "react-router";

import { MarketingLayout } from "../layouts/MarketingLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PricingPage from "../pages/PricingPage";
import PrivacyPage from "../pages/PrivacyPage";
import SupportPage from "../pages/SupportPage";
import TermsPage from "../pages/TermsPage";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
