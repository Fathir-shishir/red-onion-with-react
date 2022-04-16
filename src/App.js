import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        {/* <Route path="/" element={<LogIn></LogIn>} /> */}
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route path="/singup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
