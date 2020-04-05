import React, {Component} from "react";
import { connect } from "react-redux";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import classes from "./EntryList.module.css";

class EntryList extends Component {

    render() {

    let listEntries = this.props.entries.map((obj, index) => {
        
        return(
            <React.Fragment>
            <ListItem button key={this.props.entries[index].topicEntry + this.props.entries[index].timeEntry}>
            <ListItemText 
            primary={this.props.entries[index].topicEntry
             + " " + this.props.entries[index].timeEntry + " mins"} 
             style={{color: "#2c2f35"}}
              />
          </ListItem>
             <Divider />
             </React.Fragment>
        );
    })
        
 
    return(
        <div className={classes.EntryList}>
            <Typography variant="h5" gutterBottom style={{color: "#2c2f35"}}>
                To Do List: {this.props.entries.length <= 0 ? "Please Enter items!" : null}
            </Typography>
      <List component="nav" aria-label="mailbox folders">
      <Divider />
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
