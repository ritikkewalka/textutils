import { useState } from "react";
//import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setMode]= useState('light')
  const [alert,setAlert]= useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(
      ()=>{
        setAlert(null)
      },2000
    )
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
     showAlert('Dark Mode has been enabled',"success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled',"success")

    }
    }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode= {mode} aboutText ="About" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-2"> 
      <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      {/* <Routes> */}
         
          {/* <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
        </Routes> */}
        
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
