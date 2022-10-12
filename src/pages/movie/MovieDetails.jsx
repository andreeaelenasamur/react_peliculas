import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";

const MovieDetails = () => {

    const url_info = "https://www.themoviedb.org/movie/";

    let { id } = useParams();

    const endpoint = 'movie';

    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(process.env.REACT_APP_API_URL + endpoint + `/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then(data => {
                setMovie(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    return (
        <div className="container-fluid">
            {!loading && movie && <>
                {<div className="row">
                    <div className="col-12 col-md-4 text-center text-md-left">
                        <img 
                        className=""
                        width="90%"
                        src={process.env.REACT_APP_API_IMG + "original/" + movie.poster_path} alt={movie.title}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <h1 className="fw-bold fs-1 mt-3">{movie.title}</h1>
                        <h6 className="mb-3 fst-italic text-muted">{movie.tagline}</h6>
                        {movie.genres.map((genre, index) => 
                            <Badge key={index} className="me-2 mb-3 fs-6" bg="warning" text="black">{genre.name}</Badge>)}
                        <h4><span className="me-4">{movie.release_date}</span> {movie.vote_average}  <AiTwotoneStar style={{color:"yellow", marginBottom:"20px", fontSize:"1rem"}}/></h4>
                        <h6 className="fw-bold">{movie.runtime} mins</h6>
                        <p className="pt-3">{movie.overview}</p>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <a className="text-decoration-none text-dark mt-5 btn btn-warning fw-bold" href={url_info + `${movie.id}`} target="_blank" rel="noopener noreferrer" alt="info">More info <RiExternalLinkLine className="mb-2"></RiExternalLinkLine>
                            </a>
                        </div>
                    </div>
                </div>
                }
            </>}

            {loading && 
                <div className="d-flex justify-content-center">
                     <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                }
        </div>
    )
}

export default MovieDetails;