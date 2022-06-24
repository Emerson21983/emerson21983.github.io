import imagenesLogin from "../assets/imgLogin/imagenesLogin";

const LoginMain = () =>{
  return(
    <section className="h-screen bg-color-login overflow-auto">
    <div className="h-full text-gray-800">
        <div className="flex md:justify-center lg:justify-between items-center flex-wrap h-full g-6">
            <div className="lg:h-screen lg:justify-start flex grow-0 shrink-1 md:shrink-0 basis-auto xl:w-4/12 lg:w-4/12 md:w-9/12 mb-12 md:mb-0 w-full justify-center sm:justify-center md:justify-center" id="contenedorImg">
                <img src={imagenesLogin.logoGrandeMitadChambaticon} id="img" className="hidden sm:hidden md:hidden lg:block" alt="" />
                <img src={imagenesLogin.logoGrandeChambaticon} id="img" className="flex sm:flex md:flex lg:hidden mt-10 w-1/2" alt="" />
            </div>
            <div className="xl:ml-20 xl:w-7/12 lg:w-7/12 md:w-8/12 mb-12 md:mb-0 flex justify-start pb-5 px-6">
                <form className="lg:w-2/4">
                <img src={imagenesLogin.logoLetrasChambaticon} className="w-full mb-5" alt="" />
                    <div className="mb-6 text-start">
                        <label htmlFor="email" className="text-white">Correo electronico</label>
                        <input
                            type="text"
                            className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                        />
                    </div>
                    <div className="mb-6 text-start">
                        <label htmlFor="password" className="text-white">Contraseña</label>
                        <input
                            type="password"
                            className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                        />
                    </div>
                    <div className="text-center lg:text-left">
                        <button
                            type="button"
                            className="inline-block px-7 py-3 bg-amber-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        >
                            Iniciar sesion
                        </button>
                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0 text-white">O</p>
                        </div>
                        <a
                            href="goog"
                            className="justify-center flex px-7 py-3 bg-white text-dark font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-50 hover:shadow-lg focus:bg-slate-50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-100 active:shadow-lg transition duration-150 ease-in-out w-full mt-3 mb-3"
                        >
                            <img className="w-5" src="https://shr.wetrafa.xyz/2eHVY0z" alt="Logo Google" />&nbsp;&nbsp;Acceder con Google
                        </a>
                        <a
                            href="goog"
                            className="justify-center flex px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-5">
                                <path
                                    fill="currentColor"
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                />
                            </svg>&nbsp;&nbsp;Acceder con Facebook
                        </a>
                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                        </div>
                        <div className="text-white">
                            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                Olvidaste tu contraseña?
                                &nbsp;
                                <a
                                    href="#!"
                                    className="text-amber-500 hover:text-amber-600 focus:text-amber-600 transition duration-200 ease-in-out"
                                >Click aqui</a
                                >
                            </p>
                            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                Aun no tienes cuenta?
                                &nbsp;
                                <a
                                    href="#!"
                                    className="text-amber-500 hover:text-amber-600 focus:text-amber-600 transition duration-200 ease-in-out"
                                >Registrate aqui</a
                                >
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
  );
}

export default LoginMain;