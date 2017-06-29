import React, {
	Component
} from 'react'
import './score.css'

export default class Score extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 1024
		}
	}
	render() {
		return (
			<div className="score">
				<p>SCORE : {this.state.score}</p>
			</div>
		)
	}
}