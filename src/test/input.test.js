import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IndexationInput from "bucares/components/indexation/input";
// import App from "bucares";
import { connect } from 'react-redux'
import store from 'bucares/store';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
	const props = {
		store: store
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

		})
	})
})