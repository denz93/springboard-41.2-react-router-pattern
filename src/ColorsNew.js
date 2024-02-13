import {useState} from 'react';
import { useColorsContext } from './hooks';
import {useNavigate} from 'react-router-dom'
import './ColorsNew.css'
export default function ColorsNew() {
  const [colors, setColors] = useColorsContext()
  const [colorName, setColorName] = useState()
  const [colorValue, setColorValue] = useState('#000000')
  const navigate = useNavigate()
  return <section className="colors-new">
    <form onSubmit={(e) => {
      e.preventDefault()
      const isValid = e.currentTarget.reportValidity()
      if (!isValid) return 
      setColors([...colors, {name: colorName, value: colorValue}])
      navigate('/colors')
    }}>
      <div className="form-control">
        <label>Color name</label>
        <input required type="text" value={colorName} onChange={(e) => setColorName(e.target.value)}/>
      </div>
      <div className="form-control">
        <label>Color value</label>
        <input required minLength={1} type="color" value={colorValue} onChange={(e) => setColorValue(e.target.value)}/>
      </div>
      <button type='submit' className='btn'>Add this color</button>
    </form>
  </section>
}