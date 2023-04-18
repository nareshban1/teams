import { ReactNode } from "react";
import {
  CardName,
  CardNameNumberWrapper,
  IconWrapper,
  InfoCardWrapper,
  Number,
} from "./Dashboard.styles";

const InfoCard = ({
  background,
  icon,
  cardName,
  number,
}: {
  background: string;
  icon: ReactNode;
  cardName: string;
  number: string;
}) => {
  return (
    <InfoCardWrapper backgroundColor={background}>
      <CardNameNumberWrapper>
        <CardName>{cardName}</CardName>
        <Number>{number}</Number>
      </CardNameNumberWrapper>
      <IconWrapper>{icon}</IconWrapper>
    </InfoCardWrapper>
  );
};

export default InfoCard;
