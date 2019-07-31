import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import App from './components/App'
import './index.css'
import * as serviceWorker from './serviceWorker'
//import { fetchUsersIfNeeded } from './actions';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ))

//store
//  .dispatch(fetchUsersIfNeeded('interns'))
//  .then(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
