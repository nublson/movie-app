import { ReactNode } from "react";
import styled from "styled-components";
import GlobalStyles from "../../styles/global";

interface LayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;
`;

const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: #012433;
`;

const LayoutContent = styled.div`
  max-width: 93.8rem;
  width: 100%;
  margin: 0 auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContent>{children}</LayoutContent>
      <GlobalStyles />
    </LayoutContainer>
  );
};

export default Layout;
