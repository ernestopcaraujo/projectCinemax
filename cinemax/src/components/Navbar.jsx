import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

const Navbar = () => {
    return(
        <nav id="id">
            <h2>
                <Link to="/">
                    <BiCameraMovie />HOME
                </Link></h2>
            <form>
                <input type="text" placeholder="Buscar filme" />
                <button type="submit"><BiSearchAlt2></BiSearchAlt2></button>
            </form>
        </nav>
    )
}
export default Navbar
