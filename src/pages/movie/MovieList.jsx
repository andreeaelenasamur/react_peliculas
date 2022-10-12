import React, { useEffect, useState } from "react";
import CarouselContainer from "../../components/carousel/carousel";
import ApiMovie from "./ApiMovie";
import "../../App.css"
import { Outlet } from "react-router-dom";

const MovieList = () => {

    const endpoint = 'movie/popular';
    const image_type = 'original';

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + endpoint + '?api_key=' + process.env.REACT_APP_API_KEY)
            .then((res) => res.json())
            .then(data => {
                setMovies(data.results)
            })
    }, []);


    return(
        <div>
            {
                movies.length > 0 && <>
                    <CarouselContainer api_img={process.env.REACT_APP_API_IMG + image_type} movies={movies}></CarouselContainer>
                    <ApiMovie api_img={process.env.REACT_APP_API_IMG + image_type} movies={movies}></ApiMovie>
                </>
            }
            
            <Outlet />
        </div>
    )
}

export default MovieList;