import React from 'react'
import Subscription from './components/Subscribers'
import { Provider } from 'react-redux'
import store from './redux/store'
const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Subscription />
      </div>
    </Provider>
  )
}

export default App