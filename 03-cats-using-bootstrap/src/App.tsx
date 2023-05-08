import { Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { CatFact, Loading } from './components';
import { useCatFacts } from './hooks';

function App() {
  const { fact, isLoading, handleNewCatFact, handleReset } = useCatFacts();

  return (
    <Container fluid style={{ padding: 20 }}>
      <Row>
        <Col sm>
          <Alert variant="secondary">
            <h1>Application to see cats facts!</h1>
            <hr />
            <Button
              style={{ marginRight: 10 }}
              variant="primary"
              onClick={handleNewCatFact}>
              Get a cat fact
            </Button>
            <Button variant="danger" onClick={handleReset}>
              Reset
            </Button>
          </Alert>
        </Col>
        <Col sm>
          {isLoading ? <Loading text="fact" /> : <CatFact fact={fact} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
