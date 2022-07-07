import { ChangeEvent, useState } from "react";
import { ValidateEmail } from "../../function/Login";
import { alertLogin } from "../../Interfaces/Login";

import axios from 'axios';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


// Types
type handleInputChange = ChangeEvent<HTMLInputElement>

// Initial states
const initialStateInput = {
   input:"",
   message:'',
   state:false
}


const RecoverPassword = () =>{

   const [toggleShowAndHide, setToggleShowAndHide] = useState<Boolean>(false);
   const [addClass, setAddClass] = useState<string>("hidden bg-fadeOut");

   const MySwal = withReactContent(Swal);


   const showModal = () =>{
      toggleShowAndHide ? setToggleShowAndHide(false) : setToggleShowAndHide(true);

      if(!toggleShowAndHide){
         setAddClass("block bg-fadeIn");
      }else{
         setAddClass("bg-fadeOut");
         setTimeout(()=>{setAddClass("hidden")}, 500);
      }
   };


   const [recoveryPassword, setRecoveryPassword] = useState<string>("");

   const [alert, setalert] = useState<alertLogin[]>([initialStateInput]);


   const handleInputGmail = ({ target:{name, value, id}}: handleInputChange) =>{
      // console.log(name, value);
      setRecoveryPassword(value);
   };


      // event form
      const handleRP = (event:React.FormEvent<HTMLButtonElement>) =>{
         event.preventDefault()
     
         let verifyValues = [{
                name:"gmail",
                value: recoveryPassword
             }];
     
     
               const validateInputs = ValidateEmail(verifyValues);
               
               const state = validateInputs.filter(input => input.state === false).map((s)=>{ return false } ) ;

               console.log(validateInputs, state);
             
               setalert(validateInputs);
     
               
                  if(state.length ==1) {
                     console.log("Enviar datos", recoveryPassword);
                     setRecoveryPassword("");

                     const url = `${process.env.REACT_APP_API_URI}auth/forgot-password`;

                     let config = {
                        headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        }
                     }

                     axios.post(url, {email:recoveryPassword}, config)
                     .then(response => {
                        console.log(response.data);

                        MySwal.fire({
                           position: 'center',
                           icon: 'success',
                           title: response.data.message,
                           showConfirmButton: false,
                           timer: 3500
                        });

                     }).catch(err => {
                        console.log(err);

                        MySwal.fire({
                           position: 'center',
                           icon: 'error',
                           title: err.response.data.message,
                           showConfirmButton: false,
                           timer: 3500
                        }); 
                     });

                  };
          };





   return(
         <>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0" onClick={showModal}>
               Olvidaste tu contraseña?
               &nbsp;
               <a
                  className="text-amber-500 hover:text-amber-600 focus:text-amber-600 transition duration-200 ease-in-out"
                  
                  >
                  Click aquí
               </a>
            </p>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
               Aun no tienes cuenta?
               &nbsp;
               <a
                  className="text-amber-500 hover:text-amber-600 focus:text-amber-600 transition 
                  duration-200 ease-in-out"
                 
                  >
                  Regístrate aquí
               </a>
            </p>

            {/* Modal */}
            <div id="modal-component-container" className={`fixed inset-0  hidden-modal ${toggleShowAndHide ? addClass : addClass}`}>
               <div className="modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-96 text-center sm:block sm:pb-0 ">

               <div className='modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75'></div>   
               <div className='modal-space-container hidden h-80 sm:inline-block sm:align-middle'> &nbsp;</div>

                  <div className={`modal-container inline-block align-bottom bg-turquoise rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:aling-middle sm:w-2/4 w-full ${toggleShowAndHide ? 'modal-scaleIn' : 'modal-scaleout '}`}>
                  {/* <div className="modal-title text-center p-5">
                     <h1 className="text-3xl font-medium text-white">Mofal-title</h1>
                  </div> */}
                  <div className='modal-wrapper bg-stable-background-modal px-4 pt-5 pb-4 sm:p-6 sm:pb-4 '>
                     <div className="modal-wrapper-flex">
                        
                        <h2 className="text-white 2xl pb-3"> ¿Olvidaste tu contraseña? </h2>

                        <p className="text-Yellow pb-3">
                           Digite el correo electrónico con que te registraste. Se te enviará un email con las instrucciones para cambiar tu contraseña
                        </p>

                        <form className="lg:w-4/4">
                        {/* <form className="lg:w-full" > */}
                           <div className="text-start">
                              <label htmlFor="email" className="text-white text-sm  pb-3">Digita tu correo electrónico</label>
                              <input
                                    type="text"
                                    className="bg-color-input-login form-control block w-full px-4 py-2 mb-1 text-xl font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="email"
                                    name="email"
                                    value={recoveryPassword}
                                    onChange={handleInputGmail}
                                    autoFocus
                                    // ref={inputTitle}
                              />
                               {alert.filter(input => input.input == "gmail" && input.state === true).map(message => (
                                 <span className="text-red-500">{message.message}</span>
                              ))}
                           </div>
                        </form>
                        
                     </div>
                  </div>

                  <div className='modal-actions bg-stable-background-modal px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                                    
                     <div className="mb-4">
                        <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-Light-Blue text-white font-mediumtext-gray-700hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={showModal}>
                           Cerrar
                        </button>
                     </div> 
                     
                     <div className="mb-4">
                        <button 
                         onClick={handleRP}
                        type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-Yellow text-white font-mediumtext-gray-700hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                        ">
                           Enviar
                        </button>
                     </div>
                     
                  </div>

                  </div>

               </div>   
               </div>  

         </>
   )
}


export default RecoverPassword;