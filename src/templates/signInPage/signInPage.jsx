import { Button, Container, Form, Header, Input, SignIn } from "./style"
import { Modal } from "../../components/Modal/Modal"
import { Link, useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"
import { useState } from "react"
import { useContext } from "react"

import isLoadingContext from "../../contexts/isLoadingContext"
import tokenContext from "../../contexts/tokenContext"
import isModalOpenContext from "../../contexts/isModalOpen"

export function SignInPage(){
    const [userData, setUserData] = useState({})    
    const navigate = useNavigate();
    const {isLoading, setIsLoading} = useContext(isLoadingContext);
    const {setToken} = useContext(tokenContext);

    const{isModalOpen, setIsmodalOpen} = useContext(isModalOpenContext)
    const{message, setMessage} = useContext(isModalOpenContext)   
    
    
    async function handleSubmit(event){
        setIsLoading(true)
        event.preventDefault()
        const body = {
            email: userData.email,
            password: userData.password,
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/signin`, body)
        console.log(process.env.REACT_APP_API_URL)
        promise.then(({data})=>{
            const serializedDataString = JSON.stringify({token: data})            
            localStorage.setItem("userData", serializedDataString)
            setToken(data)
            navigate('/home')
            setUserData({});
            setIsLoading(false)
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
        <Container>
        {isModalOpen?<Modal message={message} setIsmodalOpen={setIsmodalOpen} setMessage={setMessage}  />:null}
                <Header>
                    <img src={"https://media.arcadis.com/-/media/themes/arcadiscom/com/com-theme/images/arcadis-logo-black.svg?rev=-1&extension=webp"}alt="Arcadis-sense-logo"/><p>sense</p>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Input type="email" disabled={isLoading} value={userData.email} placeholder="E-mail" onChange={(e)=> setUserData({...userData, email: e.target.value})} ></Input>
                    <Input type="password" disabled={isLoading} value={userData.password} placeholder="Senha"  onChange={(e)=> setUserData({...userData, password: e.target.value})} ></Input>
                    <Button disabled={isLoading}>{isLoading?<ThreeDots color="#FFFFFF" height={50} width={80} />:"Registrar"}</Button>
                </Form>
                <Link style={isLoading?{pointerEvents: 'none'}:null}  to={'/'}><SignIn disabled={isLoading}> Não possui uma conta? <span>Registre-se</span></SignIn></Link>
        </Container>
        </>
    )
}