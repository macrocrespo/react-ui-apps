import axios from 'axios';
import { useState } from 'react';

export const useCatFacts = () => {
  const [fact, setFact] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNewCatFact = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get('https://catfact.ninja/fact');
      setFact(result.data.fact);
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFact('');
  };

  return { fact, isLoading, handleNewCatFact, handleReset };
};
