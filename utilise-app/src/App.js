import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
    
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroudColor='black';
      showAlert("DarkMode Activated","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroudColor='white';
      
      showAlert("LightMode Activated","success");
    }
  }
  return (
    <>
    
    <Navbar title="New Bar"  mode = {mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container'>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>


      <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
      </div>
    </>
  );
}

export default App;
