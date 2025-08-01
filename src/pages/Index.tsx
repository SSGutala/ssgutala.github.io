
import { useState, useEffect } from "react";
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
  Trophy,
  Palette
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with CSS Keyframes */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))',
          animation: 'gradientCycle 48s ease-in-out infinite'
        }}
      />
      
      <style>{`
        @keyframes gradientCycle {
          0% {
            background: linear-gradient(to bottom right, #0f172a, #1e3a8a, #000000);
          }
          16.66% {
            background: linear-gradient(to bottom right, #0f172a, #166534, #000000);
          }
          33.33% {
            background: linear-gradient(to bottom right, #0f172a, #991b1b, #000000);
          }
          50% {
            background: linear-gradient(to bottom right, #0f172a, #581c87, #000000);
          }
          66.66% {
            background: linear-gradient(to bottom right, #0f172a, #9a3412, #000000);
          }
          83.33% {
            background: linear-gradient(to bottom right, #0f172a, #be185d, #000000);
          }
          100% {
            background: linear-gradient(to bottom right, #0f172a, #1e3a8a, #000000);
          }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-300"
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
              <Avatar className="w-40 h-40 mx-auto mb-8 ring-4 ring-blue-500/30 shadow-2xl">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" />
                <AvatarFallback className="text-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">SG</AvatarFallback>
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
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 text-blue-300 text-sm font-medium backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="h-4 w-4" />
                Available for opportunities
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6 leading-tight">
                SAI SRIVATSAV GUTALA
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                <span className="text-blue-400 font-semibold">Product Manager</span> | 
                <span className="text-indigo-400 font-semibold"> Strategy Strategist</span> | 
                <span className="text-cyan-400 font-semibold"> Investor Collaborator</span>
              </p>
            </div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              variants={itemVariants}
            >
              {[
                { icon: Mail, text: "sai.gutala@gmail.com", color: "text-blue-400" },
                { icon: Phone, text: "(571) 338-8193", color: "text-indigo-400" },
                { icon: MapPin, text: "Dallas, TX", color: "text-cyan-400" }
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
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/25"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              {[
                { icon: Github, text: "GitHub", href: "#" },
                { icon: Linkedin, text: "LinkedIn", href: "#" },
                { icon: Palette, text: "Design Portfolio", href: "https://docs.google.com/presentation/d/1VGbGdxLiW0tQ9H5B5C9k7PW1EGFEiP5O4BXHQW8kL2A/edit?usp=sharing" }
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
                    onClick={() => window.open(social.href, '_blank')}
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
              { number: "15+", label: "Projects Built", icon: Code },
              { number: "5+", label: "Years Experience", icon: Trophy },
              { number: "10K+", label: "Users Impacted", icon: Globe },
              { number: "$200K", label: "Cost Savings", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Content with Fixed Navigation */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 pb-32 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="flex w-full overflow-x-auto scrollbar-hide mb-12 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl gap-2">
            {[
              { value: "experience", icon: Briefcase, label: "Experience", shortLabel: "Experience" },
              { value: "projects", icon: Code, label: "Projects", shortLabel: "Projects" },
              { value: "startups", icon: Star, label: "Startups", shortLabel: "Startups" },
              { value: "leadership", icon: User, label: "Leadership", shortLabel: "Leadership" },
              { value: "skills", icon: GraduationCap, label: "Education & Skills", shortLabel: "Education & Skills" },
              { value: "hobbies", icon: Heart, label: "Interests", shortLabel: "Interests" }
            ].map((tab) => (
              <TabsTrigger 
                key={tab.value}
                value={tab.value} 
                className="flex items-center justify-center gap-1.5 data-[state=active]:bg-white/20 data-[state=active]:text-white text-gray-400 hover:text-white transition-all duration-300 rounded-xl p-3 text-sm min-h-[48px] whitespace-nowrap flex-shrink-0"
              >
                <tab.icon className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium">{tab.label}</span>
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
                    title: "AI Engineer Intern",
                    company: "FluidTouch",
                    period: "Mar. 2025 - Present",
                    badge: "Current",
                    badgeColor: "bg-green-500/20 text-green-400",
                    location: "Hyderabad, India (Remote)",
                    points: [
                      "Cutting API use for 10M+ users by building an offline AI tool for text prediction and summarization",
                      "Saving 240M+ note-taking hrs/yr, based on 50% adoption and 48 hrs/yr saved per user",
                      "Reducing ₹52 lakhs in development costs and 2K+ engineering hours with a lightweight, local prototype"
                    ]
                  },
                  {
                    title: "Technical Product Manager",
                    company: "AT&T",
                    period: "Jun. 2023 - Nov. 2024",
                    location: "Dallas, TX",
                    points: [
                      "Saved $200K/year and surfaced vulnerabilities 3× faster by conducting research and managing features autonomously, becoming a product matter expert behind a cybersecurity intake system",
                      "Eliminated 4.9K+ workforce hours annually by replacing manual asset request processes with an automated internal tool—serving as product owner and translating business needs into user-centric solutions",
                      "Designed 20+ iterative features as a result of 10+ user interviews to deliver on customer and business needs",
                      "Enhanced load performance for 10K+ users by rebuilding a portal with Angular and improving interaction"
                    ]
                  },
                  {
                    title: "Product Manager Intern",
                    company: "Alarm.com",
                    period: "May 2021 - Aug. 2021",
                    location: "McLean, VA",
                    points: [
                      "Targeted a $581M market by drafting product requirements, managing B2B gaps, risks, and budget constraints",
                      "Enabled 1 Mbps speed and 10–15 ms latency by collaborating with engineers on efficient hardware design",
                      "Accelerated timelines by 20% by developing product roadmaps, use-cases, user stories— driving delivery of business value and aligning results with key stakeholders"
                    ]
                  },
                  {
                    title: "Software Developer Intern",
                    company: "PEMDAS Technologies",
                    period: "May 2019 - Aug. 2019",
                    location: "Alexandria, VA",
                    points: [
                      "Saved 300+ engineering hrs/yr by building a Python/Django backend to automate manual data collection",
                      "Improved data access efficiency by 35% through developing a JavaScript/SQLite web interface"
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
                            <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors text-white">
                              {job.title}
                            </CardTitle>
                            <CardDescription className="text-xl font-medium text-blue-400 mt-2">
                              {job.company} • {job.period}
                              {job.location && <span className="block text-gray-400 text-sm mt-1">{job.location}</span>}
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
                              <ArrowRight className="h-4 w-4 text-blue-400 mt-1 mr-3 flex-shrink-0" />
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
                {[
                  {
                    title: "SuperStar Social",
                    description: "Product Designer",
                    details: "Designed 100+ UI screens, accelerating prototype delivery by 30%. Led 5 full design iterations, reducing feedback turnaround time by 40%.",
                    tech: ["UI/UX Design", "Prototyping", "User Research", "Figma"],
                    color: "blue",
                    period: "Dec. 2019 - Sept. 2020"
                  },
                  {
                    title: "Bangladrop E-commerce",
                    description: "Freelance UX Designer",
                    details: "Improved design clarity by 60% over prior wireframes by designing 25-page ecommerce prototype.",
                    tech: ["UX Design", "Wireframing", "E-commerce", "Prototyping"],
                    color: "green",
                    period: "June 2022 - Aug. 2022"
                  },
                  {
                    title: "NECX Policing App",
                    description: "Freelance UX Designer",
                    details: "Helped secure a $100K investment and land first client with 50% higher pitch success by designing a policing mobile app.",
                    tech: ["Mobile Design", "UX/UI", "Investment Pitch", "App Design"],
                    color: "purple",
                    period: "Jan 2021 - Feb. 2021"
                  }
                ].map((project, index) => (
                  <Card key={index} className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
                    <CardHeader>
                      <CardTitle className={`flex items-center gap-2 group-hover:text-${project.color}-400 transition-colors text-white`}>
                        <Code className="h-5 w-5" />
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{project.details}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} className={`bg-${project.color}-500/20 text-${project.color}-300`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="group/btn bg-white/5 border-white/20 text-white hover:bg-white/10">
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
                key="startups"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6"
              >
                {[
                  {
                    title: "Veera",
                    role: "Venture Co-Founder and Product Lead",
                    period: "Dec. 2024 - Present",
                    description: "Culturally inspired activewear brand solving representation gaps in fitness apparel",
                    badge: "Active",
                    badgeColor: "bg-green-500/20 text-green-300",
                    points: [
                      "Founded a culturally inspired activewear brand to solve representation gaps in fitness apparel",
                      "Led product research, manufacturer sourcing, design execution, and customer acquisition strategy",
                      "Applied lean product principles to physical goods development, managing branding, UX testing, and go-to-market"
                    ]
                  },
                  {
                    title: "Alphawave Technologies",
                    role: "Venture Founder and Product Manager",
                    period: "Nov. 2020 - May 2023",
                    description: "Wearable technology for enhanced visibility, comfort, and durability",
                    points: [
                      "Improved visibility 40%, comfort 30%, and durability 35% through cross-functional collaborative efforts between designers, technology advocates, and business strategists in the creation of 6 wearable prototypes and MVP",
                      "Increased tester satisfaction by 40% between alpha and beta test cases by leading 100+ customer feedback sessions across 3 app iterations and prioritized features to accelerate delivery"
                    ]
                  }
                ].map((startup, index) => (
                  <Card key={index} className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl group-hover:text-amber-400 transition-colors text-white">{startup.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-amber-400">{startup.role} • {startup.period}</CardDescription>
                          <p className="text-gray-400 mt-2">{startup.description}</p>
                        </div>
                        {startup.badge && (
                          <Badge className={`${startup.badgeColor} border-0`}>
                            {startup.badge}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-300">
                        {startup.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-amber-400 mt-1 mr-3 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
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
                {[
                  {
                    title: "Hoop Foundation",
                    role: "Program Manager",
                    description: "Impacted 200+ kids through meals, clothing, and school supplies by launching a nonprofit initiative supporting underserved children in India. Coordinating events with Jill's House for disabled children, developing programs with foster care organizations, raising funds for Title I CEP schools, recruiting volunteers, and preparing for 501(c)(3) nonprofit registration.",
                    period: "Oct. 2024 - Present",
                    color: "blue"
                  },
                  {
                    title: "HackOverflow",
                    role: "Founder and Program Manager",
                    description: "Established the first self-sustainable hardware hackathon at George Mason University with 50+ participants; advised second year, growing attendance by 100+ more.",
                    period: "May 2021 - Dec. 2024",
                    color: "purple"
                  },
                  {
                    title: "Inventors & Innovations Team",
                    role: "Co-Founder and Co-President",
                    description: "Completed 5+ projects and featured in 2 showcases after founding and leading a hands-on engineering organization; led as Co-President first 2 years and advised third year.",
                    period: "Aug. 2019 - Apr. 2023",
                    color: "orange"
                  }
                ].map((leadership, index) => (
                  <Card key={index} className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
                    <CardHeader>
                      <CardTitle className={`group-hover:text-${leadership.color}-400 transition-colors text-white`}>{leadership.title}</CardTitle>
                      <CardDescription className={`text-${leadership.color}-400 font-medium`}>{leadership.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{leadership.description}</p>
                    </CardContent>
                  </Card>
                ))}
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
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-blue-400 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white">George Mason University</h3>
                      <p className="text-blue-400 font-medium">Bachelor of Science, Electrical Engineering</p>
                      <p className="text-gray-400">College of Engineering and Computing • Graduated: December 2022</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-white">Related Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Object-Oriented Programming", "Embedded Systems", "Signals & Systems", 
                          "Digital Electronics", "Mobile Systems and Apps", "Circuit Analysis",
                          "Micro/Macro Economics", "International Business", "Business & Society"
                        ].map(course => (
                          <Badge key={course} className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-blue-400">Technical Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-white">Programming Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Python", "Java", "JavaScript", "Swift", "C", "C++", "HTML", "CSS"].map(skill => (
                          <Badge key={skill} className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-white">Frameworks & Libraries</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Angular", "Django", "TensorFlow", "PyTorch", "Hugging Face", "SwiftUI"].map(skill => (
                          <Badge key={skill} className="bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-white">Tools & Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Git", "SQL", "Xcode", "SharePoint", "PowerAutomate", "PowerApps", "MS Project", "Excel", "Figma", "AutoCAD", "Fusion 360", "Jira", "Lucidchart", "Miro"].map(skill => (
                          <Badge key={skill} className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-white">Methodologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Agile", "Scrum"].map(skill => (
                          <Badge key={skill} className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 transition-colors">
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
                {[
                  {
                    title: "AI & Machine Learning",
                    icon: Code,
                    description: "Passionate about developing innovative AI solutions and exploring cutting-edge machine learning techniques. Continuously learning about new frameworks and methodologies.",
                    color: "blue"
                  },
                  {
                    title: "Product Innovation",
                    icon: Star,
                    description: "Enthusiastic about creating products that solve real-world problems. Enjoys the entire product lifecycle from ideation to market launch.",
                    color: "purple"
                  },
                  {
                    title: "Entrepreneurship",
                    icon: Trophy,
                    description: "Active entrepreneur with multiple startup ventures. Interested in building scalable businesses and creating positive social impact.",
                    color: "green"
                  },
                  {
                    title: "Technology Mentoring",
                    icon: GraduationCap,
                    description: "Enjoys mentoring students and young professionals in technology and entrepreneurship. Believes in giving back to the community through knowledge sharing.",
                    color: "orange"
                  }
                ].map((interest, index) => (
                  <Card key={index} className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
                    <CardHeader>
                      <CardTitle className={`flex items-center gap-2 group-hover:text-${interest.color}-400 transition-colors text-white`}>
                        <interest.icon className="h-5 w-5" />
                        {interest.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{interest.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </motion.section>
    </div>
  );
};

export default Index;
