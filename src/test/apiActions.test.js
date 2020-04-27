import {setInputUrl, setInputWord, setApiContentCheckPending, setApiContentCheckData, setApiContentCheckInvalidUrl, setApiContentCheckRejected, postApiContentCheck} from "bucares/actions/apiActions";

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