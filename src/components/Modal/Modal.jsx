import {ModalBackground,ModalContainer,Body,Footer} from "./style"

export function Modal(props) {

    const {setIsmodalOpen,message,setMessage} = props

    return (
      <ModalBackground>
        <ModalContainer>
          <Body>
            <p>{message}.</p>
          </Body>
          <Footer>
            <button onClick={() => {
              setIsmodalOpen(false)
              setMessage("")
            }}>
              OK
            </button>
          </Footer>
        </ModalContainer>
      </ModalBackground>
    );
  }
  



