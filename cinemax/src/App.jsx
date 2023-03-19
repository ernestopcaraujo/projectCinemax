import { Link, Outlet } from 'react-router-dom';
import './App.css'
// import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <nav id="id">
        <h2><Link to="/">Home</Link></h2>
        <h2><Link to="movie/1">Movie</Link></h2>
        <h2><Link to="search">Search</Link></h2>
      </nav>
      <Outlet />
    </div>
  );
}

export default App
