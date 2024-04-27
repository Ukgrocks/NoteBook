import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import { useState } from 'react';
import About from './components/About';
import HomePage from './components/HomePage';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
    <NoteState>

    <Router>
    <NavBar/>
    <Alert alert={alert}/>
      <div className='container'>
 
  <Routes>
  <Route exact path="/" element={<HomePage showAlert={showAlert}/>}/>
   <Route exact path="/about" element={<About/>}/>
   <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
   <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
  </Routes>
  </div>
  </Router>

  </NoteState>
    </>
  );
}

export default App;
