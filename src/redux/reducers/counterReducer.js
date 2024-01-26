import {INCREASE, DECREASE, RESET} from "../actions/actionTypes"

const intialState = 0

//counterReducer(0, {type: INCREASE}) 
// counterReducer(0, {type: INCREASE, value: 100})
const counterReducer = (state=intialState, action) => {
     
    switch(action.type){
        case INCREASE: 
                return state+ action.value
        case DECREASE: 
                return state-1
        case RESET:
                return 0
        default: 
           return state  // 0
    }

}

// counterReducer()


// counterReducer(100, {type: INCREASE})
// counterReducer(100, {type: DECREASE})
// counterReducer(100, {type: RESET})
// counterReducer(100, {type: XYZ})



export default counterReducer