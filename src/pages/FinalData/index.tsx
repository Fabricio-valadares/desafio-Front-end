import { Container, Title, CardStyled, ContainerCard } from "./style"
import { useContext, useState, useEffect} from "react"
import { DataFormContext } from "../../Provider/DatafinalForm"
import Header from "../../components/header"

const FinalData = () => {
    const { dataFormContext } = useContext(DataFormContext)
    const [scoreTotalCorrect, setScoreTotalCorrect] = useState<number>(0)
    const [scoreTotalError, setScoreTotalError] = useState<number>(0)

    const scoreTotal = () => {
        const validCorrect = dataFormContext.filter((element) => {
            if (element.questionCheck === element.questionCorrect) {
                return element
            }
        })

        setScoreTotalCorrect(validCorrect.length)

        const validError = dataFormContext.filter((element) => {
            if (element.questionCheck !== element.questionCorrect) {
                return element
            }
        })

        setScoreTotalError(validError.length)

        localStorage.setItem(`Game - ${new Date()}`, JSON.stringify({"correct": validCorrect.length, "invalid": validError.length, "dataGame": dataFormContext}))

    }

    useEffect(() => {
        scoreTotal()
    }, [])

    return(
        <>
            <Header />
            <Container>
                <Title>Das {dataFormContext.length} questões {scoreTotalCorrect} estão corretas e {scoreTotalError} estão erradas</Title>
                <ContainerCard>
                    {
                        dataFormContext.map(element => (
                            <CardStyled style={{background: element.questionCheck === element.questionCorrect ? "#5ec48d" : "#f8433f", color: "#fff"}}>
                                <p style={{ fontWeight: "bold", fontSize:"17px" }}>{element.question}</p>
                                <p>Resposta escolhida: {element.questionCheck}</p>
                                <p>Resposta correta: {element.questionCorrect}</p>
                            </CardStyled>
                        ))
                    }
                </ContainerCard>
                
            </Container>
        </>
    )
}

export default FinalData;
