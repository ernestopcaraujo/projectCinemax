import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //podemos usar o useParams ao invés do useSearchParams porque o id já vai
                                             // vir na própria URL (/movies/:id) ficando o resgate da informação mais fácil

import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'
import MovieCard from "../components/MovieCard";
import './MoviesGrid.css';
import './Movie.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

    const {id} = useParams(); 
                            //todos os atributos que estiverem lá no arquivo main.jsx vão vir para cá pelo useParams
                            //a desestruturacao vai separar o que está selecionado, no caso o parametro com nome "id"
    const [movie, setMovie] = useState(null); //movie carregado através da API então inicia com null
    
    const getMovie = async (url) => {
        const resposta = await fetch (url) 
        const dado = await resposta.json()
        setMovie(dado); //não precisa do results porque retornará apenas um resultado 
    };

    useEffect(()=> {
        const movieUrl = `${moviesURL}${id}?${apiKey}`; 
         getMovie(movieUrl);
    }, []);

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }


    return(
        <div className="movie-page">
            {movie && 
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2 />Orçamento: 
                        </h3>
                        <p>
                            {formatCurrency(movie.budget)}
                        </p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp />Receita: 
                        </h3>
                        <p>
                            {formatCurrency(movie.revenue)}
                        </p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit />Duração :
                        </h3>
                        <p>
                            {movie.runtime} minutos.
                        </p>
                    </div>
                    <div className="description">
                        <h3>
                            <BsFillFileEarmarkTextFill />Descrição:
                        </h3>
                        <p>
                            {movie.overview}
                        </p>
                    </div>
                </>
            }
        </div>
    )
}
export default Movie