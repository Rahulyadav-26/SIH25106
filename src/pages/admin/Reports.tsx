import DashboardLayout from "@/components/layout/DashboardLayout";

const AdminReports = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground">Generate and export comprehensive reports</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminReports;