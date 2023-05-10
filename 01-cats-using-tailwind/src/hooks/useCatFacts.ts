import { useState } from 'react'

export const useCatFacts = (): [string, () => void, () => void] => {
  const [fact, setFact] = useState('')
  const handleNewCatFact = async (): Promise<void> => {
    await fetch('https://catfact.ninja/fact')
      .then(async (response) => await response.json())
      .then((data) => {
        setFact(data.fact)
      })
  }

  const handleResetFact = (): void => {
    setFact('')
  }

  return [fact, handleNewCatFact, handleResetFact]
}
