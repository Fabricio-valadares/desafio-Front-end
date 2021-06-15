import { FormControlLabel, Radio } from '@material-ui/core';

interface IData {
    data: string[]
}

const QuestionTotal = ({ data }: IData) => {
    return (
        <>
            {data.map(wordQuestion => (
                <FormControlLabel value={wordQuestion} control={<Radio />} label={wordQuestion} />
            ))}
        </>
    )
}

export default QuestionTotal
