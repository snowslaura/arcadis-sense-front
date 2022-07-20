import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px;       
`

export const Option = styled.div`
    width:250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 27px;
    color:#E76A25;
        label{
            width: 250px; 
        }

`
export const InputName = styled.input`
    background: ${props => props.disabled?"#FFFFFF":"#FFFFFF"};
    border-radius: 100px;
    width: 310px;
    height: 40px;
    border:none;
    margin-bottom: 5px;
    padding: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.06em;
    
    @media (max-width:300px) {
        width: 90%
    }
`
export const Input = styled.input`
    background: ${props => props.disabled?"#FFFFFF":"#FFFFFF"};
    border-radius: 100px;
    width: 30px;
    height: 40px;
    border:none;
    padding: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.06em;
    
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