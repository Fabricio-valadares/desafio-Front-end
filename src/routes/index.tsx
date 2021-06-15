import { Switch, Route } from "react-router-dom"
import FormQuantity from "../pages/FormQuantity"
import ButtonTwo from "../pages/ButtonTwo"
import FormComponent from "../pages/Form"
import FinalData from "../pages/FinalData"
import ListGame from "../pages/ListGame"

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={FormQuantity}/>
            <Route exact path="/pagebutton" component={ButtonTwo}/>
            <Route exact path="/form" component={FormComponent}/>
            <Route exact path="/finaldata" component={FinalData}/>
            <Route exact path="/listgame" component={ListGame} />
        </Switch>
    )
}

export default Routes
