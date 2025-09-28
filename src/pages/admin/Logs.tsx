import DashboardLayout from "@/components/layout/DashboardLayout";

const AdminLogs = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Activity Logs</h1>
          <p className="text-muted-foreground">Track all system activities and changes</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminLogs;