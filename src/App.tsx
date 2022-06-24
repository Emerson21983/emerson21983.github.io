import { BrowserRouter, Route, Routes} from 'react-router-dom'
import React from 'react';


// imgs
import logo from './logo.svg';

// css
import './App.css';

// Views
import Login from './login';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } /> 
          <Route path="About" element={ <h1>About</h1> } /> 
        </Routes>

    
     </BrowserRouter>


    </div>
  );
}

export default App;
