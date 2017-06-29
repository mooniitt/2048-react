import React, {
	Component
} from 'react'
import './rect.css'

export default class Rrect extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isBorn: true,
			timerId: null
		}
		this.move = this.move.bind(this)
	}
	move() {
		// console.log(this.refs.rect)
		const style = this.refs.rect.style
		style.left = this.props.left
		style.top = this.props.top
		style.backgroundColor = this.props.color
	}

	componentDidUpdate(prevProps, prevState) {
		this.move()
	}
	componentDidMount() {
		var id = setTimeout(() => {
			this.setState({
				isBorn: false
			})
		}, 100)
		this.setState({
			timerId: id
		})
		this.move()
	}
	componentWillUnmount() {
		clearTimeout(this.state.timerId)
	}

	render() {
		var cls = this.state.isBorn ? "vrect born" : "vrect"
		return (
			<div ref='rect' className={cls}>
				<p>{this.props.number}</p>
			</div>
		)
	}
}