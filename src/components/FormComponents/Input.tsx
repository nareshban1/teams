import { InputHTMLAttributes, ReactNode } from "react";
import {
  InputContainer,
  InputElement,
  InputIcon,
  InputWrapper,
  Label,
} from "./Input.styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  label?: string;
}
const Input = (props: IInputProps) => {
  const { icon, label, ...rest } = props;
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputContainer>
        {icon && <InputIcon>{icon}</InputIcon>}
        <InputElement {...rest} />
      </InputContainer>
    </InputWrapper>
  );
};

export default Input;
