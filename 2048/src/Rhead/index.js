import React, {
	Component
} from 'react'
import './rhead.css'
import Score from '../Score'
import Restart from '../Restart'

export default class Rhead extends Component {
	render() {
		return (
			<div className="vhead">
				<Score />
				<Restart />
			</div>
		)
	}
}