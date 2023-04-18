import React from "react";
import InfoCard from "./InfoCard";
import {
  CardGridWrapper,
  ComponentName,
  DashboardWrapper,
} from "./Dashboard.styles";
import CardGrid from "./CardGrid";
import TeamEmployeeTab from "../TeamEmployeeTab/TeamEmployeeTab";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <ComponentName>Manage Users</ComponentName>
      <CardGrid />
      <TeamEmployeeTab />
    </DashboardWrapper>
  );
};

export default Dashboard;
