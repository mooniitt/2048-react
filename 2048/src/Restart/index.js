import React, {
	Component
} from 'react'
import './restart.css'

export default class Restart extends Component {
	constructor() {
		super()
		this.restart = this.restart.bind(this)
	}
	restart() {
		console.log("restart")
	}
	render() {
		return (
			<div className="btn" onClick={this.restart}>
				<p>RESTART</p>
			</div>
		)
	}
}