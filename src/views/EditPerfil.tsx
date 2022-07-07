import imagenesEditPerfil from "../assets/imgEditPerfil/imagenesEditPerfil.js";

const EditPerfil = () =>{
    return(
    <>
        <div className="bg-turquoise -mt-5 h-screen">
            <section className="flex flex-wrap">
                <div className="w-2/12 py-14 bg-lateralEditPerfil h-screen flex justify-end">
                    <img className=" h-1/2" src={imagenesEditPerfil.logo_blanco_mitad} alt="" />
                </div>
                <div className="w-2/12 py-14">
                    <div className="h-1/4 flex justify-center">
                        <img className="h-4/5 flex justify-center" src={imagenesEditPerfil.logo_blanco_mitad} alt="" />
                    </div>
                    
                    <button className="bg-sky-700 text-white rounded-full py-2 px-2 m-1">Cambiar imagen de perfil</button>
                    <button className="bg-sky-700 text-white rounded-full py-2 px-5 m-1">subir foto de portada</button>
                </div>
                <div className="w-8/12 flex justify-center py-5">
                    <form className="lg:w-3/4 xl:w-1/2" /*onSubmit={handleLoginSession}*/>
                        <img /*src={imagenesLogin.logoLetrasChambaticon}*/ className="w-full my-10 lg:my-5 sm:my-10 md:my-10" alt="" />
                        <div className="lg:columns-2">
                            <div className="mb-6 text-start">
                            <label htmlFor="nombreCompleto" className="text-white">Ingresa tu nombre completo</label>
                            <input
                                type="text"
                                className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="names"
                                id="2" //do not remove ID, it is important to validate
                                //value={/*registerFreelancer.names*/}
                                //onChange={/*handleInputChange*/}
                            />
                            {/*alert.filter(input => input.input == "name" && input.state === true).map(message => (
                                <span className="text-red-500">{message.message}</span>
                            ))*/}
                            </div>
                            <div className="mb-6 text-start">
                            <label htmlFor="email" className="text-white">Correo electrónico</label>
                            <input
                                type="email"
                                className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="email"
                                //value={/*registerFreelancer.lastnames*/}
                                //onChange={/*handleInputChange*/}
                            />
                            {/*alert.filter(input => input.input == "lastnames" && input.state === true).map(message => (
                                <span className="text-red-500">{message.message}</span>
                            ))*/}
                            </div>
                        </div>
                        <div className="lg:columns-2">
                            <div className="mb-6 text-start">
                            <label htmlFor="nickname" className="text-white">Digita un nickname</label>
                            <input
                                type="text"
                                className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="nickname"
                                //value={/*registerFreelancer.email*/}
                                id="1" //do not remove ID, it is important to validate
                                //onChange={/*handleInputChange*/}
                            />
                            {/*alert.filter(input => input.input == "gmail" && input.state === true).map(message => (
                                <span className="text-red-500">{message.message}</span>
                            ))*/}
                            </div>
                            <div className="mb-6 text-start">
                            <label htmlFor="nickname" className="text-white">Fecha de nacimiento</label>
                            <input
                                type="text"
                                className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="nickname"
                                //value={/*registerFreelancer.email*/}
                                id="1" //do not remove ID, it is important to validate
                                //onChange={/*handleInputChange*/}
                            />
                            {/*alert.filter(input => input.input == "gmail" && input.state === true).map(message => (
                                <span className="text-red-500">{message.message}</span>
                            ))*/}
                            </div> 
                        </div>
                        <div className="lg:columns-2">
                            <div className="mb-6 text-start">
                            <label htmlFor="departamento" className="text-white">Fecha de nacimiento</label>
                            <select
                                id="3" //do not remove ID, it is important to validate
                                //value={/*registerFreelancer.state*/}
                                name=""
                                //onChange={/*handleInputChange*/}
                                className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  >
                                <option value="" selected>...</option>
                                {/*
                                    departmentlists.map((departments) => {
                                        return <option value={departments.id}>{departments.name}</option>
                                    })
                                */}
                            </select>
                            {/*alert.filter(input => input.input == "department" && input.state === true).map(message => (
                                <span className="text-red-500">{message.message}</span>
                            ))*/}
                            </div>
                            <div className="mb-6 text-start">
                            <label htmlFor="municipio" className="text-white">Municipio</label>
                            <select
                                id="4" //do not remove ID, it is important to validate
                                //value={/*registerFreelancer.city*/}
                                name="city"
                                //onChange={/*handleInputChange*/}
                                className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                <option value="" selected>...</option>

                                {/*
                                    municipalities.map((municipaliti) => {
                                        return <option value={municipaliti.id}>{municipaliti.name}</option>
                                    })
                                */}
                            </select>
                            {/*alert.filter(input => input.input == "municipality" && input.state === true).map(message => (
                                <span className="text-red-500">{message.message}</span>
                            ))*/}
                            </div>
                        </div>

                        <div className="lg:columns-2">
                            <div className="mb-6 text-start">
                            <label htmlFor="password" className="text-white">Contraseña</label>
                            <input

                                type="password"
                                className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="password"
                                id="5" //do not remove ID, it is important to validate
                                //value={/*registerFreelancer.password*/}
                                //onChange={/*handleInputChange*/}
                            />
                            {/*alert.filter(input => input.input == "password" && input.state === true).map(message => (
                                <span className="text-red-500">{message.message}</span>
                            ))*/}
                            </div>

                            <div className="mb-6 text-start">
                            <label htmlFor="confirmarPassword" className="text-white">Confirmar contraseña</label>
                            <input
                                type="password"
                                className="bg-color-input-login form-control block w-full px-4 py-2 text-xl font-normal text-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                name="password_confirmation"
                                id="6" //do not remove ID, it is important to validate
                                //value={/*registerFreelancer.password_confirmation*/}
                                //onChange={/*handleInputChange*/}
                            />
                            {/*alert.filter(input => input.input == "confirmPassword" && input.state === true).map(message => (
                                <span className="text-red-500">{message.message}</span>
                            ))*/}
                            </div>
                        </div>



                        <div className="columns-1">
                            <div className="text-center lg:text-left">
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-Yellow text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-600 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            >
                                Registrarse
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </>
    )
}

export default EditPerfil;