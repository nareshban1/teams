import { AppProvider } from "@/provider/AppProvider";
import TeamEmployeeTab from "../TeamEmployeeTab/TeamEmployeeTab";
import CardGrid from "./CardGrid";
import { ComponentName, DashboardWrapper } from "./Dashboard.styles";

const Dashboard = () => {
  return (
    <AppProvider>
      <DashboardWrapper>
        <ComponentName>Manage Users</ComponentName>
        <CardGrid />
        <TeamEmployeeTab />
      </DashboardWrapper>{" "}
    </AppProvider>
  );
};

export default Dashboard;
