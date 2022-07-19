import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
   
`
export const Input = styled.input`
    background: ${props => props.disabled?"#FFFFFF":"#FFFFFF"};
    border-radius: 100px;
    width: 310px;
    height: 40px;
    border:none;
    margin-bottom: 10px;
    padding: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.06em;
    ::placeholder{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: 0.06em;
        color: rgba(0, 0, 0, 0.6);
    }

    @media (max-width:300px) {
        width: 90%
    }
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E76A25;
    width: 310px;
    height: 60px;
    border:none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 8px;
    cursor: pointer;
    @media (max-width:300px) {
        width: 90%
    }
`