import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
	Provider
} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import Store from './reducer'
import Count from './Count'

ReactDOM.render(
	<Provider store={Store}>
   		<Count />
  	</Provider>,
	document.getElementById('root')
)

registerServiceWorker()