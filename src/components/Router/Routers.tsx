import { BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'

// Views
import Home from '../../views/home';
import LoginMain from '../../views/Login';
import SignIn from '../../views/SignIn';

// Compoenents
import Navbar from "../Navbar/Navbar";

const RouterApp = () =>{

   return(
      <BrowserRouter>
         
         < Navbar />

         <Routes>
           <Route path="/" element={ <Home /> } /> 
           <Route path='/Login' element={ <LoginMain />}> </Route>
           <Route path='/Registro' element={<SignIn />} > </Route>
            {/* Not Found */}
            <Route path='*' element={ <h1>404 Not Fount </h1> }></Route>   
         </Routes>
      </BrowserRouter>
   );

}

export default RouterApp;

