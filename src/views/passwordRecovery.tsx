import { useParams } from "react-router-dom";


import { ChangeEvent, useEffect, useState } from "react";
import imagenesLogin from "../assets/imgLogin/imagenesLogin";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import axios from 'axios';

// InterFace
import { alertLogin } from "../Interfaces/Login";

// Functions
import { ValidateEmail } from "../function/Login";
import { InitialStateDepartment } from "../Interfaces/departmentsAndmuniti";
import { useNavigate } from "react-router-dom";
import { recoveryPassword } from "../Interfaces/recoveryPassword";

// types
type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

const initialStateRecoveryPassword = {
   password:"",
   password_confirmation:"",
   email:"",
   token:""
}

const initialStateInput = {
    input: "",
    message: '',
    state: false
}

const PasswordRecovery = () =>{

   const { token } = useParams();

   console.log( token );

  
   const [RecoveryPassword, SetRecoveryPassword] = useState<recoveryPassword>(initialStateRecoveryPassword)

   const [alert, setAlert] = useState<alertLogin[]>([initialStateInput]);

   const MySwal = withReactContent(Swal);

   const navigate = useNavigate();

   const handleInputChange = ({ target: { name, value, id } }: handleInputChange) => {

       console.log(name, value);
       SetRecoveryPassword({ ...RecoveryPassword, [name]: value });
   
   };

   // event form
   const handleCompaniesSession = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault()
       let verifyValues = [
           {
               name: "password",
               value: RecoveryPassword.password
           },
           {
               name: "confirmPassword",
               value: RecoveryPassword.password_confirmation
           },
           {
               name: "gmail",
               value: RecoveryPassword.email
           }
       ];

       
        const validateInputs = ValidateEmail(verifyValues);
        
        const state = validateInputs.filter(input => input.state === false).map((s) => { return false });
        
        console.log(validateInputs);
         setAlert(validateInputs);
         
         // console.log(state.length);
         console.log("Data", RecoveryPassword);
         if (state.length >= 2){
            
               if(RecoveryPassword.password !== RecoveryPassword.password_confirmation){
                     setAlert([{
                           input:"password",
                           message:'contraseñas no coinciden ',
                           state:true
                        },{
                           input:"confirmPassword",
                           message:'contraseñas no coinciden ',
                           state:true
                        }]);      
               }else{
                  sendData();
               }

         } 
   };

     
   function sendData() {

      const url = `${process.env.REACT_APP_API_URI}auth/reset`;
 
      let config = {
         headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
         }
      }

      console.log(RecoveryPassword);
      RecoveryPassword.token = token;
      axios.post(url, RecoveryPassword, config)
         .then(response => {
            // console.log(response.data);

            if(response.data.message === "No se realizar su cambio de contraseña."){
               MySwal.fire({
                  position: 'center',
                  icon: 'error',
                  title: response.data.message,
                  showConfirmButton: false,
                  timer: 3500
               });
            }else{
               MySwal.fire({
                  position: 'center',
                  icon: 'success',
                  title: response.data.message,
                  showConfirmButton: false,
                  timer: 3500
               });
   
               SetRecoveryPassword(initialStateRecoveryPassword);

               setTimeout(() => {
                  navigate('/upds');
               }, 4000);
            }


         })
         .catch(err => {
            // console.log(err.response.data);

            MySwal.fire({
               position: 'center',
               icon: 'error',
               title: err.response.data.message,
               showConfirmButton: false,
               timer: 3500
            });


         })

      // console.log(url, " " , "no-login", " ", registerFreelancer);

    };


   return(
      <div>
          <section className="h-screen bg-color-login overflow-auto">
            <div className="h-full text-gray-800">
                <div className="flex md:justify-center lg:justify-between items-center flex-wrap h-full g-6">
                    <div className="lg:h-screen lg:justify-start grow-0 shrink-1 md:shrink-0 basis-auto xl:w-4/12 lg:w-4/12 md:w-9/12 mb-12 md:mb-0 w-full justify-center sm:justify-center md:justify-center hidden sm:hidden md:hidden lg:flex" id="contenedorImg">
                        <img src={imagenesLogin.logoGrandeMitadChambaticon} id="img" className="hidden sm:hidden md:hidden lg:block" alt="" />
                        {/* <img src={imagenesLogin.logoGrandeChambaticon} id="img" className="flex sm:flex md:flex lg:hidden mt-10 w-1/2" alt="" /> */}
                    </div>
                    <div className=" xl:ml-20 xl:w-7/12 lg:w-7/12 md:w-8/12 mb-12 md:mb-0 flex justify-start pb-5 px-6">
                    <form className="lg:w-3/4 xl:w-1/2" onSubmit={handleCompaniesSession}>
                        <img src={imagenesLogin.logoLetrasChambaticon} className="w-full my-10 lg:my-5 sm:my-10 md:my-10" alt="" />

                        {/* Inputs */}

                        <h2 className="text-white">{token}</h2>

                        <div className="lg:columns-1">
                        <div className="mb-6 text-start">
                              <label htmlFor="email" className="text-white">Email</label>
                              <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={RecoveryPassword.email}
                                    onChange={handleInputChange}
                                    className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              />
                              {alert.filter(input => input.input == "gmail" && input.state === true).map(message => (
                                    <span className="text-red-500 text-start">{message.message}</span>
                              ))}
                           </div>
                           <div className="mb-6 text-start">
                              <label htmlFor="email" className="text-white">Contraseña</label>
                              <input
                                    type="text"
                                    id="email"
                                    name="password"
                                    value={RecoveryPassword.password}
                                    onChange={handleInputChange}
                                    className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              />
                              {alert.filter(input => input.input == "password" && input.state === true).map(message => (
                                    <span className="text-red-500 text-start">{message.message}</span>
                              ))}
                           </div>
                           <div className="mb-6 text-start">
                              <label htmlFor="nombreCompleto" className="text-white">Confirmar Contraseña</label>
                              <input
                                    type="text"
                                    id="nombreCompleto"
                                    name="password_confirmation"
                                    value={RecoveryPassword.password_confirmation}
                                    onChange={handleInputChange}
                                    className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              />
                              {alert.filter(input => input.input == "confirmPassword" && input.state === true).map(message => (
                                    <span className="text-red-500 text-start">{message.message}</span>
                              ))}
                           </div>
                        </div>
                        <div className="columns-1 pt-3">
                           <div className="text-center lg:text-left">
                              <button
                              type="submit"
                              className="inline-block px-7 py-3 bg-amber-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                              >
                                 Enviar
                           </button>
                           </div>
                        </div>

                     </form>
                    </div>
                </div>
            </div>
        </section>
       
      </div>
   )
};

export default PasswordRecovery;