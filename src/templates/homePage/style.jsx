import styled from "styled-components";

export const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    
`

export const Option = styled.button`
    width: 40%;
    height: 60px;
    margin-top: 40px;
    background-color: #E76A25;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border:none;    

    p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 27px;
        color: #fff;
    }

    @media (min-width: 1400px) {
        width: 30%;        
    }

    @media (max-width: 700px) {
        width: 60%;
        margin-top: 10px;
    }
`