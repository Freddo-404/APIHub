import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <TopImage>
        <img src="image.png" alt="Description of the image" />
      </TopImage>
      <LowerPart>
        <Sidebar>
          <Menu>
            <MenuItem>
              <StyledLink href="vision">Vision</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="endpoints">Endpoints</StyledLink>
            </MenuItem>
          </Menu>
        </Sidebar>
      </LowerPart>
    </HomeContainer>
  );
}

// Styled Components

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TopImage = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const LowerPart = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
`;

const Sidebar = styled.div`
  flex: 1;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 15px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  padding: 10px;
  
  &:hover {
    background-color: #ff6347;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  display: block;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const MainContent = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
  font-size: 24px;
  color: #333;
`;
//ye