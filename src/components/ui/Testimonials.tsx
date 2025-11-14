import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Absolutely fantastic service! The team was professional, thorough, and my home has never looked better. Highly recommend!",
    },
    {
      name: "Michael Chen",
      rating: 5,
      review: "We've been using SparkleClean for our office for over a year. Consistently excellent work and very reliable.",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      review: "The deep cleaning service exceeded my expectations. Every corner was spotless. Will definitely use them again!",
    },
    {
      name: "David Thompson",
      rating: 5,
      review: "Professional, friendly, and affordable. The best cleaning service I've ever used. Five stars all the way!",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
                <p className="font-semibold text-foreground">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
