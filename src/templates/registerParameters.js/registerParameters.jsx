import { Header } from "../../components/Header/Header"
import { Modal } from "../../components/Modal/Modal"
import {Container} from "./style"
import { Point } from "../../components/Point/Point"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import isModalOpenContext from "../../contexts/isModalOpen"



export function RegisterParameter(){
        const userDataLocalStorage = localStorage.getItem("userData")
        const unserializedData = JSON.parse(userDataLocalStorage)
        const tokenStorage = unserializedData.token

        const {isModalOpen, setIsmodalOpen} = useContext(isModalOpenContext)
        const{message, setMessage} = useContext(isModalOpenContext)

        const [pointsData, setPointsData] = useState([])

   

    useEffect(()=>{
        getPoints()
    },[tokenStorage])

    function getPoints(){
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }
    
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/coordinates`, config) 
        promise.then(({data})=>{
            console.log(data)
            setPointsData(data)
            
        })
        promise.catch((e)=>{
            setIsmodalOpen(true)
            setMessage(e.response.data)
            console.error(e)
        })
    }

    

    return(
        <>  
        {isModalOpen?<Modal message={message} setIsmodalOpen={setIsmodalOpen} setMessage={setMessage}  />:null}
        <Header/>
        <Container>
            {pointsData.map((point)=>{
                return(
                    <Point key={point.id} {...point} /> 
                )
            })}                                  
        </Container>
    </> 
    )
}