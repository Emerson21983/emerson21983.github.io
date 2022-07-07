export interface ResponseFacebook{
   accessToken: string,
   data_access_expiration_time: number,
   email: string,
   expiresIn: number,
   first_name: string,
   graphDomain: string,
   id: string,
   last_name: string,
   picture:{
      data:{
         height: number
         is_silhouette: boolean
         url: string
         width: string
      },
      signedRequest:string,
      userID: string
   },
   signedRequest: string,
   userID: string,
}


export interface Facebook{
   Action:string,
   Name:string,
   Lastname:string,
   Email:string,
   Photo:string
}


