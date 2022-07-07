import imagenesHome from "../assets/imgHome/imagenesHome.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faInstagramSquare, faTwitterSquare, faWhatsapp, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
//import { Link } from "react-router-dom";

import { Link, NavLink } from "react-router-dom";
// import {IconName} from `@fortawesome/fontawesome-svg-core`
 
//  const myIcon: faHome = "faHome"

//bg-fondoHeader

//<NavLink className="text-white hover:text-gray-300 active block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white" to={"/EditPerfil"}></NavLink>

const Home = () =>{
   return(
      <>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"rel="stylesheet"/>
          <div>
            <header className="w-full h-full md:py-20 px-1 md:px-5 sm:px-5 xl:px-24 bg-gradient-to-b from-Light-purple via-turquoise to-turquoise">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 inline-block align-middle">
                     <div className="flex items-stretch px-2 md:px-5">
                        <div className="self-center text-center md:text-start">
                              <h2 className="text-white font-roboto text-xl md:text-2xl font-semibold">El mejor Lugar para encontrar <span className="text-Yellow">"Chamba"</span> sin salir de la casa</h2>
                              <div className="hidden md:block xl:flex py-10">
                                 <div className="my-10">
                                    <Link className="rounded-full bg-Yellow py-3 px-6 mx-2 text-white font-roboto" to="/RegistroFreelancer">Quiero ser Freelancer</Link>
                                 </div>
                                 <div className="my-10">
                                    <Link className="bg-purple-600 rounded-full py-3 px-6 mx-2 text-white font-roboto" to="/RegistroEmpresa">Contrata un Freelancer</Link>
                                 </div>
                              </div>
                        </div>
                     </div>
                     <div className="px-5">
                        <img src={imagenesHome.image_header} alt=""/>
                     </div>
                     <div className="block sm:block md:hidden py-4">
                        <div className="my-10">
                           <Link className="rounded-full bg-Yellow py-3 px-7 mx-2 text-white font-roboto" to="/RegistroFreelancer">Quiero ser Freelancer</Link>
                        </div>
                        <div className="my-10">
                           <Link className="bg-purple-600 rounded-full py-3 px-6 mx-2 text-white font-roboto" to="/RegistroEmpresa">Contrata un Freelancer</Link>   
                        </div>     
                     </div>
                  </div>
            </header>
            <section className="bg-turquoise pb-10 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:px-24">
               <div className="p-4 bg-Light-Blue mx-6 rounded-lg rounded-lg  justify-center">
                  <div className="flex justify-center">
                     <img className="w-4/5" src={imagenesHome.a2}/>
                  </div>
                  <h4 className="flex justify-center text-white font-roboto text-sm py-1">DATE A CONOCER</h4> 
                  <p className="text-white font-roboto text-xs text-start">Lorem ipsum dolor sit amet cons ectetur adipisicing, elit. Comm odi aut eos facere vel quibusdam</p>
               </div>
               <div className="p-4 bg-Light-Blue mx-6 rounded-lg ">
                  <div className="flex justify-center">
                     <img className="w-4/5" src={imagenesHome.a3}/>
                  </div>
                  <h4 className="flex justify-center text-white font-roboto text-sm py-1">DALE CHAMBA A UN FREELANCER</h4>
                  <p className="text-white font-roboto text-xs text-start">Lorem ipsum dolor sit amet cons ectetur adipisicing, elit. Comm odi aut eos facere vel quibusdam</p>
               </div>
               <div className="p-4 bg-Light-Blue mx-6 rounded-lg ">
                  <div className="flex justify-center">
                     <img className="w-4/5" src={imagenesHome.a4}/>
                  </div>
                  <h4 className="flex justify-center text-white font-roboto text-sm py-1">EMPEZÁ YA</h4>
                  <p className="text-white font-roboto text-xs text-start">Lorem ipsum dolor sit amet cons ectetur adipisicing, elit. Comm odi aut eos facere vel quibusdam</p>
               </div>
               <div className="p-4 bg-Light-Blue mx-6 rounded-lg ">
                  <div className="flex justify-center">
                     <img className="w-4/5" src={imagenesHome.a5}/>
                  </div>
                  <h4 className="flex justify-center text-white font-roboto text-sm py-1">PAGALE A TU FREELANCER</h4>
                  <p className="text-white font-roboto text-xs text-start">Lorem ipsum dolor sit amet cons ectetur adipisicing, elit. Comm odi aut eos facere vel quibusdam</p>
               </div>
            </section>
            <section className="bg-turquoise md:px-12 xl:px-24 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 relative">
                  <div className="z-10 absolute right-0 hidden sm:block">
                     <img className="w-60" src={imagenesHome.cara_icono1} alt=""/>
                  </div>
                  <div className="z-50 px-1">
                     <div className="flex flex-wrap text-sm text-start font-roboto px-2">
                        <div className="w-1/4 z-50">
                           <div className="bg-Light-purple z-50 my-4 w-20 h-20 rounded-full flex items-stretch justify-center">
                              <img className="w-10 self-center" src={imagenesHome.anadir} alt=""/>
                           </div>
                        </div>
                        <div className="w-3/4 self-center pl-3 md:pl-6 xl:pl-0">
                           <h4 className="text-white self-center text-xs ">REGÍSTRATE</h4>
                        </div>
                     </div>
                     <div className="bg-white w-1 z-10 absolute left-12 md:left-24 xl:left-36 top-20 h-80"></div>
                     <div className="flex flex-wrap text-sm text-start font-roboto px-2">
                        <div className="w-1/4 z-50">
                           <div className="bg-Light-purple z-50 my-4 w-20 h-20 rounded-full flex items-stretch justify-center">
                              <img className="w-10 self-center" src={imagenesHome.lupa} alt=""/>
                           </div>
                        </div>
                        <div className="w-3/4 self-center pl-3 md:pl-6 xl:pl-0">
                           <h4 className="text-white self-center text-xs ">DATE A CONOCER</h4>
                        </div>
                     </div>
                     <div className="flex flex-wrap text-sm text-start font-roboto px-2">
                        <div className="w-1/4 z-50">
                           <div className="bg-Light-purple z-50 my-4 w-20 h-20 rounded-full flex items-stretch justify-center">
                              <img className="w-10 self-center" src={imagenesHome.cliente} alt=""/>
                           </div>
                        </div>
                        <div className="w-3/4 self-center pl-3 md:pl-6 xl:pl-0">
                           <h4 className="text-white self-center text-xs ">CREA TU CARTERA DE CLIENTES</h4>
                        </div>
                     </div>
                     <div className="flex flex-wrap text-sm text-start font-roboto px-2">
                        <div className="w-1/4 z-50">
                           <div className="bg-Light-purple z-50 my-4 w-20 h-20 rounded-full flex items-stretch justify-center">
                              <img className="w-10 self-center" src={imagenesHome.dinero} alt=""/>
                           </div>
                        </div>
                        <div className="w-3/4 self-center pl-3 md:pl-6 xl:pl-0">
                           <h4 className="text-white self-center text-xs ">GENERA TUS INGRESOS DESDE DONDE ESTÉS</h4>
                        </div>
                     </div>

                     {/* <div className="bg-white w-1 z-10 absolute left-16 md:left-40 top-20 h-80"></div>
                     <div className="flex text-sm text-start font-roboto">
                        <div className="bg-Light-purple z-50 mx-8 my-4 w-20 h-20 rounded-full flex items-stretch justify-center">
                           <img className="w-10 self-center" src={imagenesHome.lupa} alt=""/>
                        </div>
                        <h4 className="text-white self-center">DATE A CONOCER</h4>
                     </div>
                     <div className="flex text-sm text-start font-roboto">
                        <div className="bg-Light-purple z-50 mx-8 my-4 w-20 h-20 rounded-full flex items-stretch justify-center">
                           <img className="w-10 self-center" src={imagenesHome.cliente} alt=""/>
                        </div>
                        <h4 className="text-white self-center">CREA TU CARTERA DE CLIENTES</h4>
                     </div>
                     <div className="flex text-sm text-start font-roboto">
                        <div className="bg-Light-purple z-50 mx-8 my-4 w-20 h-20 rounded-full flex items-stretch justify-center">
                           <img className="w-10 self-center" src={imagenesHome.dinero} alt=""/>
                        </div>
                        <h4 className="text-white self-center">GENERA TUS INGRESOS DESDE DONDE ESTÉS</h4>
                     </div> */}
                  </div>
                  <div className="z-50 flex items-center justify-center px-4">
                     <img className="" src={imagenesHome._DSC0313} alt=""/>
                  </div>
            </section>
            <section className="bg-turquoise py-10 px-1 pt-10 pb-5">
               <h1 className="text-white font-roboto px-2 text-sm md:text-xl md:text-3xl">Nuestras categorías de Freelancers y Proyectos</h1>
            </section>
            <section className="bg-turquoise grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center px-3 py-3 md:py-20 md:px-1 lg:px-24">
                  <div className="z-10 absolute left-0">
                     <img className="w-60" src={imagenesHome.cara_icono2} alt=""/>
                  </div>
                  <div className="z-50 py-2 mx-1 md:p-5 bg-purple-cards m-1 rounded-lg rounded-lg justify-center">
                     <div className="flex items-center">
                        <div className="bg-white mx-2 my-1 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-stretch justify-center">
                           <img className="w-12 md:w-16 self-center" src={imagenesHome.publicidad_digital} alt=""/>
                        </div>
                        <div className="">
                           <h4 className="text-white text-start px-3 text-sm font-roboto">Marketing Digital</h4>
                           <div className="flex items-center justify-center py-4 px-1">
                              <button className="rounded-lg bg-Yellow hover:bg-yellow-500 py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Proyectos</button>
                              <button className="bg-blue-800 hover:bg-blue-500 rounded-lg py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Freelancers</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="z-50 py-2 mx-1 md:p-5 bg-purple-cards m-1 rounded-lg rounded-lg  justify-center">
                     <div className="flex items-center">
                        <div className="bg-white mx-2 my-1 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-stretch justify-center">
                           <img className="w-12 md:w-16 self-center" src={imagenesHome.desarrollo} alt=""/>
                        </div>
                        <div className="">
                           <h4 className="text-white text-start px-3 text-sm font-roboto">Desarrollo Web</h4>
                           <div className="flex items-center justify-center py-4 px-1">
                              <button className="rounded-lg bg-Yellow hover:bg-yellow-500 py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Proyectos</button>
                              <button className="bg-blue-800 hover:bg-blue-500 rounded-lg py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Freelancers</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="z-50 py-2 mx-1 md:p-5 bg-purple-cards m-1 rounded-lg rounded-lg  justify-center">
                     <div className="flex items-center">
                        <div className="bg-white mx-2 my-1 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-stretch justify-center">
                           <img className="w-12 md:w-16 self-center" src={imagenesHome.app} alt=""/>
                        </div>
                        <div className="">
                           <h4 className="text-white text-start px-3 text-sm font-roboto">Desarrollo de Aplicaciones Móviles</h4>
                           <div className="flex items-center justify-center py-4 px-1">
                              <button className="rounded-lg bg-Yellow hover:bg-yellow-500 py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Proyectos</button>
                              <button className="bg-blue-800 hover:bg-blue-500 rounded-lg py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Freelancers</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="z-50 py-2 mx-1 md:p-5 bg-purple-cards m-1 rounded-lg rounded-lg  justify-center">
                     <div className="flex items-center">
                        <div className="bg-white mx-2 my-1 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-stretch justify-center">
                           <img className="w-12 md:w-16 self-center" src={imagenesHome.fotografo} alt=""/>
                        </div>
                        <div className="">
                           <h4 className="text-white text-start px-3 text-sm font-roboto">Fotografía</h4>
                           <div className="flex items-center justify-center py-4 px-1">
                              <button className="rounded-lg bg-Yellow hover:bg-yellow-500 py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Proyectos</button>
                              <button className="bg-blue-800 hover:bg-blue-500 rounded-lg py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Freelancers</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="z-50 py-2 mx-1 md:p-5 bg-purple-cards m-1 rounded-lg rounded-lg  justify-center">
                     <div className="flex items-center">
                        <div className="bg-white mx-2 my-1 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-stretch justify-center">
                           <img className="w-12 md:w-16 self-center" src={imagenesHome.camara_de_video} alt=""/>
                        </div>
                        <div className="">
                           <h4 className="text-white text-start px-3 text-sm font-roboto">Producción Audiovisual</h4>
                           <div className="flex items-center justify-center py-4 px-1">
                              <button className="rounded-lg bg-Yellow hover:bg-yellow-500 py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Proyectos</button>
                              <button className="bg-blue-800 hover:bg-blue-500 rounded-lg py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Freelancers</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="z-50 py-2 mx-1 md:p-5 bg-purple-cards m-1 rounded-lg rounded-lg  justify-center">
                     <div className="flex items-center">
                        <div className="bg-white mx-2 my-1 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-stretch justify-center">
                           <img className="w-12 md:w-16 self-center" src={imagenesHome.disenador_grafico} alt=""/>
                        </div>
                        <div className="">
                           <h4 className="text-white text-start px-3 text-sm font-roboto">Diseño Gráfico</h4>
                           <div className="flex items-center justify-center py-4 px-1">
                              <button className="rounded-lg bg-Yellow hover:bg-yellow-500 py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Proyectos</button>
                              <button className="bg-blue-800 hover:bg-blue-500 rounded-lg py-1 md:py-3 px-4 mx-1 text-white text-xs xl:text-sm font-roboto">Ver Freelancers</button>
                           </div>
                        </div>
                     </div>
                  </div>
            </section>
            <section className="bg-turquoise grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 md:px-24 relative">
               <div className="z-10 hidden lg:block absolute right-0">
                  <img className="w-60" src={imagenesHome.cara_icono1} alt=""/>
               </div>
               <div className="z-50 flex md:hidden py-5 items-center justify-center text-center">
                  <div className="text-center">
                     <h1 className="text-white">¡PONTE BUXO!</h1>
                     <h1 className="text-white">GANA DINERO EN MODO FREELANCER</h1>
                  </div>
               </div>
               <div className="z-50 flex items-center justify-center px-5 pb-2">
                  <img src={imagenesHome.footer_home} alt=""/>
               </div>
               <div className="hidden z-50 md:flex items-center justify-center text-center">
                  <div className="text-center">
                     <h1 className="text-white font-roboto text-3xl">¡PONTE BUXO!</h1>
                     <h1 className="text-white font-roboto text-3xl">GANA DINERO EN MODO FREELANCER</h1>
                  </div>
               </div>
            </section>
            <footer>
                  <div className="bg-Dark-purple py-10 grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 px-3 md:px-24">
                     <div className="flex">
                        <img className="self-center" src={imagenesHome.chamba_ticon} alt=""/>
                     </div>
                     <div className="py-4">
                        <ul className="text-center">
                              <li className="text-white font-roboto text-xs font-semibold py-1">POLÍTICAS DE CHAMBATICON</li>
                              <li className="text-white font-roboto text-xs font-semibold py-1">POLÍTICAS DE PRIVACIDAD</li>
                              <li className="text-white font-roboto text-xs font-semibold py-1">TÉRMINOS Y SERVICIOS</li>
                        </ul>
                     </div>
                     <div className="flex items-center justify-center">
                        <a href="#"><FontAwesomeIcon className="text-white hover:text-blue-700 text-3xl px-5" icon={faFacebookSquare} /></a>
                        <a href="#"><FontAwesomeIcon className="text-white hover:text-sky-500 text-3xl px-5" icon={faTwitterSquare} /></a>
                        <a href="#"><FontAwesomeIcon className="text-white hover:text-fuchsia-500 text-3xl px-5" icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon className="text-white hover:text-emerald-500 text-3xl px-5" icon={faWhatsapp} /></a>
                     </div>
                  </div>
            </footer>
            <section className="bg-purple-bfooter py-4">
            <NavLink onClick={hideNavbar} to={"/CreacionProfileEmpresa"}>
                           <img className="w-12 rounded-full" src="https://th.bing.com/th/id/OIP.4hKEfuR0MgutxgsYBz0QbQHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7" alt="user photo" />
                        </NavLink>
               <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div>
                     <h6 className="font-roboto text-white text-xs font-semibold">© 2022 CHAMBATICON</h6>
                  </div>
                  <div className="hidden sm:block"></div>
                  <div className="font-roboto text-white text-xs font-semibold">Hecho en El Salvador por <a href="https://conexion.sv" className="text-Yellow">CONEXION</a></div>
               </div>
            </section>
         </div>
      </>
   )
}

export default Home;