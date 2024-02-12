import './App.css';
import {Outlet, NavLink, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/dogs')
  }, [navigate])
  return (
    <div className="App">
      <nav>
        <NavLink aria-expanded  to={'/dogs'}>List of Dogs</NavLink>
        <NavLink to={'/dogs/whiskey'}>Whiskey</NavLink>
        <NavLink to={'/dogs/duke'}>Duke</NavLink>
        <NavLink to={'/dogs/perry'}>Perry</NavLink>

      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
