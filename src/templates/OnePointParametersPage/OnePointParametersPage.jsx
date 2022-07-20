import {useContext, useEffect, useState } from "react"
import axios from "axios"
import { Parameters } from "../../components/Parameters/Parameters"
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import isModalOpenContext from "../../contexts/isModalOpen";

export function OnePointParameters(){

    const {id} = useParams();

    const{isModalOpen, setIsmodalOpen} = useContext(isModalOpenContext)
    const{message, setMessage} = useContext(isModalOpenContext) 

    const [onePointParameters, setOnePointParameters] = useState([])  

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData.token        


    useEffect(()=>{
        fetchParameters(id)
    },[])

    function fetchParameters(id){
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        } 
        
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/parameters/coordinate/${id}`, config)
        promise.then(({data})=>{
            setOnePointParameters(data)
            if(data.length===0) setIsmodalOpen(true)
        })
        promise.catch((e)=>{
            console.error(e)
        })
    }
    return(
        <>
            
            {isModalOpen?<Modal message={"Ainda não há registro para esse ponto. Volte ao menu."} setIsmodalOpen={setIsmodalOpen} setMessage={setMessage}/>:null}
            <Header />
            {onePointParameters.map((parameter)=>{
                return(
                    <Parameters key={parameter.id} {...parameter}/> 
                )
            })}         
        </>
        
        
    )
}