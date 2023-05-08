import { useEffect, useState } from 'react';
import { Alert, Card } from 'react-bootstrap';
import { Info } from '.';

interface Props {
  fact: string;
}

export const CatFact = ({ fact }: Props) => {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    const words = fact.split(' ');
    setCatImage(`${words[0]} ${words[1]} ${words[2]}`);
  }, [fact]);

  return (
    <>
      {fact.length > 0 ? (
        <Alert
          className="d-flex justify-content-center align-items-center "
          variant="success">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={`https://cataas.com/cat/says/${catImage}`}
            />
            <Card.Body>
              <Card.Text>{fact}</Card.Text>
            </Card.Body>
          </Card>
        </Alert>
      ) : (
        <Info text="You have to load a cat fact..." />
      )}
    </>
  );
};
