import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Calendar,
  MapPin,
  Building,
  AlertCircle
} from "lucide-react";

const StudentApplications = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const applications = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Software Development Intern",
      location: "Bangalore",
      appliedDate: "2024-01-15",
      status: "under_review",
      statusText: "Under Review",
      statusColor: "text-warning",
      bgColor: "bg-warning/10",
      nextStep: "Technical Round scheduled for Jan 22, 2024",
      interviewDate: "2024-01-22T10:00:00",
      stipend: "₹25,000/month",
      duration: "6 months"
    },
    {
      id: 2,
      company: "DataFlow Analytics",
      position: "Data Science Intern",
      location: "Mumbai",
      appliedDate: "2024-01-12",
      status: "interview_scheduled",
      statusText: "Interview Scheduled",
      statusColor: "text-primary",
      bgColor: "bg-primary/10",
      nextStep: "Technical Interview on Jan 20, 2024 at 10:00 AM",
      interviewDate: "2024-01-20T10:00:00",
      stipend: "₹30,000/month",
      duration: "4 months"
    },
    {
      id: 3,
      company: "CloudTech Innovations",
      position: "DevOps Engineering Intern",
      location: "Remote",
      appliedDate: "2024-01-10",
      status: "submitted",
      statusText: "Application Submitted",
      statusColor: "text-muted-foreground",
      bgColor: "bg-muted/50",
      nextStep: "Application is being reviewed by HR team",
      stipend: "₹22,000/month",
      duration: "6 months"
    },
    {
      id: 4,
      company: "FinTech Dynamics",
      position: "Frontend Developer Intern",
      location: "Pune",
      appliedDate: "2024-01-08",
      status: "rejected",
      statusText: "Not Selected",
      statusColor: "text-destructive",
      bgColor: "bg-destructive/10",
      nextStep: "Unfortunately, your application was not successful this time",
      feedback: "Strong technical skills, but looking for candidates with more React experience",
      stipend: "₹20,000/month",
      duration: "5 months"
    },
    {
      id: 5,
      company: "StartupHub Inc",
      position: "Full Stack Developer Intern",
      location: "Bangalore",
      appliedDate: "2024-01-05",
      status: "accepted",
      statusText: "Offer Received",
      statusColor: "text-success",
      bgColor: "bg-success/10",
      nextStep: "Please respond to the offer by Jan 25, 2024",
      offerDeadline: "2024-01-25",
      stipend: "₹28,000/month",
      duration: "6 months"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <Clock className="h-4 w-4" />;
      case "under_review":
        return <Eye className="h-4 w-4" />;
      case "interview_scheduled":
        return <Calendar className="h-4 w-4" />;
      case "accepted":
        return <CheckCircle className="h-4 w-4" />;
      case "rejected":
        return <XCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const filteredApplications = applications.filter(app => {
    if (selectedTab === "all") return true;
    return app.status === selectedTab;
  });

  const statusCounts = {
    all: applications.length,
    submitted: applications.filter(app => app.status === "submitted").length,
    under_review: applications.filter(app => app.status === "under_review").length,
    interview_scheduled: applications.filter(app => app.status === "interview_scheduled").length,
    accepted: applications.filter(app => app.status === "accepted").length,
    rejected: applications.filter(app => app.status === "rejected").length,
  };

  const tabs = [
    { id: "all", label: "All Applications", count: statusCounts.all },
    { id: "submitted", label: "Submitted", count: statusCounts.submitted },
    { id: "under_review", label: "Under Review", count: statusCounts.under_review },
    { id: "interview_scheduled", label: "Interview", count: statusCounts.interview_scheduled },
    { id: "accepted", label: "Offers", count: statusCounts.accepted },
    { id: "rejected", label: "Closed", count: statusCounts.rejected },
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Applications</h1>
            <p className="text-muted-foreground">
              Track the status of your internship applications
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {applications.length} total applications
          </Badge>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-5">
          <Card className="border-0 shadow-medium">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{statusCounts.submitted}</div>
              <p className="text-xs text-muted-foreground">Submitted</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-medium">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-warning">{statusCounts.under_review}</div>
              <p className="text-xs text-muted-foreground">Under Review</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-medium">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-secondary">{statusCounts.interview_scheduled}</div>
              <p className="text-xs text-muted-foreground">Interviews</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-medium">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-success">{statusCounts.accepted}</div>
              <p className="text-xs text-muted-foreground">Offers</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-medium">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-muted-foreground">{statusCounts.rejected}</div>
              <p className="text-xs text-muted-foreground">Closed</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium ${
                  selectedTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {tab.count}
                  </Badge>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.map((application) => (
            <Card key={application.id} className="border-0 shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${application.bgColor}`}>
                        {getStatusIcon(application.status)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{application.position}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4" />
                            <span>{application.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{application.location}</span>
                          </div>
                          <span>Applied on {application.appliedDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium mb-1">Status</p>
                        <Badge 
                          variant="secondary" 
                          className={`${application.statusColor} bg-transparent border`}
                        >
                          {application.statusText}
                        </Badge>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-1">Next Step</p>
                        <p className="text-sm text-muted-foreground">{application.nextStep}</p>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-1">Compensation</p>
                        <p className="text-sm">{application.stipend} • {application.duration}</p>
                      </div>

                      {application.interviewDate && (
                        <div>
                          <p className="text-sm font-medium mb-1">Interview Date</p>
                          <div className="flex items-center space-x-1 text-sm">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{new Date(application.interviewDate).toLocaleDateString()}</span>
                            <span>at {new Date(application.interviewDate).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                          </div>
                        </div>
                      )}

                      {application.offerDeadline && (
                        <div>
                          <p className="text-sm font-medium mb-1">Offer Deadline</p>
                          <div className="flex items-center space-x-1 text-sm text-destructive">
                            <AlertCircle className="h-4 w-4" />
                            <span>Respond by {application.offerDeadline}</span>
                          </div>
                        </div>
                      )}

                      {application.feedback && (
                        <div className="md:col-span-2">
                          <p className="text-sm font-medium mb-1">Feedback</p>
                          <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
                            {application.feedback}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    {application.status === "accepted" && (
                      <>
                        <Button variant="default" size="sm">
                          Accept Offer
                        </Button>
                        <Button variant="outline" size="sm">
                          Decline
                        </Button>
                      </>
                    )}
                    {application.status === "interview_scheduled" && (
                      <Button variant="outline" size="sm">
                        Join Interview
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No applications found</h3>
            <p className="text-muted-foreground mb-4">
              {selectedTab === "all" 
                ? "You haven't submitted any applications yet." 
                : `No applications with status "${selectedTab.replace('_', ' ')}".`}
            </p>
            <Button variant="outline">
              Browse Opportunities
            </Button>
          </div>
        )}

        {/* Upcoming Deadlines */}
        {statusCounts.accepted > 0 && (
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-destructive">
                <AlertCircle className="h-5 w-5" />
                <span>Action Required</span>
              </CardTitle>
              <CardDescription>
                You have pending offers that require your response
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {applications
                  .filter(app => app.status === "accepted")
                  .map(app => (
                    <div key={app.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="font-medium">{app.position} at {app.company}</p>
                        <p className="text-sm text-muted-foreground">
                          Offer deadline: {app.offerDeadline}
                        </p>
                      </div>
                      <div className="space-x-2">
                        <Button size="sm" variant="destructive">
                          Accept
                        </Button>
                        <Button size="sm" variant="outline">
                          Decline
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default StudentApplications;