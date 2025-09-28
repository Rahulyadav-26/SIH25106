import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Student Dashboard
import StudentDashboard from "./pages/student/Dashboard";
import StudentProfile from "./pages/student/Profile";
import StudentOpportunities from "./pages/student/Opportunities";
import StudentApplications from "./pages/student/Applications";
import StudentResults from "./pages/student/Results";
import StudentFeedback from "./pages/student/Feedback";

// Admin Dashboard
import AdminDashboard from "./pages/admin/Dashboard";
import AdminDataManagement from "./pages/admin/DataManagement";
import AdminRulesQuotas from "./pages/admin/RulesQuotas";
import AdminAllocation from "./pages/admin/Allocation";
import AdminOverrides from "./pages/admin/Overrides";
import AdminReports from "./pages/admin/Reports";
import AdminLogs from "./pages/admin/Logs";

// Faculty Dashboard
import FacultyDashboard from "./pages/faculty/Dashboard";
import FacultyApprovals from "./pages/faculty/Approvals";
import FacultySchedule from "./pages/faculty/Schedule";
import FacultyFeedback from "./pages/faculty/Feedback";

// Recruiter Dashboard
import RecruiterDashboard from "./pages/recruiter/Dashboard";
import RecruiterJobs from "./pages/recruiter/Jobs";
import RecruiterCandidates from "./pages/recruiter/Candidates";
import RecruiterFeedback from "./pages/recruiter/Feedback";

// Analytics
import Analytics from "./pages/analytics/Analytics";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Student Routes */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/opportunities" element={<StudentOpportunities />} />
          <Route path="/student/applications" element={<StudentApplications />} />
          <Route path="/student/results" element={<StudentResults />} />
          <Route path="/student/feedback" element={<StudentFeedback />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/data" element={<AdminDataManagement />} />
          <Route path="/admin/rules" element={<AdminRulesQuotas />} />
          <Route path="/admin/allocation" element={<AdminAllocation />} />
          <Route path="/admin/overrides" element={<AdminOverrides />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/logs" element={<AdminLogs />} />

          {/* Faculty Routes */}
          <Route path="/faculty" element={<FacultyDashboard />} />
          <Route path="/faculty/approvals" element={<FacultyApprovals />} />
          <Route path="/faculty/schedule" element={<FacultySchedule />} />
          <Route path="/faculty/feedback" element={<FacultyFeedback />} />

          {/* Recruiter Routes */}
          <Route path="/recruiter" element={<RecruiterDashboard />} />
          <Route path="/recruiter/jobs" element={<RecruiterJobs />} />
          <Route path="/recruiter/candidates" element={<RecruiterCandidates />} />
          <Route path="/recruiter/feedback" element={<RecruiterFeedback />} />

          {/* Analytics Routes */}
          <Route path="/analytics" element={<Analytics />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;