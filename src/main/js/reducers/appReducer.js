import * as actionTypes from 'bucares/constants/actionTypes';

const initialState = {
    appInfo: null,
    appInfoLoading: false,
	inputUrl: 'Saisir votre URL',
	inputWord: 'Saisir votre mot clé',
	returnMsg: ''
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
		
		case actionTypes.CONFIRM_CHECK: {
			// Check the URL input's format
			// TODO HMA

			if (true) {
				// Call the api
				// TODO HMA
				if (false) {
					newState.inputUrl = '';
					newState.inputWord = '';
					newState.returnMsg = 'accepted';
				} else {
					newState.returnMsg = 'Internal error of the API, please retry.';
				}
			} else {
				newState.returnMsg = 'The format of the URL is wrong.';
			}
            break;
        }

	}
	
	// console.log('New state : ')
	// console.log(newState)

    return newState;
};

export default appReducer;
