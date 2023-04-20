import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";//permite pegar a query string da URL e utilizar na busca de dados na API
import MovieCard from "../components/MovieCard";
import './MoviesGrid.css';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchParams] = useSearchParams();
    //invocação do SearchParams para que os metodos dele possam ser utilizados
    //IMPORTANTE: É feita a desestruturação de dados do SerachParams com o uso dos colchetes
    //pois o useSearchParams manda um array de metodos de dessa forma desestruturamos, pegando apenas o 
    //o primeiro método que é o que precisamos.
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q") //assim conseguimos obter o parâmetro "q" que está na URL

    const getSearchedMovies = async (url) => {

        const resposta = await fetch (url) 
        const dados = await resposta.json()

        setMovies(dados.results); 
        
    };
    useEffect(()=> {
        const searchedWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
        getSearchedMovies(searchedWithQueryURL);
    }, [query]); 


    return(
        // <div>SEARCH</div>
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span> </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0  && movies.map((movie)=><MovieCard key={movie.id} movie={movie}/>)}  
            </div>
        </div>
    )
}
export default Search