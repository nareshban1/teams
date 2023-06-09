import Link from "next/link";
import styled from "styled-components";
import Select from "react-select";
export const TeamsSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  margin-top: 0.625rem;
`;

export const AddTeamButton = styled(Link)`
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

export const TeamMembersWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  gap: 1rem;
`;

export const TeamMemberContainer = styled.div`
  border: 1px solid #c3c1bf;
  width: 100%;
  background: transparent;
  border-radius: 0.313rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

export const TeamMemberSelect = styled(Select)`
  width: 60%;
  margin-bottom: 1rem;
`;

export const EmployeeBadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
`;

export const EmployeeSelectBadge = styled.span`
  padding: 0.5rem 0.75rem;
  border-radius: 1.125rem;
  border: 1px solid #c3c1bf;
  color: #656669;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const EmployeeOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QRButtons = styled.button<{ color: string }>`
  border-radius: 0.313rem;
  background-color: transparent;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  padding: 0.5rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
`;

export const QRContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const QRButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const QRCodeContainer = styled.div`
  border: 1px solid #c3c1bf;
  border-radius: 0.313rem;
  height: 7.5rem;
  width: 7.5rem;
  padding: 0.25rem;
`;
