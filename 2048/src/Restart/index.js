import React, {
	Component
} from 'react'
import {
	bindActionCreators
} from 'redux'
import {
	connect
} from 'react-redux'
import './restart.css'

class Restart extends Component {
	render() {
		return (
			<div className="btn" onClick={this.props.score}>
				<p>RESTART</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	const reducer = () => ({
		type: "SUM"
	})
	let bind = bindActionCreators(reducer, dispatch)

	return {
		score: bind
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Restart)