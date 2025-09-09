import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import AboutSection from "./components/AboutSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <main className="min-h-screen overflow-x-hidden">
              <div id="hero">
                <HeroSection />
              </div>
              <AboutSection />
              <Portfolio />
              <div id="social">
                <SocialMedia />
              </div>
              <ContactForm />
              <Footer />
              <ScrollToTop />
            </main>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
