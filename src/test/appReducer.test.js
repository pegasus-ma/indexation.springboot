import * as actionTypes from 'bucares/constants/actionTypes';
import rootReducer from "bucares/reducers";

describe('rootReducer', () => {

	it('actionTypes.SET_INPUT_URL : ', () => {
		expect(rootReducer(undefined, {})).toEqual(
			{
				appInfo: null,
				appInfoLoading: false,
				inputUrl: '',
				inputWord: '',
				apiContentCheckData: null,
				apiContentCheckLoading: false
			})
	});

	it('actionTypes.SET_INPUT_URL : ', () => {
		expect(rootReducer([], {
			type: actionTypes.SET_INPUT_URL,
			value: 'https://www.lefigaro.fr'
		}).inputUrl
		).toEqual('https://www.lefigaro.fr')
	});

	it('actionTypes.SET_INPUT_WORD : ', () => {
		expect(rootReducer([], {
			type: actionTypes.SET_INPUT_WORD,
			value: 'France'
		}).inputWord
		).toEqual('France')
	});

	it('actionTypes.SET_POST_API_CONTENT_CHECK_PENDING : ', () => {
		expect(rootReducer([], {
			type: actionTypes.SET_POST_API_CONTENT_CHECK_PENDING
		}).apiContentCheckLoading
		).toEqual(true)
	});

	it('actionTypes.SET_POST_API_CONTENT_CHECK_DATA : ', () => {
		expect(rootReducer([], {
			type: actionTypes.SET_POST_API_CONTENT_CHECK_DATA,
			value: {state : 'accecpted'}
		}).value.state
		).toEqual('accecpted')
	});

})