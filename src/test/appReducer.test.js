import * as actionTypes from 'bucares/constants/actionTypes';
import appReducer from "bucares/reducers/appReducer";
import store from 'bucares/store'

const initState = {
	appInfo: null,
	appInfoLoading: false,
	inputUrl: '',
	inputWord: '',
	apiContentCheckData: null,
	apiContentCheckLoading: false
}

describe('appReducer', () => {

	it('default : ', () => {
		expect(appReducer(undefined, {})).toEqual(initState)
	});

	it('actionTypes.SET_INPUT_URL : ', () => {
		expect(appReducer(store.getState(), {
			type: actionTypes.SET_INPUT_URL,
			value: 'https://www.lefigaro.fr'
		}).inputUrl
		).toEqual('https://www.lefigaro.fr')
	});

	it('actionTypes.SET_INPUT_WORD : ', () => {
		expect(appReducer(store.getState(), {
			type: actionTypes.SET_INPUT_WORD,
			value: 'France'
		}).inputWord
		).toEqual('France')
	});

	it('actionTypes.SET_POST_API_CONTENT_CHECK_PENDING : ', () => {
		expect(appReducer(store.getState(), {
			type: actionTypes.SET_POST_API_CONTENT_CHECK_PENDING
		}).apiContentCheckLoading
		).toEqual(true)
	});

	it('actionTypes.SET_POST_API_CONTENT_CHECK_DATA : ', () => {
		expect(appReducer(store.getState(), {
			type: actionTypes.SET_POST_API_CONTENT_CHECK_DATA,
			value: {state : 'accecpted'}
		}).apiContentCheckData
		).toEqual('accecpted')
	});

	it('actionTypes.SET_POST_API_CONTENT_CHECK_INVALID_URL : ', () => {
		expect(appReducer(store.getState(), {
			type: actionTypes.SET_POST_API_CONTENT_CHECK_INVALID_URL,
			value: 'The URL is invalid'
		}).apiContentCheckData
		).toEqual('The URL is invalid')
	});

	it('actionTypes.SET_POST_API_CONTENT_CHECK_REJECTED : ', () => {
		expect(appReducer(store.getState(), {
			type: actionTypes.SET_POST_API_CONTENT_CHECK_REJECTED,
			value: 'Server internal error'
		}).apiContentCheckData
		).toEqual('Server internal error')
	});


})