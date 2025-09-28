import DashboardLayout from "@/components/layout/DashboardLayout";

const FacultySchedule = () => {
  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Interview Schedule</h1>
          <p className="text-muted-foreground">Coordinate interviews with academic calendar</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FacultySchedule;