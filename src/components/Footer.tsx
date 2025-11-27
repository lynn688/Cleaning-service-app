import { Sparkles, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="text-xl font-bold">SparkleClean</span>
            </div>
            <p className="text-background/80">
              Professional cleaning services you can trust. Making homes and offices shine since 2020.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-background transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#booking" className="text-background/80 hover:text-background transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>hello@sparkleclean.com</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>123 Clean St, City</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Business Hours</h3>
            <ul className="space-y-2 text-background/80">
              <li>Monday - Friday: 8AM - 6PM</li>
              <li>Saturday: 9AM - 4PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 SparkleClean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
