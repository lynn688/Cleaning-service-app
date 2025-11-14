import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  const features = [
    {
      emoji: "⭐",
      title: "15+ Years Experience",
      description: "Over a decade of professional cleaning excellence",
    },
    {
      emoji: "🏆",
      title: "Certified Professionals",
      description: "Trained and vetted cleaning experts",
    },
    {
      emoji: "🤝",
      title: "Trusted by 1000+",
      description: "Satisfied clients across the region",
    },
    {
      emoji: "💯",
      title: "100% Satisfaction",
      description: "Guaranteed quality or your money back",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering exceptional cleaning services that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-6xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
