import {Container, Logo} from "./style"
import { FaSignOutAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export function Header(){
    const navigate = useNavigate()

    function LogOut(){        
        localStorage.clear()    
        navigate('/')
    }

    return(
        <Container>
            <Link to='/home'>
                <Logo>
                    <img src={"https://media.arcadis.com/-/media/themes/arcadiscom/com/com-theme/images/arcadis-logo-black.svg?rev=-1&extension=webp"}alt="Arcadis-sense-logo"/><p>sense</p>
                </Logo>
            </Link>
            <FaSignOutAlt onClick={()=> LogOut()}/>
        </Container>
    )
}