import { useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from 'react';
import StyledNauDiv from "./nau.styled";
import Pilots from "../Pilots/pilots";
import Pelicules from "../Pelicules/pelicules";


const Nau = () => {

    const {id} = useParams();

    const [nomNau, setNomNau] = useState({});



    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`).then(res =>{
            setNomNau(res.data);
        });       

    },[id])



 

    return (
        <StyledNauDiv>
            <div className="container">
                <div className="row">
                    <div className="col col-12 mt-4 text-center">
                        <img src="/assets/img/logo.png" alt="" width="18%"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 mt-4 text-center">
                        <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 mt-4">
                        <h2>{nomNau.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-6 mt-4">
                        <p>MODEL: {nomNau.model}</p>
                        <p>FABRICANT: {nomNau.manufacturer}</p>
                        <p>PREU EN CREDITS: {nomNau.cost_in_credits}</p>
                        <p>LLARG: {nomNau.length}</p>
                        <p>VELOCITAT MÁXIMA: {nomNau.max_atmosphering_speed}</p>
                        <p>TRIPULACIÓ: {nomNau.crew}</p>
                    </div>
                    <div className="col col-6 mt-4">
                        <p>PASSAGERS: {nomNau.passengers}</p>
                        <p>CAPACITAT DE CARREGA: {nomNau.cargo_capacity}</p>
                        <p>COMPSUMABLES: {nomNau.consumables}</p>
                        <p>RATIO HIPERVELOCITAT: {nomNau.hyperdrive_rating}</p>
                        <p>MLGT: {nomNau.MGLT}</p>
                        <p>CLASE DE NAU: {nomNau.starship_class}</p>
                    </div>
                </div>

                <Pilots idStarship={id}/>

                <div className="row mt-4">
                    <div className="col col-12 mt-4">
                        <Pelicules idStarship={id}/>
                    </div>
                </div>
            </div>
        </StyledNauDiv>
        
    );
}

export default Nau;