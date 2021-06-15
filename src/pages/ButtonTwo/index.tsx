import { Container, Title, ContainerButtons, ButtonSend } from "./style"
import { useHistory } from "react-router-dom"
import Header from "../../components/header"

const ButtonTwo = () => {
    const history = useHistory()

    return(
        <>
            <Header />
            <Container>
                <Title>Vamos começar !</Title>
                <ContainerButtons>
                    <ButtonSend onClick={() => history.push("/form")} variant="contained" color="secondary">Start</ButtonSend>
                    <ButtonSend onClick={() => history.push("/")} variant="contained" color="secondary">Cancel</ButtonSend>
                </ContainerButtons>
            </Container>
        </>
    )
}

export default ButtonTwo
