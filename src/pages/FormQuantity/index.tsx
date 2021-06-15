import { Container, Title, Form, ButtonSend, DivTitle } from "./style"
import { TextField } from "@material-ui/core"
import { useContext } from "react"
import { QuatityQuestionContext } from "../../Provider/QuatityQuestion"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup" 
import { useHistory } from "react-router-dom"
import Header from "../../components/header"


interface IDataFormNumber {
    number: number
}

const FormQuantity = () => {
    const { setQuatityContext } = useContext(QuatityQuestionContext)
    const history = useHistory()

    const schema = yup.object().shape({
        number: yup.number()
    })

    const { reset, handleSubmit, register } = useForm({
        resolver: yupResolver(schema)
    }) 

    const dataForm = (data: IDataFormNumber) => {
        reset()
        setQuatityContext(data.number)
        history.push("/pagebutton")
    }

    return(
        <>
            <Header />
            <Container>
                <DivTitle>
                    <Title>Seja Bem-vindo ao seu  questionários de perguntas sobre conhecimentos gerais</Title>
                </DivTitle>
                <Form onSubmit={handleSubmit(dataForm)}>
                    <TextField {...register("number")} label="Quantidade" placeholder="Quantidade de perguntas" type="number" variant="outlined" />
                    <ButtonSend type="submit" variant="contained" color="primary">Confirmar</ButtonSend>
                </Form>
            </Container>
        </>
    )
}

export default FormQuantity
