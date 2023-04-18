import React, { PropsWithChildren } from "react";
import {
  Content,
  SideBarLayout,
  Sidebar,
  TopBar,
  TopBarContentWrapper,
  TopBarText,
} from "./MainLayout.styles";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <SideBarLayout>
      <Sidebar>SIDEBAR</Sidebar>
      <TopBarContentWrapper>
        <TopBar>
          <TopBarText>NAVIGATION BAR</TopBarText>
        </TopBar>
        <Content>{children}</Content>
      </TopBarContentWrapper>
    </SideBarLayout>
  );
};

export default MainLayout;
