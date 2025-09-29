import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Building, 
  Award, 
  ArrowRight,
  Target,
  Shield,
  BarChart3,
  CheckCircle,
  MapPin,
  Calendar,
  Briefcase,
  Clock,
  FileCheck,
  UserCheck,
  MessageSquare,
  Star,
  TrendingUp,
  ChevronDown,
  Play,
  Zap,
  Globe,
  Settings,
  Database,
  Smartphone,
  Monitor,
  Tablet,
  Sparkles,
  Layers,
  Heart,
  Award as AwardIcon
} from "lucide-react";

// Enhanced Animated Counter with stagger effect
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);

  const endValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let startTime;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutCubic * endValue));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setHasAnimated(true);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, endValue, duration]);

  return <span ref={countRef}>{count.toLocaleString()}{value.replace(/[0-9,]/g, '')}</span>;
};

// Enhanced Animated Section with multiple animation variants
const AnimatedSection = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: {
      hidden: { opacity: 0, y: 60 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants[variant]}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Enhanced Floating Animation with multiple elements
const FloatingElement = ({ children, delay = 0, amplitude = 10, duration = 3 }) => {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{ 
        y: [-amplitude, amplitude, -amplitude],
        rotate: [0, 5, 0, -5, 0],
        transition: {
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic Button Component
const MagneticButton = ({ children, className = "", ...props }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    ref.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered Children Animation
const StaggeredContainer = ({ children, staggerDelay = 0.1 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const [stats] = useState({
    totalStudents: "2,000+",
    activeInternships: "500+", 
    placementRate: "95%",
    partnerCompanies: "500+"
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Before vs After data
  const beforeAfterData = {
    before: {
      title: "Before: Chaotic Manual Process",
      items: [
        "Scattered WhatsApp groups and emails",
        "Lost applications and missed deadlines", 
        "Manual screening taking weeks",
        "No tracking or transparency",
        "Biased selection processes"
      ],
      color: "bg-red-50 border-red-300"
    },
    after: {
      title: "After: Streamlined Digital Platform",
      items: [
        "Centralized application portal",
        "Automated notifications and reminders",
        "AI-powered matching in minutes", 
        "Real-time tracking dashboard",
        "Fair and transparent allocation"
      ],
      color: "bg-emerald-50 border-emerald-300"
    }
  };

  // Enhanced Features data with better colors
  const features = [
    {
      icon: Target,
      title: "AI-Powered Matching",
      description: "Smart algorithm analyzes skills, preferences, and requirements to create perfect student-internship matches",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      accentColor: "bg-blue-100",
      textColor: "text-white"
    },
    {
      icon: Users,
      title: "One-Click Applications", 
      description: "Students can apply to multiple internships instantly with a single comprehensive profile",
      color: "bg-violet-600",
      hoverColor: "hover:bg-violet-700", 
      accentColor: "bg-violet-100",
      textColor: "text-white"
    },
    {
      icon: Shield,
      title: "Automated Approvals",
      description: "Mentors can set approval criteria and let the system handle routine approvals automatically",
      color: "bg-emerald-600",
      hoverColor: "hover:bg-emerald-700",
      accentColor: "bg-emerald-100", 
      textColor: "text-white"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards track applications, placements, and performance metrics",
      color: "bg-orange-600",
      hoverColor: "hover:bg-orange-700",
      accentColor: "bg-orange-100",
      textColor: "text-white"
    }
  ];

  // Enhanced process steps
  const processSteps = [
    {
      step: 1,
      title: "Profile Setup",
      description: "Students create comprehensive profiles with skills, preferences, and academic records",
      icon: UserCheck,
      color: "bg-blue-600",
      accentColor: "bg-blue-100"
    },
    {
      step: 2, 
      title: "Opportunity Discovery",
      description: "Placement cells post verified internships with detailed requirements and benefits",
      icon: MapPin,
      color: "bg-violet-600",
      accentColor: "bg-violet-100"
    },
    {
      step: 3,
      title: "Smart Matching",
      description: "AI algorithm analyzes profiles and requirements to suggest best-fit opportunities",
      icon: Target,
      color: "bg-emerald-600",
      accentColor: "bg-emerald-100"
    },
    {
      step: 4,
      title: "Automated Processing", 
      description: "System handles applications, approvals, and interview scheduling automatically",
      icon: Settings,
      color: "bg-orange-600",
      accentColor: "bg-orange-100"
    },
    {
      step: 5,
      title: "Placement Success",
      description: "Students get placed in ideal internships with supervisor feedback and certificates",
      icon: CheckCircle,
      color: "bg-teal-600",
      accentColor: "bg-teal-100"
    }
  ];

  // Enhanced testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      company: "IIT Delhi",
      content: "I applied with one click and got my dream internship at a top tech company! The AI matching was incredible.",
      rating: 5,
      avatar: "PS",
      bgColor: "bg-blue-600"
    },
    {
      name: "Rajesh Kumar", 
      role: "Placement Officer",
      company: "BITS Pilani",
      content: "Our placement process became 10x more efficient. We can now handle 5000+ applications seamlessly.",
      rating: 5,
      avatar: "RK",
      bgColor: "bg-violet-600"
    },
    {
      name: "Dr. Anita Verma",
      role: "Faculty Mentor", 
      company: "NIT Warangal",
      content: "No more manual approvals! The automated system handles everything while maintaining quality control.",
      rating: 5,
      avatar: "AV",
      bgColor: "bg-emerald-600"
    },
    {
      name: "Vikram Singh",
      role: "HR Manager",
      company: "TechCorp India", 
      content: "Verified profiles and skills assessment saved us hours of screening. Best recruitment tool ever!",
      rating: 5,
      avatar: "VS",
      bgColor: "bg-orange-600"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section with Enhanced Animations */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]"
            animate={{
              backgroundPosition: ['0px 0px', '64px 64px'],
              transition: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-1/4 opacity-20">
            <motion.div
              className="w-24 h-24 bg-blue-200 rounded-3xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
          
          <div className="absolute bottom-32 right-1/4 opacity-20">
            <motion.div
              className="w-16 h-16 bg-violet-200 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
        </div>
        
        <div className="container relative mx-auto px-4 py-20 text-center z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-5xl"
          >
            {/* Enhanced Badge with glow effect */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge className="mb-8 bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-base font-semibold shadow-lg shadow-blue-600/25 border-0">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  🏆
                </motion.span>
                <span className="ml-2">Smart India Hackathon 2025</span>
              </Badge>
            </motion.div>

            {/* Enhanced Main Headline with stagger effect */}
            <div className="mb-8">
              <motion.h1 
                className="text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block"
                >
                  From Scattered Notices to
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="block text-blue-600 relative"
                >
                  Seamless Careers
                  <motion.div
                    className="absolute -inset-2 bg-blue-100 rounded-2xl -z-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </motion.span>
              </motion.h1>
            </div>

            {/* Enhanced Subheading */}
            <motion.p 
              className="mb-12 text-xl text-gray-600 md:text-2xl max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              A single digital platform for students, placement cells, and recruiters to manage 
              internships and placements effortlessly with 
              <motion.span
                className="text-blue-600 font-semibold"
                animate={{ textShadow: ["0 0 0px #3b82f6", "0 0 20px #3b82f6", "0 0 0px #3b82f6"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                AI-powered matching
              </motion.span>
            </motion.p>

            {/* Enhanced CTA Buttons with magnetic effect */}
            <motion.div 
              className="flex flex-col items-center justify-center gap-6 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <MagneticButton>
                <Button 
                  size="lg" 
                  className="h-16 px-12 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/25 border-0 rounded-2xl"
                  asChild
                >
                  <Link to="/signup">
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      Get Started
                    </motion.span>
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </MagneticButton>
              
              <MagneticButton>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-16 px-12 text-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 rounded-2xl"
                  asChild
                >
                  <Link to="/demo">
                    <Play className="mr-3 h-6 w-6" />
                    Watch Demo
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Enhanced Floating elements */}
            <div className="absolute top-20 left-10 opacity-40">
              <FloatingElement delay={0} amplitude={15}>
                <motion.div 
                  className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </motion.div>
              </FloatingElement>
            </div>
            
            <div className="absolute top-32 right-16 opacity-40">
              <FloatingElement delay={1} amplitude={12}>
                <motion.div 
                  className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Briefcase className="w-8 h-8 text-violet-600" />
                </motion.div>
              </FloatingElement>
            </div>

            <div className="absolute bottom-32 left-20 opacity-40">
              <FloatingElement delay={2} amplitude={18}>
                <motion.div 
                  className="w-18 h-18 bg-emerald-100 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Target className="w-9 h-9 text-emerald-600" />
                </motion.div>
              </FloatingElement>
            </div>

            <div className="absolute top-1/2 right-8 opacity-40">
              <FloatingElement delay={0.5} amplitude={10}>
                <motion.div 
                  className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="w-7 h-7 text-orange-600" />
                </motion.div>
              </FloatingElement>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <AnimatedSection>
        <section className="bg-white py-24 border-b border-gray-100 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="grid grid-cols-2 gap-8 md:grid-cols-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { value: stats.totalStudents, label: "Students Placed", color: "text-blue-600", bg: "bg-blue-50" },
                { value: stats.activeInternships, label: "Verified Partners", color: "text-violet-600", bg: "bg-violet-50" },
                { value: stats.placementRate, label: "Success Rate", color: "text-emerald-600", bg: "bg-emerald-50" },
                { value: stats.partnerCompanies, label: "Industry Partners", color: "text-orange-600", bg: "bg-orange-50" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`text-center p-6 rounded-3xl ${stat.bg} transition-all duration-300`}
                >
                  <div className={`text-4xl font-bold mb-3 md:text-5xl ${stat.color}`}>
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 rounded-l-[100px] opacity-50" />
        </section>
      </AnimatedSection>

      {/* Enhanced Problem Statement Section */}
      <AnimatedSection variant="scale">
        <section className="py-28 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The Problem We Solve
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Traditional internship processes are chaotic, manual, and inefficient. We've built the solution.
              </motion.p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: -1 }}
                className={`${beforeAfterData.before.color} p-10 rounded-3xl border-2 shadow-xl relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full -translate-y-16 translate-x-16 opacity-50" />
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <motion.div 
                      className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <MessageSquare className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-red-700 mb-3">{beforeAfterData.before.title}</h3>
                  </div>
                  <ul className="space-y-6">
                    {beforeAfterData.before.items.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-red-700 font-medium text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                className={`${beforeAfterData.after.color} p-10 rounded-3xl border-2 shadow-xl relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-200 rounded-full -translate-y-16 -translate-x-16 opacity-50" />
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <motion.div 
                      className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-emerald-700 mb-3">{beforeAfterData.after.title}</h3>
                  </div>
                  <ul className="space-y-6">
                    {beforeAfterData.after.items.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-emerald-700 font-medium text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-white rounded-tr-[100px] opacity-80" />
        </section>
      </AnimatedSection>

      {/* Enhanced Features Section */}
      <AnimatedSection>
        <section className="py-28 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built with cutting-edge technology to ensure fair and efficient internship allocation
              </p>
            </motion.div>
            
            <StaggeredContainer staggerDelay={0.15}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group mb-8 md:mb-0"
                >
                  {/* Background decoration on hover */}
                  <motion.div
                    className={`absolute inset-0 ${feature.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`${feature.color} ${feature.hoverColor} ${feature.textColor} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg transition-colors duration-300`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{feature.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggeredContainer>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-blue-50 rounded-l-[100px] opacity-60" />
        </section>
      </AnimatedSection>

      {/* Enhanced How It Works Section */}
      <AnimatedSection>
        <section className="py-28 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Streamlined process from application to placement in 5 simple steps
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-12 mb-20 ${index % 2 === 1 ? 'flex-row-reverse' : ''} relative`}
                >
                  {/* Connection line */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className={`absolute ${index % 2 === 0 ? 'right-12' : 'left-12'} top-24 w-0.5 h-20 bg-gray-300`}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  )}
                  
                  {/* Step content */}
                  <motion.div 
                    className="flex-1 p-8 bg-white rounded-3xl shadow-lg"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className={`${step.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-xl leading-relaxed">{step.description}</p>
                  </motion.div>
                  
                  {/* Step icon */}
                  <div className="flex-shrink-0">
                    <motion.div 
                      className={`${step.color} w-28 h-28 rounded-3xl flex items-center justify-center shadow-2xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="w-14 h-14 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute bottom-0 right-0 w-1/4 h-3/4 bg-white rounded-tl-[100px] opacity-80" />
        </section>
      </AnimatedSection>

      {/* Enhanced Testimonials Section */}
      <AnimatedSection>
        <section className="py-28 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from students, placement officers, faculty, and recruiters who transformed their workflow
              </p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Enhanced Testimonial Card */}
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-gray-50 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-2xl"
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-40 h-40 ${testimonials[activeTestimonial].bgColor} opacity-10 rounded-full -translate-y-20 translate-x-20`} />
                  
                  <div className="relative z-10">
                    {/* Enhanced Stars */}
                    <motion.div 
                      className="flex justify-center gap-2 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="w-8 h-8 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {/* Enhanced Quote */}
                    <motion.blockquote 
                      className="text-3xl text-gray-700 font-medium mb-10 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      "{testimonials[activeTestimonial].content}"
                    </motion.blockquote>
                    
                    {/* Enhanced Author */}
                    <motion.div 
                      className="flex items-center justify-center gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <motion.div 
                        className={`w-20 h-20 ${testimonials[activeTestimonial].bgColor} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {testimonials[activeTestimonial].avatar}
                      </motion.div>
                      <div className="text-left">
                        <div className="font-bold text-gray-900 text-xl">{testimonials[activeTestimonial].name}</div>
                        <div className="text-gray-600 text-lg">{testimonials[activeTestimonial].role}</div>
                        <div className={`${testimonials[activeTestimonial].bgColor.replace('bg-', 'text-')} font-semibold`}>
                          {testimonials[activeTestimonial].company}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Enhanced testimonial indicators */}
                <div className="flex justify-center gap-4 mt-12">
                  {testimonials.map((testimonial, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? `${testimonial.bgColor} shadow-lg` 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-violet-50 rounded-r-[100px] opacity-60" />
        </section>
      </AnimatedSection>

      {/* Enhanced Role-based Access Section */}
      <AnimatedSection>
        <section className="py-28 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Built for Everyone</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored experiences for each stakeholder in the internship ecosystem
              </p>
            </motion.div>
            
            <StaggeredContainer staggerDelay={0.2}>
              {[
                {
                  title: "Students",
                  description: "Discover opportunities, track applications, and showcase your skills",
                  icon: GraduationCap,
                  color: "bg-blue-600",
                  hoverColor: "hover:bg-blue-700",
                  accentColor: "bg-blue-50",
                  link: "/student",
                  features: ["One-click applications", "AI recommendations", "Progress tracking"]
                },
                {
                  title: "Placement Cell",
                  description: "Manage allocations, set quotas, and oversee the entire process",
                  icon: Building,
                  color: "bg-violet-600",
                  hoverColor: "hover:bg-violet-700",
                  accentColor: "bg-violet-50",
                  link: "/admin",
                  features: ["Bulk operations", "Analytics dashboard", "Automated workflows"]
                },
                {
                  title: "Faculty",
                  description: "Review applications, coordinate with industry, and mentor students",
                  icon: Award,
                  color: "bg-emerald-600",
                  hoverColor: "hover:bg-emerald-700",
                  accentColor: "bg-emerald-50",
                  link: "/faculty", 
                  features: ["Quick approvals", "Student mentoring", "Performance insights"]
                },
                {
                  title: "Recruiters",
                  description: "Post internships, find talent, and build your team",
                  icon: Briefcase,
                  color: "bg-orange-600",
                  hoverColor: "hover:bg-orange-700",
                  accentColor: "bg-orange-50",
                  link: "/recruiter",
                  features: ["Verified profiles", "Smart filtering", "Interview scheduling"]
                }
              ].map((role, index) => (
                <motion.div
                  key={role.title}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className={`bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group mb-8 md:mb-0 border border-gray-100`}
                >
                  {/* Background decoration on hover */}
                  <motion.div
                    className={`absolute inset-0 ${role.accentColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`${role.color} ${role.hoverColor} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg transition-colors duration-300`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <role.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{role.title}</h3>
                    <p className="text-gray-600 mb-8 text-center text-lg">{role.description}</p>
                    
                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {role.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-3 text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <MagneticButton className="w-full">
                      <Button 
                        variant="outline" 
                        className={`w-full border-2 border-gray-300 ${role.hoverColor.replace('hover:bg-', 'hover:border-').replace('hover:bg-', 'hover:text-')} transition-all duration-300 rounded-2xl h-12`}
                        asChild
                      >
                        <Link to={role.link}>
                          Access Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  </div>
                </motion.div>
              ))}
            </StaggeredContainer>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/4 h-3/4 bg-white rounded-bl-[100px] opacity-80" />
        </section>
      </AnimatedSection>

      {/* Enhanced CTA Section */}
      <AnimatedSection>
        <section className="py-28 bg-blue-600 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-16 h-16 bg-blue-400 rounded-2xl opacity-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 45, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              className="text-5xl font-bold text-white mb-8 md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Turn Internship Chaos into Career Growth
            </motion.h2>
            <motion.p 
              className="text-2xl text-blue-100 mb-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands of students and companies already transforming their internship experience
            </motion.p>
            
            <motion.div 
              className="flex flex-col items-center justify-center gap-8 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <MagneticButton>
                <Button 
                  size="lg" 
                  className="h-16 px-12 text-xl bg-white text-blue-600 hover:bg-gray-100 shadow-2xl rounded-2xl"
                  asChild
                >
                  <Link to="/signup">
                    Request Demo <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </MagneticButton>
              
              <MagneticButton>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-16 px-12 text-xl border-2 border-white text-white hover:bg-white/10 rounded-2xl"
                  asChild
                >
                  <Link to="/signup">
                    Sign Up Free
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
            
            {/* Enhanced trust indicators */}
            <motion.div 
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Shield, text: "Enterprise Security" },
                { icon: Globe, text: "24/7 Support" },
                { icon: TrendingUp, text: "99.9% Uptime" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center gap-3 text-blue-100"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-lg font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 py-20 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid gap-16 md:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Brand */}
            <div>
              <motion.div 
                className="flex items-center space-x-4 mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="h-7 w-7 text-white" />
                </motion.div>
                <span className="text-2xl font-bold">SIH Portal</span>
              </motion.div>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Revolutionizing internship allocation with AI-powered smart matching and streamlined workflows.
              </p>
              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Globe className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </div>
            
            {/* Footer sections with enhanced styling */}
            {[
              {
                title: "Platform",
                links: [
                  { label: "About Us", href: "/about" },
                  { label: "Features", href: "/features" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact", href: "/contact" }
                ]
              },
              {
                title: "Dashboards",
                links: [
                  { label: "Student Portal", href: "/student" },
                  { label: "Admin Panel", href: "/admin" },
                  { label: "Faculty Dashboard", href: "/faculty" },
                  { label: "Recruiter Hub", href: "/recruiter" }
                ]
              },
              {
                title: "Resources",
                links: [
                  { label: "Blog", href: "/blog" },
                  { label: "Guides", href: "/guides" },
                  { label: "API Docs", href: "/api" },
                  { label: "System Status", href: "/status" },
                  { label: "Privacy Policy", href: "/privacy" }
                ]
              }
            ].map((section, sectionIndex) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-8 text-xl">{section.title}</h4>
                <ul className="space-y-4 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: linkIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        to={link.href} 
                        className="hover:text-white transition-colors duration-300 text-lg hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
          
          {/* Enhanced bottom bar */}
          <motion.div 
            className="border-t border-gray-800 mt-16 pt-10 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              &copy; 2025 SIH Internship Portal. Built for Smart India Hackathon 2025. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
