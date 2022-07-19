import { Header } from "../../components/Header/Header"
import { Modal } from "../../components/Modal/Modal"

import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

import {Container,Form, Input, Button} from "./styles"
import { useState, useContext } from "react"


import isLoadingContext from "../../contexts/isLoadingContext"
import isModalOpenContext from "../../contexts/isModalOpen"


export function SearchParameters(){

    const {isLoading, setIsLoading} = useContext(isLoadingContext)
    const{isModalOpen, setIsmodalOpen} = useContext(isModalOpenContext)
    const{message, setMessage} = useContext(isModalOpenContext)   
    const [pointData, setPointData] = useState({})

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData.token


    function handleSubmit(event){
        setIsLoading(true)
        event.preventDefault()
        
        const body ={
            name:pointData.name ,
            xCoordinate:pointData.xCoordinate,
            yCoordinate:pointData.yCoordinate
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        } 

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/coordinates`, body , config)
        promise.then(()=>{
            setPointData({});
            setIsmodalOpen(true)
            setMessage("Cadastro feito com sucesso")
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
                <Form onSubmit={handleSubmit}>
                    <Input type="text" disabled={isLoading} value={pointData.name} placeholder="Nome" onChange={(e)=> setPointData({...pointData, name: e.target.value})}></Input>
                    <Input type="number" disabled={isLoading} value={pointData.xCoordinate} placeholder="Coordenada X" onChange={(e)=> setPointData({...pointData, xCoordinate: e.target.value})} ></Input>
                    <Input type="number" disabled={isLoading} value={pointData.yCoordinate} placeholder="Coordenada Y"  onChange={(e)=> setPointData({...pointData, yCoordinate: e.target.value})} ></Input>
                    <Button disabled={isLoading}>{isLoading?<ThreeDots color="#FFFFFF" height={50} width={80} />:"Cadastrar ponto"}</Button>
                </Form>                
            </Container>
        </>        
    )
}