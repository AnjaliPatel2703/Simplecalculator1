import { useState } from 'react'

function App() {
  const [var1, setVar1] = useState(0)
  const [var2, setVar2] = useState(0)
  const [result, setResult] = useState(0)
  
  const handleChange1 = (event) => {
    setVar1(Number(event.target.value))
  }

  const handleChange2 = (event) => {
    setVar2(Number(event.target.value))
  }
  
  const addition = () => {
    setResult(var1 + var2)
  }

  const subtraction = () => {
    setResult(var1 - var2)
  }

  const multiplication = () => {
    setResult(var1 * var2)
  }

  const division = () => {
    if (var2 !== 0) {
      setResult(var1 / var2)
    } else {
      setResult('Error: Division by zero')
    }
  }

  const modulo = () => {
    if (var2 !== 0) {
      setResult(var1 % var2)
    } else {
      setResult('Error: Division by zero')
    }
  }

  return(
    <>
      <h1 style={{ color: 'blue' }}>Simple Calculator</h1>
      <input
        onChange={handleChange1}
        value={var1}
        placeholder='Enter number 1'
        type="number"
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <input 
        onChange={handleChange2}
        value={var2}
        placeholder='Enter number 2'
        type="number"
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <div>
        <button onClick={addition} style={{ backgroundColor: 'green', color: 'white', marginRight: '5px' }}>Add</button>
        <button onClick={subtraction} style={{ backgroundColor: 'red', color: 'white', marginRight: '5px' }}>Subtract</button>
        <button onClick={multiplication} style={{ backgroundColor: 'purple', color: 'white', marginRight: '5px' }}>Multiply</button>
        <button onClick={division} style={{ backgroundColor: 'orange', color: 'white', marginRight: '5px' }}>Divide</button>
        <button onClick={modulo} style={{ backgroundColor: 'blue', color: 'white', marginRight: '5px' }}>Modulo</button>
      </div>
      <h2 style={{ color: 'darkcyan' }}>Result: {result}</h2>
    </>
  )
}

export default App;
