import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Courses } from "@/components/site/courses";
import { About } from "@/components/site/about";
import { Faculty } from "@/components/site/faculty";
import { Toppers } from "@/components/site/toppers";
import { Testimonials } from "@/components/site/testimonials";
import { ContactAndFaq } from "@/components/site/ContactAndFaq";
import { Footer } from "@/components/site/footer";
import FloatingContact from "@/components/site/floatingcontact"; 

import { Toaster as SonnerToaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <About />
        <Faculty />
        <Toppers />
        <Testimonials />
        <ContactAndFaq />
      </main>
      <Footer />
      
      {/* 2. Placed the Floating Contact component here so it remains permanently active over all sections */}
      <FloatingContact />
      
      <Toaster position="top-center" richColors />
    </div>
  );
}