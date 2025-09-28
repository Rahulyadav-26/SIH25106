import DashboardLayout from "@/components/layout/DashboardLayout";

const RecruiterDashboard = () => {
  return (
    <DashboardLayout role="recruiter">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Recruiter Hub</h1>
          <p className="text-muted-foreground">Manage internship postings and candidates</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecruiterDashboard;