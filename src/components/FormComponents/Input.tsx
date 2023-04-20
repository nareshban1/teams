import { InputHTMLAttributes, ReactNode } from "react";
import {
  InputContainer,
  InputElement,
  InputIcon,
  InputWrapper,
  Label,
} from "./Input.styles";
import ValidationMessage from "./ValidationMessage";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  label?: string;
  name: string;
  errors?: any;
  touched?: any;
}
const Input = (props: IInputProps) => {
  const { icon, label, name, errors, touched, ...rest } = props;
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputContainer>
        {icon && <InputIcon>{icon}</InputIcon>}
        <InputElement {...rest} name={name} />
      </InputContainer>
      <ValidationMessage errors={errors} name={name} touched={touched} />
    </InputWrapper>
  );
};

export default Input;
