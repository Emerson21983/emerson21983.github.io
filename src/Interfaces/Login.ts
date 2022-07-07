export interface Login{
   email:string,
   password:string
}

export interface Input{
   name:string,
   value:string
} 

export interface alertLogin{
   input?:string,
   message: string | boolean,
   state?:boolean
}