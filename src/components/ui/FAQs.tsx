import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We serve the entire metropolitan area and surrounding suburbs within a 50-mile radius. Contact us to confirm service availability in your specific location.",
    },
    {
      question: "Are your cleaning products safe?",
      answer: "Yes! We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. We can also accommodate special requests for specific product preferences.",
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing varies based on the size of your space and the type of service needed. We offer free quotes and competitive pricing. Contact us for a personalized estimate.",
    },
    {
      question: "Do I need to be home during cleaning?",
      answer: "No, you don't need to be present. Many clients provide us with access instructions. All our staff are bonded and insured for your peace of mind.",
    },
    {
      question: "How do I schedule a cleaning?",
      answer: "You can schedule online, call us, or request a free quote through our website. We offer flexible scheduling including same-day service when available.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with any aspect of our service, contact us within 24 hours and we'll make it right.",
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
