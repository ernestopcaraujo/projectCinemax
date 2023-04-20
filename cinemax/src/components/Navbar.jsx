import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import './Navbar.css'

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSubmit  = (e)=>{
        e.preventDefault();//para não submeter o form como uma requisicao http
        
        if (!search) return; //verifica se está vazio a variável search
        navigate(`/search?q=${search}`);
        setSearch('');//limpar o search
    }
    return(
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie />CineDEV
                </Link></h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Buscar filme"
                    onChange={(e)=>setSearch(e.target.value)}
                    value={search} //aqui é para limpar o campo depois da digitação
                 
                 />
                <button type="submit"><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}
export default Navbar
