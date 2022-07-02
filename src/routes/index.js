import { Fragment } from "react"; // IMPORTANDO APENAS O FRAGMENT DA LIB REACT
import { BrowserRouter, Route, Routes } from "react-router-dom"; // IMPORTS NECESSARIOS DO REACT-ROUTER-DOM
// IMPORTANDO COMPONENTES CRIADOS:
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// CONDIÇÃO PARA DIRECIONAR OS LINKS SOMENTE SE ESTIVER LOGADO
const Private = ({ Item }) => {
    const signed  = false;

    return signed > 0 ? <Item /> : <SignIn />;
};

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home}/>} /> 
                    <Route path="/" element={<SignIn />} /> 
                    <Route exact path="/signup" element={<SignUp />} /> 
                    <Route path="*" element={<SignIn />} /> 
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;