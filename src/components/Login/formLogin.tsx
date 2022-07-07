// libraries
import Cookies from 'universal-cookie';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


import axios from 'axios';

// components
import RecoverPassword from '../modalRecoverPassword/recoverPassword';

// functions
import  { ValidateEmail } from '../../function/Login';

// img
import React, { ChangeEvent, useRef, useState } from "react";
// import logoLetrasChambaticon from "../../assets/imgLogin/chamba-ticon.png"
import imagenesLogin from "../../assets/imgLogin/imagenesLogin";


// Interfaces
import { alertLogin, Login } from "../../Interfaces/Login";
import ButtonGoogleAndFacebook from '../buttonsFACAndGoo/buttonFacebookAndGoogle';

// Types
type handleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>


// const
const initialState = {
   email:'',
   password:''
}

const initialStateInput = {
   input:"",
   message:'',
   state:false
}

const FormLogin = () =>{

   const [login, setlogin] = useState<Login>(initialState);   
   
   const inputTitle = useRef<HTMLInputElement>(null);

   const [alert, setalert] = useState<alertLogin[]>([initialStateInput]);

   const MySwal = withReactContent(Swal);

   const cookies = new Cookies();

   // event form
   const handleLoginSession = (event:React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault()
      sendDataValidate();
   };


   // form input event
   const handleInputChange = ({ target:{name, value}}: handleInputChange) =>{
      setlogin({...login,[name]:value})
   };

   // Send info
   const sendDataValidate = () =>{

      const sendDataValidate = [
         {
         name:"gmail",
         value: login.email
         },
         {
         name:"password",
         value: login.password
         }
      ];

      const validateInputs = ValidateEmail(sendDataValidate);
      
      const state = validateInputs.filter(input => input.state === false).map((s)=>{ return false } ) ;
      
      setalert(validateInputs);

      if(state.length >= 2) loginFreelancers();

      };


      
      // Freelancers login
    const loginFreelancers = async () =>{
             
      const url = `${process.env.REACT_APP_API_URI}freelancer/login`;

      let config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json',
          }
      }

      axios.post(url, login, config)
      .then(response => {
            console.log(response.data);
            
            const token = response.data.access_token;
            const name = response.data.token_type;
            const expires = response.data.expires_at;
            const type = response.data.type;

            // console.log(token, name, expires, type);
            MySwal.fire({
               position: 'center',
               icon: 'success',
               title: "Welcomed ",
               showConfirmButton: false,
               timer: 3500
            });

            // redirect to profile 
            handleNavigationLogin(token, name, expires, type);


      }).catch(err => {
            // console.log(err.response.data.message);

            if(err.response.data.message === "Usuario no encontrado. Verifique sus credenciales."){

               // employee login function call
               loginEmployer();

            }else{
               MySwal.fire({
                  position: 'center',
                  icon: 'error',
                  title: err.response.data.message,
                  showConfirmButton: false,
                  timer: 3500
               }); 
            }
      });
   };

   
   // Employer Login
   function loginEmployer(){

      const url = `${process.env.REACT_APP_API_URI}employer/login`;

      let config = {
          headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json',
          }
      };

      axios.post(url, login, config)
      .then(response => {
            console.log(response.data);
            
            const token = response.data.access_token;
            const name = response.data.token_type;
            const expires = response.data.expires_at;
            const type = response.data.type;

            console.log(token, name, expires, type);
            
            MySwal.fire({
               position: 'center',
               icon: 'success',
               title: "Bienvenidos",
               showConfirmButton: false,
               timer: 3500
            });
            
            // redirect to profile 
            handleNavigationLogin(token, name, expires, type);
           
      }).catch(err => {
            console.log(err.response.data.message);            
            MySwal.fire({
               position: 'center',
               icon: 'error',
               title: err.response.data.message,
               showConfirmButton: false,
               timer: 3500
            }); 
      });      
   };



      const handleNavigationLogin = (token:string, name:string, expires:string, type:number) =>{
         

         cookies.set(name, {token:token, type:type}, {path: "/", expires: new Date(expires), secure:true});

         switch(type) { 

            case 3: {
               // console.log("The profile is for freelancer");
               window.location.replace('/Freelancer');

               break; 
            } 
            
            case 5: {
               // console.log("The profile is for company")
               window.location.replace('/Empresa');
               
               break; 
            } 
   

            default: { 

               break; 
            } 
         } 


      
      
      
      };

   return(
      <div>
          <form className="lg:w-2/4" onSubmit={handleLoginSession} >
                <img src={imagenesLogin.logoLetrasChambaticon} className="w-full my-10 lg:my-5 sm:my-10 md:my-10" alt="" />
                    <div className="mb-6 text-start">
                        <label htmlFor="email" className="text-white">Correo electrónico</label>
                        <input
                              type="text"
                              className="bg-color-input-login form-control block w-full px-4 py-2 mb-1 text-xl font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="email"
                              name="email"
                              value={login.email}
                              onChange={handleInputChange}
                              autoFocus
                              ref={inputTitle}
                        />

                     {alert.filter(input => input.input == "gmail" && input.state === true).map(message => (
                        <span className="text-red-500">{message.message}</span>
                     ))}
                    </div>
                    <div className="mb-6 text-start">
                        <label htmlFor="password" className="text-white">Contraseña</label>
                        <input
                              type="password"
                              className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="password"
                              name="password"
                              value={login.password}
                              onChange={handleInputChange}
                        />
                        {alert.filter(input => input.input == "password" && input.state === true).map(message => (
                           <span className="text-red-500">{message.message}</span>
                        ))}
                    </div>

                    <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-amber-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        >
                            Iniciar sesión
                        </button>
                   
          </form>
                <div className="text-center lg:text-left lg:w-2/4">
                     
                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0 text-white">O</p>
                        </div>
                        
                        {/* Buttons Google and Facebook */}
                            <ButtonGoogleAndFacebook />
                            
                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                        </div>
                        <div className="text-white">
                            <RecoverPassword />
                                
                        </div>
                    </div>
      </div>
   )
}

export default FormLogin;
