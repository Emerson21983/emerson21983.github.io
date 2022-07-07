import { url } from "inspector";
import imgPerfilFreelancer from "../assets/imgPerfilFreelancer/imgPerfilFreelancer";

import { faUsers, faEnvelope, faPhone, faLocationDot, faLanguage, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookSquare, faInstagram, faInstagramSquare, faTwitterSquare, faWhatsapp, faWhatsappSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CreacionProfileFreelancer = () => {

  //Botones
  var btnEspecializacionProfesional = document.getElementById("btnEspecializacionProfesional");
  var btnProyectosConChambaticon = document.getElementById("btnProyectosConChambaticon");
  var btnExperienciaLaboral = document.getElementById("btnExperienciaLaboral");
  var btnFormacionAcademica = document.getElementById("btnFormacionAcademica");

  //Contenedores de informacion
  var contenedorEspecializacionProfesional = document.getElementById("contenedorEspecializacionProfesional");
  var contenedorProyectosConChambaticon = document.getElementById("contenedorProyectosConChambaticon");
  var contenedorExperienciaLaboral = document.getElementById("contenedorExperienciaLaboral");
  var contenedorFormacionAcademica = document.getElementById("contenedorFormacionAcademica");

  function btn1() {
    contenedorEspecializacionProfesional?.classList.remove("hidden");
    contenedorProyectosConChambaticon?.classList.remove("hidden");
    contenedorExperienciaLaboral?.classList.remove("hidden");
    contenedorFormacionAcademica?.classList.remove("hidden");

    btnEspecializacionProfesional?.classList.remove("border-gray-100");
    btnProyectosConChambaticon?.classList.remove("border-gray-100");
    btnExperienciaLaboral?.classList.remove("border-gray-100");
    btnFormacionAcademica?.classList.remove("border-gray-100");

    btnProyectosConChambaticon?.classList.remove("border-b-orange-500");
    btnExperienciaLaboral?.classList.remove("border-b-orange-500");
    btnFormacionAcademica?.classList.remove("border-b-orange-500");

    contenedorProyectosConChambaticon?.classList.add("hidden");
    contenedorExperienciaLaboral?.classList.add("hidden");
    contenedorFormacionAcademica?.classList.add("hidden");

    btnEspecializacionProfesional?.classList.add("border-b-orange-500");
    console.log();
  }

  function btn2() {
    contenedorEspecializacionProfesional?.classList.remove("hidden");
    contenedorProyectosConChambaticon?.classList.remove("hidden");
    contenedorExperienciaLaboral?.classList.remove("hidden");
    contenedorFormacionAcademica?.classList.remove("hidden");

    contenedorEspecializacionProfesional?.classList.add("hidden");
    contenedorExperienciaLaboral?.classList.add("hidden");
    contenedorFormacionAcademica?.classList.add("hidden");

    btnEspecializacionProfesional?.classList.remove("border-gray-100");
    btnProyectosConChambaticon?.classList.remove("border-gray-100");
    btnExperienciaLaboral?.classList.remove("border-gray-100");
    btnFormacionAcademica?.classList.remove("border-gray-100");

    btnEspecializacionProfesional?.classList.remove("border-b-orange-500");
    btnExperienciaLaboral?.classList.remove("border-b-orange-500");
    btnFormacionAcademica?.classList.remove("border-b-orange-500");

    btnProyectosConChambaticon?.classList.add("border-b-orange-500");
  }

  function btn3() {
    contenedorEspecializacionProfesional?.classList.remove("hidden");
    contenedorProyectosConChambaticon?.classList.remove("hidden");
    contenedorExperienciaLaboral?.classList.remove("hidden");
    contenedorFormacionAcademica?.classList.remove("hidden");

    contenedorProyectosConChambaticon?.classList.add("hidden");
    contenedorEspecializacionProfesional?.classList.add("hidden");
    contenedorFormacionAcademica?.classList.add("hidden");

    btnEspecializacionProfesional?.classList.remove("border-gray-100");
    btnProyectosConChambaticon?.classList.remove("border-gray-100");
    btnExperienciaLaboral?.classList.remove("border-gray-100");
    btnFormacionAcademica?.classList.remove("border-gray-100");

    btnEspecializacionProfesional?.classList.remove("border-b-orange-500");
    btnProyectosConChambaticon?.classList.remove("border-b-orange-500");
    btnFormacionAcademica?.classList.remove("border-b-orange-500");

    btnExperienciaLaboral?.classList.add("border-b-orange-500");
  }

  function btn4() {
    contenedorEspecializacionProfesional?.classList.remove("hidden");
    contenedorProyectosConChambaticon?.classList.remove("hidden");
    contenedorExperienciaLaboral?.classList.remove("hidden");
    contenedorFormacionAcademica?.classList.remove("hidden");

    contenedorProyectosConChambaticon?.classList.add("hidden");
    contenedorEspecializacionProfesional?.classList.add("hidden");
    contenedorExperienciaLaboral?.classList.add("hidden");

    btnEspecializacionProfesional?.classList.remove("border-gray-100");
    btnProyectosConChambaticon?.classList.remove("border-gray-100");
    btnExperienciaLaboral?.classList.remove("border-gray-100");
    btnFormacionAcademica?.classList.remove("border-gray-100");

    btnEspecializacionProfesional?.classList.remove("border-b-orange-500");
    btnProyectosConChambaticon?.classList.remove("border-b-orange-500");
    btnExperienciaLaboral?.classList.remove("border-b-orange-500");

    btnFormacionAcademica?.classList.add("border-b-orange-500");
  }

  return (
    <>
      <div className="flex">
        <div className="w-2/12 hidden md:flex">
          <img src={imgPerfilFreelancer.fondo_login_izquierdo_sin_icono2} className="w-full" alt="" />
        </div>
        <div className="w-full md:w-10/12 bg-turquoise">
          <main className="profile-page">
            <section className="block bg-black relative" style={{ height: "275px" }}>
              <div
                className="w-full h-full bg-center bg-cover opacity-20"
                style={{ backgroundImage: "url(" + imgPerfilFreelancer.banner_a_medida + ")", backgroundRepeat: "no-repeat" }}
              >
              </div>
              <a href="#"><FontAwesomeIcon className="text-Yellow text-2xl mr-4 absolute top-5 right-2" icon={faPenToSquare} /></a>
            </section>
            <section className="py-16 bg-turquoise">
              <div>
                <div
                  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl -mt-16 bg-turquoise"
                >
                  <div className="px-6">
                    <div className="flex flex-wrap -mt-36 justify-center sm:justify-start">
                      <div>
                        <div
                          className="w-full lg:w-3/12 lg:order-2 flex"
                        >
                          <div className="relative">
                            <img
                              alt="..."
                              src="https://th.bing.com/th/id/OIP.YqzuQ6czWxaIGZ2O1EZlBgAAAA?w=180&h=184&c=7&r=0&o=5&pid=1.7"
                              className="shadow-xl rounded-full h-auto align-middle border-8 border-orange-500"
                              style={{ maxWidth: "175px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center sm:text-start ml-5">
                        <h1 className="text-white font-bold text-2xl">Emerson Adonay Lopez</h1>
                        <h3 className="text-white mb-2">emerson21983</h3>
                        <span className="text-white border rounded-full p-1 text-sm">&nbsp;DUI: 06010835-5&nbsp;</span>
                        <div className="mt-3">
                          <a href="#"><FontAwesomeIcon className="text-white text-2xl mr-4 ml-4 sm:ml-0" icon={faFacebookSquare} /></a>
                          <a href="#"><FontAwesomeIcon className="text-white text-2xl mr-4" icon={faTwitterSquare} /></a>
                          <a href="#"><FontAwesomeIcon className="text-white text-2xl mr-4" icon={faInstagramSquare} /></a>
                          <a href="#"><FontAwesomeIcon className="text-white text-2xl mr-4" icon={faLinkedin} /></a>
                          <a href="#"><FontAwesomeIcon className="text-white text-2xl mr-4" icon={faWhatsapp} /></a>
                        </div>
                      </div>
                    </div>
                    <div className="block lg:flex">
                      <div className="lg:w-2/3 w-full">
                        <h3 className="text-start text-orange-500 font-semibold mt-14 mb-6">Acerca de</h3>
                        <p className="text-justify font-semibold text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repudiandae perspiciatis quam vero ullam laudantium, eum reiciendis tempore deleniti dignissimos repellat similique facere hic adipisci, dolores quisquam temporibus, sit quis!</p>
                        <div className="columns-1 sm:columns-2 md:columns-2 mt-10">
                          <div className="p-4 flex bg-Light-purple rounded-md">
                            <div className="flex justify-center items-center w-1/3">
                              <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faUsers} />
                            </div>
                            <div className="w-2/3 text-start text-white font-semibold lg:w-full">
                              <h2>Edad:</h2>
                              <h2>33</h2>
                            </div>
                          </div>
                          <div className="p-4 flex bg-Light-purple rounded-md mt-5 md:mt-0">
                            <div className="flex justify-center items-center w-1/3">
                              <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faEnvelope} />
                            </div>
                            <div className="w-2/3 text-start text-white font-semibold lg:w-full">
                              <h2>Email:</h2>
                              <h2>emer21983@gmail.com</h2>
                            </div>
                          </div>
                        </div>
                        <div className="columns-1 sm:columns-2 md:columns-2 mt-5">
                          <div className="p-4 flex bg-Light-purple rounded-md">
                            <div className="flex justify-center items-center w-1/3">
                              <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faPhone} />
                            </div>
                            <div className="w-2/3 text-start text-white font-semibold lg:w-full">
                              <h2>Teléfono principal:</h2>
                              <h2>78063333</h2>
                            </div>
                          </div>
                          <div className="p-4 flex bg-Light-purple rounded-md mt-5 md:mt-0">
                            <div className="flex justify-center items-center w-1/3">
                              <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faPhone} />
                            </div>
                            <div className="w-2/3 text-start text-white font-semibold lg:w-full">
                              <h2>Teléfono secundario:</h2>
                              <h2>22041726</h2>
                            </div>
                          </div>
                        </div>
                        <div className="columns-1 sm:columns-2 md:columns-2 mt-5">
                          <div className="p-4 flex bg-Light-purple rounded-md">
                            <div className="flex justify-center items-center w-1/3">
                              <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faLocationDot} />
                            </div>
                            <div className="w-2/3 text-start text-white font-semibold lg:w-full">
                              <h2>Dirección:</h2>
                              <h2>Urb. Majucla Pasaje 10</h2>
                            </div>
                          </div>
                          <div className="p-4 flex bg-Light-purple rounded-md mt-5 md:mt-0">
                            <div className="flex justify-center items-center w-1/3">
                              <FontAwesomeIcon className="text-white text-2xl mr-4" icon={faLanguage} />
                            </div>
                            <div className="w-2/3 text-start text-white font-semibold">
                              <h2>Idiomas:</h2>
                              <h2>Ingles, Alemán</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/3 w-full p-5 block">
                        <div className="columns-1 sm:columns-1 lg:columns-1">
                          <div className="p-4 flex bg-Light-Blue rounded-md mt-6">
                            <div className="w-full">
                              <h1 className="text-start text-white font-semibold">Proyectos finalizados</h1>
                              <h1 className="text-end text-white font-semibold text-3xl">0</h1>
                            </div>
                          </div>
                          <div className="p-4 flex bg-Light-Blue rounded-md mt-6">
                            <div className="w-full">
                              <h1 className="text-start text-white font-semibold">Proyectos en proceso</h1>
                              <h1 className="text-end text-white font-semibold text-3xl">0</h1>
                            </div>
                          </div>
                        </div>
                        <div className="columns-1 sm:columns-1 lg:columns-1">
                          <div className="p-4 flex bg-Light-Blue rounded-md mt-6">
                            <div className="w-full">
                              <h1 className="text-start text-white font-semibold">Proyectos aplicados</h1>
                              <h1 className="text-end text-white font-semibold text-3xl">0</h1>
                            </div>
                          </div>
                          <div className="p-4 flex bg-Light-Blue rounded-md mt-6">
                            <div className="w-full">
                              <h1 className="text-start text-white font-semibold">Proyectos en espera</h1>
                              <h1 className="text-end text-white font-semibold text-3xl">0</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 xl:border-b border-gray-200 dark:border-gray-700 mt-5">
                      <ul className=" flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <div className="flex align-center justify-center">
                          <div className="columns-1 md:columns-2 lg:columns-4">
                            <li className="mr-2" role="presentation">
                              <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-white dark:text-gray-400 border-b-orange-500 dark:border-gray-700" id="btnEspecializacionProfesional" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false" onClick={btn1}>Especialización profesional</button>
                            </li>
                            <li className="mr-2" role="presentation">
                              <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-white dark:text-gray-400 border-gray-100 dark:border-gray-700" id="btnProyectosConChambaticon" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false" onClick={btn2}>Proyectos con Chambaticon</button>
                            </li>
                            <li className="mr-2" role="presentation">
                              <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-white dark:text-gray-400 border-gray-100 dark:border-gray-700" id="btnExperienciaLaboral" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false" onClick={btn3}>Experiencia laboral</button>
                            </li>
                            <li role="presentation">
                              <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-white dark:text-gray-400 border-gray-100 dark:border-gray-700" id="btnFormacionAcademica" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false" onClick={btn4}>Formación académica</button>
                            </li>
                          </div>
                        </div>
                      </ul>
                    </div>
                    <div id="myTabContent" className="mb-5">
                      <div className="p-4 text-white animate__animated animate__fadeIn" id="contenedorEspecializacionProfesional" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="border border-Light-Blue p-5 rounded-lg">
                          <h2 className="text-start">Especializacion en Frontend</h2>
                          <div className="grid grid-cols-6 gap-4">
                            <div className="mt-4 col-span-6 sm:col-span-3">
                              <div className="text-start float-left">HTML</div>
                              <div className="text-end">65%</div>
                              <div className="shadow w-full bg-white mt-2 rounded-lg">
                                <div className="bg-Light-Blue text-xs py-1 text-center text-white rounded-lg" style={{ width: "65%", lineHeight: "0" }}></div>
                              </div>
                            </div>
                            <div className="mt-4 col-span-6 sm:col-span-3">
                              <div className="text-start float-left">CSS</div>
                              <div className="text-end">100%</div>
                              <div className="shadow w-full bg-white mt-2 rounded-lg">
                                <div className="bg-Light-Blue text-xs py-1 text-center text-white rounded-lg" style={{ width: "100%", lineHeight: "0" }}></div>
                              </div>
                            </div>
                            <div className="mt-4 col-span-6 sm:col-span-3">
                              <div className="text-start float-left">JS</div>
                              <div className="text-end">45%</div>
                              <div className="shadow w-full bg-white mt-2 rounded-lg">
                                <div className="bg-Light-Blue text-xs py-1 text-center text-white rounded-lg" style={{ width: "45%", lineHeight: "0" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-Light-Blue p-5 rounded-lg mt-5">
                          <h2 className="text-start">Diseño y multimedia</h2>
                          <div className="grid grid-cols-6 gap-4">
                            <div className="mt-4 col-span-6 sm:col-span-3">
                              <div className="text-start sm:float-left">Artes graficas para streamers</div>
                              <div className="text-end">100%</div>
                              <div className="shadow w-full bg-white mt-2 rounded-lg">
                                <div className="bg-Light-Blue text-xs py-1 text-center text-white rounded-lg" style={{ width: "100%", lineHeight: "0" }}></div>
                              </div>
                            </div>
                            <div className="mt-4 col-span-6 sm:col-span-3">
                              <div className="text-start sm:float-left">Diseño de app moviles</div>
                              <div className="text-end">100%</div>
                              <div className="shadow w-full bg-white mt-2 rounded-lg">
                                <div className="bg-Light-Blue text-xs py-1 text-center text-white rounded-lg" style={{ width: "100%", lineHeight: "0" }}></div>
                              </div>
                            </div>
                            <div className="mt-4 col-span-6 sm:col-span-3">
                              <div className="text-start sm:float-left">Diseño de logos</div>
                              <div className="text-end">85%</div>
                              <div className="shadow w-full bg-white mt-2 rounded-lg">
                                <div className="bg-Light-Blue text-xs py-1 text-center text-white rounded-lg" style={{ width: "85%", lineHeight: "0" }}></div>
                              </div>
                            </div>
                            <div className="mt-4 col-span-6 sm:col-span-3">
                              <div className="text-start sm:float-left">Edicion de video</div>
                              <div className="text-end">90%</div>
                              <div className="shadow w-full bg-white mt-2 rounded-lg">
                                <div className="bg-Light-Blue text-xs py-1 text-center text-white rounded-lg" style={{ width: "90%", lineHeight: "0" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden p-4 text-white animate__animated animate__fadeIn" id="contenedorProyectosConChambaticon" role="tabpanel" aria-labelledby="dashboard-tab">
                        Proyectos con Chambaticon
                      </div>
                      <div className="hidden p-4 text-white animate__animated animate__fadeIn" id="contenedorExperienciaLaboral" role="tabpanel" aria-labelledby="settings-tab">
                        <div className="grid grid-cols-6 gap-4">
                          <div className="col-span-6 sm:col-span-3">
                            <div className="bg-cyan-900 p-5 rounded-lg ">
                              <h2 className="text-start">Nombre de la empresa</h2>
                              <h5 className="text-orange-500 text-start text-xs">Desde: 29-06-2022 / Hasta: 29-06-2022</h5>
                              <div className="mt-4">
                                <div className="text-start float-left">Diseñador grafico</div>
                                <br />
                                <p className="text-justify text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus quo veritatis sunt. Tempore, id dolorem vel deserunt cumque, harum quidem et modi ducimus iure, blanditiis totam numquam sequi facilis!</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <div className="bg-cyan-900 p-5 rounded-lg ">
                              <h2 className="text-start">Nombre de la empresa</h2>
                              <h5 className="text-orange-500 text-start text-xs">Desde: 29-06-2022 / Hasta: 29-06-2022</h5>
                              <div className="mt-4">
                                <div className="text-start float-left">Diseñador grafico</div>
                                <br />
                                <p className="text-justify text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus quo veritatis sunt. Tempore, id dolorem vel deserunt cumque, harum quidem et modi ducimus iure, blanditiis totam numquam sequi facilis!</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <div className="bg-cyan-900 p-5 rounded-lg ">
                              <h2 className="text-start">Nombre de la empresa</h2>
                              <h5 className="text-orange-500 text-start text-xs">Desde: 29-06-2022 / Hasta: 29-06-2022</h5>
                              <div className="mt-4">
                                <div className="text-start float-left">Diseñador grafico</div>
                                <br />
                                <p className="text-justify text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus quo veritatis sunt. Tempore, id dolorem vel deserunt cumque, harum quidem et modi ducimus iure, blanditiis totam numquam sequi facilis!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden p-4 text-white animate__animated animate__fadeIn" id="contenedorFormacionAcademica" role="tabpanel" aria-labelledby="contacts-tab">
                        <div className="grid grid-cols-6 gap-4">
                          <div className="col-span-6 sm:col-span-3">
                            <div className="bg-cyan-900 p-5 rounded-lg ">
                              <h2 className="text-start">Nombre del Colegio / Universidad</h2>
                              <h5 className="text-orange-500 text-start text-xs">Desde: 29-06-2022 / Hasta: 29-06-2022</h5>
                              <div className="mt-4">
                                <div className="text-start">Titulo adquirido</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <div className="bg-cyan-900 p-5 rounded-lg ">
                              <h2 className="text-start">Nombre del Colegio / Universidad</h2>
                              <h5 className="text-orange-500 text-start text-xs">Desde: 29-06-2022 / Hasta: 29-06-2022</h5>
                              <div className="mt-4">
                                <div className="text-start">Titulo adquirido</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <div className="bg-cyan-900 p-5 rounded-lg ">
                              <h2 className="text-start">Nombre del Colegio / Universidad</h2>
                              <h5 className="text-orange-500 text-start text-xs">Desde: 29-06-2022 / Hasta: 29-06-2022</h5>
                              <div className="mt-4">
                                <div className="text-start">Titulo adquirido</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default CreacionProfileFreelancer;