import React, { Component } from "react"
import store from 'bucares/store'
import * as actionTypes from 'bucares/constants/actionTypes'
import {setInputUrl, setInputWord, confirmCheck} from "bucares/actions/appActions";
import { connect } from "react-redux";
import {bindActionCreators, compose} from "redux";

class IndexationInput extends Component {

	render() {

		return (
			<div style={{ margin: '10px' }}>
				<table>
					<tr>
						<td>
							<input type='text'
								placeholder='Saisir votre URL'
								style={{ width: '250px' }}
								onChange={this.props.changeInputUrl}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<input type='text'
								placeholder='Saisir votre mot clé'
								style={{ width: '250px' }}
								onChange={this.props.changeInputWord}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<button type='primary' onClick={this.props.clickButtonCheck}>Check</button>
						</td>
					</tr>
				</table>

			</div>
		)
	}
}

function mapStateToProps(state) {
    return {
		// inputUrl: state.inputUrl,
		inputUrl: state["_root"]["entries"][0][1]['inputUrl'],
		// inputWord: state.inputWord
		inputWord: state["_root"]["entries"][0][1]['inputWord']
	}
}

function mapDispatchToProps(dispatch) {
    return {
		changeInputUrl(e) {
			const action = setInputUrl(e.target.value)
			dispatch(action)
		},
		changeInputWord(e) {
			const action = setInputWord(e.target.value)
			dispatch(action)					 
		},
		clickButtonCheck() {
			const action = confirmCheck()
			store.dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexationInput);

// export default connect(mapStateToProps, mapDispatchToProps)(IndexationInput);
