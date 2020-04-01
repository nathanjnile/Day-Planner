import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import classes from "./InputForm.module.css";


class InputForm extends Component {

    state = {
        topic: "",
        timeSelect: "15"
    }

    handleTimeChange = (event) => {
        this.setState({timeSelect: event.target.value})
        console.log(this.state.timeSelect)
    }

    render() {
        

    return(

        <div className={classes.InputForm}>
            <form>
            <Typography variant="h5" gutterBottom style={{color: "#2c2f35"}}>
                Enter Topic and Length:
            </Typography>    
            <TextField 
            // error
            // helperText={}
            id="topic-field"
            label="Topic"
            defaultValue={this.timeSelect} 
            variant="filled" 
            style={{width: "40ch"}}
             />
            <br/><br/>
            <TextField 
            select
            id="timelength-select"
            label="Length" 
            variant="filled"
            value={this.state.timeSelect}
            onChange={(event) => this.handleTimeChange(event)}
            style={{color: "#2c2f35",width: "40ch"}} >
            <MenuItem value={15}>15 mins</MenuItem>
            <MenuItem value={30}>30 mins</MenuItem>
            <MenuItem value={45}>45 mins</MenuItem>
            <MenuItem value={60}>60 mins</MenuItem>

            </TextField>
            
            </form>
        </div>

    );
    }
}

export default InputForm;
