import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import {
	TodosReducer,
	addTodosReducer,
	todosLoadingErrorReducer,
	updateTodosReducer,
} from './components';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	todosReadState: TodosReducer,
	todosAddState: addTodosReducer,
	todosUpdateState: updateTodosReducer,
	todosLoadingErrorState: todosLoadingErrorReducer,
	// todosDeleteState: deleteTodosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
