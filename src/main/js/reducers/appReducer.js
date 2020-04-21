import * as actionTypes from 'bucares/constants/actionTypes';
import axios from "axios";
import {POST_API_CONTENT_CHECK, GET_API_CONTENT, DELETE_API_CONTENT} from "bucares/constants/url";

const initialState = {
    appInfo: null,
    appInfoLoading: false,
	inputUrl: '',
	inputWord: '',
	apiContentCheckData: null,
	apiContentCheckLoading: false
};

const appReducer = (state, action) => {

    if (typeof state === 'undefined') {
        return initialState
	}
	
	// console.log('Action : ')
	// console.log(action)

	// We cannot change the state object, we need to copy it to another one 
	const newState = Object.assign({},state);
	// const newState = JSON.parse(JSON.stringify(state));

    switch (action.type){

        case actionTypes.SET_APP_INFO_PENDING: {
            newState.appInfoLoading = true;
            break;
        }

        case actionTypes.SET_APP_INFO_DATA: {
            newState.appInfoLoading = false;
            newState.appInfo = action.payload;
            break;
        }

        case actionTypes.SET_APP_INFO_REJECTED: {
            newState.appInfoLoading = false;
            newState.appInfo = null;
            break;
		}
		
		case actionTypes.SET_INPUT_URL: {
            newState.inputUrl = action.value;
            break;
		}
		
		case actionTypes.SET_INPUT_WORD: {
            newState.inputWord = action.value;
            break;
		}
		
		case actionTypes.SET_POST_API_CONTENT_CHECK_PENDING: {
            newState.apiContentCheckLoading = true;
            break;
        }

        case actionTypes.SET_POST_API_CONTENT_CHECK_DATA: {
            newState.apiContentCheckLoading = false;
            newState.apiContentCheckData = action.value.state;
            break;
        }

        case actionTypes.SET_POST_API_CONTENT_CHECK_REJECTED: {
            newState.apiContentCheckLoading = false;
            newState.apiContentCheckData = action.value;
            break;
		}

	}
	
	// console.log('New state : ')
	// console.log(newState)

    return newState;
};

export default appReducer;
