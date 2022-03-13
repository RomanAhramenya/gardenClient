import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import profileReducer from "./reducers/profileReducer";
import contentReducer from "./reducers/contentReducer";
const reducers = combineReducers({
    form: formReducer,
    profile:profileReducer,
    content:contentReducer
})
const store = createStore(reducers,applyMiddleware(thunk));
export default store;
window.store = store;