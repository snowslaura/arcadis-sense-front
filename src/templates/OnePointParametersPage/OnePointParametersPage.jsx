import {useEffect, useState } from "react"
import axios from "axios"
import { Parameters } from "../../components/Parameters/Parameters"
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export function OnePointParameters(){

    const {id} = useParams();


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
        })
        promise.catch((e)=>{
            console.error(e)
        })
    }
    return(
        <>
            <Header />
            {onePointParameters.map((parameter)=>{
                return(
                    <Parameters key={parameter.id} {...parameter}/> 
                )
            })}           
        </>
        
        
    )
}