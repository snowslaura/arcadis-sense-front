import {Coord, PointContainer,PointName, Title} from "./style"
import {VscGraphLine } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";


export function AllPoints({id,name, xCoordinate, yCoordinate}){    
   
    const navigate = useNavigate() 
        
    // const userDataLocalStorage = localStorage.getItem("userData")
    // const unserializedData = JSON.parse(userDataLocalStorage)
    // const tokenStorage = unserializedData.token        

    return(
        <PointContainer key={id}>
            <PointName><p>{name}</p> <VscGraphLine onClick={()=> navigate(`/ponto/${id}`)}/></PointName>
            <Title> 
                <Coord>
                    <span>Coordenadas:</span><span>({xCoordinate},</span><span>{yCoordinate})</span>
                </Coord>          
            </Title>              
        </PointContainer>
    )
}