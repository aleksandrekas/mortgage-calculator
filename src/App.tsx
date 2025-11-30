import './App.css'
import Calculator from './components/left/Calculator'


function App() {  
  return (
    <div className='container'>
      <div className="box">
        <div className="left">
          <Calculator />
        </div>
        <div className="right">
          <img src="src\assets\images\illustration-empty.svg" alt="" />
          <h2>Results are shown here</h2>
          <p>Complete form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
      </div>
    </div>
  )
}

export default App
