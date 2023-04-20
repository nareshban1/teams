import styled from "styled-components";

export const TableContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  position: relative;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  position: absolute;
  overflow: scroll;
`;
export const TableHead = styled.thead``;
export const TableRow = styled.tr``;
export const TableHeader = styled.th`
  color: #656669;
  font-size: 1.125rem;
  font-weight: 800;
  text-align: start;
  padding: 1.25rem 1.875rem;
  border-bottom: 1px solid #c3c1bf;
  border-top: 1px solid #c3c1bf;
`;
export const TableData = styled.td`
  color: #24252a;
  text-align: start;
  padding: 0.875rem 1.875rem;
  border-bottom: 1px solid #c3c1bf;
`;

export const TableBody = styled.tbody``;

export const TableActionContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionIconContainer = styled.span<{
  background: string;
  color: string;
  border: string;
}>`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: 1px solid ${(props) => props.border};
  border-radius: 0.313rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.25rem 1.25rem 0 1.25rem;
  color: #656669;
`;

export const PaginationArrow = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #656669;
`;

export const PaginationDetails = styled.span`
  margin-left: 1.5rem;
`;
