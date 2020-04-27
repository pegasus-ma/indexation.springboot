import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IndexationInput from "bucares/components/indexation/input";
// import App from "bucares";
import { connect } from 'react-redux'
import store from 'bucares/store';
import  ReactTestUtils  from  'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
	const props = {
		store: store,
		changeInputUrl: jest.fn(),
		changeInputWord: jest.fn(),
		clickButtonCheck: jest.fn()
	}

	const enzymeWrapper = mount(<IndexationInput {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe('components', () => {
	describe('IndexationInput', () => {
		it('should render self and subcomponents', () => {
			const { enzymeWrapper } = setup()

			expect(enzymeWrapper.find('div').exists()).toBe(true)
			expect(enzymeWrapper.find('table').exists()).toBe(true)
			expect(enzymeWrapper.find('input').exists()).toBe(true)
			expect(enzymeWrapper.find('button').exists()).toBe(true)

		});
		it('should listen url change', () => {
			const event = {
				// preventDefault() {},
				target: { value: 'the-value' }
			};
			const { props, enzymeWrapper } = setup();
			//expect(props.changeInputUrl).toBeCalledWith('');
			enzymeWrapper.find('input').first().simulate('change', event);
			//expect(props.changeInputUrl).toBeCalledWith('the-value');

		});
		it('should listen word change', () => {
			const event = {
				// preventDefault() {},
				target: { value: 'the-value' }
			};
			const { props, enzymeWrapper } = setup();
			//expect(props.changeInputWord).toBeCalledWith('');
			enzymeWrapper.find('input').at(1).simulate('change', event);
			//expect(props.changeInputWord).toBeCalledWith('the-value');

		})
		;
		it('should listen onClick', () => {
			const event = {
				// preventDefault() {},
				target: { value: 'the-value' }
			};
			const { props, enzymeWrapper } = setup();
			enzymeWrapper.find('button').simulate('click');
			//expect(props.clickButtonCheck).toBeCalledWith();

		})
	})
})