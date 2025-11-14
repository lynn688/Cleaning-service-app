import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Sparkles, Drill } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Keep your home spotless with our comprehensive house cleaning services. From kitchens to bathrooms, we handle it all.",
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning. Maintain a pristine workplace that impresses clients and employees.",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Intensive cleaning for those hard-to-reach areas. Perfect for seasonal cleaning or moving in/out situations.",
    },
    {
      icon: Drill,
      title: "Specialized Services",
      description: "Carpet cleaning, window washing, and post-construction cleanup. We handle all your specialized cleaning needs.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
