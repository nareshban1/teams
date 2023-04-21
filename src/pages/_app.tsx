import MainLayout from "@/core/MainLayout/MainLayout";
import { nunitoFont } from "@/core/fonts";
import { AppProvider } from "@/provider/AppProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AppWrapper>
        <style jsx global>{`
          * > * {
            font-family: ${nunitoFont.style.fontFamily} !important;
          }
        `}</style>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AppWrapper>
    </AppProvider>
  );
}
