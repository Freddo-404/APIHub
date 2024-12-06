import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

function RootLayout() {
  return (
    <RootContainer>
      <Header>
        <Nav>
          <Title>Zoo & Animal API</Title>
          <NavLinks>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="vision">Vision</StyledNavLink>
            <StyledNavLink to="endpoints">Endpoints</StyledNavLink>
          </NavLinks>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </RootContainer>
  );
}

export default RootLayout;

// Styled Components

const RootContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
`;

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &.active {
    color: #ff6347; /* Active link color */
  }

  &:hover {
    color: #ff6347;
  }
`;

const Main = styled.main`
  padding: 20px;
  background-color: #fff;
`;
