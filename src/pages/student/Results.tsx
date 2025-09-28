import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const StudentResults = () => {
  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Allocation Results</h1>
          <p className="text-muted-foreground">View your internship allocation and AI matching explanation</p>
        </div>
        
        <Card className="border-0 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>Allocation Result</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <h3 className="font-semibold text-success mb-2">Congratulations! You've been allocated:</h3>
                <p className="text-lg font-medium">Software Development Intern at TechCorp Solutions</p>
                <p className="text-sm text-muted-foreground">Location: Bangalore • Duration: 6 months • Stipend: ₹25,000/month</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">AI Matching Explanation (95% Match)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Skills match: Python, Java, React (90% compatibility)</li>
                  <li>• Location preference: Bangalore (Perfect match)</li>
                  <li>• Academic performance: 8.75 CGPA meets requirements</li>
                  <li>• Project experience: Strong alignment with role requirements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentResults;