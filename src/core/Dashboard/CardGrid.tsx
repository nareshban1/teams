import React, { useContext } from "react";
import { CardGridWrapper } from "./Dashboard.styles";
import InfoCard from "./InfoCard";
import { FaUsersCog, FaUsers } from "react-icons/fa";
import { AppContext } from "@/provider/AppProvider";
const CardGrid = () => {
  const { getEmployeeCount, getTeamCount } = useContext(AppContext);
  return (
    <CardGridWrapper>
      <InfoCard
        background="#1E83F7"
        cardName="Teams"
        icon={<FaUsersCog size={24} />}
        number={getTeamCount()}
      />
      <InfoCard
        background="#FFAC1C"
        cardName="Employee"
        icon={<FaUsers size={24} />}
        number={getEmployeeCount()}
      />
    </CardGridWrapper>
  );
};

export default CardGrid;
