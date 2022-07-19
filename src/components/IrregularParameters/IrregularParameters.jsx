import {Input, FormContainer, LimitSubtitle, ParameteresContainer, ContainerParam } from "./style"
import {FiArrowDownCircle, FiArrowUpCircle} from "react-icons/fi";
import { ParameterTitle } from "../AllPoints/style";
import { useState } from "react";
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)



export function IrregularParamteres({ id,name, createdAt, aluminioDissolvido, arsenioTotal,chumboTotal, cobreDissolvido, escherichiaColi, cromoTotal, cadmioTotal, dbo}){
    
    const [isBoxOpen, setIsBoxOpen] = useState(false)
    
    function dateConfigure(createdAt){
        const date = dayjs(createdAt, 'YYYY-MM-DD').utc().local().format('DD/MM/YYYY - HH:mm');
        return date
    }

    return(
        <ContainerParam>
                <ParameteresContainer>
                    <ParameterTitle key={id} > 
                            <h6>{name}</h6>
                            <h6>{dateConfigure(createdAt)}</h6>
                            {isBoxOpen?<FiArrowUpCircle onClick={()=> setIsBoxOpen(!isBoxOpen)} />:<FiArrowDownCircle onClick={()=> setIsBoxOpen(!isBoxOpen)} />}                   
                    </ParameterTitle>
                     {isBoxOpen?
                     <>
                     <FormContainer>
                        <Input><p>Aluminio Dissolvido</p></Input>
                        <Input><p>{aluminioDissolvido}</p></Input>
                        <LimitSubtitle>0.1mg/l</LimitSubtitle>
                    </FormContainer>
                    <FormContainer>
                        <Input><p>Arsenio Total</p></Input>
                        <Input><p>{arsenioTotal}</p></Input>
                        <LimitSubtitle>0.01mg/l</LimitSubtitle>
                    </FormContainer>
                    <FormContainer>
                        <Input><p>Chumbo Total</p></Input>
                        <Input><p>{chumboTotal}</p></Input>
                        <LimitSubtitle>0.01mg/l</LimitSubtitle>
                    </FormContainer>  
                    <FormContainer> 
                        <Input><p>Cobre Dissolvido</p></Input>
                        <Input><p>{cobreDissolvido}</p></Input>
                        <LimitSubtitle>0.009mg/l</LimitSubtitle> 
                    </FormContainer> 
                    <FormContainer> 
                        <Input><p>Escherichia Coli</p></Input>
                        <Input><p>{escherichiaColi}</p></Input>
                        <LimitSubtitle> 1000NMP/100ml</LimitSubtitle> 
                    </FormContainer>
                    <FormContainer> 
                        <Input><p>Cromo Total</p></Input>
                        <Input><p>{cromoTotal}</p></Input>
                        <LimitSubtitle> 0.05mg/l</LimitSubtitle> 
                    </FormContainer>    
                    <FormContainer> 
                        <Input><p>Cadmio Total </p></Input>
                        <Input><p>{cadmioTotal}</p></Input>
                        <LimitSubtitle>0.001 mg/l</LimitSubtitle> 
                    </FormContainer>  
                    <FormContainer>  
                        <Input><p>DBO</p></Input>
                        <Input><p>{dbo}</p></Input>
                        <LimitSubtitle> 5mg O2/l</LimitSubtitle> 
                    </FormContainer>
                    </>
                    : null}    
            </ParameteresContainer>       
        </ContainerParam>          
        
        
    )
}

