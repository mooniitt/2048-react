import React, {
	Component
} from 'react'
// import store from './reducer'
import {
	connect
} from 'react-redux'
import {
	bindActionCreators
} from 'redux'


class Count extends Component {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		var data = this.props.data.map((item, index) => {
			return (
				<p key={index}>{item[0]}</p>
			)
		})
		return (
			<div>
				{data}
			</div>
		)
	}
}

function add() {
	return {
		type: "onLeft",
		id: 1
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.data
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(add, dispatch)
}

export default connect(mapStateToProps)(Count)