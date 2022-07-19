import styled from "styled-components"

export const PointContainer = styled.div`
    margin: 30px;
    width: 30%;  
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y:scroll ;
    padding: 20px;
    background-color: #F9A885;

    @media (max-width:500px) {
        width: 90%
    }
`

export const PointName = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF; 
    padding: 5px;

    svg{
        font-size: 25px;
        cursor: pointer;
    }
`

export const FormContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LimitSubtitle = styled.div`
    height: 40px; 
    width: 30%;
    background-color: #FFF;
    border-radius: 100px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 0.06em;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content:center;
    align-items: center;
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
   
`
export const Input = styled.input`
    background: ${props => props.disabled?"#FFFFFF":"#FFFFFF"};
    border-radius: 100px;
    width: 65%;
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
    width: 100%;
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