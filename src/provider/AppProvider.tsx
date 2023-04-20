import { createContext, useCallback } from "react";

import React, { useEffect, useMemo, useState } from "react";

export interface IAppProviderContext {
  employees: Array<any>;
  teams: Array<any>;
  setEmployees?: React.Dispatch<any>;
  deleteEmployee: (empId: any) => void;
  getEmployee: (empId: any) => void;
  getEmployeeCount: () => number;
  getTeamCount: () => 0;
}

export const AppContext = createContext<IAppProviderContext>({
  employees: [],
  teams: [],
  deleteEmployee: (empId: any) => {},
  getEmployee: (empId: any) => {},
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
    const savedEmployees = JSON.parse(localStorage.getItem("employees") ?? "");
    setEmployees(savedEmployees);
    // const savedTeams = JSON.parse(localStorage.getItem("teams") ?? "");
    // setTeams(savedTeams);
  }, []);

  const updateEmployee = (employeeData: any) => {
    // setEmployees([]);
    // localStorage.setItem("employees", JSON.stringify([]));
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
        setEmployees,
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
