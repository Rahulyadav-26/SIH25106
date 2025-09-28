import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  FileText, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Target,
  Star,
  Calendar,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const stats = {
    profileCompletion: 85,
    applicationsSubmitted: 3,
    interviewsScheduled: 1,
    offersReceived: 0
  };

  const recentApplications = [
    {
      company: "TechCorp Solutions",
      position: "Software Development Intern",
      status: "Under Review",
      appliedDate: "2024-01-15",
      location: "Bangalore",
      statusColor: "text-warning"
    },
    {
      company: "DataFlow Analytics",
      position: "Data Science Intern",
      status: "Interview Scheduled",
      appliedDate: "2024-01-12",
      location: "Mumbai",
      statusColor: "text-primary"
    },
    {
      company: "CloudTech Innovations",
      position: "DevOps Intern",
      status: "Application Submitted",
      appliedDate: "2024-01-10",
      location: "Remote",
      statusColor: "text-muted-foreground"
    }
  ];

  const upcomingEvents = [
    {
      title: "Interview with DataFlow Analytics",
      date: "2024-01-20",
      time: "10:00 AM",
      type: "Technical Interview"
    },
    {
      title: "Application Deadline - AI Research Lab",
      date: "2024-01-25",
      time: "11:59 PM",
      type: "Deadline"
    },
    {
      title: "Career Guidance Session",
      date: "2024-01-22",
      time: "2:00 PM",
      type: "Workshop"
    }
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Priya!</h1>
            <p className="text-muted-foreground">
              Track your internship applications and discover new opportunities
            </p>
          </div>
          <Button variant="default" asChild>
            <Link to="/student/opportunities">
              Browse Opportunities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-0 shadow-medium">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.profileCompletion}%</div>
              <Progress value={stats.profileCompletion} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Complete your profile to improve matching
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-medium">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.applicationsSubmitted}</div>
              <p className="text-xs text-muted-foreground">
                +1 from last week
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-medium">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.interviewsScheduled}</div>
              <p className="text-xs text-muted-foreground">
                Scheduled this week
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-medium">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Offers</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.offersReceived}</div>
              <p className="text-xs text-muted-foreground">
                Keep applying!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Applications */}
          <Card className="border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Applications
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/student/applications">View All</Link>
                </Button>
              </CardTitle>
              <CardDescription>
                Track the status of your recent applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex-1">
                      <div className="font-medium">{application.company}</div>
                      <div className="text-sm text-muted-foreground">{application.position}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{application.location}</span>
                        <span className="text-xs text-muted-foreground">• Applied {application.appliedDate}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className={`${application.statusColor} bg-transparent`}>
                        {application.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-0 shadow-medium">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Important dates and deadlines
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0">
                      {event.type === "Technical Interview" && <Calendar className="h-5 w-5 text-primary" />}
                      {event.type === "Deadline" && <AlertCircle className="h-5 w-5 text-destructive" />}
                      {event.type === "Workshop" && <Star className="h-5 w-5 text-accent" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {event.date} at {event.time}
                      </div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Completion Tips */}
        <Card className="border-0 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Boost Your Profile</span>
            </CardTitle>
            <CardDescription>
              Complete these sections to improve your chances of getting matched
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-medium text-primary">Add Skills</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  List your technical skills and certifications
                </p>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <Link to="/student/profile">Update Skills</Link>
                </Button>
              </div>
              <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                <h4 className="font-medium text-secondary">Upload Resume</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Keep your resume updated and relevant
                </p>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <Link to="/student/profile">Upload Resume</Link>
                </Button>
              </div>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <h4 className="font-medium text-accent">Set Preferences</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Define your location and role preferences
                </p>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <Link to="/student/profile">Set Preferences</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;