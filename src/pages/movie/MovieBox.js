import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"

const MovieBox = ({ id, title, poster_path, api_img, release_date }) => {

    return (
        <Link className="col-12 col-md-2" to={`movie/${id}`}>
            <div className="container_img card card-body mt-2 mb-2 p-0 mx-1">
                <img src={api_img + poster_path} alt="img" className="image"></img>
                <div className="middle">
                    <div className="text">
                    <h1 className="fs-6 fw-bold">{title}</h1>
                    <h6>{release_date}</h6>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieBox;