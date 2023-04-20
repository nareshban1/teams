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
`;

export const EmployeeImageView = styled(Image)`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
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
`;

export const FormFooter = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1.25rem 1.375rem;
  background-color: white;
`;

export const SaveButton = styled.button`
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
  margin-top: 0.625rem;
  flex-grow: 0;
  width: auto;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.875rem;
`;
