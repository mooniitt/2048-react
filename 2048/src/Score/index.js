import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'

import './score.css'

class Score extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return (
			<div className="score">
				<p>SCORE : {this.props.score}</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		score: state.score
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sum: () => dispatch({
			type: 'SUM'
		})
	}
}

export default connect(mapStateToProps)(Score)