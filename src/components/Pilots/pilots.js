import axios from "axios";
import {useState, useEffect} from 'react';
import StyledPilotDiv from "./pilots.styled";


const Pilots = ({idStarship}) => {


    const [pilots , setPilots]  = useState([]);
    const [pagepilots, setPagePilots] = useState(1);
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=${pagepilots}`).then(res =>{
            setPilots((pilots) => pilots.concat(res.data.results));
            setPagePilots(pagepilots + 1);

        });

        console.log(pilots);

    },[pagepilots]);

    return( 
        <div className="row mt-3">
            <div className="col-12">
                <h3>PILOTOS</h3>
            </div>
            {
                pilots.map((pilots) => 
                    pilots.starships.map((item) => 
                        item === `https://swapi.dev/api/starships/${idStarship}/` ? 
                            <StyledPilotDiv className="col col-12 col-md-6 col-xl-4 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{pilots.name}</h5>
                                        <hr />
                                        <p className="card-text">Año de Nacimiento: {pilots.birth_year}</p>
                                        <p className="card-text">Género: {pilots.gender}</p>
                                        <p className="card-text">Altura: {pilots.height} cm</p>
                                        <p className="card-text">Peso: {pilots.mass} kg</p>
                                        <p className="card-text">Color de Piel: {pilots.skin_color}</p>
                                        <p className="card-text">Color de Ojos: {pilots.eye_color}</p>
                                    </div>
                                </div>
                            </StyledPilotDiv> : <div className="col col-0 d-none"></div>
                    )
                )
            }
        </div>
        
    );

}

export default Pilots;