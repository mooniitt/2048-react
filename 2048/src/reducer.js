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

function score(state = 0, action) {
	switch (action.type) {
		case "SUM":
			return sum()
		default:
			return state
	}
}

function data(state = [
	["100px", "100px", "#873", 2, 1],
	["100px", "0px", "#090", 2, 2]
], action) {
	switch (action.type) {
		case 'onUp':
			return [...mergeUp(CURD(merge()))]
		case 'onDown':
			return [...mergeDown(merge())]
		case 'onLeft':
			return [...mergeLeft(merge())]
		case 'onRight':
			return [...mergeRight(merge())]
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

const sum = (data = Store.getState().data) => {
	var score = 0
	for (var i = 0; i < data.length; i++) {
		score += data[i][3]
	}
	return score
}

const merge = (data = Store.getState()) => {
	var state = {}
	state.data = Store.getState().data
	state.removeId = Store.getState().removeId
	state.newBlock = Store.getState().newBlock
	console.log("merge : " + JSON.stringify(state))
	return state
}

const CURD = (state) => {
	console.log(JSON.stringify(state))
		// if (state['newBlock'].length) {
		// 	var timerId = setTimeout(() => {
		// 		Store.dispatch({
		// 			type: "onUp"
		// 		})
		// 		clearTimeout(timerId)
		// 	}, 2000)
		// }
	console.log(JSON.stringify(state))
	return state
}

// console.log(merge())

export default Store
// console.log(store.getState())