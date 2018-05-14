import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import Index from './containers/Index'
import sagas from './redux/sagas'
import reducer from './redux/reducers'

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)
const store = createStore(
  reducer,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
