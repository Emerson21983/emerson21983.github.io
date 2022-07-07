import { ChangeEvent, useEffect, useState } from "react";
import imagenesLogin from "../../assets/imgLogin/imagenesLogin";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import axios from 'axios';

// InterFace
import { Companies } from "../../Interfaces/RegisterCompanies";
import { alertLogin } from "../../Interfaces/Login";

// Functions
import { ValidateEmail } from "../../function/Login";
import { InitialStateDepartment } from "../../Interfaces/departmentsAndmuniti";
import { useNavigate } from "react-router-dom";

// types
type handleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

const initialStateCompanies = {
    type: "",
    names: "",
    email: "",
    country: "",
    areaCode: "",
    tel: "",
    password: "",
    password_confirmation: ""
}

const initialStateInput = {
    input: "",
    message: '',
    state: false
}

const initialStateDepartment ={
    code:0,
    id:0,
    name:""
 }
 

const RegisterCompanies = () => {


    const [registerCompanies, setregisterCompanies] = useState<Companies>(initialStateCompanies)

    const [alert, setalert] = useState<alertLogin[]>([initialStateInput]);

    const [departmentlists, setDepartmentlists] = useState<InitialStateDepartment[]>([initialStateDepartment]);

    const MySwal = withReactContent(Swal);

    const navigate = useNavigate();

    const handleInputChange = ({ target: { name, value, id } }: handleInputChange) => {

        console.log(name, value);

        if(name === "country"){
            const areaCodeCountry = departmentlists.filter(deparment => deparment.id == Number(value)).map((value) =>{ return value.code })
            console.log(areaCodeCountry[0]);
            registerCompanies.areaCode = String(areaCodeCountry[0]);
        };

        setregisterCompanies({ ...registerCompanies, [name]: value });
    };

    // event form
    const handleCompaniesSession = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let verifyValues = [
            {
                name: "profile",
                value: registerCompanies.type
            },
            {
                name: "name",
                value: registerCompanies.names
            },
            {
                name: "gmail",
                value: registerCompanies.email
            },
            {
                name: "country",
                value: registerCompanies.country
            },
            {
                name: "areaCode",
                value: registerCompanies.areaCode
            },
            {
                name: "tel",
                value: registerCompanies.tel
            },
            {
                name: "password",
                value: registerCompanies.password
            },
            {
                name: "confirmPassword",
                value: registerCompanies.password_confirmation
            }
        ];


        const validateInputs = ValidateEmail(verifyValues);

        const state = validateInputs.filter(input => input.state === false).map((s) => { return false });

        setalert(validateInputs);

        // console.log(state.length);

        if (state.length >= 8) sendData();
        

    };

      
    function sendData() {

        const url = `${process.env.REACT_APP_API_URI}employer/register`;
  
        let config = {
           headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json',
           }
        }
  
        console.log(registerCompanies);
        axios.post(url, registerCompanies, config)
           .then(response => {
            //   console.log(response.data);
  
              MySwal.fire({
                 position: 'center',
                 icon: 'success',
                 title: response.data.message,
                 showConfirmButton: false,
                 timer: 3500
              });
              setregisterCompanies(initialStateCompanies);
              setTimeout(() => {
                 navigate('/Login');
              }, 4000);
  
           })
           .catch(err => {
            //   console.log(err.response.data);
  
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



    
    //  Get country
    useEffect(() => {
        async function fetchData() {
            const urlCountry = `${process.env.REACT_APP_API_URI}country`;
            let config = {
               headers: {
                   'Content-Type': 'application/json',
                   'Accept': 'application/json',
                   }
               };
           try {
              const resp = await axios.get(urlCountry, config);
            //   console.log(resp.data);
              setDepartmentlists(resp.data);
           } catch (err) {
              // Handle Error Here
              console.error(err);
          }
        };
        fetchData();
    }, []);



    return (
        <form className="lg:w-3/4 xl:w-1/2" onSubmit={handleCompaniesSession}>
            <img src={imagenesLogin.logoLetrasChambaticon} className="w-full my-10 lg:my-5 sm:my-10 md:my-10" alt="" />
            <div className="lg:columns-2 columns-2">
                <div className="mb-4">
                    <input
                        id="default-radio-1"
                        type="radio"
                        name="type"
                        value="1"
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-white">Eres empresa</label>

                </div>
                <div className="">
                    <input
                        id="default-radio-2"
                        type="radio"
                        name="type"
                        value="2"
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-white">Eres empleador</label>
                </div>
            </div>
            <div className="columns-1">
                <p className="text-red-500 text-center w-full">
                    {alert.filter(input => input.input == "profile" && input.state === true).map(message => (
                        <span className="text-red-500 text-start">{message.message}</span>
                    ))}
                </p>
            </div>
            <div className="lg:columns-2">
                <div className="mb-6 text-start">
                    <label htmlFor="email" className="text-white">Nombre de la empresa</label>
                    <input
                        type="text"
                        id="email"
                        name="names"
                        value={registerCompanies.names}
                        onChange={handleInputChange}
                        className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                    {alert.filter(input => input.input == "name" && input.state === true).map(message => (
                        <span className="text-red-500 text-start">{message.message}</span>
                    ))}
                </div>
                <div className="mb-6 text-start">
                    <label htmlFor="nombreCompleto" className="text-white">Correo electrónico</label>
                    <input
                        type="text"
                        id="nombreCompleto"
                        name="email"
                        value={registerCompanies.email}
                        onChange={handleInputChange}
                        className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                    {alert.filter(input => input.input == "gmail" && input.state === true).map(message => (
                        <span className="text-red-500 text-start">{message.message}</span>
                    ))}
                </div>
            </div>
            <div className="lg:columns-1">
                <div className="mb-6 text-start">
                    <label htmlFor="departamento" className="text-white">País</label>
                    <select
                        id="departamento"
                        name="country"
                        value={registerCompanies.country}
                        onChange={handleInputChange}
                        className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <option selected >Seleccione un País</option>
                        {
                            departmentlists.map((departments) =>{
                            return <option value={departments.id}> {departments.name}</option>
                            })
                        }
                    </select>
                    {alert.filter(input => input.input == "country" && input.state === true).map(message => (
                        <span className="text-red-500 text-start">{message.message}</span>
                    ))}
                </div>
            </div>
            <div className="columns-1">
                <div className="mb-3 text-start">
                    <label htmlFor="municipio" className="text-white">Código de área y celular</label>
                    <div className="flex">
                        <input
                            type="number"
                            name="areaCode"
                            value={registerCompanies.areaCode}
                            onChange={handleInputChange}
                            disabled
                            className="bg-color-input-login form-control block px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-1/3"
                            id="codigoArea"
                        />


                        &nbsp;
                        <input
                            id="celular"
                            type="tel"
                            name="tel"
                            value={registerCompanies.tel}
                            onChange={handleInputChange}
                            className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        />

                    </div>
                </div>
                <p className="text-red-500 w-full text-start mb-5">

                    {alert.filter(input => input.input == "areaCode" && input.state === true).map(message => (
                        <span className="text-red-500">{message.message}</span>
                    ))}
                    <br />
                    {alert.filter(input => input.input == "tel" && input.state === true).map(message => (
                        <span className="text-red-500">{message.message}</span>
                    ))}

                </p>
            </div>
            <div className="lg:columns-2">
                <div className="mb-6 text-start">
                    <label htmlFor="password" className="text-white">Contraseña</label>
                    <input
                        id="password"
                        name="password"
                        value={registerCompanies.password}
                        onChange={handleInputChange}
                        type="password"
                        className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                    {alert.filter(input => input.input == "password" && input.state === true).map(message => (
                        <span className="text-red-500 text-start">{message.message}</span>
                    ))}
                </div>
                <div className="mb-6 text-start">
                    <label htmlFor="confirmarPassword" className="text-white">Confirmar contraseña</label>
                    <input
                        name="password_confirmation"
                        value={registerCompanies.password_confirmation}
                        onChange={handleInputChange}
                        type="password"
                        className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="confirmarPassword"
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
                        Registrarse
                    </button>
                </div>
            </div>
        </form>

    );
}


export default RegisterCompanies;