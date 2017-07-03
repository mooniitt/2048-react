import React, {
	Component
} from 'react'
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
	return {
		score: () => dispatch({
			type: 'SUM'
		})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Restart)