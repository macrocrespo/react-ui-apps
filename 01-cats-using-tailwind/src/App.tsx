import { CatFact } from './components'
import { useCatFacts } from './hooks'

const App: React.FC = () => {
  const [fact, handleNewCatFact, handleResetFact] = useCatFacts()

  return (
    <div className="app grid gap-4 p-6 sm:grid-cols-1 md:grid-cols-2 mt-5 ">
      <div className="container">
        <h1 className="text-4xl pb-4">Application to see cats facts!</h1>
        <hr />
        <button className="btn btn-blue mt-5 mr-2" onClick={handleNewCatFact}>
          Get a cat fact
        </button>
        <button className="btn btn-red mt-5" onClick={handleResetFact}>
          Reset
        </button>
      </div>
      <div className="container">
        <CatFact fact={fact} />
      </div>
    </div>
  )
}

export default App
