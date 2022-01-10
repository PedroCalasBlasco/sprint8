import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './components/Home/home';
import ListaNaus from './components/ListNaus/listnaus';
import Login from "./components/Login/login";
import Nau from "./components/Nau/nau";
import PrivateRoute from "./components/PrivateRoute/privateRoute";
import Registre from "./components/Registre/registre";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/registre' element={<Registre />}></Route>
                <Route exact path='/naus/:auth' element={<PrivateRoute redirectTo={'/'} isAuth={true}><ListaNaus/></PrivateRoute>}> </Route>
                <Route exact path='/nau/:id' element={<Nau />}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Router;

