import {useLoaderData} from 'react-router-dom'
import "./Calculator.css"
const operatorMap = {
  'add': '+',
  'subtract': '-',
  'multiply': '*',
  'divide': '/'
}
export default function Calculator() {
  const {operator, num1, num2} = useLoaderData()
  const operatorText = operatorMap[operator]
  if (!operatorText) {
    return <div className='calculator'><b>{operator}</b> is NOT a valid operation. Should be "add", "subtract", "multiply" or "divide"</div>
  }
  const result = operatorText === '+' ? num1+num2 : operatorText === '-' ? num1-num2 : operatorText === '*' ? num1*num2 : num1/num2
  return <div className='calculator'>
    <h1 style={{'textTransform': 'capitalize'}}>{operator}</h1>
    <p>{num1} {operatorText} {num2} = {result}</p>
  </div>
}