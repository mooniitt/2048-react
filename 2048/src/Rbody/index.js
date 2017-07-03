import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import './body.css'
import Rrect from '../Rrect'

class Rbody extends Component {
	componentDidMount() {
		console.log(this.props.data)
	}
	render() {
		var Rect = this.props.data.sort((prev, cur) => {
			return parseInt(prev[4], 10) - parseInt(cur[4], 10)
		}).map(item => {
			return (
				<Rrect left={item[0]} top={item[1]} color={item[2]}
				number={item[3]} key={item[4]}/>
			)
		})
		return (
			<div className="body">
				{Rect}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.data
	}
}

export default connect(mapStateToProps)(Rbody)