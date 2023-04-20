import React, { useCallback, useState } from "react";
import {
  TabActiveBar,
  TabButton,
  TabButtonText,
  TabContainer,
  TabContent,
  TabWrapper,
} from "./TeamEmployee.styles";
import EmployeeTable from "../Employee/EmployeeTable";
import TeamsTable from "../Team/TeamsTable";

const tabs = [
  { name: "Team", id: 1 },
  { name: "Employee", id: 2 },
];

const TeamEmployeeTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (id: number) => {
    setActiveTab(id);
  };

  const renderTabContent = useCallback(() => {
    switch (activeTab) {
      case 1:
        return <TeamsTable />;
      case 2:
        return <EmployeeTable />;
    }
  }, [activeTab]);

  return (
    <TabContainer>
      <TabWrapper>
        {tabs.map((tab) => (
          <TabButton
            type="button"
            key={tab.id}
            onClick={() => toggleTab(tab.id)}
          >
            <TabButtonText active={activeTab === tab.id}>
              {tab.name}
            </TabButtonText>
            <TabActiveBar active={activeTab === tab.id} />
          </TabButton>
        ))}
      </TabWrapper>
      <TabContent>{renderTabContent()}</TabContent>
    </TabContainer>
  );
};

export default TeamEmployeeTab;
