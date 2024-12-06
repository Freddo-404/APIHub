import styled from 'styled-components';

function Vision() {
  return ( 
    <VisionContainer>
      <Title>Vision</Title>
      <Description>
        The Zoo Animal Locator API allows users to search for a specific animal and retrieve a list of zoos that house that animal. This API helps users easily find where a particular species can be viewed, whether for educational purposes, planning visits, or research on zoo-based conservation efforts. In addition to finding zoos, the API provides detailed information about the animal, including its name, species, diet, and natural habitat.
      </Description>
    </VisionContainer>
  );
}

export default Vision;

// Styled Components

const VisionContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  text-align: justify;
  margin-bottom: 20px;
`;
