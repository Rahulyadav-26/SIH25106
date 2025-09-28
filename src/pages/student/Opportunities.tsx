import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Search,
  MapPin,
  Calendar,
  Building,
  Star,
  Filter,
  Clock,
  Users,
  Briefcase,
  Heart
} from "lucide-react";

const StudentOpportunities = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);

  const opportunities = [
    {
      id: 1,
      company: "TechCorp Solutions",
      logo: "🏢",
      position: "Software Development Intern",
      type: "Full-time Internship",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹25,000/month",
      posted: "2 days ago",
      deadline: "Jan 30, 2024",
      skills: ["Python", "Django", "React", "PostgreSQL"],
      description: "Work on cutting-edge web applications and gain hands-on experience with modern development practices.",
      matchScore: 95,
      applicants: 45
    },
    {
      id: 2,
      company: "DataFlow Analytics",
      logo: "📊",
      position: "Data Science Intern",
      type: "Research Internship",
      location: "Mumbai",
      duration: "4 months",
      stipend: "₹30,000/month",
      posted: "1 week ago",
      deadline: "Feb 5, 2024",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      description: "Analyze large datasets and build predictive models for business intelligence solutions.",
      matchScore: 88,
      applicants: 32
    },
    {
      id: 3,
      company: "CloudTech Innovations",
      logo: "☁️",
      position: "DevOps Engineering Intern",
      type: "Technical Internship",
      location: "Remote",
      duration: "6 months",
      stipend: "₹22,000/month",
      posted: "3 days ago",
      deadline: "Feb 15, 2024",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins"],
      description: "Learn cloud infrastructure management and deployment automation practices.",
      matchScore: 72,
      applicants: 28
    },
    {
      id: 4,
      company: "FinTech Dynamics",
      logo: "💰",
      position: "Frontend Developer Intern",
      type: "Development Internship",
      location: "Pune",
      duration: "5 months",
      stipend: "₹20,000/month",
      posted: "5 days ago",
      deadline: "Jan 25, 2024",
      skills: ["React", "TypeScript", "CSS", "JavaScript"],
      description: "Build responsive user interfaces for financial applications and trading platforms.",
      matchScore: 85,
      applicants: 67
    },
    {
      id: 5,
      company: "AI Research Lab",
      logo: "🤖",
      position: "Machine Learning Research Intern",
      type: "Research Internship",
      location: "Hyderabad",
      duration: "8 months",
      stipend: "₹35,000/month",
      posted: "1 day ago",
      deadline: "Feb 20, 2024",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
      description: "Contribute to cutting-edge AI research projects in natural language processing and computer vision.",
      matchScore: 92,
      applicants: 15
    },
    {
      id: 6,
      company: "GreenTech Solutions",
      logo: "🌱",
      position: "Sustainability Data Analyst Intern",
      type: "Impact Internship",
      location: "Chennai",
      duration: "4 months",
      stipend: "₹18,000/month",
      posted: "1 week ago",
      deadline: "Feb 10, 2024",
      skills: ["R", "Python", "Data Visualization", "Statistics"],
      description: "Analyze environmental data and contribute to sustainable technology solutions.",
      matchScore: 78,
      applicants: 23
    }
  ];

  const handleApply = (opportunity: any) => {
    toast({
      title: "Application submitted!",
      description: `Your application for ${opportunity.position} at ${opportunity.company} has been submitted successfully.`,
    });
  };

  const handleSaveJob = (id: number) => {
    setSavedJobs(prev => 
      prev.includes(id) 
        ? prev.filter(jobId => jobId !== id)
        : [...prev, id]
    );
    
    toast({
      title: savedJobs.includes(id) ? "Job removed from saved" : "Job saved!",
      description: savedJobs.includes(id) 
        ? "This opportunity has been removed from your saved jobs."
        : "This opportunity has been saved to your list.",
    });
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-warning";
    return "text-muted-foreground";
  };

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesSearch = opportunity.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = !locationFilter || opportunity.location === locationFilter;
    const matchesType = !typeFilter || opportunity.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Internship Opportunities</h1>
            <p className="text-muted-foreground">
              Discover and apply to internships that match your skills and interests
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {filteredOpportunities.length} opportunities
          </Badge>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-medium">
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search opportunities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Internship Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="Full-time Internship">Full-time</SelectItem>
                  <SelectItem value="Research Internship">Research</SelectItem>
                  <SelectItem value="Technical Internship">Technical</SelectItem>
                  <SelectItem value="Development Internship">Development</SelectItem>
                  <SelectItem value="Impact Internship">Impact</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Opportunities List */}
        <div className="space-y-4">
          {filteredOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="border-0 shadow-medium hover:shadow-large transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="text-4xl">{opportunity.logo}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold">{opportunity.position}</h3>
                        <Badge 
                          variant="secondary" 
                          className={`${getMatchScoreColor(opportunity.matchScore)} bg-transparent border`}
                        >
                          {opportunity.matchScore}% match
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{opportunity.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{opportunity.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{opportunity.applicants} applicants</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {opportunity.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {opportunity.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <span className="font-medium">{opportunity.stipend}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>Posted {opportunity.posted}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-destructive">
                            <span>Deadline: {opportunity.deadline}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSaveJob(opportunity.id)}
                      className={savedJobs.includes(opportunity.id) ? "text-destructive" : ""}
                    >
                      <Heart className={`h-4 w-4 ${savedJobs.includes(opportunity.id) ? 'fill-current' : ''}`} />
                    </Button>
                    <Button 
                      onClick={() => handleApply(opportunity)}
                      className="min-w-[100px]"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No opportunities found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
          </div>
        )}

        {/* Recommended Opportunities */}
        <Card className="border-0 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Recommendations for You</span>
            </CardTitle>
            <CardDescription>
              Based on your skills and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-medium text-primary">Full Stack Development</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  5 new opportunities matching your React and Python skills
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  View Opportunities
                </Button>
              </div>
              <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                <h4 className="font-medium text-secondary">Data Science</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  3 research internships in machine learning and analytics
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Explore Roles
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentOpportunities;