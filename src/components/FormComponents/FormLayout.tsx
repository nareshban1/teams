import React, { ReactNode } from "react";
import {
  FormLayoutContainer,
  LeftFormContainer,
  RightFormContainer,
} from "./FormLayout.styles";

interface IFormLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  className?: string;
}

const FormLayout = ({
  leftContent,
  rightContent,
  className,
}: IFormLayoutProps) => {
  return (
    <FormLayoutContainer className={className}>
      <LeftFormContainer>{leftContent}</LeftFormContainer>
      <RightFormContainer>{rightContent}</RightFormContainer>
    </FormLayoutContainer>
  );
};

export default FormLayout;
