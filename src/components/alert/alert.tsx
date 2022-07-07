// ES6 Modules or TypeScript
import Swal from 'sweetalert2'




const AlertForm = () =>{

   return(
      <>
         <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
            <p className="font-bold">Informational message</p>
            <p className="text-sm">Some additional text to explain said message.</p>
         </div>

         <br />
         <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div className="flex">
               <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
               <div>
                  <p className="font-bold">Our privacy policy has changed</p>
                  <p className="text-sm">Make sure you know how these changes affect you.</p>
               </div>
            </div>
         </div>

         <br />

         <div id="alert-1" className="flex p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
            <svg className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div className="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
               A simple info alert with an <a href="#" className="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>. Give it a click if you like.
            </div>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" data-dismiss-target="#alert-1" aria-label="Close">
               <span className="sr-only">Close</span>
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
         </div>

         <br />

         <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>Something happened that you should know about.</p>
         </div>

         <br />

         <div role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
               Danger
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
               <p>Something not ideal might be happening.</p>
            </div>
         </div>

         <br />

         <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p className="font-bold">Be Warned</p>
            <p>Something not ideal might be happening.</p>
         </div>

         <br />

         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline">Something seriously bad happened.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
               <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
         </div>

         <br />

      </>
   )
}

export default AlertForm;