import React, { useState } from "react";
import {
  TabActiveBar,
  TabButton,
  TabButtonText,
  TabContainer,
  TabWrapper,
} from "./TeamEmployee.styles";

const tabs = [
  { name: "Team", id: 1 },
  { name: "Employee", id: 2 },
];

const TeamEmployeeTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (id: number) => {
    setActiveTab(id);
  };

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
      </TabWrapper>{" "}
    </TabContainer>
  );
};

export default TeamEmployeeTab;
