import { createStore } from "redux";
import moment from "moment-timezone";

const initState = {
    city: [moment.tz.guess()],
    input: "",
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADDZONE":
            return {
                city: [...state.city, action.city],
                input: "",
            };
        case "DELETEZONE":
            let newArray = Array.from(state.city);
            newArray.splice(action.index, 1);
            return {
                city: newArray,
                input: "",
            };
        default:
            return state;
    }
};

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);