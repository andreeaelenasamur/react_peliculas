import React from "react";
import "../../App.css"
import MovieBox from "./MovieBox";

const ApiMovie = ({movies, api_img}) => {

    return (
        <div className="container">
            <h2 className="text-white mb-3">Popular</h2>
            <div className="row justify-content-center gx-2 ">
                {movies.map((movieReq) =>
                    <MovieBox api_img={api_img} key={movieReq.id} {...movieReq}
                    />
                )}
            </div>
        </div>
    )
}

export default ApiMovie;