import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers/rootReducers";
import { composeWithDevTools } from 'redux-devtools-extension' //cuando esta en producción esto se quita
import thunk from "redux-thunk";

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

// const store = createStore(rootReducers, applyMiddleware(thunk)); //en el caso de no tener composeWithDevTools

export default store;