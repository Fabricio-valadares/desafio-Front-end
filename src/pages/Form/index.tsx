import { Container, Form } from "./style"
import { useEffect, useState, useContext } from "react"
import { api } from "../../services"
import { QuatityQuestionContext } from "../../Provider/QuatityQuestion"
import { DataFormContext } from "../../Provider/DatafinalForm"
import { useHistory } from "react-router-dom"
import { Card, FormControl, RadioGroup, Button } from '@material-ui/core';
import QuestionTotal from "../../components/QuestionTotal"
import Header from "../../components/header"

interface IDataResponse {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[]
}

interface IDataFinalForm {
    question: string;
    questionCorrect: string;
    questionCheck: string;
}

const FormComponent = () => {
    const { quatityContext } = useContext(QuatityQuestionContext)
    const { setdataFormContext } = useContext(DataFormContext)
    const [listQuestion, setListQuestion] = useState<IDataResponse[]>([])
    const [valueQuestion, setValueQuestion] = useState<IDataFinalForm[]>([])

    useEffect(() => {
        api.get(`/api.php?amount=${quatityContext}`)
           .then(response => {
               setListQuestion(response.data.results)
            })
           .catch(error => console.log(error))
    }, [])

    const history = useHistory()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, nameQuestion: string, questionCorrect: string) => {
        setValueQuestion([...valueQuestion, {"question": nameQuestion, "questionCorrect": questionCorrect, "questionCheck": event.target.value }])
    }

    const handleSubmitFinal = () => {
        setdataFormContext(valueQuestion)
        history.push("/finaldata")
    }

    return(
        <>
            <Header />
            <Container>
                <Form onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                handleSubmitFinal()
            }}>
                    {listQuestion.map(question => (
                            <Card>
                                <FormControl>
                                    <h3>{question.question}</h3>
                                    <RadioGroup onChange={(event) => handleChange(event, question.question, question.correct_answer)}>
                                        <QuestionTotal data={[...question.incorrect_answers, question.correct_answer]}/>
                                    </RadioGroup>
                                </FormControl>
                            </Card>
                    ))}
                    <Button type="submit" variant="contained" color="secondary">Enviar</Button>
                </Form>

                
            </Container>
        </>
    )
}

export default FormComponent
