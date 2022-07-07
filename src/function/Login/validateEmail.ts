import { alertLogin, Input } from "../../Interfaces/Login";



export const ValidateEmail = (data:Input[]) =>{
   // export const ValidateEmail = () =>{

   let errors: alertLogin[] = [];

   
   const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   

      data.map((input) =>{

      switch(input.name) { 

         case 'name': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Campo requerido',
                  state:true
               });


            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               })
            }
            
            break; 
         } 
         
         case 'lastnames': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Campo Apellidos',
                  state:true
               });

            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               })
            }
            
            break; 
         } 

         case 'gmail': { 
            if (input.value === '') {
               errors.push({
                  input:input.name,
                  message:'Por favor ingresa tu correo electrónico.',
                  state:true
               });
            }else if (!isValidEmail.test(input.value)) {
               errors.push({
                  input:input.name,
                  message:'Ingresa un correo electrónico válido.',
                  state:true
               });
            
            }else{
             errors.push({
               input:input.name,
               message:'',
               state:false
            })
            }

            break; 
         } 
         
         case 'password': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Por favor ingresa su Contraseña',
                  state:true
               });


            } else if (input.value.length < 8) {

               errors.push({
                  input:input.name,
                  message:'Contraseña debe tener un mínimo de 8 caracteres.',
                  state:true
               });
                        
            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               })
            }
            
            break; 
         } 

         case 'confirmPassword': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Por favor ingresa su Contraseña',
                  state:true
               });


            } else if (input.value.length < 8) {

               errors.push({
                  input:input.name,
                  message:'Contraseña debe tener un mínimo de 8 caracteres.',
                  state:true
               });
                        
            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               })
            }
            
            
            break; 
         } 

          case 'country': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Pais requerido',
                  state:true
               });


            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               })
            }
            
            break; 
         } 

         case 'department': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Departamento requerido',
                  state:true
               });
               
            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               })
            }
            
            break; 
         } 

         case 'municipality': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Municipio requerido ',
                  state:true
               });


            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               })
            }
            
            break; 
         } 

         case 'areaCode': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Código de área requerido ',
                  state:true
               });

            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               });
            }
            
            break; 
         } 

         case 'tel': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Celular requerido  ',
                  state:true
               });


            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               })
            }
            
            break; 
         } 

         case 'profile': {

            if (input.value === '') {
            
               errors.push({
                  input:input.name,
                  message:'Campo requerido',
                  state:true
               });


            }else{
                errors.push({
                  input:input.name,
                  message:'',
                  state:false
               })
            }
            
            break; 
         } 

      
         default: { 
            // errors.push({
            //    input:"requeridos",
            //    message:'Campos requeridos',
            //    state:true
            // });
            break; 
         } 
      } 
   })
 
   return errors;
  
}