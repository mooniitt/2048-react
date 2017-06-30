import React, {
	Component
} from 'react'
import Borard from './Borard'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.control = this.control.bind(this)
	}
	control() {
		document.addEventListener('keyup', (e) => {
			var code = e.keyCode
			switch (code) {
				case 38: // 上
				case 87:
					// this.$store.dispatch("onUp")
					console.log("up")
					break
				case 40: // 下
				case 83:
					// this.$store.dispatch("onDown")
					console.log("down")
					break
				case 37: // 左
				case 65:
					// this.$store.dispatch("onLeft")
					console.log("left")
					break
				case 39: // 右
				case 68:
					// this.$store.dispatch("onRight")
					console.log("right")
					break
				case 82:
					console.log("restart")
						// this.$store.commit('restart')
					break
				default:
					break
			}
			// this.$store.commit('score')
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