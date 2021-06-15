import { Container, Title, DivContainer, ContainerCard } from "./style"
import Header from "../../components/header"
import { useState } from "react"
import { Card, Button } from '@material-ui/core';
import ModalText from "../../components/Modal"

interface IDataItems {
    question: string;
    questionCorrect: string;
    questionCheck: string;
    
}

interface IDataScore {
    correct: string;
    invalid: string;
}

interface IDataFinalForm {
    correct: string;
    invalid: string;
    dataGame: IDataItems[];
}

const ListGame = () => {
    const [valueModal, setValueModal] = useState<boolean>(false)
    const [dataModal, setDataModal] = useState<IDataItems[]>([])
    const [scorePlayer, setScorePlayer] = useState<IDataScore>({} as IDataScore)

    const [listGameState, setListGameState] = useState<IDataFinalForm[]>(() => {
        const listStringDataLocal = Object.values(localStorage)
        const result = listStringDataLocal.map(element => JSON.parse(element))

        if (result.length >= 0) {
            return result
        } else {
            return []
        }
    })

    const handleOpen = (data_question: IDataItems[], data_score: IDataScore) => {
        setValueModal(true)
        setDataModal(data_question)
        setScorePlayer(data_score)
    }

    const handleClose = () => {
        setValueModal(false)
    }

    return(
        <>
            <Header />
            <Container>
                <ModalText open={valueModal} handleClose={handleClose}>
                    <ContainerCard>
                    <Title>Das {dataModal.length} questões {scorePlayer.correct} estão corretas e {scorePlayer.invalid} estão erradas</Title>
                        <div style={{height: "90%", overflow: "auto"}}>
                        {dataModal.map(ele => (
                                <Card style={{background: ele.questionCheck === ele.questionCorrect ? "#5ec48d" : "#f8433f", color: "#fff"}}>
                                    <p style={{ fontWeight: "bold" }} >{ele.question}</p>
                                    <p>Resposta escolhida: {ele.questionCheck}</p>
                                    <p>Resposta correta: {ele.questionCorrect}</p>
                                </Card>
                        ))}
                        </div>
                    </ContainerCard>
                </ModalText>
                <Title>Questionários Concluidos</Title>
                <DivContainer>
                    {
                        listGameState.map((element, index) => (
                            <Card style={{ margin: "15px 0", padding: "20px", height: "auto", display: "flex", justifyContent: "space-between"}}>
                                    <p>Questionários: {index + 1}</p>
                                    <Button variant="contained" color="secondary" onClick={() => handleOpen(element.dataGame, {"correct": element.correct, "invalid": element.invalid})}>Ver mais</Button>
                            </Card>
                        ))
                    }
                </DivContainer>
            </Container>
        </>
    )
}

export default ListGame;
