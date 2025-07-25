
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight } from "lucide-react";

// Mock data for applications - in a real app, this would come from an API or context
interface Application {
  id: number;
  response?: boolean;
  status?: string;
}

const mockApplications: Application[] = [];

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mockApplications.length}</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <span className="text-green-500 dark:text-green-400">0</span> from last week
          </p>
        </CardContent>
      </Card>
            
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Responses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {mockApplications.filter(app => app.response).length}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {((mockApplications.filter(app => app.response).length / mockApplications.length) * 100).toFixed(0)}% response rate
          </p>
        </CardContent>
      </Card>
            
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Interviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {mockApplications.filter(app => app.status === "Interview").length}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <span className="text-green-500 dark:text-green-400">0</span> scheduled this week
          </p>
        </CardContent>
      </Card>
            
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Profile Strength</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">0%</div>
            <ArrowUpRight className="h-4 w-4 text-green-500 dark:text-green-400" />
          </div>
          <Progress value={0} className="h-2 mt-2" />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
