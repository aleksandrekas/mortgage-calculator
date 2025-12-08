import './App.css'
import Calculator from './components/left/Calculator'
import Results from './components/right/Results'
import Panel from './components/right/Panel'
import { useContext } from 'react'
import { ResultsContext } from './components/Context'



function App() {  
  const {results} = useContext(ResultsContext)


  return (
    <div className='container'>
      <div className="box">
        <div className="left">
          <Calculator />
        </div>
        <div className="right">
          {
            results.monthlyPay === 0 && results.monthlyInterest === 0 ?
              <Panel />
              :
              <Results />
          }
        </div>
      </div>
    </div>
  )
}

export default App
