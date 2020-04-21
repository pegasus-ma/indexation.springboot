import axios from "axios";
import * as actionTypes from 'bucares/constants/actionTypes';
import {APP_VERSION_URL, POST_API_CONTENT_CHECK, GET_API_CONTENT, DELETE_API_CONTENT} from "bucares/constants/url";
import validator from 'validator'

/////////////////////////// Part APP Version

export const setAppInfoPending = () => ({
    type: actionTypes.SET_APP_INFO_PENDING
});

export const setAppInfoData = (payload) => ({
    type: actionTypes.SET_APP_INFO_DATA,
    payload
});

export const setAppInfoRejected = () => ({
    type: actionTypes.SET_APP_INFO_REJECTED
});

export const getAppInfo = () => (
    (dispatch) => {
        dispatch(setAppInfoPending());
        return axios.get(APP_VERSION_URL).then(response => {
            dispatch(setAppInfoData(response.data));
        }).catch(() => {
            dispatch(setAppInfoRejected());
        })
    }
);

export const setInputUrl = (value) => ({
	type: actionTypes.SET_INPUT_URL,
	value
});

export const setInputWord = (value) => ({
    type: actionTypes.SET_INPUT_WORD,
	value
});


///////////////////////////// Part POST api/content/check

export const setApiContentCheckPending = () => ({
    type: actionTypes.SET_POST_API_CONTENT_CHECK_PENDING
});

export const setApiContentCheckData = (data) => ({
    type: actionTypes.SET_POST_API_CONTENT_CHECK_DATA,
    value: data
});

export const setApiContentCheckInvalidUrl = () => ({
	type: actionTypes.SET_POST_API_CONTENT_CHECK_INVALID_URL,
	value: "The URL is invalid"
});

export const setApiContentCheckRejected = () => ({
	type: actionTypes.SET_POST_API_CONTENT_CHECK_REJECTED,
	value: "Server internal error"
});

export const postApiContentCheck = (url, word) => (
    (dispatch) => {
		if (!validator.isURL(url)) {
			dispatch(setApiContentCheckInvalidUrl());
		} else {
			dispatch(setApiContentCheckPending());
			return axios.post(POST_API_CONTENT_CHECK, {"url": url, "word": word}).then(response => {
				dispatch(setApiContentCheckData(response.data));
			}).catch(() => {
				dispatch(setApiContentCheckRejected());
			})
		}
    }
);
