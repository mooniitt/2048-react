import {
	createStore
} from 'redux'

import Root from '../root'
// let store = createStore(todos)
// console.log(store.getState())
export default createStore(Root)

// store.dispatch({
// 	type: 'ADD_TODO',
// 	text: 'Read the docs'
// })

// console.log(store.getState())