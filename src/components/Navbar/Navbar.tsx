import { Link, NavLink } from "react-router-dom";

// Img
import logo_chambaticon from '../../assets/logos/chambaticon_navbar.png'

const Navbar = () =>{
   return(
      <div>
         <header className="text-gray-600 body-font bg-Light-purple">
            <div className="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
               <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to={"/"}  >
                 <img src={logo_chambaticon} alt="" className="w-1/6 -mb-8" />
               </Link>
               <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                  <NavLink className="mr-5 text-white hover:text-gray-300" to={""}>INICIO</NavLink>
                  <NavLink className="mr-5 text-white hover:text-gray-300" to={""}>CONTACTANOS</NavLink>
                  <NavLink className="mr-5 text-white hover:text-gray-300" to={""}>QUIENES SOMOS</NavLink>
                  <NavLink className="mr-5 text-white hover:text-gray-300" to={"/Login"}>
                     <button className="inline-flex items-center rounded-2xl bg-Yellow border-0 py-1 px-3 focus:outline-none hover:bg-gray-200  text-base mt-4 md:mt-0">
                     INICIAR SESIÓN
                     </button>
                  </NavLink>
                  
                  <NavLink className="mr-5 hover:text-gray-900" to={"/Registro"}>
                     <button className="inline-flex items-center rounded-2xl bg-Light-Blue border-0 py-1 px-3 focus:outline-none text-white hover:bg-gray-200  text-base mt-4 md:mt-0">
                     REGISTRO
                     </button>
                  </NavLink>
               </nav>
               
            
            </div>
            </header>
      </div>
   )
}

export default Navbar;