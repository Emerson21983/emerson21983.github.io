
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

// Function
import { HandleSession } from '../function/Login/index';

const ProfileCompany = () =>{


     const navigate = useNavigate();

     const [route, setRouter] = useState<string>("");
     
     const {Session, type} = HandleSession();   
     
     console.log(Session, type);
  
     useEffect(() => {
      // Validate user session  
      
      if(Session && type === 5){
         // * later verify process
      }else{
           setRouter("/");        
           navigate(route);   
      };
  
     },[route]); 
     
   return(
      <div>
         <h2>Perfil Empres</h2>
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatibus molestiae porro ratione consequuntur, iste quia? Numquam repellendus vero molestias dignissimos aut nisi ullam dicta omnis? Quaerat quod architecto accusamus?
         </p>
      </div>
   )
};


export default ProfileCompany;