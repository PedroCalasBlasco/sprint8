import StyledLoginDiv from "./login.styled";
import {useState, useEffect} from "react";

const Login = () => {

    const [userNameLogin, setUserNameLogin] = useState("");
    const [userPasswordLogin, setUserPasswordLogin] = useState("");

    const [isAuthenticated, setIsAutheticated] = useState(false);

    

    useEffect(() => {
        console.log("PEDROOOOO SOY");
        console.log(userNameLogin);
        let local1 = localStorage.getItem("userNameLocal");
        console.log("l ",local1);
        console.log(userPasswordLogin);
        console.log(localStorage.getItem("userPasswordLocal").toString());
        console.log(isAuthenticated);
        // if (localStorage.getItem("userNameLocal") === userNameLogin && localStorage.getItem("userPasswordLocal") === userPasswordLogin){
        if(userNameLogin === localStorage.getItem("userNameLocal")){
            console.log("111111");
            setIsAutheticated(true);          
        }     
     
    },[userNameLogin,userPasswordLogin,isAuthenticated]);


    // const user = (e) => {
    //     setUserNameLogin(e);
    //     console.log("PEDROOOOO");
    //     console.log(userNameLogin);
    //     console.log(localStorage.getItem("userNameLocal"));
    //     console.log(userPasswordLogin);
    //     console.log(localStorage.getItem("userPasswordLocal"));
    //     if(localStorage.getItem("userNameLocal") === userNameLogin && localStorage.getItem("userPasswordLocal") === userPasswordLogin){
    //         setIsAutheticated(true);
            
    //     }     
    // }

    // const passw = (e) => {
    //     setUserPasswordLogin(e);
    //     console.log("PEDROOOOO SOY");
    //     console.log(userNameLogin);
    //     console.log(localStorage.getItem("userNameLocal"));
    //     console.log(userPasswordLogin);
    //     console.log(localStorage.getItem("userPasswordLocal"));
    //     if (localStorage.getItem("userNameLocal") === userNameLogin && localStorage.getItem("userPasswordLocal") === userPasswordLogin){
    //         setIsAutheticated(true);
            
    //     }     
    // }

    return (
        <StyledLoginDiv>
            <div className="container">
                <div className="row">
                    <div className="col col-12 text-center pt-4">
                        <img src="/assets/img/logo.png" alt="" width="18%"/>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col col-7 text-center">
                        <h4>LOGIN</h4>
                    </div>
                    <div className="col col-7 text-center input-group mt-5">
                        <input type="text" placeholder="Ingresa Nombre" value={userNameLogin} onChange={(e) => setUserNameLogin(e.target.value)}/>
                    </div>
                    <div className="col col-7 text-center input-group mt-3">
                        <input type="password" placeholder="Ingresa Contraseña" value={userPasswordLogin} onChange={(e) => setUserPasswordLogin(e.target.value)}/>
                    </div>
                    <div className="col col-7 text-center mt-5">
                        <a href={`/naus/${isAuthenticated}/`}>
                            <button className="btn btn-warning" >ENTRAR</button>
                        </a>
                    </div>
                    <div className="col col-7 text-center mt-5">
                        <p>¿Aún No te Registraste? Registrate aqui</p>
                        <a href={`/registre`}>
                            <button className="btn btn-info">REGISTRARSE</button>
                        </a>
                    </div>
                </div>
            </div>
        </StyledLoginDiv>
    );

}

export default Login;