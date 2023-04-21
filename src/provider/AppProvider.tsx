import { createContext, useCallback } from "react";

import React, { useEffect, useMemo, useState } from "react";

export interface IAppProviderContext {
  employees: Array<any>;
  teams: Array<any>;
  addEmployee: (employeeData: any) => void;
  deleteEmployee: (empId: any) => void;
  getEmployee: (empId: any) => void;
  getEmployeeCount: () => number;
  getTeamCount: () => number;
}

export const AppContext = createContext<IAppProviderContext>({
  employees: [],
  teams: [],
  addEmployee: (employeeData: any) => {},
  deleteEmployee: () => {},
  getEmployee: () => {},
  getEmployeeCount: () => 0,
  getTeamCount: () => 0,
});

interface Props {
  children: React.ReactNode;
}

export function AppProvider(props: Props) {
  const [employees, setEmployees] = useState<any>([]);
  const [teams, setTeams] = useState<any>(null);

  useEffect(() => {
    const employees =
      JSON.parse(localStorage.getItem("employees") ?? "[]") || [];
    setEmployees(employees);
  }, []);

  const addEmployee = (employeeData: any) => {
    const allEmployees = [...employees];
    const newEmployeeData = {
      id: Date.now(),
      ...employeeData,
    };
    const newEmployeeList = [...allEmployees, newEmployeeData];
    console.log(newEmployeeList);
    setEmployees([...newEmployeeList]);
    localStorage.setItem("employees", JSON.stringify([...newEmployeeList]));
  };
  const deleteEmployee = (empId: any) => {
    // setEmployees([]);
    // localStorage.setItem("employees", JSON.stringify([]));
  };
  const getEmployee = (empId: any) => {
    return {};
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
        getTeamCount,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
