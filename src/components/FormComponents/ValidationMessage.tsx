import React from "react";
import { ValidationText } from "./Input.styles";

interface IValidationMessageProps {
  name: string;
  touched: any;
  errors: any;
}

const ValidationMessage = (props: IValidationMessageProps) => {
  const { name, touched, errors } = props;

  return touched?.[name] && !!errors?.[name] ? (
    <ValidationText>
      {errors[name] ? (errors[name] as string) : ""}
    </ValidationText>
  ) : (
    <></>
  );
};

export default ValidationMessage;
