import "./Colors.css"
import { useColorsContext } from "./hooks"
import { Link } from "react-router-dom"
export default function Colors() {
  const [colors] = useColorsContext()
  return <section className="colors">
    <div className="color-header">
      <h1>Welcome to color factory</h1>
      <Link className="btn" to="/colors/new">Add a color</Link>
    </div>
    <h2>List of colors</h2>
    <ul>
      {colors && colors.map(color => <li key={color.name}><Link className="btn" to={`/colors/${color.name}`}>{color.name}</Link></li>)}
    </ul>
  </section>
}