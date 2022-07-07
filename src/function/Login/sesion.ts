
import React , { useEffect, useState } from 'react';

import Cookies from 'universal-cookie';


export const HandleSession = () => {
   
   // Cookies
   const cookies = new Cookies();   
   
   const [Session, setSession] = useState<boolean>(false)

   // get Session
   const getSession = cookies.get('Bearer');
   
   let type:any = "";

   if(getSession === undefined){
      type = 0;
   }else{
      type = getSession.type;
   }

   // check which session exists
   useEffect(() => {
      if(getSession)  setSession(true);
   }, [])
   

   return {Session, type};
   
}



