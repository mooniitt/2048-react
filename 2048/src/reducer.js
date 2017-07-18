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

let removeId = [],
	newBlock = [],
	flag = true

function score(state = 0, action) {
	switch (action.type) {
		case "SUM":
			return sum()
		default:
			return state
	}
}

function data(state = [

], action) {
	switch (action.type) {
		case 'onUp':
			var state = mergeUp(merge())
			return CURD(state)
		case 'onDown':
			var state = mergeDown(merge())
			return CURD(state)
		case 'onLeft':
			var state = mergeLeft(merge())
			return CURD(state)
		case 'onRight':
			var state = mergeRight(merge())
			return CURD(state)
		case 'MERGE':
			var block = [...newBlock]
			return remove(removeId, block)
		case 'RANDOM':
			return [...randomBlock(state)]
		case 'INIT':
			state = []
			return [...randomBlock(state)]
		default:
			return state
	}
}


const root = combineReducers({
	score,
	data
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
	state.removeId = removeId
	state.newBlock = newBlock
	console.log("merge : " + JSON.stringify(state))
	return state
}

const CURD = (state) => {
	var data = state.data
	console.log(JSON.stringify(data))
	removeId = state.removeId
	newBlock = state.newBlock
	return [...data]
}

const remove = (id, newb, store = Store.getState().data) => {
	if (id.length === 0) return store
	var offset = []
	store.forEach((item, index) => {
		id.forEach(num => {
			if (num === item[4]) {
				offset.push(index)
			}
		})
	})

	offset.sort((prev, cur) => {
		return cur - prev
	}).forEach(item => {
		store.splice(item, 1)
	})
	var block = [...store, ...newb]
	id = [], newb = []
	return block
}

export default Store