import styled from "styled-components";

export const TabWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid #c3c1bf;
`;

export const TabButton = styled.button`
  border: none;
  outline: none;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  border-radius: 0.313rem 0.313rem 0 0;
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
  background-color: ${(props) => (props.active ? "#F7921E" : "transparent")};
  border-radius: 0.313rem 0.313rem 0px 0px;
  width: 100%;
`;

export const TabContainer = styled.section`
  margin: 1.25rem 0;
  padding: 1rem 0;
  background: white;
  border-radius: 0.313rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
`;

export const TabContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
