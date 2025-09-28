import DashboardLayout from "@/components/layout/DashboardLayout";

const FacultyDashboard = () => {
  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Faculty Dashboard</h1>
          <p className="text-muted-foreground">Review applications and coordinate internships</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultyDashboard;