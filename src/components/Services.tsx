import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Sparkles } from "lucide-react";
import residentialIcon from "@/assets/residential-icon.jpg"
import commercialIcon from "@/assets/commercial-icon.jpg"; 
import deepCleanIcon from "@/assets/deep-clean-icon.jpg";

const homeServices = [
  {
    title: " Home Cleaning ",
    description: "Keep your home spotless with our comprehensive residential cleaning services.",
    image: residentialIcon,
     features: [
      "Weekly/Bi-weekly options",
      "All rooms covered",
      "Eco-friendly products" 
    ],
    pricing: [
      "Sofa Cleaning – KES 800 per seat",
      "Carpet Cleaning –  KES 20 per foot",
      "Matress cleaning –  KES 3000" 
    ]
  },
   {
    title: "Commercial Cleaning",
    image: commercialIcon,
    description:"Elevate your workspace with thorough, reliable commercial cleaning tailored to your business needs.",
    features: [
      "Flexible scheduling",
      "Trained staff",
      "High-traffic areas"
    ],
    pricing: [
     
  "Office chairs –  KES 300 per seat",
  " 1 Window – 1st floor & above: KES 300",
  " 1 Window – Ground floor: KES 200",
  " 2 terrazzo – polish and restoration: KES 150 per Metre",
  " 3 cabros : KES 100 per Metre"



    ]
  } ,
   {
    title: "Car  Cleaning",
    description: "Clean inside, shine outside.comprehensive car cleaning made easy and efficient.",
    image: deepCleanIcon,
    features: [
      "Seats deep cleaned",
      "Floor mats scrubbed",
      "Dashboard polished"
    ],
    pricing: [
      "Car detailing - kes.4,500",
      "Normal wash - kes.300",
      "Engine wash - kes.400",
      "Under wash - kes.300",
      "Baffling - kes.3,500",
      "Dashboard polishing - kes.200",
      "Wax polishing - kes.300",
      "Dashboard/Doors & Leather restoration - kes.1,500"
    ]
    
  }, 
];

/* const carServices = [
  {
    title: "Car Interior Cleaning",
    description: "Detailed vacuuming, dashboard polishing, stain removal & more.",
    image: deepCleanIcon,
    features: [
      "Hand wash",
      "Wax finish",
      "Rim + tire shine"
    ],
    pricing: [
      "Sedan – KES 400",
      "SUV – KES 600"
    ]
  },
  {
    title: "Car Exterior Cleaning",
    description: "Professional hand wash, waxing and shine finish.",
    image: deepCleanIcon,
    features: [
      "Hand wash",
      "Wax finish",
      "Rim + tire shine"
    ],
    pricing: [
      "Sedan – KES 400",
      "SUV – KES 600"
    ]
  }
];
 */
const ServiceGroup = ({ title, services }) => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {title}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card
           
  key={index}
  className="relative group border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
>
  {/* --- ALWAYS VISIBLE CONTENT --- */}
  <div className="p-4">
    <div className="w-full h-48 md:h-60 overflow-hidden rounded-t-lg">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </div>

    <h3 className="text-2xl font-bold">{service.title}</h3>
    <p className="text-muted-foreground">{service.description}</p>
    <ul className="space-y-2 mb-4"> {service.features.map((feature, idx) => ( <li key={idx} className="flex items-center gap-2"> <Sparkles className="h-4 w-4 text-primary" /> <span>{feature}</span> </li> ))} </ul>
  </div>

  {/* --- HOVER CONTENT --- */}
  <div className="
      absolute inset-0 bg-black/80 text-white p-6 
      opacity-0 group-hover:opacity-100 
      transition-all duration-300 
      flex flex-col justify-center
    "
  >
    {/* Features */}
   {/*  <ul className="space-y-2 mb-4">
      {service?.features?.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>{feature}</span>
        </li>
      ))}
    </ul> */}

    {/* Pricing */}
    <div className="mt-4">
      <h4 className="text-2xl font-bold mb-3 border-b-2 border-blue-400 inline-block pb-1">Pricing</h4>
      <ul className="space-y-2">
      {service?.pricing?.map((price, pIndex) => (
        <li
        key={pIndex} className="
          bg-blue-100 
          text-blue-800 
          font-bold 
          px-4 py-2 
          rounded-lg 
          shadow-sm
          list-disc
          list-inside
        ">
          {price}
       </li>
      ))}
       </ul>
    </div>
  </div>


          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  return (
    <>
      <ServiceGroup 
        title="Our Cleaning Services" 
        services={homeServices} 
      />

     {/*  <ServiceGroup 
        title="Car Cleaning Services" 
        services={carServices} 
      /> */}
    </>
  );
};

export default Services;


