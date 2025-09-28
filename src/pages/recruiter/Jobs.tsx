import DashboardLayout from "@/components/layout/DashboardLayout";

const RecruiterJobs = () => {
  return (
    <DashboardLayout role="recruiter">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Post Internships</h1>
          <p className="text-muted-foreground">Create and manage internship opportunities</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecruiterJobs;