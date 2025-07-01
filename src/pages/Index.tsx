import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Mail, 
  Phone, 
  Instagram, 
  MapPin,
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Users,
  Image as ImageIcon
} from "lucide-react";

const FEATURED_PHOTOS = [
  {
    id: 1,
    src: "/lovable-uploads/6de99abf-cdc0-47a9-ba08-b4fd72577fb1.png",
    title: "Glamour Portrait",
    category: "Portrait",
    location: "Studio Session"
  },
  {
    id: 2,
    src: "/lovable-uploads/a75f559b-4d03-464b-9b34-7fa47c541ff7.png",
    title: "Glamour Portrait",
    category: "Portrait",
    location: "Studio Session"
  },
  {
    id: 3,
    src: "/lovable-uploads/595f9829-6395-46d7-b9dd-bbafe3a3a351.png",
    title: "Professional Headshot",
    category: "Headshots",
    location: "Urban Session"
  },
  {
    id: 4,
    src: "/lovable-uploads/6b8a7540-13ad-4b5a-9b5a-f6f028faaf97.png",
    title: "Classic Portrait Session",
    category: "Portrait",
    location: "Studio Session"
  },
  {
    id: 5,
    src: "/lovable-uploads/d5964a52-9fce-47cc-962a-3bd6e3cab96b.png",
    title: "Dance Portrait",
    category: "Portrait",
    location: "Studio Session"
  },
  {
    id: 6,
    src: "/lovable-uploads/ccbd82d1-cce1-4539-8a38-213f5a72de9c.png",
    title: "Retro Style Portrait",
    category: "Portrait",
    location: "Studio Session"
  },
  {
    id: 7,
    src: "/lovable-uploads/963eefb6-7814-4165-b055-97632832f1e5.png",
    title: "Event Portrait",
    category: "Events",
    location: "Outdoor Event"
  },
  {
    id: 8,
    src: "/lovable-uploads/e70562ca-a2fc-4b13-b946-599a10fe2228.png",
    title: "Natural Light Portrait",
    category: "Portrait",
    location: "Natural Light"
  },
  {
    id: 9,
    src: "/lovable-uploads/2ecc591d-ae38-4887-b223-0d11a171e65c.png",
    title: "Action Portrait",
    category: "Events",
    location: "Outdoor Session"
  },
  {
    id: 10,
    src: "/lovable-uploads/ad3d70d4-ee52-458a-8743-6c238ba4b6d3.png",
    title: "Professional Headshot",
    category: "Headshots",
    location: "Studio Session"
  }
];

const CATEGORIES = ["All", "Portrait", "Headshots", "Events"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredPhotos = selectedCategory === "All" 
    ? FEATURED_PHOTOS 
    : FEATURED_PHOTOS.filter(photo => photo.category === selectedCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % FEATURED_PHOTOS.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + FEATURED_PHOTOS.length) % FEATURED_PHOTOS.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Camera className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The LinguaFranca
              </span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {["Gallery", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={FEATURED_PHOTOS[currentImageIndex].src}
            alt={FEATURED_PHOTOS[currentImageIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Professional Portrait
              <br />
              Photography
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Capturing authentic moments through portraits, headshots, and events that tell your unique story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold">
                View Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold"
              >
                Book Session
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prevImage}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            onClick={nextImage}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Portrait Sessions", icon: Camera },
              { number: "50+", label: "Awards Won", icon: Award },
              { number: "1000+", label: "Happy Clients", icon: Users },
              { number: "5+", label: "Years Experience", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Gallery</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A curated collection of portraits, headshots, and event photography
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-black/50 p-2 rounded-full backdrop-blur-sm">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-white text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-lg bg-gray-800 aspect-[4/3]"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{photo.title}</h3>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {photo.category}
                        </Badge>
                        <span className="text-sm text-gray-300 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {photo.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About The Artist</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Welcome to The LinguaFranca, where every photograph tells a story that transcends 
                language barriers. With over 5 years of professional experience, I specialize in 
                portrait photography, professional headshots, and event coverage that captures 
                authentic emotions and genuine moments.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My approach combines technical excellence with artistic vision, creating images 
                that not only document reality but transform it into something extraordinary. 
                From intimate portraits to corporate headshots and memorable events, each shot 
                is crafted with passion and precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-white/10 text-white px-4 py-2">Portrait Photography</Badge>
                <Badge className="bg-white/10 text-white px-4 py-2">Professional Headshots</Badge>
                <Badge className="bg-white/10 text-white px-4 py-2">Event Coverage</Badge>
                <Badge className="bg-white/10 text-white px-4 py-2">Corporate Sessions</Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/a75f559b-4d03-464b-9b34-7fa47c541ff7.png"
                alt="The Photographer"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Sessions Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional photography services tailored to capture your vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "📸 Portrait Photography",
                description: "Creative portrait sessions that capture your personality and style",
                price: "$200–$450 / session",
                features: ["1-2 hour session", "10-20 edited images", "Online gallery", "Print release"]
              },
              {
                title: "💼 Professional Headshots",
                description: "Executive headshots perfect for LinkedIn, corporate websites, and business cards",
                price: "$200–$450 / person",
                features: ["1-2 retouched shots", "Multiple crop options", "Quick turnaround", "High-res files"]
              },
              {
                title: "🎉 Event Photography",
                description: "Complete event coverage for weddings, parties, and corporate gatherings",
                price: "$250–$500 / hour",
                features: ["2-hour minimum", "Edited image delivery", "Online gallery", "USB delivery option"]
              }
            ].map((service, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-white mb-6">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <ArrowRight className="h-4 w-4 mr-2 text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-black hover:bg-gray-200">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Create Together</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to capture your story? Get in touch and let's discuss how we can bring your vision to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Mail, label: "Email", value: "hello@thelinguafranca.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
              { icon: Instagram, label: "Instagram", value: "@thelinguafranca" }
            ].map((contact, index) => (
              <div key={index} className="text-center">
                <contact.icon className="h-8 w-8 mx-auto mb-4 text-white" />
                <div className="text-sm text-gray-400 mb-2">{contact.label}</div>
                <div className="text-white font-medium">{contact.value}</div>
              </div>
            ))}
          </div>

          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold">
            <Mail className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Camera className="h-6 w-6 text-white" />
              <span className="text-lg font-bold text-white">The LinguaFranca</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 The LinguaFranca. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
