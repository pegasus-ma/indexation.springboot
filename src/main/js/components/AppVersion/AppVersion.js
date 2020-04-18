import React from "react"
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import {getAppInfo} from "bucares/actions/appActions";

export class AppVersion extends React.Component {

    componentDidMount(){
        this.retrieveDataFromServer();
    }

    retrieveDataFromServer() {
        const {app} = this.props;
        if (app.appInfo === null && !app.appInfoLoading) {
            this.props.getAppInfo();
        }
    }

    render() {
        const {t, app} = this.props;
        return (
            <div>
                version {app.appInfo !== null ? app.appInfo.version : "none"}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAppInfo: getAppInfo
    }, dispatch)
}

export default compose(
    connect((store) => ({app: store.get("app")}), mapDispatchToProps),
)(AppVersion);
