import { useLoaderData, Link } from "react-router-dom"
import './Color.css'
export default function Color() {
  const color = useLoaderData()
  return <div className="color" style={{'--color': color.value}}>
    <div className="color-message">
      <h1>This is {color.name}</h1>
      <h1>Isn't it beautiful</h1>
    </div>
    <h1><Link to={'/colors'}>Go Back</Link></h1>
  </div>
}