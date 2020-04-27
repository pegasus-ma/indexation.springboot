import { setInputUrl, setInputWord, setApiContentCheckPending, setApiContentCheckData, setApiContentCheckInvalidUrl, setApiContentCheckRejected, postApiContentCheck } from "bucares/actions/apiActions";

import * as actionTypes from 'bucares/constants/actionTypes';
import expect from 'expect' // You can use any testing library
import rootReducer from "bucares/reducers";
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";


test('setInputUrl : ', () => {
	expect(setInputUrl('https://www.lefigaro.fr').value).toBe('https://www.lefigaro.fr')
});

test('setInputWord : ', () => {
	expect(setInputWord('France').value).toBe('France')
});

test('setApiContentCheckPending : ', () => {
	expect(setApiContentCheckPending().type).toBe('SET_POST_API_CONTENT_CHECK_PENDING')
});

test('setApiContentCheckData : ', () => {
	expect(setApiContentCheckData('acepted').value).toBe('acepted')
});

test('setApiContentCheckInvalidUrl : ', () => {
	expect(setApiContentCheckInvalidUrl().value).toBe('The URL is invalid')
});

test('setApiContentCheckRejected : ', () => {
	expect(setApiContentCheckRejected().value).toBe('Server internal error')
});


test('setInputUrl', () => {
	expect(setInputUrl('https://www.lefigaro.fr').value).toBe('https://www.lefigaro.fr')
})


test('postApiContentCheck', () => {
	let middleware;

	middleware = applyMiddleware(promise, thunk);

	const expectedActions =
		{ type: actionTypes.SET_POST_API_CONTENT_CHECK_DATA, value: { 'state': 'rejected' } }


	const store = createStore(rootReducer, middleware);
	store.dispatch(postApiContentCheck('https://www.lefigaro.fr', 'France')).then(() => {
		expect(store.getActions().value.state).toEqual(expectedActions.value.state)
	})
});

