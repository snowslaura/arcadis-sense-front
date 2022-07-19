import styled from "styled-components";

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const ModalContainer = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;    

`

export const Body = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 700;
    font-family: 'Poppins';
    font-style: normal;
    line-height: 27px;
    font-size: 14px;
    color: #E76A25;
`

export const Footer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 150px;
        height: 45px;
        margin: 10px;
        border: none;
        border-radius: 8px;
        background: #E76A25;
        color: white;
        border-radius: 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        cursor: pointer;
    }

    #cancelBtn {
        background-color: crimson;
    }

`