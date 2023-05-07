import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  fact: string;
}

export const CatFact = ({ fact }: Props) => {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    if (fact.length > 0) {
      const words = fact.split(' ');
      setCatImage(`${words[0]} ${words[1]} ${words[2]}`);
    }
  }, [fact]);

  return (
    <>
      {fact.length > 0 ? (
        <Card sx={{ width: '100%' }}>
          <CardMedia
            sx={{ height: 400, width: '100%' }}
            image={`https://cataas.com/cat/says/${catImage}`}
            title="Cat"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {fact}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              You have to load a cat fact...
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};
