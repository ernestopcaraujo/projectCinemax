import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
   
    const [topMovies, setTopMovies] = useState([]);
   
    const getTopRatedMovies = async (url) => {

        const resposta = await fetch (url) 
        const dados = await resposta.json()

        setTopMovies(dados.results); 
        
    };//ponto X

    //Ao invés de chamar a função getTopRatedMovies toda vez que é carregada a página
    //usando o comando getTopRatedMovies() depois do 'ponto X'
    //usamos o useEffect que permite executar uma função em alguns estágios da aplicação
    //e isso será baseado num array de dependencias que fica no final da função
    //que será excutada cada vez que alguma dessas dependencias sofrer alteração
    useEffect(()=> {
       const topRatedUrl = `${moviesURL}top_rated?${apiKey}`; 
       //Onde top_rated é uma parte da url que é fornecida na documentação da API
       //que retorna os filmes melhores rankeados. A chave da API é passda via parâmetro query string.
        getTopRatedMovies(topRatedUrl);
        }, []); 
            
            //Nesse momento, como não queremos mapear nenhuma dependencia, ele fica vazio.
            //então só será excutado esse useEffect quando a página for carregada.

        return(
        <div className="container">
            <h2 className="title">Melhores Filmes</h2>
            <div>
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0  && topMovies.map((movie)=><MovieCard key={movie.id} movie={movie}/>)}  
            </div>
            
        </div>
    );
}
export default Home