import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Briefcase, 
  Code, 
  Star, 
  User, 
  Heart, 
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  ArrowRight,
  Trophy,
  Users,
  Zap,
  Target
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("experience");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" 
               style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" 
               style={{ animation: 'float 8s ease-in-out infinite reverse' }} />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" 
               style={{ animation: 'float 7s ease-in-out infinite' }} />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" 
               style={{ animation: 'float 9s ease-in-out infinite reverse' }} />
        </div>
      </div>

      {/* Navigation Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold text-gray-900"
              whileHover={{ scale: 1.05 }}
            >
              John Developer
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for new opportunities
                </motion.div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Senior Software
                  <span className="text-blue-600 block">Engineer</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  I build scalable web applications and lead engineering teams at top tech companies. 
                  Passionate about creating products that impact millions of users.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="px-8 py-3 bg-white/70 backdrop-blur-md shadow-lg border-white/30">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </motion.div>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 1, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <Avatar className="w-80 h-80 mx-auto relative z-10 ring-4 ring-white/50 shadow-2xl">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" />
                  <AvatarFallback className="text-6xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">JD</AvatarFallback>
                </Avatar>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "50+", label: "Projects Built", icon: Code },
              { number: "5+", label: "Years Experience", icon: Trophy },
              { number: "10M+", label: "Users Impacted", icon: Users },
              { number: "$2M", label: "Funding Raised", icon: Target }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20"
                whileHover={{ y: -5 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my professional experience, projects, and the path that led me here.
            </p>
          </motion.div>

          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-12 bg-white/60 backdrop-blur-md p-2 rounded-xl h-auto border border-white/20">
              {[
                { value: "experience", icon: Briefcase, label: "Experience" },
                { value: "projects", icon: Code, label: "Projects" },
                { value: "startups", icon: Star, label: "Startups" },
                { value: "leadership", icon: User, label: "Leadership" },
                { value: "skills", icon: GraduationCap, label: "Skills" },
                { value: "hobbies", icon: Heart, label: "Hobbies" }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value} 
                  className="flex flex-col items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600 text-gray-600 hover:text-gray-900 transition-all duration-300 rounded-lg p-4 h-auto"
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="text-sm font-medium hidden sm:block">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="experience" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {[
                  {
                    title: "Senior Software Engineer",
                    company: "Google",
                    period: "2022 - Present",
                    badge: "Current",
                    badgeColor: "bg-green-100 text-green-700",
                    description: "Leading development of scalable microservices and mentoring junior engineers.",
                    points: [
                      "Led development of scalable microservices handling 10M+ daily requests",
                      "Improved system performance by 40% through optimization initiatives",
                      "Mentored 5 junior engineers and conducted technical interviews"
                    ]
                  },
                  {
                    title: "Software Engineer",
                    company: "Microsoft",
                    period: "2020 - 2022",
                    description: "Developed cloud-native applications and implemented CI/CD pipelines.",
                    points: [
                      "Developed cloud-native applications using Azure services",
                      "Implemented CI/CD pipelines reducing deployment time by 60%",
                      "Collaborated with cross-functional teams on product features"
                    ]
                  }
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl text-gray-900 mb-2">
                              {job.title}
                            </CardTitle>
                            <CardDescription className="text-lg font-medium text-blue-600">
                              {job.company} • {job.period}
                            </CardDescription>
                            <p className="text-gray-600 mt-2">{job.description}</p>
                          </div>
                          {job.badge && (
                            <Badge className={`${job.badgeColor} border-0 font-medium`}>
                              {job.badge}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-gray-700">
                          {job.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {[
                  {
                    title: "AI-Powered Analytics Platform",
                    description: "Full-stack web application with ML integration processing 1M+ data points daily.",
                    tech: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
                    color: "blue"
                  },
                  {
                    title: "Blockchain Voting System",
                    description: "Secure voting platform using Ethereum smart contracts for transparent elections.",
                    tech: ["Solidity", "Web3.js", "React", "Ethereum"],
                    color: "green"
                  }
                ].map((project, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                    <CardHeader>
                      <CardTitle className={`text-xl group-hover:text-${project.color}-600 transition-colors`}>
                        <Code className="h-5 w-5 inline mr-2" />
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(tech => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="group/btn">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="startups" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-gray-900">TechFlow Solutions</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600 mt-2">
                          Co-Founder & CTO • 2021 - 2022
                        </CardDescription>
                      </div>
                      <Badge className="bg-amber-100 text-amber-700 border-0 font-medium">
                        $2M Raised
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 text-lg">
                      Co-founded a B2B SaaS platform automating workflow management for enterprises.
                      Successfully raised Series A funding and scaled to 50+ enterprise clients.
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        Built MVP from scratch, achieving product-market fit in 8 months
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        Led technical team of 8 engineers across full-stack development
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        Implemented scalable architecture supporting 10K+ concurrent users
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="leadership" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {[
                  {
                    title: "Tech Team Lead",
                    org: "Google Developer Student Club",
                    achievements: [
                      "Led 20+ developers in building community projects",
                      "Organized hackathons with 500+ participants",
                      "Conducted weekly workshops on modern technologies"
                    ]
                  },
                  {
                    title: "Volunteer Coordinator",
                    org: "Code for Good Initiative",
                    achievements: [
                      "Coordinated 50+ volunteers for nonprofit tech projects",
                      "Delivered 10+ pro-bono applications for local charities",
                      "Mentored junior developers in collaborative coding"
                    ]
                  }
                ].map((role, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">{role.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-blue-600">
                        {role.org}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-700">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">Technical Expertise</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {[
                      {
                        category: "Programming Languages",
                        skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"],
                        color: "blue"
                      },
                      {
                        category: "Frameworks & Libraries",
                        skills: ["React", "Next.js", "Node.js", "Express", "Django", "Spring Boot"],
                        color: "green"
                      },
                      {
                        category: "Cloud & Infrastructure",
                        skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
                        color: "purple"
                      }
                    ].map((group, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">{group.category}</h4>
                        <div className="flex flex-wrap gap-3">
                          {group.skills.map(skill => (
                            <Badge 
                              key={skill} 
                              variant="secondary" 
                              className={`hover:bg-${group.color}-100 hover:text-${group.color}-700 transition-colors px-3 py-1`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="hobbies" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {[
                  {
                    title: "Photography",
                    icon: Heart,
                    description: "Passionate about landscape and street photography. Featured in local exhibitions and online galleries.",
                    color: "text-red-600"
                  },
                  {
                    title: "Rock Climbing",
                    icon: Star,
                    description: "Active rock climber with 5+ years experience. Enjoy both indoor bouldering and outdoor sport climbing.",
                    color: "text-green-600"
                  },
                  {
                    title: "Open Source",
                    icon: Code,
                    description: "Active contributor to open source projects. Maintainer of several popular developer tools.",
                    color: "text-blue-600"
                  },
                  {
                    title: "Teaching",
                    icon: GraduationCap,
                    description: "Volunteer coding instructor for underrepresented communities. Taught 100+ students programming fundamentals.",
                    color: "text-purple-600"
                  }
                ].map((hobby, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className={`flex items-center gap-3 text-xl ${hobby.color}`}>
                        <hobby.icon className="h-6 w-6" />
                        {hobby.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{hobby.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and connecting with fellow developers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Mail, text: "john@example.com", label: "Email" },
                { icon: Phone, text: "(555) 123-4567", label: "Phone" },
                { icon: MapPin, text: "San Francisco, CA", label: "Location" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-blue-100/70 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <contact.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.label}</h3>
                  <p className="text-gray-600">{contact.text}</p>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg">
              <Zap className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white/30 backdrop-blur-md border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2024 John Developer. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(30px) rotate(240deg); }
        }
      `}</style>
    </div>
  );
};

export default Index;
