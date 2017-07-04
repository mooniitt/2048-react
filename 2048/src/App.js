import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import Borard from './Borard'

class App extends Component {
	constructor(props) {
		super(props)
		this.control = this.control.bind(this)
		this.async = this.async.bind(this)
	}
	async() {
		setTimeout(() => {
			this.props.merge()
			this.props.random()
		}, 100)
	}
	control() {
		document.addEventListener('keyup', (e) => {
			var code = e.keyCode
			switch (code) {
				case 38: // 上
				case 87:
					this.async()
					this.props.up()
					console.log("up")
					break
				case 40: // 下
				case 83:
					this.async()
					this.props.down()
					console.log("down")
					break
				case 37: // 左
				case 65:
					this.async()
					this.props.left()
					console.log("left")
					break
				case 39: // 右
				case 68:
					this.async()
					this.props.right()
					console.log("right")
					break
				default:
					break
			}
			this.props.score()
		})
	}
	componentDidMount() {
		this.control()
		console.log(this.props)
	}
	render() {
		return (
			<Borard />
		)
	}
}
const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		up: () => dispatch({
			type: 'onUp'
		}),
		down: () => dispatch({
			type: 'onDown'
		}),
		left: () => dispatch({
			type: 'onLeft'
		}),
		right: () => dispatch({
			type: 'onRight'
		}),
		score: () => dispatch({
			type: 'SUM'
		}),
		merge: () => dispatch({
			type: 'MERGE'
		}),
		random: () => dispatch({
			type: "RANDOM"
		})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)