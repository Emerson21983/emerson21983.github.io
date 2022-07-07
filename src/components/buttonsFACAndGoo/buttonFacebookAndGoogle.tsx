// React
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth";


// Facebook
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


//Functions
import { FirebaseConfig } from '../../config/FiraBase';

// other
import { useJwt } from "react-jwt";

// Types
type handleGoogleAndFacebook  = React.MouseEvent<HTMLAnchorElement>;



// Initial States
const initialStateFacebook = {
   Action:"",
   Name:"",
   Lastname:"",
   Email:"",
   Photo:""
}

const ButtonGoogleAndFacebook =  () =>{

   const MySwal = withReactContent(Swal);


   // FiraBase
   const firebaseConfig = FirebaseConfig();
   //console.log(configFireBase);

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   const auth = getAuth();
   
   // Google
   const signInWithGoogle = async () => {

       signInWithPopup(auth, new GoogleAuthProvider())
       .then((response) => {
      
               //console.log("data: ",response);
               // console.log("Info user: ",response.user);
      
               const dataGoogleUser = response.user;
      
               const data =  {
                  Action:"Google",
                  Name:dataGoogleUser.displayName,
                  Email:dataGoogleUser.email,
                  Photo:dataGoogleUser.photoURL
               }

               handleSendData(data);

           })
           .catch((error) => {
               console.log(error);
           });
   };




      //Facebook 
      const signInWithFacebook = async () => {

         signInWithPopup(auth, new FacebookAuthProvider())
         .then((response) => {
        
               //   console.log("data: ",response);
                 // console.log("Info user: ",response.user);

                 const dataGoogleUser = response.user;
        
                 const data =  {
                    Action:"Facebook",
                    Name:dataGoogleUser.displayName,
                    Email:dataGoogleUser.email,
                    Photo:dataGoogleUser.photoURL
                 }
  
                 handleSendData(data);
  
             })
             .catch((error) => {
                 console.log(error);
             });
     };



   //   Enviar datos
      const handleSendData = (infoUser:any) =>{
         console.log("Send Info", infoUser);


            MySwal.fire({
               position: 'center',
               icon: 'success',
               title: 'Your work has been saved',
               showConfirmButton: false,
               timer: 1500
            }); 


      setTimeout(()=>{
            handleNavigationLogin();
        },2000);

      }

   
      const handleNavigationLogin = () =>{
         const cookies = new Cookies();
         cookies.set('Bearer', '86451231313213', {path: "/", expires: new Date("2023-06-29 21:45:06")});
         window.location.href = '/Freelancer';
      };
   
  

   return(
      <div>
        <div className="pb-3 w-full">
         
             <a  
             onClick={() => signInWithGoogle()} 
             className="justify-center flex px-7 py-3 bg-white text-dark font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-50 hover:shadow-lg focus:bg-slate-50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-100 active:shadow-lg transition duration-150 ease-in-out w-full mt-3 mb-3"
            // onClick={handleGoogle}
            >
            <img className="w-5" src="https://shr.wetrafa.xyz/2eHVY0z" alt="Logo Google" />
               &nbsp;&nbsp;Acceder con Google
            </a>
        </div>

          

            {/* <FacebookLogin
               appId="2560496527420403"
               autoLoad
               fields="first_name,last_name,email,picture,birthday"
               scope="public_profile,email"
               callback={responseFacebook}
               render={renderProps => (
                  )}
               /> */}
               <a 
                onClick={() => signInWithFacebook()} 
               className="justify-center flex px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-5">
                     <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                     />
                  </svg>&nbsp;&nbsp;Continuar con Facebook
            </a>
           

           
      </div>
   )
}

export default ButtonGoogleAndFacebook;