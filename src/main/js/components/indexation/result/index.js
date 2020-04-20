import React, { Component } from "react"
import store from 'bucares/store'
import { connect } from "react-redux";

class IndexationResult extends Component {

	render() {

		return (
			<div style={{ margin: '10px' }}>
				<p>{(this.props.returnMsg === '' || typeof this.props.returnMsg === 'undefined') 
					? this.props.returnMsg 
					: 'Result : ' + this.props.returnMsg}</p>
			</div>
		)
	}
}


function mapStateToProps(state) {
    return {
		// returnMsg: state.returnMsg
		returnMsg: state["_root"]["entries"][0][1]['returnMsg'],
	}
}

export default connect(mapStateToProps, null)(IndexationResult);
