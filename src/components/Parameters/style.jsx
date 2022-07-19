import styled from "styled-components"

export const ContainerParam = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ParameteresContainer = styled.div`
    margin: 30px;
    width: 30%;  
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #F9A885;

    @media (max-width:500px) {
        width: 90%
    }
`
export const Title = styled.div`


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
export const ParameterTitle = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
    svg{
        font-size: 20px;
        color: #FFF;
        cursor: pointer;
    }
`

export const FormContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    min-width:100%;
`

export const LimitSubtitle = styled.div`
    height: 40px; 
    width: 30%;
    min-width: 90px;
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
export const Input = styled.div`
    background:#FFFFFF;
    border-radius: 100px;
    width: 65%;
    min-width: 100px;
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
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;

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