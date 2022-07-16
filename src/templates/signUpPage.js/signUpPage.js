import { Button, Container, Form, Header, Input, SignIn } from "./style"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { useState } from "react"
import { useContext } from "react"

import isLoadingContext from "./../../contexts/isLoadingContext.js"

export function SignUpPage(){
    const [userData, setUserData] = useState({})    
    const navigate = useNavigate();
    const {isLoading, setIsLoading} = useContext(isLoadingContext)
    
    async function handleSubmit(event){
        setIsLoading(true)
        event.preventDefault()
        const body = {
            userName : userData.userName,
            email: userData.email,
            password: userData.password,
            confirmation:userData.confirm
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/signup`, body)
        console.log(process.env.REACT_APP_API_URL)
        promise.then(()=>{
            navigate('/signin')
            setUserData({});
            setIsLoading(false)
        })
        promise.catch((e)=>{
            console.error(e)
            setIsLoading(false)
        })         
    }


    return(
        <Container>
                <Header>
                    <img src={"https://media.arcadis.com/-/media/themes/arcadiscom/com/com-theme/images/arcadis-logo-black.svg?rev=-1&extension=webp"}alt="Arcadis-sense-logo"/><p>sense</p>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Input type="text" disabled={isLoading} value={userData.userName} placeholder="Nome" onChange={(e)=> setUserData({...userData, userName: e.target.value})}></Input>
                    <Input type="email" disabled={isLoading} value={userData.email} placeholder="E-mail" onChange={(e)=> setUserData({...userData, email: e.target.value})} ></Input>
                    <Input type="password" disabled={isLoading} value={userData.password} placeholder="Senha"  onChange={(e)=> setUserData({...userData, password: e.target.value})} ></Input>
                    <Input type="password" disabled={isLoading} value={userData.confirm}  placeholder="Confirme a senha" onChange={(e)=> setUserData({...userData, confirm: e.target.value})} ></Input>
                    <Button disabled={isLoading}>{isLoading?<ThreeDots color="#FFFFFF" height={50} width={80} />:"Registrar"}</Button>
                </Form>
                <Link style={isLoading?{pointerEvents: 'none'}:null}  to={'/signin'}><SignIn disabled={isLoading}> Já possui uma conta? <span>Entre</span></SignIn></Link>
        </Container>
    )
}