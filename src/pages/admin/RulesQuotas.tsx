import DashboardLayout from "@/components/layout/DashboardLayout";

const AdminRulesQuotas = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Rules & Quotas</h1>
          <p className="text-muted-foreground">Configure allocation rules and quotas</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminRulesQuotas;