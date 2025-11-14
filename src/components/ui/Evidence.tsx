import { Card, CardContent } from "@/components/ui/card";
import { Award, ShieldCheck, Users, Star } from "lucide-react";

const Evidence = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISSA Certified",
      description: "International Sanitary Supply Association",
    },
    {
      icon: ShieldCheck,
      title: "Eco-Friendly",
      description: "Green Cleaning Certified",
    },
    {
      icon: Users,
      title: "BBB Accredited",
      description: "A+ Rating Since 2015",
    },
    {
      icon: Star,
      title: "Industry Leader",
      description: "Member of National Cleaning Association",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Memberships</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted credentials that demonstrate our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <cert.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evidence;
