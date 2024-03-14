import logo from './logo.svg';
import './App.css';
import './Firebase.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attend from './components/Attend';
import Login from './components/Login';
import Signup from "./components/Signup.js";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/Home' element={<Attend />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
