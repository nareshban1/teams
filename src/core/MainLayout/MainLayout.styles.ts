import styled from "styled-components";

export const SideBarLayout = styled.div`
  display: flex;
  flex-grow: 1;
`;
export const Sidebar = styled.nav`
  width: 17.5rem;
  height: 100%;
  background-color: #24252a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fcfcfc66;
`;
export const TopBarContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  background-color: "";
`;
export const TopBar = styled.nav`
  height: 4rem;
  background: #ffffff;
  box-shadow: 0px 5px 15px #1201030f;
  display: flex;
  position: relative;
`;

export const TopBarText = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  color: #00000066;
  justify-content: center;
`;
export const Content = styled.main``;
