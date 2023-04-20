import React, { PropsWithChildren } from "react";
import {
  BackButton,
  Content,
  SideBarLayout,
  Sidebar,
  TopBar,
  TopBarContentWrapper,
  TopBarText,
} from "./MainLayout.styles";
import { IoMdArrowBack } from "react-icons/io";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <SideBarLayout>
      <Sidebar>SIDEBAR</Sidebar>
      <TopBarContentWrapper>
        <TopBar>
          <BackButton>
            <IoMdArrowBack />
          </BackButton>
          <TopBarText>NAVIGATION BAR</TopBarText>
        </TopBar>
        <Content>{children}</Content>
      </TopBarContentWrapper>
    </SideBarLayout>
  );
};

export default MainLayout;
