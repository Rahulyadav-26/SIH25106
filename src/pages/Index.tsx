import { useState } from "react";
import { Link } from "react-router-dom";
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
  Briefcase
} from "lucide-react";

const Index = () => {
  const [stats] = useState({
    totalStudents: "50,000+",
    activeInternships: "5,000+",
    placementRate: "95%",
    partnerCompanies: "1,200+"
  });

  const features = [
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI-powered algorithm matches students with ideal internship opportunities based on skills and preferences"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Blockchain-based audit trails and JWT authentication ensure complete data security and transparency"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track applications, monitor progress, and analyze placement trends with interactive dashboards"
    },
    {
      icon: Users,
      title: "Multi-Role Support",
      description: "Dedicated interfaces for students, faculty, placement cells, and recruiters with role-based access"
    }
  ];

  const roles = [
    {
      title: "Students",
      description: "Discover opportunities, track applications, and showcase your skills",
      icon: GraduationCap,
      color: "bg-primary-light",
      link: "/student"
    },
    {
      title: "Placement Cell",
      description: "Manage allocations, set quotas, and oversee the entire process",
      icon: Building,
      color: "bg-secondary-light",
      link: "/admin"
    },
    {
      title: "Faculty",
      description: "Review applications, coordinate with industry, and mentor students",
      icon: Award,
      color: "bg-accent-light",
      link: "/faculty"
    },
    {
      title: "Recruiters",
      description: "Post internships, find talent, and build your team",
      icon: Briefcase,
      color: "bg-warning/20",
      link: "/recruiter"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="container relative mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20" variant="secondary">
              🇮🇳 Smart India Hackathon 2024 Solution
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Transform
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Internship Allocation
              </span>
            </h1>
            <p className="mb-8 text-lg text-blue-100 md:text-xl lg:text-2xl">
              AI-powered platform connecting students with industry opportunities through fair, 
              transparent, and efficient allocation processes
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                variant="hero" 
                className="h-12 px-8 text-lg"
                asChild
              >
                <Link to="/signup">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 border-white bg-white/10 px-8 text-lg text-white backdrop-blur hover:bg-white/20"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">{stats.totalStudents}</div>
              <div className="text-sm text-muted-foreground">Students Registered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary md:text-4xl">{stats.activeInternships}</div>
              <div className="text-sm text-muted-foreground">Active Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent md:text-4xl">{stats.placementRate}</div>
              <div className="text-sm text-muted-foreground">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning md:text-4xl">{stats.partnerCompanies}</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Powerful Features</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Built with cutting-edge technology to ensure fair and efficient internship allocation
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-medium">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Role-based Access Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Built for Everyone</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Tailored experiences for each stakeholder in the internship ecosystem
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roles.map((role) => (
              <Card key={role.title} className="group border-0 shadow-medium transition-all hover:shadow-large hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${role.color}`}>
                    <role.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:border-primary group-hover:text-primary" asChild>
                    <Link to={role.link}>
                      Access Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Streamlined process from application to placement
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Profile Setup", description: "Complete your profile with skills and preferences", icon: Users },
              { step: "2", title: "Browse & Apply", description: "Discover opportunities and submit applications", icon: MapPin },
              { step: "3", title: "Smart Matching", description: "AI algorithm finds the best fit for everyone", icon: Target },
              { step: "4", title: "Get Placed", description: "Receive allocation and start your internship", icon: CheckCircle }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-2xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Transform Your Internship Experience?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Join thousands of students and companies already using our platform
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="h-12 bg-white px-8 text-lg text-primary hover:bg-gray-100"
              asChild
            >
              <Link to="/signup">Start Your Journey</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 border-white bg-transparent px-8 text-lg text-white hover:bg-white/10"
              asChild
            >
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">SIH Portal</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing internship allocation with AI-powered smart matching
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Dashboards</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/student" className="hover:text-white">Student Portal</Link></li>
                <li><Link to="/admin" className="hover:text-white">Admin Panel</Link></li>
                <li><Link to="/faculty" className="hover:text-white">Faculty Dashboard</Link></li>
                <li><Link to="/recruiter" className="hover:text-white">Recruiter Hub</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Analytics</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/analytics" className="hover:text-white">Performance Metrics</Link></li>
                <li><Link to="/analytics" className="hover:text-white">Placement Trends</Link></li>
                <li><Link to="/analytics" className="hover:text-white">Regional Data</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SIH Internship Portal. Built for Smart India Hackathon 2024.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;