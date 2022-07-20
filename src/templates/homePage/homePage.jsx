import { Header } from "../../components/Header/Header"
import { Content, Option } from "./style"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export function HomePage(){
    const navigate = useNavigate()

    function verifyToken(){
        const token = localStorage.getItem("userData")
        console.log(token)
        if(!token) navigate('/')
    }
    useEffect(()=>verifyToken(),[]) 

    return(
    <>
        <Header/>
        <Content>
            <Option><Link to='/cadastro-ponto'><p>Cadastro de Pontos</p></Link></Option>
            <Option><Link to='/cadastro-parametro'><p>Cadastro de Parâmetros</p></Link></Option>
            <Option><Link to='/pesquisar-ponto'><p>Pesquisar Pontos</p></Link></Option>
            <Option><Link to='/pesquisar-parametro'><p>Pesquisar parâmetro</p></Link></Option>
            <Option><Link to='/pontos-irregulares'><p>Pontos irregulares</p></Link></Option>
            <Option><Link to='/listar-todos'><p>Listar todos</p></Link></Option>
        </Content>
    </>
    )
}