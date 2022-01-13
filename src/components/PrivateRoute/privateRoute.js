import { Navigate, useParams, useNavigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children, redirectTo}) => { 

    let as = useLocation();
            
    return as.pathname === '/naus/true/' ? children : <Navigate to={redirectTo} />;
   
}
export default PrivateRoute;




