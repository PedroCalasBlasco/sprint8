import { Navigate, useParams } from "react-router-dom";


const PrivateRoute = ({ children, redirectTo, isAuth }) => { 

     const {name} = useParams();
     console.log("PEDRO");
     console.log(name);
     console.log(localStorage.getItem("userNameLocal"));
    
        
    return isAuth ? children : <Navigate to={redirectTo} />;

    // return name === localStorage.getItem("userNameLocal") ? children : <Navigate to={redirectTo} />;
    
   
}

export default PrivateRoute;




