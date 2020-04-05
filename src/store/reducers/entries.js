import * as actionType from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
    topic: "",
    timeSelect: "15",
    entries: []

}


const addTopic = (state, action) => {
    return updateObject(state, {topic: action.topicName});
}

const addTime = (state, action) => {
    return updateObject(state, {timeSelect: action.timeValue});
}

const addEntry2 = (state, action) => {
    console.log("Sup");
    const newOrder = { topicEntry: state.topic, timeEntry: state.timeSelect};
    console.log(state);
    return updateObject(state, 
        {
            entries: state.entries.concat(newOrder),
            topic: "",
            timeSelect: "15"
        });
}

const reducer =(state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TOPIC: return addTopic(state, action);
        case actionType.ADD_TIME: return addTime(state, action);
        case actionType.ADD_ENTRY: return addEntry2(state, action);

        default:
            return state;
    }
};

export default reducer;
