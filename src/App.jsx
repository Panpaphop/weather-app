import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <section>
        <div className='location'>
          <h1>Bangkok</h1>
          <p className='state'>TH</p>
        </div>
        <div className='card'>
          <div className='weather'>
            <h1>28</h1>
            <small>max : 40 , min : 20</small>
          </div>
          <div className='info'>
            <div className='status'>Good</div>
            <div className='humidity'>100</div>
            <div className='wind'>4.0</div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
