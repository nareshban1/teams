import styled from "styled-components";

export const TabWrapper = styled.div`
  display: flex;
`;

export const TabButton = styled.button`
  border: none;
  outline: none;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-color: #ddd;
  }
`;

export const TabButtonText = styled.p<{ active: boolean }>`
  padding: 0.813rem;
  color: ${(props) => (props.active ? "#24252A" : "#656669")};
  font-weight: 800;
  font-size: 1.25rem;
`;

export const TabActiveBar = styled.span<{ active: boolean }>`
  height: 0.313rem;
  background-color: ${(props) => (props.active ? "#F7921E" : "#ffffff")};
  border-radius: 6px 5px 0px 0px;
  width: 100%;
`;

export const TabContainer = styled.section`
  margin: 1.25rem 0;
`;
