import React, { Component } from "react"
import store from 'bucares/store'

class IndexationResult extends Component {

	// Override
	constructor(props) {

		super(props)

		this.state = {
			returnMsg: ''
		}

		this.storeChange = this.storeChange.bind(this)

		// Important !!!
		// When the store changes, the component subscribes its changement
		store.subscribe(this.storeChange)
	}

	storeChange() {
		this.setState(
			{	// FIXME HMA : The state got here is a map, Why ?
				returnMsg: store.getState().returnMsg
			}
		)
		// console.log('New state in the component IndexationResult : ')
		// console.log(this.state)
	}

	render() {

		return (
			<div style={{ margin: '10px' }}>
				<p>{(this.state.returnMsg === '' || typeof this.state.returnMsg === 'undefined') 
					? this.state.returnMsg 
					: 'Result : ' + this.state.returnMsg}</p>
			</div>
		)
	}
}

export default IndexationResult;
