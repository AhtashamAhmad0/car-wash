import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import VehicleTypesPage from "./pages/VehicleTypesPage";
import PricingPage from "./pages/PricingPage";
import PackagesPage from "./pages/PackagesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import GalleryPage from "./pages/GalleryPage";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/vehicle-types" element={<VehicleTypesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
