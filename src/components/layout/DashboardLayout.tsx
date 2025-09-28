import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard,
  User,
  Search,
  FileText,
  BarChart3,
  MessageSquare,
  Users,
  Database,
  Settings,
  Award,
  Calendar,
  Briefcase,
  MapPin,
  Activity
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "student" | "admin" | "faculty" | "recruiter";
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const location = useLocation();

  const navigationMap = {
    student: [
      { name: "Dashboard", href: "/student", icon: LayoutDashboard },
      { name: "Profile", href: "/student/profile", icon: User },
      { name: "Opportunities", href: "/student/opportunities", icon: Search },
      { name: "Applications", href: "/student/applications", icon: FileText },
      { name: "Results", href: "/student/results", icon: BarChart3 },
      { name: "Feedback", href: "/student/feedback", icon: MessageSquare },
    ],
    admin: [
      { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
      { name: "Data Management", href: "/admin/data", icon: Database },
      { name: "Rules & Quotas", href: "/admin/rules", icon: Settings },
      { name: "Run Allocation", href: "/admin/allocation", icon: BarChart3 },
      { name: "Manual Overrides", href: "/admin/overrides", icon: Award },
      { name: "Reports", href: "/admin/reports", icon: FileText },
      { name: "Activity Logs", href: "/admin/logs", icon: Activity },
    ],
    faculty: [
      { name: "Dashboard", href: "/faculty", icon: LayoutDashboard },
      { name: "Application Review", href: "/faculty/approvals", icon: FileText },
      { name: "Interview Schedule", href: "/faculty/schedule", icon: Calendar },
      { name: "Training Feedback", href: "/faculty/feedback", icon: MessageSquare },
    ],
    recruiter: [
      { name: "Dashboard", href: "/recruiter", icon: LayoutDashboard },
      { name: "Post Internships", href: "/recruiter/jobs", icon: Briefcase },
      { name: "View Candidates", href: "/recruiter/candidates", icon: Users },
      { name: "Submit Feedback", href: "/recruiter/feedback", icon: MessageSquare },
    ]
  };

  const navigation = navigationMap[role];

  const roleConfig = {
    student: {
      title: "Student Portal",
      description: "Manage your internship journey",
      color: "text-primary"
    },
    admin: {
      title: "Admin Panel",
      description: "Placement Cell Management",
      color: "text-secondary"
    },
    faculty: {
      title: "Faculty Dashboard",
      description: "Review and coordinate internships",
      color: "text-accent"
    },
    recruiter: {
      title: "Recruiter Hub",
      description: "Find and manage talent",
      color: "text-warning"
    }
  };

  const config = roleConfig[role];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-medium">
          <div className="p-6 border-b">
            <h2 className={`text-lg font-semibold ${config.color}`}>
              {config.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {config.description}
            </p>
          </div>
          
          <nav className="p-4">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.name}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        isActive && "bg-primary/10 text-primary border-r-2 border-primary"
                      )}
                      asChild
                    >
                      <Link to={item.href}>
                        <item.icon className="mr-3 h-4 w-4" />
                        {item.name}
                        {/* Demo badges for certain items */}
                        {(item.name === "Applications" || item.name === "Results") && (
                          <Badge variant="secondary" className="ml-auto text-xs">
                            3
                          </Badge>
                        )}
                      </Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Quick Stats in Sidebar */}
          <div className="p-4 border-t mt-4">
            <div className="text-xs font-medium text-muted-foreground mb-2">
              QUICK STATS
            </div>
            {role === "student" && (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Applications</span>
                  <Badge variant="outline" className="text-xs">3</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Profile Strength</span>
                  <Badge variant="secondary" className="text-xs">85%</Badge>
                </div>
              </div>
            )}
            {role === "admin" && (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Students</span>
                  <Badge variant="outline" className="text-xs">1,247</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Active Positions</span>
                  <Badge variant="secondary" className="text-xs">89</Badge>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;