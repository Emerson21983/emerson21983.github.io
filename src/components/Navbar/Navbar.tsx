import React, { useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from 'firebase/auth';

import axios from 'axios';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Img
import logo_chambaticonLetras from '../../assets/logos/chambaticon_navbar.png';
import imagenesLogin from '../../assets/imgLogin/imagenesLogin';

import '../../css/main.css';

// Functions
import { HandleSession } from '../../function/Login';
import Cookies from 'universal-cookie';
import { FirebaseConfig } from '../../config/FiraBase';


const Navbar = () => {


   /* Funcion para mostrar contenido de navbar en responsive */
   const [toggleShowAndHide, setToggleShowAndHide] = useState<Boolean>(false);

   const [addClass, setaddClass] = useState<string>('hidden');

   const navigate = useNavigate();

     // Cookies
     const cookies = new Cookies();  
   
     const MySwal = withReactContent(Swal); 
     

   function showNavbar() {
      toggleShowAndHide ? setToggleShowAndHide(false) : setToggleShowAndHide(true);

      if (!toggleShowAndHide) {
         setaddClass('flex');
      } else {
         setaddClass('hidden')
      }
   }

   function hideNavbar() {
      toggleShowAndHide ? setToggleShowAndHide(false) : setToggleShowAndHide(true);

      if (toggleShowAndHide) {
         setaddClass('hidden');
      }
   }

   // validate buttons and logo
   const verifySession = HandleSession();   


   // AuthCheck google and Initialize FiraBase
   const firebaseConfig = FirebaseConfig();
   
   // Initialize my App with Firebase
   const app = initializeApp(firebaseConfig);

   const auth = getAuth();
   
   // Get info login  of with facebook and google
   const AuthCheck = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
         // console.log('open authentication');  
      } else {
         // console.log("authentication not initialized");
      }
});


 
   const closeSession = () =>{
     
      
      
      // get Session
      const getSesion  = cookies.get('Bearer');   
      const url = `${process.env.REACT_APP_API_URI}auth/logout`;

      let config = {
         headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json',
             'Authorization': `Bearer ${getSesion.token}`,
         }
     }
     
      axios.get(url, config).then(response => {

         MySwal.fire({
            position: 'center',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 3500
         });
      
      //close auth google and AuthCheck();

      // Exit of google or facebook
      signOut(auth);

      // delete cookies
      cookies.remove('Bearer');


      // redirect on logout
       window.location.replace('/CloseSession');
      
   }).catch(err => {
         // console.log(err);
         MySwal.fire({
            position: 'center',
            icon: 'error',
            title: "Error al cerrar sesión",
            showConfirmButton: false,
            timer: 5000
         });
      })   
   }
   

   /** 
    * comentrios tipicos
    * * tan solo acepta numero o string: Este es un commentaries important 
    * !esta funcion esta deprecada: este comentario me puede dar un error
    * ?esta funcion debe de procesar string tambein?: comentarios para preguntas
    * TODO: Esta funtion debe de validar, aun no esta terminada: comentarios para dudas
    * @param x first number: para parametross
    * @param y second number
    * @returns la suma de los numero
   **/

   return (

      <div>
         <nav className="body-font bg-Light-purple text-gray-600 border-gray-200 p-7">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
               <NavLink onClick={hideNavbar} className="items-center hidden sm:hidden md:flex lg:flex xl:flex" to={""}>
                  <img src={imagenesLogin.logoGrandeChambaticon} className="w-12" alt="Chambaticon Logo" />
               </NavLink>
               <NavLink onClick={hideNavbar} className="items-center sm:flex md:hidden lg:hidden xl:hidden" to={""}>
                  <img src={logo_chambaticonLetras} className="mr-3 h-6 sm:h-9 m-" alt="Chambaticon Logo" />
               </NavLink>
               {verifySession.Session && (
                  <div className="flex items-center md:order-2">

                     {(verifySession.type === 5) ? (
                     <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                        <span className="sr-only">Open user menu</span>
                        <NavLink onClick={hideNavbar} to={"/Empresa"}>
                           <img className="w-12 rounded-full" src="https://th.bing.com/th/id/OIP.4hKEfuR0MgutxgsYBz0QbQHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7" alt="user photo" />
                        </NavLink>
                     </button>
                        
                     ):(
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                        <span className="sr-only">Open user menu</span>
                        <NavLink onClick={hideNavbar} to={"/Freelancer"}>
                           <img className="w-12 rounded-full" src="https://th.bing.com/th/id/OIP.4hKEfuR0MgutxgsYBz0QbQHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7" alt="user photo" />
                        </NavLink>
                        </button>
                     )}

                  
                  <button onClick={showNavbar} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                     <span className="sr-only">Open main menu</span>
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                     <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>

               </div>
               )}
              
               <div className={`justify-between items-center w-full md:flex md:w-auto md:order-1 animate__animated animate__fadeIn ${toggleShowAndHide ? addClass : addClass}`} id="mobile-menu-2">
                  <ul className="items-baseline flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                     <li>
                        <NavLink onClick={hideNavbar} className="text-white hover:text-gray-300 active block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white" to={""}>Inicio</NavLink>
                     </li>
                     <li>
                        <NavLink onClick={hideNavbar} className="text-white hover:text-gray-300 active block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white" to={""}>Contactanos</NavLink>
                     </li>
                     <li>
                        <NavLink onClick={hideNavbar} className="text-white hover:text-gray-300 active block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white" to={""}>Quienes somos</NavLink>
                     </li>
                     <li>
                        {!verifySession.Session ? (
                           <NavLink onClick={hideNavbar} className="text-white active block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white" to={"/Login"}>
                            <button className="inline-flex items-center rounded-sm bg-Yellow border-0 py-1 px-3 focus:outline-none hover:bg-amber-600  text-base mt-4 md:mt-0">
                               Iniciar sesión
                            </button>
                            </NavLink>
                           ):(
                              <NavLink onClick={hideNavbar} className="text-white active block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white" to={"/Login"}>
                              <button onClick={closeSession} className="inline-flex items-center rounded-sm bg-Yellow border-0 py-1 px-3 focus:outline-none hover:bg-amber-600  text-base mt-4 md:mt-0">
                                 Cerrar sesión
                              </button>
                           </NavLink>
                           )}

                     </li>
                     {/* <li>
                        <NavLink className="text-white hover:text-gray-300 active block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white" to={"/Registro"}>
                           <button className="inline-flex items-center rounded-2xl bg-Light-Blue border-0 py-1 px-3 focus:outline-none text-white hover:bg-gray-200  text-base mt-4 md:mt-0">
                              Registro
                           </button>
                        </NavLink>
                     </li> */}
                  </ul>
               </div>
            </div>
         </nav>

      </div>
   )
}

export default Navbar;