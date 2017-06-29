import React, {
	Component
} from 'react'
import './borard.css'
import Rbody from '../Rbody'
import Rhead from '../Rhead'

export default class Borard extends Component {
	render() {
		return (
			<div className="borard">
				<Rhead />
				<Rbody />
			</div>
		)
	}
}