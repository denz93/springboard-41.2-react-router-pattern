import {useLoaderData} from 'react-router-dom'
export default function Subtract() {
  const {num1, num2} = useLoaderData()
  return <div className='subtract'>
    <h1>Subtract</h1>
    <p>{num1} - {num2} = {num1-num2}</p>
  </div>
}