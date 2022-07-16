import { Header } from "../../components/Header/Header"
import { Content, Option } from "./style"
import { Link } from "react-router-dom"

export function HomePage(){
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