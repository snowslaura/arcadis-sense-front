import './../assets/styles/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from '../templates/signUpPage.js/signUpPage';
import { SignInPage } from '../templates/signInPage/signInPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<SignUpPage/>}></Route>
          <Route path="/signin" element={<SignInPage/>}></Route>      
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
