import DashboardLayout from "@/components/layout/DashboardLayout";

const FacultyApprovals = () => {
  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Application Review</h1>
          <p className="text-muted-foreground">Review and approve student applications</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultyApprovals;