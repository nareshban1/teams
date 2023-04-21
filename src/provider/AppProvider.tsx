import { IEmployeeData } from "@/core/Employee/Employee.schema";
import { ITeamData } from "@/core/Team/Team.schema";
import { createContext, useCallback } from "react";

import React, { useEffect, useState } from "react";

export interface IAppProviderContext {
  employees: Array<IEmployeeData>;
  teams: Array<ITeamData>;
  addEmployee: (employeeData: IEmployeeData) => void;
  updateEmployee: (employeeData: IEmployeeData) => void;
  deleteEmployee: (empId: number) => void;
  getEmployee: (empId: number) => IEmployeeData | undefined;
  addTeam: (teamData: ITeamData) => void;
  updateTeam: (teamData: ITeamData) => void;
  deleteTeam: (teamId: number) => void;
  getTeam: (teamId: number) => ITeamData | undefined;
  getEmployeeCount: () => number;
  getTeamCount: () => number;
}

export const AppContext = createContext<IAppProviderContext>({
  employees: [],
  teams: [],
  addEmployee: (employeeData: IEmployeeData) => {},
  updateEmployee: (employeeData: IEmployeeData) => {},
  deleteEmployee: (empId: number) => {},
  getEmployee: (empId: number) => undefined,
  addTeam: (employeeData: ITeamData) => {},
  updateTeam: (employeeData: ITeamData) => {},
  deleteTeam: (teamId: number) => {},
  getTeam: (teamId: number) => undefined,
  getEmployeeCount: () => 0,
  getTeamCount: () => 0,
});

interface Props {
  children: React.ReactNode;
}

export function AppProvider(props: Props) {
  const [employees, setEmployees] = useState<IEmployeeData[]>([]);
  const [teams, setTeams] = useState<ITeamData[]>([]);

  useEffect(() => {
    const employees =
      JSON.parse(localStorage.getItem("employees") ?? "[]") || [];
    setEmployees(employees);
    const teams = JSON.parse(localStorage.getItem("teams") ?? "[]") || [];
    setTeams(teams);
  }, []);
  const addEmployee = (employeeData: IEmployeeData) => {
    const newEmployeeList = [...employees, employeeData];
    setEmployees([...newEmployeeList]);
    localStorage.setItem("employees", JSON.stringify([...newEmployeeList]));
  };

  const updateEmployee = (employeeData: IEmployeeData) => {
    const newEmployeeList = [...employees];
    const indexToUpdate = employees.findIndex(
      (emp) => Number(emp.id) === Number(employeeData.id)
    );
    if (indexToUpdate >= 0) {
      newEmployeeList[indexToUpdate] = employeeData;
    }
    setEmployees([...newEmployeeList]);
    localStorage.setItem("employees", JSON.stringify([...newEmployeeList]));
  };

  const deleteEmployee = (empId: number) => {
    const newEmployeeList = [...employees.filter((emp) => emp.id !== empId)];
    setEmployees([...newEmployeeList]);
    localStorage.setItem("employees", JSON.stringify([...newEmployeeList]));
  };
  const getEmployee = (empId: number) => {
    const employeeById = employees.find((emp) => emp.id === empId);
    return employeeById;
  };

  const addTeam = (teamData: ITeamData) => {
    const newTeamsList = [...teams, teamData];
    setTeams([...newTeamsList]);
    localStorage.setItem("teams", JSON.stringify([...newTeamsList]));
    const employeeList = employees.map((employee) => {
      return {
        ...employee,
        team: teamData.teamMembers?.some((member) => member.id === employee.id)
          ? teamData?.id ?? ""
          : null,
      };
    });
    setEmployees([...employeeList]);
    localStorage.setItem("employees", JSON.stringify([...employeeList]));
  };

  const updateTeam = (teamData: ITeamData) => {
    const newTeamsList = [...teams];
    const indexToUpdate = teams.findIndex(
      (emp) => Number(emp.id) === Number(teamData.id)
    );
    if (indexToUpdate >= 0) {
      newTeamsList[indexToUpdate] = teamData;
    }
    setTeams([...newTeamsList]);
    localStorage.setItem("teams", JSON.stringify([...newTeamsList]));
    const employeeList = employees.map((employee) => {
      return {
        ...employee,
        team: teamData.teamMembers?.some((member) => member.id === employee.id)
          ? teamData?.id ?? ""
          : null,
      };
    });
    setEmployees([...employeeList]);
    localStorage.setItem("employees", JSON.stringify([...employeeList]));
  };

  const deleteTeam = (teamId: number) => {
    const newTeamsList = [...teams.filter((emp) => emp.id !== teamId)];
    setTeams([...newTeamsList]);
    localStorage.setItem("teams", JSON.stringify([...newTeamsList]));
  };
  const getTeam = (teamId: number) => {
    const employeeById = teams.find((emp) => emp.id === teamId);
    return employeeById;
  };

  const getEmployeeCount = useCallback(() => {
    return employees?.length;
  }, [employees]);

  const getTeamCount = useCallback(() => {
    return teams.length;
  }, [teams]);

  return (
    <AppContext.Provider
      value={{
        employees,
        teams,
        addEmployee,
        deleteEmployee,
        getEmployee,
        getEmployeeCount,
        updateEmployee,
        getTeamCount,
        addTeam,
        deleteTeam,
        getTeam,
        updateTeam,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
