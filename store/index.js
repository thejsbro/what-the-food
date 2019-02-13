import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export default store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)), 
    )