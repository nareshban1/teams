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
import { useRouter } from "next/router";

const MainLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const isNotHomePage = router.pathname !== "/";
  return (
    <SideBarLayout>
      <Sidebar>SIDEBAR</Sidebar>
      <TopBarContentWrapper>
        <TopBar>
          {isNotHomePage && (
            <BackButton href={"/"}>
              <IoMdArrowBack />
            </BackButton>
          )}
          <TopBarText>NAVIGATION BAR</TopBarText>
        </TopBar>
        <Content>{children}</Content>
      </TopBarContentWrapper>
    </SideBarLayout>
  );
};

export default MainLayout;
