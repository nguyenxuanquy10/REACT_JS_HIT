import {createStore,combineReducers} from 'redux';
import todoReducer from './reducer'
const rootReducer=conbineReducers({
    todoList:todo
})

const store=createStore();