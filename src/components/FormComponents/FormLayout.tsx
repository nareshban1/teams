import React, { ReactNode } from "react";
import {
  FormLayoutContainer,
  LeftFormContainer,
  RightFormContainer,
} from "./FormLayout.styles";

interface IFormLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

const FormLayout = ({ leftContent, rightContent }: IFormLayoutProps) => {
  return (
    <FormLayoutContainer>
      <LeftFormContainer>{leftContent}</LeftFormContainer>
      <RightFormContainer>{rightContent}</RightFormContainer>
    </FormLayoutContainer>
  );
};

export default FormLayout;
