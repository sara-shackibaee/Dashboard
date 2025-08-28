import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import EmployeeState from './components/employee_state';
import TeamState from './components/team_state';

export default function DashboardPage() {
  return (
    <>
      <Tabs defaultValue="employees">
        <TabsList className="mb-4">
          <TabsTrigger value="employees">Employee state</TabsTrigger>
          <TabsTrigger value="teams">Teams state</TabsTrigger>
        </TabsList>
        <TabsContent value="employees">
          <EmployeeState />
        </TabsContent>
        <TabsContent value="teams">
          <TeamState />
        </TabsContent>
      </Tabs>
    </>
  );
}
