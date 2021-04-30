import{combineReducers} from 'redux'
import contactReducer from './contactBook'

const rootReducer = combineReducers({
    contact:contactReducer
})

export default rootReducer


