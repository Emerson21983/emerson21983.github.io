
// libraries
import { ChangeEvent, useEffect, useState } from "react";
import imagenesLogin from "../../assets/imgLogin/imagenesLogin";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import axios from 'axios';


// InterFaces
import { FormFreelancer } from "../../Interfaces/registerFreelancer";
import { alertLogin } from "../../Interfaces/Login";
import { InitialStateDepartment, InitialStateMunicipalities } from "../../Interfaces/departmentsAndmuniti";

// Functions
import { ValidateEmail } from "../../function/Login";
import { useNavigate } from "react-router-dom";

// type
type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

const inititalStateFormFreelancer = {
   email: "",
   names: "",
   lastnames: "",
   state: "",
   city: "",
   password: "",
   password_confirmation: ""
}

const initialStateInput = {
   input: "",
   message: '',
   state: false
}


const initialStateDepartment = {
   code:0,
   id: 0,
   name: ""
}

const initialStateMunicipalities = {
   name: "",
   id: 0
}



const RegisterFreealncer = () => {

   const [registerFreelancer, setRegisterFreelancer] = useState<FormFreelancer>(inititalStateFormFreelancer);

   const [alert, setalert] = useState<alertLogin[]>([initialStateInput]);

   const MySwal = withReactContent(Swal);

   const [departmentlists, setDepartmentlists] = useState<InitialStateDepartment[]>([initialStateDepartment]);

   const [municipalities, setMunicipalities] = useState<InitialStateMunicipalities[]>([initialStateMunicipalities]);

   const navigate = useNavigate();


   // event form
   const handleLoginSession = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      let verifyValues = [
         {
            name: "gmail",
            value: registerFreelancer.email
         },
         {
            name: "name",
            value: registerFreelancer.names
         },
         {
            name: "lastnames",
            value: registerFreelancer.lastnames
         },
         {
            name: "department",
            value: registerFreelancer.state
         },
         {
            name: "municipality",
            value: registerFreelancer.city
         },
         {
            name: "password",
            value: registerFreelancer.password
         },
         {
            name: "confirmPassword",
            value: registerFreelancer.password_confirmation
         }];



      const validateInputs = ValidateEmail(verifyValues);

      const state = validateInputs.filter(input => input.state === false).map((s) => { return false });

      setalert(validateInputs);

      if (state.length >= 6) sendData();

   };


   function sendData() {

      const url = `${process.env.REACT_APP_API_URI}freelancer/register`;

      let config = {
         headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
         }
      }

      axios.post(url, registerFreelancer, config)
         .then(response => {
            // console.log(response.data);

            MySwal.fire({
               position: 'center',
               icon: 'success',
               title: response.data.message,
               showConfirmButton: false,
               timer: 3500
            });
            setRegisterFreelancer(inititalStateFormFreelancer);
            setTimeout(() => {
               navigate('/Login');
            }, 4000);

         })
         .catch(err => {
            console.log(err.response.data.errors);

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


   const handleInputChange = ({ target: { name, value, id } }: handleInputChange) => {


      if (name === "state") getMunicipalities(value);

      setRegisterFreelancer({ ...registerFreelancer, [name]: value });

   };

   //municipalities

   async function getMunicipalities(id: string) {

      try {

         const urlCity = `${process.env.REACT_APP_API_URI}city/${id}`;
         let config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                }
            };

         const resp = await axios.get(urlCity,config);
         // console.log(resp.data);
         setMunicipalities(resp.data);

      } catch (err) {
         // Handle Error Here
         console.error(err);
      }

   };


   useEffect(() => {
      async function fetchData() {

         const urlCountry = `${process.env.REACT_APP_API_URI}state/3`;
         let config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                }
            };


         try {
            const resp = await axios.get(urlCountry, config);
            // console.log(resp.data);
            setDepartmentlists(resp.data);

         } catch (err) {
            // Handle Error Here
            console.error(err);
         }
      };
      fetchData();
   }, []);



   return (
      <form className="lg:w-3/4 xl:w-1/2" onSubmit={handleLoginSession}>
         <img src={imagenesLogin.logoLetrasChambaticon} className="w-full my-10 lg:my-5 sm:my-10 md:my-10" alt="" />
         <div className="lg:columns-2">
            <div className="mb-6 text-start">
               <label htmlFor="nombreCompleto" className="text-white">Nombres</label>
               <input
                  type="text"
                  className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="names"
                  id="2" //do not remove ID, it is important to validate
                  value={registerFreelancer.names}
                  onChange={handleInputChange}
               />
               {alert.filter(input => input.input == "name" && input.state === true).map(message => (
                  <span className="text-red-500">{message.message}</span>
               ))}
            </div>
            <div className="mb-6 text-start">
               <label htmlFor="nombreCompleto" className="text-white">Apellidos</label>
               <input
                  type="text"
                  className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="lastnames"
                  value={registerFreelancer.lastnames}
                  onChange={handleInputChange}
               />
               {alert.filter(input => input.input == "lastnames" && input.state === true).map(message => (
                  <span className="text-red-500">{message.message}</span>
               ))}
            </div>
         </div>
         <div className="lg:columns-1">
            <div className="mb-6 text-start">
               <label htmlFor="email" className="text-white">Correo electrónico</label>
               <input
                  type="text"
                  className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="email"
                  value={registerFreelancer.email}
                  id="1" //do not remove ID, it is important to validate
                  onChange={handleInputChange}
               />
               {alert.filter(input => input.input == "gmail" && input.state === true).map(message => (
                  <span className="text-red-500">{message.message}</span>
               ))}
            </div>
         </div>
         <div className="lg:columns-2">
            <div className="mb-6 text-start">
               <label htmlFor="departamento" className="text-white">Departamento</label>
               <select
                  id="3" //do not remove ID, it is important to validate
                  value={registerFreelancer.state}
                  name="state"
                  onChange={handleInputChange}
                  className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  >
                  <option selected >Seleccione un departamento </option>
                  {
                     departmentlists.map((departments) => {
                        return <option value={departments.id}>{departments.name}</option>
                     })
                  }
               </select>
               {alert.filter(input => input.input == "department" && input.state === true).map(message => (
                  <span className="text-red-500">{message.message}</span>
               ))}
            </div>
            <div className="mb-6 text-start">
               <label htmlFor="municipio" className="text-white">Municipio</label>
               <select
                  id="4" //do not remove ID, it is important to validate
                  value={registerFreelancer.city}
                  name="city"
                  onChange={handleInputChange}
                  className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                  <option value="" selected>Seleccione un municipio</option>
                  {
                     municipalities.map((municipaliti) => {
                        return <option value={municipaliti.id}>{municipaliti.name}</option>
                     })
                  }
               </select>
               {alert.filter(input => input.input == "municipality" && input.state === true).map(message => (
                  <span className="text-red-500">{message.message}</span>
               ))}
            </div>
         </div>

         <div className="lg:columns-2">
            <div className="mb-6 text-start">
               <label htmlFor="password" className="text-white">Contraseña</label>
               <input

                  type="password"
                  className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="password"
                  id="5" //do not remove ID, it is important to validate
                  value={registerFreelancer.password}
                  onChange={handleInputChange}
               />
               {alert.filter(input => input.input == "password" && input.state === true).map(message => (
                  <span className="text-red-500">{message.message}</span>
               ))}
            </div>

            <div className="mb-6 text-start">
               <label htmlFor="confirmarPassword" className="text-white">Confirmar contraseña</label>
               <input
                  type="password"
                  className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="password_confirmation"
                  id="6" //do not remove ID, it is important to validate
                  value={registerFreelancer.password_confirmation}
                  onChange={handleInputChange}
               />
               {alert.filter(input => input.input == "confirmPassword" && input.state === true).map(message => (
                  <span className="text-red-500">{message.message}</span>
               ))}
            </div>
         </div>



         <div className="columns-1">
            <div className="text-center lg:text-left">
               <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-Yellow text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out w-full"
               >
                  Registrarse
               </button>
            </div>
         </div>
      </form>
   );
};


export default RegisterFreealncer;