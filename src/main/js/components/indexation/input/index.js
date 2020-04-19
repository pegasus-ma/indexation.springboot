import React, { Component } from "react"
import store from 'bucares/store'

class IndexationInput extends Component {

	// Override
	constructor (props) {

		super(props)
		console.log(store.getState())

		this.state = store.getState()

	}


	render() {

		return (
			<div style={{ margin: '10px' }}>
				<table>
					<tr>
						<td>
							<input type='text'
								placeholder={this.state.inputUrl}
								style={{ width: '250px' }}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<input type='text'
								placeholder={this.state.inputWord}
								style={{ width: '250px' }}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<button type='primary'>Check</button>
						</td>
					</tr>
				</table>

			</div>
		)
	}
}

export default IndexationInput;
