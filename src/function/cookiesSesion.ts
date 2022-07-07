import React , { useEffect, useState } from 'react';

import Cookies from 'universal-cookie';


export const HandleSession = () => {
   
   // Cookies
   const cookies = new Cookies();   
   
   const [Session, setSession] = useState<boolean>(false)

   // get Session
   const getSesion = cookies.get('sessionUser');

   // check which session exists
   useEffect(() => {
      if(getSesion)  setSession(true);
   }, [])
   
   return Session;
   
};
