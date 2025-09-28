import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Shield, 
  Users, 
  BarChart3,
  Award,
  Globe,
  Lightbulb,
  Heart
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Allocation Engine",
      description: "Advanced AI algorithms ensure fair and optimal matching between students and internship opportunities"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable audit trails and secure data handling with blockchain technology"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Platform",
      description: "Seamless collaboration between students, faculty, placement cells, and recruiters"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards and insights for data-driven decision making"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for the highest standards in education and industry collaboration"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality internship opportunities available to all deserving students"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to solve real-world challenges"
    },
    {
      icon: Heart,
      title: "Fairness",
      description: "Ensuring transparent and unbiased allocation processes for everyone"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20" variant="secondary">
              🚀 Smart India Hackathon 2024
            </Badge>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              About SIH Internship Portal
            </h1>
            <p className="text-lg text-blue-100 md:text-xl">
              Revolutionizing the way students connect with industry through AI-powered 
              internship allocation and transparent placement processes
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              To bridge the gap between academia and industry by creating a transparent, 
              efficient, and fair internship allocation system that maximizes opportunities 
              for students while meeting industry requirements.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl">For Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover relevant internship opportunities, showcase your skills, 
                    and get matched with companies that align with your career goals 
                    and academic background.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl">For Industry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access a pool of qualified, pre-screened candidates and build 
                    meaningful partnerships with educational institutions to nurture 
                    future talent.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Key Features</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Built with modern technology stack to ensure scalability, security, and user experience
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-medium text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide our development and drive our commitment to excellence
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technical Implementation</h2>
              <p className="text-lg text-muted-foreground">
                Built using modern technologies for scalability and performance
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle>Frontend Technology</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vite</Badge>
                  <Badge variant="secondary">React Router</Badge>
                  <Badge variant="secondary">Recharts</Badge>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle>Backend & Infrastructure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">JWT Authentication</Badge>
                  <Badge variant="secondary">Blockchain Audit</Badge>
                  <Badge variant="secondary">AI/ML Integration</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Impact & Reach</h2>
            <p className="text-lg text-muted-foreground">
              Expected outcomes and projected impact of the SIH solution
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary">50K+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">5K+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warning">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Built for Smart India Hackathon 2024
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Developed as part of the Smart India Hackathon initiative to solve real-world 
            challenges in education and industry collaboration
          </p>
          <div className="mx-auto max-w-2xl rounded-lg bg-white/10 p-6 backdrop-blur">
            <h3 className="mb-4 text-xl font-semibold text-white">Problem Statement</h3>
            <p className="text-blue-100">
              "Develop a comprehensive platform for fair and transparent internship/industrial 
              training allocation with placement opportunities, ensuring optimal matching 
              between students and industry requirements."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;