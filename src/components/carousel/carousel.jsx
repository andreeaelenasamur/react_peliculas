import React from "react";
import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "../../App.css"
import { AiTwotoneStar } from "react-icons/ai";

const CarouselContainer = ({movies, api_img}) => {

    const bestSellers = movies.slice(0,20);

    return(
        <div>
            <Carousel className="mb-5" controls={true}>
                {bestSellers.map((movieReq) => (
                    <Carousel.Item style={{
                        height: "600px",
                    }} key={movieReq.id}>
                        <Image
                            src={api_img + movieReq.backdrop_path} 
                            alt="First slide"
                            width="100%"
                            className="opacity-50"
                        />

                        <Carousel.Caption bsPrefix="mx-5 carousel-caption start-0 w-50 text-start text-white">
                                <h1 className="w-50 fw-bold fs-1">{movieReq.title}</h1>
                                <h4>
                                    <span className="me-4">{movieReq.release_date}</span> 
                                    {movieReq.vote_average}  
                                    <AiTwotoneStar style={{color:"yellow", marginBottom:"20px", fontSize:"1rem"}}/>
                                </h4>
                                <p className="fst-italic">{movieReq.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselContainer;