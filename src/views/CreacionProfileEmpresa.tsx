import { url } from "inspector";
import imgPerfilFreelancer from "../assets/imgPerfilFreelancer/imgPerfilFreelancer";

import { faUsers, faEnvelope, faPhone, faLocationDot, faLanguage, faPenToSquare, faChartLine, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookSquare, faInstagram, faInstagramSquare, faTwitterSquare, faWhatsapp, faWhatsappSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CreacionProfileFreelancer = () => {

  return (
    <>
      <div className="flex">
        <div className="w-2/12 hidden md:flex">
          <img src={imgPerfilFreelancer.fondo_login_izquierdo_sin_icono2} className="w-full" alt="" />
        </div>
        <div className="w-full md:w-10/12 bg-turquoise p-5">
          <div className="border border-Light-Blue p-5 rounded-lg">
            <div className="flex flex-wrap justify-center sm:justify-start">
              <div className="w-full lg:w-1/4 flex items-center justify-center">
                <div>
                  <div
                    className="w-full lg:w-3/12 lg:order-2 flex"
                  >
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://logospng.org/download/react/logo-react-512.png"
                        className="shadow-xl rounded-full h-auto align-middle border-8 border-orange-500"
                        style={{ maxWidth: "190px" }}
                      />
                      <div className="mt-3 text-end">
                        <a href="#"><FontAwesomeIcon className="text-white text-2xl mx-2 ml-4 sm:ml-0" icon={faFacebookSquare} /></a>
                        <a href="#"><FontAwesomeIcon className="text-white text-2xl mx-2" icon={faTwitterSquare} /></a>
                        <a href="#"><FontAwesomeIcon className="text-white text-2xl mx-2" icon={faInstagramSquare} /></a>
                        <a href="#"><FontAwesomeIcon className="text-white text-2xl mx-2" icon={faLinkedin} /></a>
                        <a href="#"><FontAwesomeIcon className="text-white text-2xl mx-2" icon={faWhatsapp} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-3/4">
                <div className="text-start lg:ml-5">
                  <h1 className="text-white font-bold text-2xl text-center lg:text-start mb-5 lg:mb-0">GVC CODE</h1>
                  <h3 className="text-orange-500 text-sm">Estado del perfil</h3>
                  <h3 className="text-white mb-2 text-sm">Publico</h3>
                  <h3 className="text-orange-500 text-sm">Descripción</h3>
                  <p className="text-justify text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quasi. Aliquid nam dicta fugiat sint rem eius voluptates! Explicabo minima velit, aliquam quibusdam eaque iusto odio soluta. Earum, ullam impedit?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-Light-Blue rounded-lg mt-3">
            <div className="flex flex-wrap m-4">
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-1 h-auto">
                <div className="p-4 flex bg-Light-purple rounded-md w-full h-full items-center">
                  <div className="flex justify-center items-center w-1/3">
                    <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faBars} />
                  </div>
                  <div className="text-start text-white font-semibold w-full">
                    <h2>Estado actual</h2>
                    <h2 className="text-orange-500">En proceso de validación</h2>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-1 h-auto">
                <div className="p-4 flex bg-Light-purple rounded-md w-full h-full items-center">
                  <div className="flex justify-center items-center w-1/3">
                    <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faChartLine} />
                  </div>
                  <div className="text-start text-white font-semibold w-full">
                    <h2>Actividad economica</h2>
                    <h2 className="text-orange-500">Servicios</h2>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-1 h-auto">
                <div className="p-4 flex bg-Light-purple rounded-md w-full h-full items-center">
                  <div className="flex justify-center items-center w-1/3">
                    <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faEnvelope} />
                  </div>
                  <div className="text-start text-white font-semibold w-full">
                    <h2>Email</h2>
                    <h2 className="text-orange-500">emer21983@gmail.com</h2>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-1 h-auto">
                <div className="p-4 flex bg-Light-purple rounded-md w-full h-full items-center">
                  <div className="flex justify-center items-center w-1/3">
                    <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faPhone} />
                  </div>
                  <div className="text-start text-white font-semibold w-full">
                    <h2>Teléfono principal</h2>
                    <h2 className="text-orange-500">75852444</h2>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-1 h-auto">
                <div className="p-4 flex bg-Light-purple rounded-md w-full h-full items-center">
                  <div className="flex justify-center items-center w-1/3">
                    <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faPhone} />
                  </div>
                  <div className="text-start text-white font-semibold w-full">
                    <h2>Teléfono principal</h2>
                    <h2 className="text-orange-500">22458587</h2>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 p-1 h-auto">
                <div className="p-4 flex bg-Light-purple rounded-md w-full h-full items-center">
                  <div className="flex justify-center items-center w-1/3">
                    <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faLocationDot} />
                  </div>
                  <div className="text-start text-white font-semibold w-full">
                    <h2>Dirección</h2>
                    <h2 className="text-orange-500">El Salvador, San Salvador calle #01</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreacionProfileFreelancer;