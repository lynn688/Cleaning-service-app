import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Evidence from "@/components/Evidence";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Evidence />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Index;
