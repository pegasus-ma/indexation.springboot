import React, { Component } from "react"
import store from 'bucares/store'
import * as actionTypes from 'bucares/constants/actionTypes'
import {setInputUrl, setInputWord, confirmCheck, postApiContentCheck} from "bucares/actions/apiActions";
import { connect } from "react-redux";
import {Button, Input} from '@material-ui/core'


class IndexationInput extends Component {

	render() {

		return (
			<div style={{ margin: '10px' }}>
				<table>
					<tbody>
						<tr>
							<td>
								<Input type='text'
									placeholder='Saisir votre URL'
									style={{ width: '250px' }}
									onChange={this.props.changeInputUrl}
									value={this.props.inputUrl}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<Input type='text'
									placeholder='Saisir votre mot clé'
									maxLength='15'
									style={{ width: '250px' }}
									onChange={this.props.changeInputWord}
									value={this.props.inputWord}
								/>
							</td>
						</tr>
						<tr>
							<td>
								{/* Attention : onClick in React is special, we should use () => function instead of the function only */}
								<Button color='primary' onClick={() => this.props.clickButtonCheck(this.props.inputUrl, this.props.inputWord)} disabled={this.props.apiContentCheckLoading}>Check</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return {
		// inputUrl: state.inputUrl,
		// TODO HMA
		inputUrl: state["_root"]["entries"][0][1]['inputUrl'],
		// inputWord: state.inputWord
		// TODO HMA
		inputWord: state["_root"]["entries"][0][1]['inputWord'],
		//
		apiContentCheckLoading: state["_root"]["entries"][0][1]['apiContentCheckLoading']
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
		clickButtonCheck(url, word) {
			const action = postApiContentCheck(url, word)
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexationInput);
