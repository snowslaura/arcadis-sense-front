import { Header } from "../../components/Header/Header"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

import {Container,Form, Input, Button} from "./style"
import isLoadingContext from "../../contexts/isLoadingContext"
import { useState, useContext } from "react"
export function RegisterPoint(){

    const {isLoading, setIsLoading} = useContext(isLoadingContext)
    const [pointData, setPointData] = useState({})

    function handleSubmit(event){
        setIsLoading(true)
        event.preventDefault()
        
        const body ={
            userId:6,
            name:pointData.name ,
            xCoordinate:pointData.xCoordinate,
            yCoordinate:pointData.yCoordinate
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/coordinates`, body)
        promise.then((response)=>{
            console.log(response)
            setPointData({});
            setIsLoading(false)
        })
        promise.catch((e)=>{
            console.error(e)
            setIsLoading(false)
        })
    }

    return(
        <>
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