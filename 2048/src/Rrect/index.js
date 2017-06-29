import React, {
	Component
} from 'react'
import './rect.css'

export default class Rrect extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isBorn: true
		}
	}
	componentDidUpdate(prevProps, prevState) {

	}
	render() {
		return (
			<div className="vrect">
				<p>16</p>
			</div>
		)
	}
}