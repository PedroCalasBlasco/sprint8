import {useState, useEffect} from "react";
import StyledRegistreDiv from "./registre.styled";

const Registre = () =>{

    const [userName, setUserName] = useState("apa");
    const [userPassword, setUserPassword] = useState("");


    useEffect(() => {
        getLocalData();
    },[]);

    useEffect(() => {
        saveLocalData();
    },[userName,userPassword]);


   const saveLocalData = () => {
        localStorage.setItem("userNameLocal", JSON.stringify(userName));
        localStorage.setItem("userPasswordLocal", JSON.stringify(userPassword));
    };

    const getLocalData = () => {
        if(localStorage.getItem("userNameLocal", JSON.stringify(userName)) === null){
            localStorage.setItem("userNameLocal", JSON.stringify(false));
        }else{
            let userNameLocal = JSON.parse(localStorage.getItem("userNameLocal"));
        setUserName(userNameLocal);
        }
    };


    return(
        <StyledRegistreDiv>
            <div className="container">
                <div className="row">
                    <div className="col col-12 text-center pt-4">
                        <img src="/assets/img/logo.png" alt="" width="18%"/>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col col-6 text-center">
                        <h4>REGISTRE</h4>
                    </div>
                    <div className="col col-6 text-center input-group mt-5">
                        <input type="text" placeholder="Ingresa Nombre" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div className="col col-6 text-center input-group mt-3">
                        <input type="password" placeholder="Ingresa Contraseña" value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
                    </div>
                    <div className="col col-6 text-center mt-5">
                        <a href={`/login`}>
                            <button className="btn btn-info">REGISTRARME</button>
                        </a>
                    </div>
                </div>
            </div>
        </StyledRegistreDiv>
    )

}

export default Registre;