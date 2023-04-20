import styled from "styled-components";
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.313rem;
  padding: 0.5rem;
`;

export const InputIcon = styled.span`
  margin: 0 0.75rem;
  display: flex;
  align-items: center;
`;

export const InputElement = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
`;

export const Label = styled.label`
  color: #24252a;
  font-size: 1rem;
  margin-bottom: 0.625rem;
`;
