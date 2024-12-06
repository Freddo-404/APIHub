import styled from 'styled-components';

const ApiTables = () => {
  return (
    <Container>
      {/* Animal API Table */}
      <Title>Animal API</Title>
      <StyledTable>
        <thead>
          <tr>
            <HeaderCell>Method</HeaderCell>
            <HeaderCell>URL</HeaderCell>
            <HeaderCell>Request Body (JSON)</HeaderCell>
            <HeaderCell>Response (JSON)</HeaderCell>
            <HeaderCell>Error</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/animal</Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/animal/{'{id}'}</Cell>
            <Cell></Cell>
            <Cell>animal (1)</Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/animal/{'{id}'}/species</Cell>
            <Cell></Cell>
            <Cell>species (3)</Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/animal/{'{id}'}/zoo</Cell>
            <Cell></Cell>
            <Cell>zoo (4)</Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>POST</Cell>
            <Cell>/api/animal/zoo/{'{id}'}</Cell>
            <Cell>animal(1) without id</Cell>
            <Cell></Cell>
            <Cell>(e2)</Cell>
          </Row>
          <Row>
            <Cell>UPDATE</Cell>
            <Cell>/api/animal/{'{id}'}</Cell>
            <Cell>animal(1) without id</Cell>
            <Cell>animal (1)</Cell>
            <Cell>(e3)</Cell>
          </Row>
          <Row>
            <Cell>DELETE</Cell>
            <Cell>/api/animal/{'{id}'}</Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell>(e3)</Cell>
          </Row>
        </tbody>
      </StyledTable>

      {/* Species API Table */}
      <Title>Species API</Title>
      <StyledTable>
        <thead>
          <tr>
            <HeaderCell>Method</HeaderCell>
            <HeaderCell>URL</HeaderCell>
            <HeaderCell>Request Body (JSON)</HeaderCell>
            <HeaderCell>Response (JSON)</HeaderCell>
            <HeaderCell>Error</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/species</Cell>
            <Cell></Cell>
            <Cell> </Cell>
            <Cell>(e1)</Cell>
            </Row>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/species/{'{id}'}</Cell>
            <Cell></Cell>
            <Cell>species (3)</Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/species/{'{id}'}/animals</Cell>
            <Cell></Cell>
            <Cell> </Cell>
            <Cell>(e1)</Cell>
            </Row>
            <Row>
            <Cell>GET</Cell>
            <Cell>/api/species/{'{id}'}/zoo</Cell>
            <Cell></Cell>
            <Cell>zoo (4)</Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>POST</Cell>
            <Cell>/api/species</Cell>
            <Cell>species(3) without id</Cell>
            <Cell></Cell>
            <Cell>(e2)</Cell>
          </Row>
          <Row>
            <Cell>UPDATE</Cell>
            <Cell>/api/species/{'{id}'}</Cell>
            <Cell>species(3) without id</Cell>
            <Cell>species (3)</Cell>
            <Cell>(e3)</Cell>
          </Row>
          <Row>
            <Cell>DELETE</Cell>
            <Cell>/api/species/{'{id}'}</Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell>(e3)</Cell>
          </Row>
        </tbody>
      </StyledTable>

   
      <Title>Zoo API</Title>
      <StyledTable>
        <thead>
          <tr>
            <HeaderCell>Method</HeaderCell>
            <HeaderCell>URL</HeaderCell>
            <HeaderCell>Request Body (JSON)</HeaderCell>
            <HeaderCell>Response (JSON)</HeaderCell>
            <HeaderCell>Error</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/zoo</Cell>
            <Cell></Cell>
            <Cell> </Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/zoo/{'{id}'}</Cell>
            <Cell></Cell>
            <Cell>zoo (4)</Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/zoo/{'{id}'}/animals</Cell>
            <Cell></Cell>
            <Cell> </Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/zoo/{'{id}'}/species</Cell>
            <Cell></Cell>
            <Cell> </Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>POST</Cell>
            <Cell>zoo(4) without id</Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell>(e2)</Cell>
          </Row>
          <Row>
            <Cell>UPDATE</Cell>
            <Cell>/api/zoo/{'{id}'}</Cell>
            <Cell>zoo(4) without id</Cell>
            <Cell>zoo (4)</Cell>
            <Cell>(e3)</Cell>
          </Row>
          <Row>
            <Cell>DELETE</Cell>
            <Cell>/api/zoo/{'{id}'}</Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell>(e3)</Cell>
          </Row>
        </tbody>
      </StyledTable>

      {/* User API Table */}
      <Title>User API</Title>
      <StyledTable>
        <thead>
          <tr>
            <HeaderCell>Method</HeaderCell>
            <HeaderCell>URL</HeaderCell>
            <HeaderCell>Request Body (JSON)</HeaderCell>
            <HeaderCell>Response (JSON)</HeaderCell>
            <HeaderCell>Error</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/user</Cell>
            <Cell></Cell>
            <Cell> </Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>GET</Cell>
            <Cell>/api/user/{'{id}'}</Cell>
            <Cell></Cell>
            <Cell>user (2)</Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>POST</Cell>
            <Cell>/api/user</Cell>
            <Cell>user(2) without id</Cell>
            <Cell></Cell>
            <Cell>(e2)</Cell>
          </Row>
          <Row>
            <Cell>UPDATE</Cell>
            <Cell>/api/user/{'{id}'}</Cell>
            <Cell>user(2) without id</Cell>
            <Cell>user (2)</Cell>
            <Cell>(e1)</Cell>
          </Row>
          <Row>
            <Cell>DELETE</Cell>
            <Cell>/api/user/{'{id}'}</Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell>(e1)</Cell>
          </Row>
        </tbody>
      </StyledTable>

      {/* Formats Section */}
      <Title>Request Body and Response Formats</Title>
      <FormatSection>
        <Subtitle>Animal Format</Subtitle>
        <CodeBlock>
          {`{
  "id": Long,
  "speciesId": Long,
  "zoo": Zoo,
  "name": String,
  "age": int
}`}
        </CodeBlock>
        <Subtitle>User Format</Subtitle>
        <CodeBlock>
          {`{
  "id": Long,
  "username": String,
  "password": String,
  "role": Enum<role>
}`}
        </CodeBlock>
        <Subtitle>Species Format</Subtitle>
        <CodeBlock>
          {`{
  "id": Long,
  "speciesname": String,
  "diet": String,
  "habitat": String
}`}
        </CodeBlock>
        <Subtitle>Zoo Format</Subtitle>
        <CodeBlock>
          {`{
  "id": Long,
  "name": String,
  "location": String,
  ["animals"]: List<Animal>
}`}
        </CodeBlock>
      </FormatSection>

      {/* Error Formats Section */}
      <Title>Error Formats</Title>
      <FormatSection>
        <CodeBlock>
          {`{ "status": statusCode, "msg": "Explains the problem" }`}
        </CodeBlock>
        <Subtitle>(e1)</Subtitle>
        <CodeBlock>
          {`{ "status": 404, "msg": "No content found for this request" }`}
        </CodeBlock>
        <Subtitle>(e2)</Subtitle>
        <CodeBlock>
          {`{ "status": 400, "msg": "Field 'xxx' is required" }`}
        </CodeBlock>
        <Subtitle>(e3)</Subtitle>
        <CodeBlock>
          {`{ "status": 401, "msg": "Unauthorized fuck you bitch" }`}
        </CodeBlock>
        <Subtitle>(e4)</Subtitle>
        <CodeBlock>
          {`{ "status": 403, "msg": "Forbidden, you need to be an admin to perform this request" }`}
        </CodeBlock>
      </FormatSection>
    </Container>
  );
};

/* Styled Components */
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const HeaderCell = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f4f4f4;
`;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Cell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const FormatSection = styled.div`
  margin-top: 20px;
`;

const CodeBlock = styled.pre`
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre-wrap;
  border: 1px solid #ddd;
`;

export default ApiTables;
