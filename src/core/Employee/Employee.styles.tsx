import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
export const EmployeeSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  margin-top: 0.625rem;
`;

export const AddEmployeeButton = styled(Link)`
  display: flex;
  border-radius: 0.313rem;
  background-color: #f7921e;
  outline: none;
  border: none;
  align-items: center;
  padding: 0.375rem 1rem;
  color: white;
  gap: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
`;

export const BreadCrumb = styled.span`
  display: flex;
  gap: 0.5rem;
  color: #656669;
  margin-top: 0.625rem;
`;

export const ScreenName = styled.h1`
  color: #24252a;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

export const EmployeeImageView = styled(Image)`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`;

export const UploadProfileImageButton = styled.button`
  display: flex;
  border-radius: 0.313rem;
  background-color: #20bc08;
  outline: none;
  border: none;
  align-items: center;
  padding: 0.375rem 1rem;
  color: white;
  gap: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.625rem;
  flex-grow: 0;
  width: auto;
`;

export const FlexCenteredWrapper = styled.div<{ right?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.right ? "flex-end" : "flex-start")};
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const FlexStartWrapper = styled.div<{ right?: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: ${(props) => (props.right ? "flex-end" : "flex-start")};
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const EmployeeFormWrapper = styled.div`
  border-radius: 0.313rem;
  background-color: white;
  padding: 1.875rem;
  position: absolute;
  overflow-y: auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
`;

export const FormFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  height: 4.75rem;
  background-color: white;
  left: 0;
  display: flex;
  align-items: center;
`;

export const SaveButton = styled.button`
  display: flex;
  border-radius: 0.313rem;
  background-color: #f7921e;
  outline: none;
  border: none;
  align-items: center;
  padding: 0.5rem 3.5rem;
  color: white;
  gap: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.625rem;
  flex-grow: 0;
  width: auto;
  margin-left: 1.375rem;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.875rem;
  width: 100%;
`;

export const HorizontalLine = styled.hr`
  background-color: #c3c1bf;
  margin: 1.875rem 0;
  width: 100%;
`;

export const EmployeeFormContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 4.75rem;
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const Checkbox = styled.input`
  height: 1rem;
  width: 1rem;
`;
export const CheckboxLabel = styled.label`
  margin-left: 1rem;
`;
export const HoursInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.313rem;
  overflow: hidden;
  width: 100%;
`;

export const HoursInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem;
`;
export const HourText = styled.div<{ background?: string; color?: string }>`
  background-color: ${(props) => props.background ?? "#c3c1bf"};
  color: ${(props) => props.color ?? "black"};
  padding: 0.5rem;
`;

export const ButtonFlex = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const EnterButton = styled.button`
  background-color: #1e83f7;
  border-radius: 0.313rem;
  text-align: center;
  outline: none;
  border: 1px solid #1e83f7;
  padding: 0.5rem 1.875rem;
  color: white;
`;

export const EmployeeName = styled.p`
  color: #24252a;
  font-size: 1.25rem;
  font-weight: 800;
  margin-top: 1.875rem;
`;
export const EmployeeEmail = styled.p`
  font-size: 1rem;
  color: #656669;
`;

export const EmployeeDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`;

export const EmployeeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const EmployeeDetailTitle = styled.p`
  font-size: 1rem;
  color: #656669;
  font-weight: 800;
`;
export const EmployeeDetail = styled.p`
  font-size: 1rem;
  color: #24252a;
`;

export const DesignationBadge = styled.p`
  background-color: #1e83f7;
  border-radius: 1.125rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1.125rem;
`;

export const EditProfileButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.313rem;
  background-color: #f7921e;
  outline: none;
  border: none;
  align-items: center;
  padding: 0.5rem;
  color: white;
  gap: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%;
`;
