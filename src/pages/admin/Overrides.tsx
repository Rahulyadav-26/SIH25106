import DashboardLayout from "@/components/layout/DashboardLayout";

const AdminOverrides = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Manual Overrides</h1>
          <p className="text-muted-foreground">Manually adjust allocations when needed</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminOverrides;