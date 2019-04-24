import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunkMiddleware]

export default store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)), 
    )