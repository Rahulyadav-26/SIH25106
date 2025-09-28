import DashboardLayout from "@/components/layout/DashboardLayout";

const FacultyFeedback = () => {
  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Training Feedback</h1>
          <p className="text-muted-foreground">Submit feedback and generate certificates</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultyFeedback;