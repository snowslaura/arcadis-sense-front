import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react"

import './../assets/styles/styles.css';
import { SignUpPage } from '../templates/signUpPage.js/signUpPage';
import { SignInPage } from '../templates/signInPage/signInPage';
import { HomePage } from "../templates/homePage/homePage";
import { RegisterPoint } from "../templates/registerPointPage.js/registerPoint";
import { RegisterParameter } from "../templates/registerParameters.js/registerParameters";
import { SearchPoint } from "../templates/searchPointPage.js/searchPointPage";
import { SearchParameters } from "../templates/searchParameters/searchParameters";
import { IrregularPoints } from "../templates/irregularPoints/irregularPoints";
import { ListAllPoints } from "../templates/listAllPoins/listAllPointsPage";


import isLoadingContext from "../contexts/isLoadingContext"
import tokenContext from "../contexts/tokenContext";
import isModalOpenContext from "../contexts/isModalOpen";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState()
  const [isModalOpen, setIsmodalOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <isLoadingContext.Provider value={{isLoading, setIsLoading}}>
      <tokenContext.Provider value={{token, setToken}}>
        <isModalOpenContext.Provider value ={{isModalOpen, setIsmodalOpen, message, setMessage}}>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUpPage/>}></Route>
                <Route path="/signin" element={<SignInPage/>}></Route>
                <Route path="/home" element={<HomePage/>}></Route>
                <Route path="/cadastro-ponto" element={<RegisterPoint/>}></Route> 
                <Route path="/cadastro-parametro" element={<RegisterParameter/>}></Route>
                <Route path="/pesquisar-ponto" element={<SearchPoint/>}></Route> 
                <Route path="/pesquisar-parametro" element={<SearchParameters/>}></Route>
                <Route path="/pontos-irregulares" element={<IrregularPoints/>}></Route>
                <Route path="/listar-todos" element={<ListAllPoints/>}></Route>                  
            </Routes>    
          </BrowserRouter>
        </isModalOpenContext.Provider>
      </tokenContext.Provider>
    </isLoadingContext.Provider>
  );
}

export default App;
