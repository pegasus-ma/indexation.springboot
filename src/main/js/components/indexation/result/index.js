import React, { Component } from "react"
import store from 'bucares/store'
import { connect } from "react-redux";
import {bindActionCreators, compose} from "redux";

class IndexationResult extends Component {

	render() {

		return (
			<div style={{ margin: '10px' }}>
				<p>{this.props.apiContentCheckData}</p>
			</div>
		)
	}
}


function mapStateToProps(state) {
    return {
		// returnMsg: state.returnMsg
		// TODO HMA
		apiContentCheckData: state["_root"]["entries"][0][1]['apiContentCheckData'],
	}
}

export default connect(mapStateToProps, null)(IndexationResult);
