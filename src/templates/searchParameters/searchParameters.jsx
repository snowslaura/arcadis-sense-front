import { Header } from "../../components/Header/Header"
import { Modal } from "../../components/Modal/Modal"
import { Average } from "../../components/Average/Average"

import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

import {Container,Form, Input, Button, Option, InputName} from "./styles"
import { useState, useContext } from "react"


import isLoadingContext from "../../contexts/isLoadingContext"
import isModalOpenContext from "../../contexts/isModalOpen"


export function SearchParameters(){

    const {isLoading, setIsLoading} = useContext(isLoadingContext)
    const{isModalOpen, setIsmodalOpen} = useContext(isModalOpenContext)
    const{message, setMessage} = useContext(isModalOpenContext)   
    const [pointData, setPointData] = useState({})
    const [searchPoint, setSearchPoint] = useState({})
    const[isCoordinatesLoading,setIsCoordinatesLoading] = useState(false)

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData.token

    console.log(pointData)

    function fetchParameterByPointName(event){
        setIsLoading(true)
        event.preventDefault()
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }
        console.log(pointData.parameter)
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/parameter/?name=${pointData.name}&parameter=${pointData.parameter}`, config)
        promise.then(({data})=>{
            console.log(data.length)
            setIsLoading(false);
            if(data.length===0){
                setIsmodalOpen(true) 
                setMessage("Coordenada inexistente")
                return  
            }            
            setSearchPoint(data[0]) 
            console.log(data)
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
                <Form onSubmit={fetchParameterByPointName}>
                    <InputName type="text" disabled={isLoading} value={pointData.name} placeholder="Nome da Coordenada" onChange={(e)=> setPointData({...pointData, name: e.target.value})}></InputName>
                    <Option>
                        <Input type="radio" disabled={isLoading} value={pointData.parameter} name="option" id="aluminioDissolvido" onChange={(e)=> setPointData({...pointData, parameter: e.target.id})} ></Input>
                        <label for="Aluminio Dissolvido"> Aluminio Dissolvido (mg/l)</label>                    
                    </Option> 
                    <Option>
                        <Input type="radio" disabled={isLoading} value={pointData.parameter} name="option"  id="arsenioTotal" onChange={(e)=> setPointData({...pointData, parameter: e.target.id})} ></Input>
                        <label for="Arsênio Total"> Arsênio Total (mg/l)</label>                    
                    </Option>  
                    <Option>
                        <Input type="radio" disabled={isLoading} value={pointData.parameter} name="option" id="chumboTotal" onChange={(e)=> setPointData({...pointData, parameter: e.target.id})} ></Input>
                        <label for="Chumbo Total"> Chumbo Total (mg/l)</label>                    
                    </Option> 
                    <Option>
                        <Input type="radio" disabled={isLoading} value={pointData.parameter}  name="option" id="cobreDissolvido" onChange={(e)=> setPointData({...pointData, parameter: e.target.id})} ></Input>
                        <label for="Cobre dissolvido"> Cobre dissolvido (mg/l)</label>                    
                    </Option> 
                    <Option>
                        <Input type="radio" disabled={isLoading} value={pointData.parameter} name="option" id="escherichiaColi"  onChange={(e)=> setPointData({...pointData, parameter: e.target.id})} ></Input>
                        <label for="Escherichia coli"> Escherichia coli (NMP/100ml)</label>                    
                    </Option> 
                    <Option>
                        <Input type="radio" disabled={isLoading} value={pointData.parameter}  name="option" id="cromoTotal" onChange={(e)=> setPointData({...pointData, parameter: e.target.id})} ></Input>
                        <label for="Cromo total"> Cromo total (mg/l)</label>                    
                    </Option> 
                    <Option>
                        <Input type="radio" disabled={isLoading} value={pointData.parameter} name="option" id="cadmioTotal" onChange={(e)=> setPointData({...pointData, parameter: e.target.id})} ></Input>
                        <label for="Cádmio total"> Cádmio total (mg/l)</label>                    
                    </Option> 
                    <Option>
                        <Input type="radio" disabled={isLoading} value={pointData.parameter} name="option" id="dbo" onChange={(e)=> setPointData({...pointData, parameter: e.target.id})} ></Input>
                        <label for="DBO"> DBO (mgO2/l)</label>                    
                    </Option> 
                    <Button disabled={isLoading}>{isLoading?<ThreeDots color="#FFFFFF" height={50} width={80} />:"Pesquisar parâmetro"}</Button>
                </Form>  
            {!searchPoint.name?null:<Average {...searchPoint}/>}
            </Container>
        </>        
    )
}