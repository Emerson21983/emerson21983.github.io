

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

// Function
import { HandleSession } from '../function/Login/index';


const ProfileFreelancer = () =>{ 
   const navigate = useNavigate();

   const [route, setRouter] = useState<string>("");
   
   const {Session, type} = HandleSession();   
   
   console.log(Session, type);

   useEffect(() => {
      // Validate user session
      
      if(Session && type === 3){
         // * later verify process 
      }else{
         setRouter("/");       
         navigate(route);   
      };

   },[route]); 
   
   
   return(
      <div>
         <h1 className="2xl">Perfil Freelancer</h1>
         <p className="p-10"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio unde cupiditate eligendi officia blanditiis sed nam eum, provident architecto voluptas doloremque deserunt harum dolores adipisci minus quas, ab suscipit.
         </p>
      </div>
   );
};

export default ProfileFreelancer;