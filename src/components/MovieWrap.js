import { useState,useEffect,useCallback } from "react";
import axios from 'axios';
import MovieList from "./MovieList";
import styled from "styled-components";

const LoadingWrapStyle = styled.article`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color:#ddd;
    & > strong {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
`;
function MovieWrap() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    let [mounted,setMounted] = useState(true);
    
    // fetch
    // const getMovies = async() => {
    //     const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    //     const json = await (response).json();
        
    //     setMovies(json.data.movies);
    //     setLoading(false);
    // }
    
    // axios
    const getMovies = useCallback(() => {
        const url = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
        axios.get(url)
        .then((response)=> {
            const json = response.data;
            if (mounted) {
                setMovies(json.data.movies);
                setLoading(false);
            }
        })
    },[mounted])

    useEffect(()=>{
        getMovies();
        
        // unmount
        return () => setMounted(false);
    },[getMovies]);

    if(loading) {
        return (
            <LoadingWrapStyle>
                <strong>Loading...</strong>
            </LoadingWrapStyle>
        )
    }else {
        return (
        <>
            <ul>
                {movies.map((movie,idx) => 
                    <MovieList 
                        key={movie.id}
                        id={movie.id}
                        src={movie.large_cover_image}
                        title={movie.title}
                        date={movie.date_uploaded}
                        genres={movie.genres}
                        summary={movie.summary} />
                )}
            </ul>
        </>
        )
    }
}
export default MovieWrap;