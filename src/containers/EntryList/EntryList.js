import React, {Component} from "react";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import classes from "./EntryList.module.css";
import * as actions from "../../store/actions/index";

class EntryList extends Component {

    state = {
    }

    componentDidMount() {
    }

    

   

    render() {

    let listEntries = this.props.entries.map((obj, index) => {
        
        return(
            <ListItem button key={this.props.entries[index].topicEntry + this.props.entries[index].timeEntry}>
            <ListItemText 
            primary={this.props.entries[index].topicEntry
             + " " + this.props.entries[index].timeEntry + " mins"} 
             style={{color: "#2c2f35"}}
              />
          </ListItem>
        );
    })
        
 
    return(
        <div className={classes.EntryList}>
      <List component="nav" aria-label="mailbox folders">
      {listEntries}
    </List>
        </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        topic: state.entries.topic,
        timeSelect: state.entries.timeSelect,
        entries: state.entries.entries
    };
}

const mapDispatchToProps = dispatch => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EntryList);
