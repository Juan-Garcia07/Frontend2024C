import { useState } from 'react'
import './App.css'
const numericButtonsClasses = 'btn btn-outline-primary w-100'
const operatorButtonsClasses = 'btn btn-outline-success w-100'
const specialButtonsClasses = 'btn btn-outline-danger'

function App() {

  const [display, setDisplay] = useState({value: '0', hasPoint: false, operator: '', previousValue :'0',})

 const updateDisplay = (value) =>{
  if (value === '.'){
    if(display.hasPoint){
      return 
    }
    setDisplay({
      ...display,
      value: limit(display.value + value),
      hasPoint: true,
    })
    return 
  }
  if(display.value === '0'){
    setDisplay({
      ...display,
      value: value,
    })
    retrun
  }
  setDisplay({
    ...display,
    value: limit(display.value + value),
    
  })
   
 }

 const deleteLastCharacter = () => {
  setDisplay({
    ...display,
    value: display.value.slice(0, -1),
    hasPoint: (display.value.slice(-1) === '.')? false : display.hasPoint
  })

  if(display.value.length === 1){
    setDisplay({
      ...display,
      value: '0'
    })
  }
 }
const clearDisplay =() =>{
  setDisplay({
  ...display,
  value: '0',
  hasPoint: false,
})
}

const setOperator = (operator) =>{
  setDisplay({
    ...display,
    operator,
    previousValue: display.value,
    value: '0',
    hasPoint: false,
  })

}

const calculate = () =>{
  if(display.operator === ''){
    return
  }

 // let result = 0
 // if(display.operator === '%'){
   // result = eval(display.previousValue + '/100*' + display.value)
 // }else{
   // eval(display.previousValue +   display.operator + display.value)
  //}

  

  let result = (display.operator === '%')?
  eval(display.previousValue + '/100*' + display.value):
  eval(display.previousValue +   display.operator + display.value)

  result = result + ""
  

  setDisplay({
    ...display,
    operator: '',
    hasPoint: false,
    previousValue: '0',
    value: limit(result + ''),
    //value: eval(`${display.previousValue} ${display.operator} ${display.value}`),
  })
}

const limit = (string = '', length = 10) => {
  return string.slice(0, length) 
 }
  
  return (
    <div>
      <h1>Calculator</h1>
      <hr/>
  <table className='center'>
    <tbody>
      <tr>
        <td className="text-end" colSpan={4}>
        <h2>{display.value}</h2>
        </td>
        </tr>
            <tr>
        <td>
        <button
            className={specialButtonsClasses} type='button'onClick={clearDisplay}>C</button>
        </td>
        <td>
        <button
            className={specialButtonsClasses} type='button'onClick={deleteLastCharacter}>{"<"}</button>
        </td>
        <td>
        <button
            className={operatorButtonsClasses} type='button'onClick={() => setOperator('%')}>%</button>
        </td>
        <td>
        <button
            className={operatorButtonsClasses} type='button'onClick={() => setOperator('/')}>/</button>
          </td>
            </tr>
            <tr>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('7')}>7</button>
        </td>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('8')}>8</button>
        </td>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('9')}>9</button>
        </td>
        <td>
        <button
            className={operatorButtonsClasses} type='button'onClick={() => setOperator('*')}>x</button>
          </td>
            </tr>
            <tr>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('4')}>4</button>
        </td>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('5')}>5</button>
        </td>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('6')}>6</button>
        </td>
        <td>
        <button
            className={operatorButtonsClasses} type='button'onClick={() => setOperator('-')}>-</button>
          </td>
            </tr>
            <tr>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('1')}>1</button>
        </td>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('2')}>2</button>
        </td>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('3')}>3</button>
        </td>
        <td>
        <button
            className={operatorButtonsClasses} type='button'onClick={() => setOperator('+')}>+</button>
        </td>
          </tr>
        <tr>
        <td colSpan={2}>
          <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('0')}>0</button>
        </td>
        <td>
        <button
            className={numericButtonsClasses} type='button'onClick={() => updateDisplay('.')}>.</button>
        </td>
        <td>
        <button
            className={specialButtonsClasses} type='button'onClick={calculate}>=</button>
        </td>
            </tr>
    </tbody>
  </table>
    </div>
  )
}

export default App
