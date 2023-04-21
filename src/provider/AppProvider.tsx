import { IEmployeeData } from "@/core/Employee/Employee.schema";
import { createContext, useCallback } from "react";

import React, { useEffect, useMemo, useState } from "react";

export interface IAppProviderContext {
  employees: Array<IEmployeeData>;
  teams: Array<any>;
  addEmployee: (employeeData: IEmployeeData) => void;
  deleteEmployee: (empId: number) => void;
  getEmployee: (empId: number) => IEmployeeData | undefined;
  getEmployeeCount: () => number;
  getTeamCount: () => number;
}

export const AppContext = createContext<IAppProviderContext>({
  employees: [],
  teams: [],
  addEmployee: (employeeData: IEmployeeData) => {},
  deleteEmployee: (empId: number) => {},
  getEmployee: (empId: number) => undefined,
  getEmployeeCount: () => 0,
  getTeamCount: () => 0,
});

interface Props {
  children: React.ReactNode;
}

export function AppProvider(props: Props) {
  const [employees, setEmployees] = useState<IEmployeeData[]>([]);
  const [teams, setTeams] = useState<any>(null);

  useEffect(() => {
    const employees =
      JSON.parse(localStorage.getItem("employees") ?? "[]") || [];
    setEmployees(employees);
  }, []);

  const addEmployee = (employeeData: any) => {
    const newEmployeeList = [...employees, employeeData];
    console.log(newEmployeeList);
    setEmployees([...newEmployeeList]);
    localStorage.setItem("employees", JSON.stringify([...newEmployeeList]));
  };
  const deleteEmployee = (empId: any) => {
    const newEmployeeList = [...employees.filter((emp) => emp.id !== empId)];
    setEmployees([...newEmployeeList]);
    localStorage.setItem("employees", JSON.stringify([...newEmployeeList]));
  };
  const getEmployee = (empId: number) => {
    console.log(employees, empId);
    const employeeById = employees.find((emp) => emp.id === empId);
    console.log(employeeById);
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
        getTeamCount,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
