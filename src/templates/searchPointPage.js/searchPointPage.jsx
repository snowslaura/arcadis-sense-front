import { Header } from "../../components/Header/Header"
import { Modal } from "../../components/Modal/Modal"
import { AllPoints } from "../../components/AllPoints/AllPoints"

import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

import {Container,Form, Input, Button} from "./style"
import { useState, useContext } from "react"


import isLoadingContext from "../../contexts/isLoadingContext"
import isModalOpenContext from "../../contexts/isModalOpen"


export function SearchPoint(){

    const {isLoading, setIsLoading} = useContext(isLoadingContext)
    const{isModalOpen, setIsmodalOpen} = useContext(isModalOpenContext)
    const{message, setMessage} = useContext(isModalOpenContext)   
    const [pointData, setPointData] = useState({})
    const [searchPoint, setSearchPoint] = useState({})

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData.token


    function fetchByName(event){
        setIsLoading(true)
        event.preventDefault()

        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }
        
        console.log(tokenStorage , "TOKEN STORAGE")

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/coordinate/?name=${pointData.name}&x=${pointData.xCoordinate}&y=${pointData.yCoordinate}`, config)
        promise.then(({data})=>{
            setSearchPoint(data[0])  
            console.log(data[0])          
            setPointData({});
            setIsLoading(false);
        })
        promise.catch((e)=>{
            setIsmodalOpen(true)
            setMessage(e.response.data)
            console.error(e)
            setIsLoading(false)
        })
    }

    function fetchByCoordinates(event){
        setIsLoading(true)
        event.preventDefault()        
        
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        } 

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/coordinate/?x=${pointData.xCoordinate}&y=${pointData.yCoordinate}`, config)
        promise.then(({data})=>{
            setSearchPoint(data)
            setPointData({});
            setIsLoading(false);
        })
        promise.catch((e)=>{
            setIsmodalOpen(true)
            setMessage(e.response.data)
            console.error(e)
            setIsLoading(false)
        })
    }
    return(
        <>  
            {isModalOpen?<Modal message={message} setIsmodalOpen={setIsmodalOpen} setMessage={setMessage}  />:null}
            <Header/>
            <Container>
                <Form onSubmit={fetchByName}>
                    <Input type="text" disabled={isLoading} value={pointData.name} placeholder="Nome" onChange={(e)=> setPointData({...pointData, name: e.target.value})}></Input>
                    <Button disabled={isLoading}>{isLoading?<ThreeDots color="#FFFFFF" height={50} width={80} />:"Pesquisar ponto"}</Button>
                </Form>
                <Form onSubmit={fetchByCoordinates}>               
                    <Input type="number" disabled={isLoading} value={pointData.xCoordinate} placeholder="Coordenada X" onChange={(e)=> setPointData({...pointData, xCoordinate: e.target.value})} ></Input>
                    <Input type="number" disabled={isLoading} value={pointData.yCoordinate} placeholder="Coordenada Y"  onChange={(e)=> setPointData({...pointData, yCoordinate: e.target.value})} ></Input>
                    <Button disabled={isLoading}>{isLoading?<ThreeDots color="#FFFFFF" height={50} width={80} />:"Pesquisar ponto"}</Button>
                </Form>  
            {!searchPoint.id?null:<AllPoints {...searchPoint}/>}
            </Container>
        </>        
    )
}