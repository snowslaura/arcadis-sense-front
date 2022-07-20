import {Coord, PointContainer,PointName, Title} from "./style"
import {VscGraphLine } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";


export function Average({id,name,avg}){    
   
    const navigate = useNavigate() 

    const average = parseFloat(avg).toFixed(4)
        
    // const userDataLocalStorage = localStorage.getItem("userData")
    // const unserializedData = JSON.parse(userDataLocalStorage)
    // const tokenStorage = unserializedData.token  

    return(
        <PointContainer key={id}>
            <PointName><p>{name}</p> <VscGraphLine onClick={()=> navigate(`/ponto/${id}`)}/></PointName>
            <Title> 
                <Coord>
                    <span>Média das medições:  </span><span>{average}</span>
                </Coord>          
            </Title>              
        </PointContainer>
    )
}