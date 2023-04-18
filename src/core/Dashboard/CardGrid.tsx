import React from "react";
import { CardGridWrapper } from "./Dashboard.styles";
import InfoCard from "./InfoCard";
import { FaUsersCog, FaUsers } from "react-icons/fa";
const CardGrid = () => {
  return (
    <CardGridWrapper>
      <InfoCard
        background="#1E83F7"
        cardName="Teams"
        icon={<FaUsersCog size={24} />}
        number="50"
      />
      <InfoCard
        background="#FFAC1C"
        cardName="Employee"
        icon={<FaUsers size={24} />}
        number="100"
      />
    </CardGridWrapper>
  );
};

export default CardGrid;
