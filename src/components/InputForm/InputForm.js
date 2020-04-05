import React, {Component} from "react";
import { connect } from "react-redux";

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import classes from "./InputForm.module.css";
import * as actions from "../../store/actions/index";



class InputForm extends Component {

    state = {
        // topic: "",
        // timeSelect: "15",
        //entries: [{topicEntry:"Man", timeEntry: "30"}]
    }

    componentDidMount() {
        console.log("Start!")
    }

    // handleTimeChange = (event) => {
    //     this.setState({timeSelect: event.target.value}, () => console.log(this.state.timeSelect));
    // }

    // handleTopicChange = (event) => {
    //     this.setState({topic: event.target.value});
    // }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onEntryAdded();
        setTimeout(() => console.log(this.props.entries), 10);
        // this.setState({entries : 
        //     [...this.state.entries, {
        //         topicEntry: this.props.topic, 
        //         timeEntry: this.props.timeSelect}]},() =>{
        //             console.log(this.state.entries);
        //             this.setState({topic: "", timeSelect: "15"});
        //         } );
    }

    render() {
 
        const items = [];
        let length = 15;
        for(let i = 0; i < 8; i++) {
            items.push(<MenuItem key={length + "mins"} value={length}>{length} mins</MenuItem>)
            length = length + 15;
        }
        
    return(

        <div className={classes.InputForm}>
            <form onSubmit={(event) => this.handleFormSubmit(event)}>
            <Typography variant="h5" gutterBottom style={{color: "#2c2f35"}}>
                Enter Topic and Length:
            </Typography>    
            <TextField 
            // error
            // helperText={}
            id="topic-field"
            label="Topic"
            value={this.props.topic}
            // onChange={(event) => this.handleTopicChange(event)}
            onChange={(event) => this.props.onTopicAdded(event.target.value)}
            variant="filled" 
            style={{width: "70%"}}
             />
            <br/><br/>
            <TextField 
            select
            id="timelength-select"
            label="Length" 
            variant="filled"
            value={this.props.timeSelect}
            //onChange={(event) => this.handleTimeChange(event)}
            onChange={(event) => this.props.onTimeAdded(event.target.value)}
            style={{color: "#2c2f35",width: "70%"}} >
            {items}    
            </TextField>
            <br/><br/>
            <Button variant="outlined" type="submit" style={{width:"35%", color: "#2c2f35"}}>
                ADD
            </Button>
            </form>
        </div>

    );
    }
}

const mapStateToProps = state => {
    return {
        topic: state.entries.topic,
        timeSelect : state.entries.timeSelect,
        entries: state.entries.entries
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onTopicAdded: (topic) => dispatch(actions.addTopic(topic)),
        onTimeAdded: (time) => dispatch(actions.addTime(time)),
        onEntryAdded: () => dispatch(actions.addEntry())
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
