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
	constructor(props) {
		super(props)
		this.init = this.init.bind(this)
	}
	init() {
		this.props.init()
		this.props.score()
	}
	componentDidMount() {
		console.log()
		this.refs.button.click()
	}
	render() {
		return (
			<div className="btn" ref='button' onClick={this.init}>
				<p>RESTART</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	const score = () => ({
		type: "SUM"
	})
	const init = () => ({
		type: "INIT"
	})

	return {
		score: bindActionCreators(score, dispatch),
		init: bindActionCreators(init, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Restart)