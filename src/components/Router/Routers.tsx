import { BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'

// @ts-ignore
import { Dots as Preloader } from 'react-preloaders2';

// Views
import Home from '../../views/home';
import LoginMain from '../../views/Login';
import ProfileFreelancer from '../../views/ProfileFreelancer';
import CreacionProfileFreelancer from '../../views/CreacionProfileFreelancer';
import CreacionProfileEmpresa from '../../views/CreacionProfileEmpresa';
import SignIn from '../../views/SignIn';
import RegistroFreelancer from '../../views/RegistroFreelancer';
import RegistroEmpresa from '../../views/RegistroEmpresa';
//import EditPerfil from '../../views/EditPerfil';

// Compoenents
import Navbar from "../Navbar/Navbar";
import PoliticasDeprivacidad from '../../views/Politicadeprivacidad';
import ProfileCompany from '../../views/Empresa';
import PasswordRecovery from '../../views/passwordRecovery';

const RouterApp = () =>{


   return(
      <>
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Login' element={<LoginMain />}> </Route>
            <Route path='/Registro' element={<SignIn />}> </Route>
            <Route path='/Freelancer' element={<ProfileFreelancer />}> </Route>
            <Route path='/Empresa' element={<ProfileCompany></ProfileCompany>} > </Route>
            <Route path='/RegistroFreelancer' element={<RegistroFreelancer />}> </Route>
            <Route path='/RegistroEmpresa' element={<RegistroEmpresa />}> </Route>

            <Route path='/politicasDeprivacidad' element={<PoliticasDeprivacidad />}> </Route>
            <Route path='/CreacionProfileFreelancer' element={<CreacionProfileFreelancer />}> </Route>
            <Route path='/CreacionProfileEmpresa' element={<CreacionProfileEmpresa />}> </Route>
            

            {/* redirect */}
            <Route path='/CloseSession' element={<Navigate to="/"  />} > </Route>
            <Route path='/upds' element={<Navigate to="/Login"  />} > </Route>
            {/* <Route path='/RPF' element={<Navigate replace to="/Freelancer"/>} > </Route>
            <Route path='/RPE' element={<Navigate replace to="/Empresa"  />} > </Route> */}

            

            {/* Not Found */}
            <Route path='*' element={<h1>404 Not Fount </h1>}></Route>
         </Routes>
      </BrowserRouter>
            {/* <Preloader
             background={'#0D021E'}
             color={'white'}
             time={4000} 
            /> */}
   </> 

   );

}

export default RouterApp;

