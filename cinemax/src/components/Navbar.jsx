import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav id="id">
            <h2><Link to="/">Home</Link></h2>
            <h2><Link to="movie/1">Movie</Link></h2>
            <h2><Link to="search">Search</Link></h2>
        </nav>
    )
}
export default Navbar
