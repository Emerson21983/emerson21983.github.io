import imagenesLogin from "../assets/imgLogin/imagenesLogin";
import FormLogin from "../components/Login/formLogin";

const LoginMain = () =>{
  return(
    <section className="h-screen bg-color-login overflow-auto">
    <div className="h-full text-gray-800">
        <div className="flex md:justify-center lg:justify-between items-center flex-wrap h-full g-6">
            <div className="lg:h-screen lg:justify-start flex grow-0 shrink-1 md:shrink-0 basis-auto xl:w-4/12 lg:w-4/12 md:w-9/12 mb-12 md:mb-0 w-full justify-center sm:justify-center md:justify-center" id="contenedorImg">
                <img src={imagenesLogin.logoGrandeMitadChambaticon} id="img" className="hidden sm:hidden md:hidden lg:block" alt="" />
                {/* <img src={imagenesLogin.logoGrandeChambaticon} id="img" className="flex sm:flex md:flex lg:hidden mt-10 w-1/2" alt="" /> */}
            </div>
            <div className="xl:ml-20 xl:w-7/12 lg:w-7/12 md:w-8/12 mb-12 md:mb-0 flex justify-start pb-5 px-6">
                 <FormLogin/>
            </div>
        </div>
    </div>
    </section>
  );
}

export default LoginMain;