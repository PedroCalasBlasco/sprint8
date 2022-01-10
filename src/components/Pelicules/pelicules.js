import axios from "axios";
import {useState, useEffect} from 'react';

import StyledFilmMDiv from "./pelicules.styled";


const Pelicules = ({idStarship}) => {

    const [pelicules , setPelicules]  = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films`).then(res =>{
            setPelicules(res.data.results);

        });

        console.log(pelicules);

    },[pelicules]);

    return(
        <div className="row mt-3">
            <div className="col-12">
                <h3>PELICULES</h3>
            </div>
            {
                pelicules.map((pelicules) => 
                    pelicules.starships.map((item) => 
                        item === `https://swapi.dev/api/starships/${idStarship}/` ? 
                        <StyledFilmMDiv className="col col-12 col-md-6 col-xl-4 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{pelicules.title}</h5>
                                        <p className="cart-text">Director: {pelicules.director}</p>
                                        <p className="cart-text">Lanzamiento: {pelicules.release_date}</p>
                                        <hr />
                                        <p className="cart-text">{pelicules.opening_crawl}</p>
                                    </div>
                                </div>
                        </StyledFilmMDiv> : <div className="col col-0 d-none"></div>
                        )
                    )
            }
        </div>
        
    );

}

export default Pelicules;