
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
  Download
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
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="mb-8"
            animate={floatingAnimation}
          >
            <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-blue-500/20">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">JD</AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            John Developer
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Full-Stack Engineer & Tech Innovator
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <Button variant="outline" size="lg" className="group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              john@example.com
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              (555) 123-4567
            </Button>
            <Button variant="outline" size="lg" className="group">
              <MapPin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              San Francisco, CA
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="max-w-6xl mx-auto px-4 pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/50 backdrop-blur-sm">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger value="startups" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">Startups</span>
            </TabsTrigger>
            <TabsTrigger value="leadership" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Leadership</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
            <TabsTrigger value="hobbies" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Hobbies</span>
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="experience" className="mt-0">
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:shadow-blue-500/10">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Senior Software Engineer</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">Google • 2022 - Present</CardDescription>
                      </div>
                      <Badge variant="secondary">Current</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Led development of scalable microservices handling 10M+ daily requests</li>
                      <li>• Improved system performance by 40% through optimization initiatives</li>
                      <li>• Mentored 5 junior engineers and conducted technical interviews</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 hover:shadow-blue-500/10">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Software Engineer</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">Microsoft • 2020 - 2022</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Developed cloud-native applications using Azure services</li>
                      <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                      <li>• Collaborated with cross-functional teams on product features</li>
                    </ul>
                  </CardContent>
                </Card>
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
