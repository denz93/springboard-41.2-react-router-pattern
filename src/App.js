import './App.css';
import {Outlet, NavLink, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import { useColorsContext, useColors } from './hooks';
export default function App() {
  const colorContext = useColors()
  const navigate = useNavigate()
  useEffect(() => {
    console.log('app effect')
    navigate('/dogs')
  }, [navigate])
  return (
      <div className="App">
        <nav>
          <NavLink aria-expanded  to={'/dogs'}>List of Dogs</NavLink>
          <NavLink to={'/colors'}>Colors</NavLink>
          <NavLink to={'/dogs/whiskey'}>Whiskey</NavLink>
          <NavLink to={'/dogs/duke'}>Duke</NavLink>
          <NavLink to={'/dogs/perry'}>Perry</NavLink>

        </nav>
        <Outlet context={colorContext}/>
      </div>
  );
}


