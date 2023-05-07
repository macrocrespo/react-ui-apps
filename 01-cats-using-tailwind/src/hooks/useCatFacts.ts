import { useState } from 'react';

export const useCatFacts = () => {
  const [fact, setFact] = useState('');
  const handleNewCatFact = () => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  };

  const handleResetFact = () => {
    setFact('');
  };

  return { fact, handleNewCatFact, handleResetFact };
};
