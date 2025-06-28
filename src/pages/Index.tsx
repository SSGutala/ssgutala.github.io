import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  Zap,
  Globe,
  Trophy
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("experience");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const sparkleVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={sparkleVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: i * 0.5 }}
        >
          <Sparkles className="h-4 w-4" />
        </motion.div>
      ))}

      {/* Hero Section */}
      <motion.section 
        className="relative py-32 px-4 text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="mb-12"
            animate={floatingAnimation}
          >
            <div className="relative inline-block">
              <Avatar className="w-40 h-40 mx-auto mb-8 ring-4 ring-purple-500/30 shadow-2xl">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" />
                <AvatarFallback className="text-3xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">JD</AvatarFallback>
              </Avatar>
              <motion.div
                className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="h-4 w-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 text-purple-300 text-sm font-medium backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="h-4 w-4" />
                Available for opportunities
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 leading-tight">
                John Developer
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Building the future with <span className="text-purple-400 font-semibold">AI</span>, 
                <span className="text-blue-400 font-semibold"> Cloud</span>, and 
                <span className="text-pink-400 font-semibold"> Innovation</span>
              </p>
            </div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              variants={itemVariants}
            >
              {[
                { icon: Mail, text: "john@example.com", color: "text-purple-400" },
                { icon: Phone, text: "(555) 123-4567", color: "text-blue-400" },
                { icon: MapPin, text: "San Francisco, CA", color: "text-pink-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    <item.icon className={`mr-2 h-5 w-5 ${item.color} group-hover:scale-110 transition-transform`} />
                    {item.text}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              {[
                { icon: Github, text: "GitHub", href: "#" },
                { icon: Linkedin, text: "LinkedIn", href: "#" }
              ].map((social, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
                  >
                    <social.icon className="mr-2 h-5 w-5" />
                    {social.text}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Built", icon: Code },
              { number: "5+", label: "Years Experience", icon: Trophy },
              { number: "10M+", label: "Users Impacted", icon: Globe },
              { number: "$2M", label: "Funding Raised", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-purple-400" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 pb-32 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-12 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl">
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
                className="flex items-center gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-white text-gray-400 hover:text-white transition-all duration-300 rounded-xl p-4"
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline font-medium">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="experience" className="mt-0">
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8"
              >
                {[
                  {
                    title: "Senior Software Engineer",
                    company: "Google",
                    period: "2022 - Present",
                    badge: "Current",
                    badgeColor: "bg-green-500/20 text-green-400",
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
                    points: [
                      "Developed cloud-native applications using Azure services",
                      "Implemented CI/CD pipelines reducing deployment time by 60%",
                      "Collaborated with cross-functional teams on product features"
                    ]
                  }
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl group-hover:text-purple-400 transition-colors text-white">
                              {job.title}
                            </CardTitle>
                            <CardDescription className="text-xl font-medium text-purple-400 mt-2">
                              {job.company} • {job.period}
                            </CardDescription>
                          </div>
                          {job.badge && (
                            <Badge className={`${job.badgeColor} border-0 font-semibold`}>
                              {job.badge}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-gray-300">
                          {job.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <ArrowRight className="h-4 w-4 text-purple-400 mt-1 mr-3 flex-shrink-0" />
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
                key="projects"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:shadow-purple-500/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-purple-600 transition-colors">
                      <Code className="h-5 w-5" />
                      AI-Powered Analytics Platform
                    </CardTitle>
                    <CardDescription>Full-stack web application with ML integration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Built a comprehensive analytics platform using React, Node.js, and TensorFlow.
                      Processes 1M+ data points daily with real-time insights.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>React</Badge>
                      <Badge>Node.js</Badge>
                      <Badge>TensorFlow</Badge>
                      <Badge>PostgreSQL</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="group/btn">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 hover:shadow-green-500/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-green-600 transition-colors">
                      <Code className="h-5 w-5" />
                      Blockchain Voting System
                    </CardTitle>
                    <CardDescription>Secure voting platform using blockchain</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Developed a transparent voting system using Ethereum smart contracts.
                      Ensures immutable vote records and democratic transparency.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>Solidity</Badge>
                      <Badge>Web3.js</Badge>
                      <Badge>React</Badge>
                      <Badge>Ethereum</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="group/btn">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="startups" className="mt-0">
              <motion.div
                key="startups"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:shadow-amber-500/10">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl group-hover:text-amber-600 transition-colors">TechFlow Solutions</CardTitle>
                        <CardDescription className="text-lg font-medium text-amber-600">Co-Founder & CTO • 2021 - 2022</CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-amber-50">$2M Raised</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Co-founded a B2B SaaS platform automating workflow management for enterprises.
                      Successfully raised Series A funding and scaled to 50+ enterprise clients.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Built MVP from scratch, achieving product-market fit in 8 months</li>
                      <li>• Led technical team of 8 engineers across full-stack development</li>
                      <li>• Implemented scalable architecture supporting 10K+ concurrent users</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="leadership" className="mt-0">
              <motion.div
                key="leadership"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">Tech Team Lead</CardTitle>
                    <CardDescription>Google Developer Student Club</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Led 20+ developers in building community projects</li>
                      <li>• Organized hackathons with 500+ participants</li>
                      <li>• Conducted weekly workshops on modern technologies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">Volunteer Coordinator</CardTitle>
                    <CardDescription>Code for Good Initiative</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Coordinated 50+ volunteers for nonprofit tech projects</li>
                      <li>• Delivered 10+ pro-bono applications for local charities</li>
                      <li>• Mentored junior developers in collaborative coding</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Technical Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Programming Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"].map(skill => (
                          <Badge key={skill} variant="secondary" className="hover:bg-blue-100 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Frameworks & Libraries</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "Node.js", "Express", "Django", "Spring Boot"].map(skill => (
                          <Badge key={skill} variant="secondary" className="hover:bg-green-100 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Cloud & Infrastructure</h4>
                      <div className="flex flex-wrap gap-2">
                        {["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"].map(skill => (
                          <Badge key={skill} variant="secondary" className="hover:bg-purple-100 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="hobbies" className="mt-0">
              <motion.div
                key="hobbies"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-red-600 transition-colors">
                      <Heart className="h-5 w-5" />
                      Photography
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Passionate about landscape and street photography. 
                      Featured in local exhibitions and online galleries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-green-600 transition-colors">
                      <Star className="h-5 w-5" />
                      Rock Climbing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Active rock climber with 5+ years experience. 
                      Enjoy both indoor bouldering and outdoor sport climbing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                      <Code className="h-5 w-5" />
                      Open Source
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Active contributor to open source projects. 
                      Maintainer of several popular developer tools.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 group-hover:text-purple-600 transition-colors">
                      <GraduationCap className="h-5 w-5" />
                      Teaching
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Volunteer coding instructor for underrepresented communities. 
                      Taught 100+ students programming fundamentals.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </motion.section>
    </div>
  );
};

export default Index;
