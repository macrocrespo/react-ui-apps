import { useState } from 'react';
import axios from 'axios';

export const useCatFacts = () => {
  const [fact, setFact] = useState('');
  const [loadingFact, setLoadingFact] = useState(false);
  const handleNewCatFact = () => {
    setLoadingFact(true);
    axios.get('https://catfact.ninja/fact').then((response) => {
      setFact(response.data.fact);
      setLoadingFact(false);
    });
  };

  const handleReset = () => {
    setFact('');
  };

  return { fact, loadingFact, handleNewCatFact, handleReset };
};
