import React, { Component } from "react"
import store from 'bucares/store'
import * as actionTypes from 'bucares/constants/actionTypes'
import {setInputUrl, setInputWord, confirmCheck} from "bucares/actions/appActions";
import { connect } from "react-redux";
import {bindActionCreators, compose} from "redux";

class IndexationInput extends Component {

	// Override
	constructor(props) {

		super(props)

		this.state = {
			inputUrl: 'Saisir votre URL',
			inputWord: 'Saisir votre mot clé'
		}

		this.storeChange = this.storeChange.bind(this)
		this.changeInputUrl = this.changeInputUrl.bind(this)
		this.changeInputWord = this.changeInputWord.bind(this)
		this.clickButtonCheck = this.clickButtonCheck.bind(this)

		// Important !!!
		// When the store changes, the component subscribes its changement
		store.subscribe(this.storeChange)
	}

	storeChange() {
		this.setState(
			{	// FIXME HMA : The state got here is a map, Why ?
				inputUrl: store.getState().inputUrl,
				inputWord: store.getState().inputWord
			}
		)
		console.log('New state in the component IndexationInput : ')
		console.log(this.state)
	}

	changeInputUrl(e) {
		// console.log(e.target.value)

		// const action = {
		// 	type: actionTypes.SET_INPUT_WORD,
		// 	value: e.target.value
		// }
		// This is classic action definition

		// Production action definition
		const action = setInputUrl(e.target.value)

		// Update !!!
		// Tell the store that the state changes
		store.dispatch(action)
	}

	changeInputWord(e) {
		// console.log(e.target.value)

		// const action = {
		// 	type: actionTypes.SET_INPUT_WORD,
		// 	value: e.target.value
		// }
		// This is classic action definition

		// Production action definition
		const action = setInputWord(e.target.value)

		// Update !!!
		// Tell the store that the state changes
		store.dispatch(action)
	}

	clickButtonCheck() {

		// Production action definition
		const action = confirmCheck()
		// Update !!!
		// Tell the store that the state changes
		store.dispatch(action)
	}


	render() {

		return (
			<div style={{ margin: '10px' }}>
				<table>
					<tr>
						<td>
							<input type='text'
								placeholder='Saisir votre URL'
								style={{ width: '250px' }}
								onChange={this.changeInputUrl}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<input type='text'
								placeholder='Saisir votre mot clé'
								style={{ width: '250px' }}
								onChange={this.changeInputWord}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<button type='primary' onClick={this.clickButtonCheck}>Check</button>
						</td>
					</tr>
				</table>

			</div>
		)
	}
}

export default IndexationInput;
