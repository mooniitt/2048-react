import React, {
	Component
} from 'react'
import './body.css'
import Rrect from '../Rrect'

export default class Rbody extends Component {
	render() {
		var data = [
			[
				'300px', //left
				'300px', //top
				'#F2EEE3', //color
				16, //number
				0 //id
			],
			[
				'200px',
				'100px',
				'#BAAF92',
				4, 1
			]
		]
		var Rect = data.sort((prev, cur) => {
			return parseInt(prev[4], 10) - parseInt(cur[4], 10)
		}).map(item => {
			return (
				<Rrect left={item[0]} top={item[1]} color={item[2]}
				number={item[3]} key={item[4]}/>
			)
		})
		return (
			<div className="body" >
				{Rect}
			</div>
		)
	}
}