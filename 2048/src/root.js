import {
	combineReducers
} from 'redux'

function reducer(state = {
	data: [
		[2],
		[10]
	],
	removeId: [],
	newBlock: [],
	score: 0
}, action) {
	switch (action.type) {
		case 'onLeft':
			return {
				score: "left"
			}
		case 'onRight':
			return {
				score: "right"
			}
		case 'onUp':
			return {
				score: "up"
			}
		case 'onDown':
			return {
				score: "down"
			}
		default:
			return state
	}

}

export default reducer