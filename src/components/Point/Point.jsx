import {PointContainer,Form, Input, Button, PointName,FormContainer, LimitSubtitle} from "./style"
import { ThreeDots } from "react-loader-spinner"
import { useState, useContext } from "react"
import axios from "axios"
import {FiPlusCircle} from "react-icons/fi";
import isModalOpenContext from "../../contexts/isModalOpen"

import isLoadingContext from "../../contexts/isLoadingContext"


export function Point({id,name}){

    const {isLoading, setIsLoading} = useContext(isLoadingContext)
    const {setIsmodalOpen} = useContext(isModalOpenContext)
    const{message, setMessage} = useContext(isModalOpenContext)
  
    const [parametersData, setParametersData] = useState({})
    const[isBoxOpen, setIsBoxOpen] = useState(false)

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData.token

    function isRegular(){

    }


    function handleSubmit(event){

        setIsLoading(true)
        event.preventDefault()
        
        const body ={
            coordinateId: id,    
            aluminioDissolvido: parametersData.aluminioDissolvido,
            arsenioTotal:parametersData.arsenioTotal,
            chumboTotal:parametersData.chumboTotal,
            cobreDissolvido:parametersData.cobreDissolvido,
            escherichiaColi:parametersData.escherichiaColi,
            cromoTotal:parametersData.cromoTotal,
            cadmioTotal:parametersData.cadmioTotal,
            dbo:parametersData.dbo,
            irregular:parametersData.irregular
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        } 

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/parameters`, body , config)
        promise.then(()=>{
            setParametersData({});
            setIsmodalOpen(true)
            setMessage("Parametro enviado com sucesso")
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
        <PointContainer>
            <PointName><p>{name}</p> <FiPlusCircle onClick={()=> setIsBoxOpen(!isBoxOpen)} /></PointName>
            {isBoxOpen?
            <Form onSubmit={handleSubmit}>
                <FormContainer>
                    <Input type="number" step='any' disabled={isLoading} value={parametersData.aluminioDissolvido} placeholder="Aluminio Dissolvido" onChange={(e)=> setParametersData({...parametersData, aluminioDissolvido: e.target.value})} ></Input>
                    <LimitSubtitle>0.1mg/l</LimitSubtitle>
                </FormContainer>
                <FormContainer>
                    <Input type="number" step='any' disabled={isLoading} value={parametersData.arsenioTotal} placeholder="Arsênio Total"  onChange={(e)=> setParametersData({...parametersData, arsenioTotal: e.target.value})} ></Input>
                    <LimitSubtitle>0.01mg/l</LimitSubtitle>
                </FormContainer>
                <FormContainer>
                    <Input type="number" step='any' disabled={isLoading} value={parametersData.chumboTotal} placeholder="Chumbo Total"  onChange={(e)=> setParametersData({...parametersData, chumboTotal: e.target.value})} ></Input>
                    <LimitSubtitle>0.01mg/l</LimitSubtitle>
                </FormContainer>  
                <FormContainer> 
                    <Input type="number" step='any' disabled={isLoading} value={parametersData.cobreDissolvido} placeholder="Cobre Dissolvido"  onChange={(e)=> setParametersData({...parametersData, cobreDissolvido: e.target.value})} ></Input>
                    <LimitSubtitle>0.009mg/l</LimitSubtitle> 
                </FormContainer> 
                <FormContainer> 
                    <Input type="number" step='any' disabled={isLoading} value={parametersData.escherichiaColi} placeholder="Escherichia Coli"  onChange={(e)=> setParametersData({...parametersData, escherichiaColi: e.target.value})} ></Input>
                <LimitSubtitle> 1000NMP /100ml</LimitSubtitle> 
                </FormContainer>
                <FormContainer> 
                    <Input type="number" step='any' disabled={isLoading} value={parametersData.cromoTotal} placeholder="Cromo Total"  onChange={(e)=> setParametersData({...parametersData, cromoTotal: e.target.value})} ></Input>
                    <LimitSubtitle> 0.05mg/l</LimitSubtitle> 
                </FormContainer>    
                <FormContainer> 
                    <Input type="number" step='any' disabled={isLoading} value={parametersData.cadmioTotal} placeholder="cadmioTotal"  onChange={(e)=> setParametersData({...parametersData, cadmioTotal: e.target.value})} ></Input>
                    <LimitSubtitle> 0.001mg/l</LimitSubtitle> 
                </FormContainer>  
                <FormContainer>  
                    <Input type="number" step='any' disabled={isLoading} value={parametersData.dbo} placeholder="DBO"  onChange={(e)=> setParametersData({...parametersData, dbo: e.target.value})} ></Input>
                    <LimitSubtitle> 5mg O2/l</LimitSubtitle> 
                </FormContainer>                     
                <Button disabled={isLoading}>{isLoading?<ThreeDots color="#FFFFFF" height={50} width={80} />:"Cadastrar ponto"}</Button>
            </Form>:null}
        </PointContainer>
    )
}