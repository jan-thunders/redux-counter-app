import { createStore, combineReducers } from "redux";  
import counterReducer from "./reducers/counterReducer";
import songReducer from "./reducers/songReducer";

const rootReducer = combineReducers(
    {
    counter: counterReducer,
    song: songReducer
   }
)


const store = createStore(rootReducer)  // 1

// console.log(store) 

export default store

// dispatch({type: CLICKED_SONG, payload: song})

// songReducer(null, {type: CLICKED_SONG, payload: song}) => {id: 1, name: "song1"}





// step1: 
// counterReducer( ) => 0

// dispatch({type: INCREASE}) 
// counterReducer(0, {type: INCREASE}) => 1  

// dispatch({type: INCREASE}) 
// counterReducer(1, {type: INCREASE}) => 2

// dispatch({type: INCREASE, value: 100})
// counterReducer(0, {type: INCREASE, value: 100}) =>   100
