import { setAppInfoPending, setAppInfoData, setAppInfoRejected, getAppInfo } from "bucares/actions/appActions";

import * as actionTypes from 'bucares/constants/actionTypes';
import expect from 'expect' // You can use any testing library
import rootReducer from "bucares/reducers";
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";


test('setAppInfoPending : ', () => {
	expect(setAppInfoPending().type).toBe('SET_APP_INFO_PENDING')
});

test('setAppInfoData : ', () => {
	expect(setAppInfoData('0-SNAPSHOT').type).toBe('SET_APP_INFO_DATA')
});

test('setAppInfoRejected : ', () => {
	expect(setAppInfoRejected().type).toBe('SET_APP_INFO_REJECTED')
});


test('getAppInfo', () => {
	let middleware;

	middleware = applyMiddleware(promise, thunk);

	const expectedActions =
		{ type: actionTypes.SET_APP_INFO_DATA, value: { 'payload': '0-SNAPSHOT' } }


	const store = createStore(rootReducer, middleware);
	store.dispatch(getAppInfo()).then(() => {
		expect(store.getActions().appInfo).toEqual(expectedActions.value.payload)
	})
});

