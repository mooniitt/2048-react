import {
	createStore,
	combineReducers
} from 'redux'
import {
	mergeLeft,
	mergeRight,
	mergeUp,
	mergeDown,
	randomBlock
} from './direct'

// import Root from '../root'
// let store = createStore(todos)
const sum = (data = 0) => {
	var score = 0
	for (var i = 0; i < data.length; i++) {
		score += data[i][3]
	}
	return score
}

function score(state = 0, action) {
	switch (action.type) {
		case "SUM":
			return state
		default:
			return state
	}
}

function data(state = [
	["100px", "100px", "#873", 2, 1]
], action) {
	switch (action.type) {
		case 'onUp':
			return [...mergeUp(state)]
		case 'onDown':
			return [...mergeDown(state)]
		case 'onLeft':
			return [...mergeLeft(state)]
		case 'onRight':
			return [...mergeRight(state)]
		default:
			return state
	}
}


function removeId(state = [], action) {
	switch (action.type) {
		case "REMOVEID":
			return state
		default:
			return state
	}
}

function newBlock(state = [], action) {
	switch (action.type) {
		case "NEWBLOCK":
			return state
		default:
			return state
	}
}

const root = combineReducers({
	score,
	data,
	removeId,
	newBlock
})

const Store = createStore(root)
export default Store

// console.log(store.getState())