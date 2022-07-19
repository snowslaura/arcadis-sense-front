import {useEffect, useState } from "react"
import axios from "axios"
import { IrregularParamteres } from "../../components/IrregularParameters/IrregularParameters";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export function OneIrregulaPointParameter(){

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
        
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/irregular/${id}`, config)
        promise.then(({data})=>{
            setOnePointParameters(data)
            console.log(data)
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
                    <IrregularParamteres key={parameter.id} {...parameter}/> 
                )
            })}           
        </>
        
        
    )
}