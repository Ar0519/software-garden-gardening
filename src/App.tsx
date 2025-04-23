import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import MaintenanceTypes from "./pages/MaintenanceTypes";
import GardenProcess from "./pages/GardenProcess";
import GardenStories from "./pages/GardenStories";
import AskTheGardener from "./pages/AskTheGardener";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/maintenance-types" element={<MaintenanceTypes />} />
              <Route path="/garden-process" element={<GardenProcess />} />
              <Route path="/garden-stories" element={<GardenStories />} />
              <Route path="/ask-the-gardener" element={<AskTheGardener />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
