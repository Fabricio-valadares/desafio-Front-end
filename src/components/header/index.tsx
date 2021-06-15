import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory, useRouteMatch } from "react-router-dom"
import { useState } from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

interface IDataItems {
  question: string;
  questionCorrect: string;
  questionCheck: string;
  
}

interface IDataFinalForm {
  correct: string;
  invalid: string;
  dataGame: IDataItems[];
}

const Header = () => {
  const classes = useStyles();
  const history = useHistory()
  const { path } = useRouteMatch()

  const [listGameState, setListGameState] = useState<IDataFinalForm[]>(() => {
    const listStringDataLocal = Object.values(localStorage)
    const result = listStringDataLocal.map(element => JSON.parse(element))

    if (result.length >= 0) {
        return result
    } else {
        return []
    }
})


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{display: "flex", justifyContent: "space-between", height: "75px"}} variant="dense">
          <Typography style={{cursor: "pointer"}} variant="h6" color="inherit" onClick={() => history.push("/")}>
            Front End
          </Typography>
          {path == "/" && listGameState.length >= 1 && <Button onClick={() => history.push("/listgame")} variant="contained" color="secondary" >Ver Anteriores</Button> }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;