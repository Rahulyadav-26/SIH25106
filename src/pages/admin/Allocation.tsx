import DashboardLayout from "@/components/layout/DashboardLayout";

const AdminAllocation = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Run Allocation Engine</h1>
          <p className="text-muted-foreground">Execute AI-powered allocation algorithm</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminAllocation;