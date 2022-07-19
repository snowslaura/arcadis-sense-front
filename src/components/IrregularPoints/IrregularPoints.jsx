import {Coord, PointContainer,PointName, Title} from "./style"
import {VscGraphLine } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";


export function AllIrregularPoints({id,name, xCoordinate, yCoordinate}){    
   
    const navigate = useNavigate()
                
    return(
        <PointContainer key={id}>
            <PointName><p>{name}</p> <VscGraphLine onClick={()=> navigate(`/pontos-irregulares/${id}`)}/></PointName>
            <Title> 
                <Coord>
                    <span>Coordenadas:</span><span>({xCoordinate},</span><span>{yCoordinate})</span>
                </Coord>          
            </Title>              
        </PointContainer>
    )
}