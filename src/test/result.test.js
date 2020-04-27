import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IndexationResult from "bucares/components/indexation/result";
// import App from "bucares";
import { connect } from 'react-redux'
import store from 'bucares/store';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
	const props = {
		store: store
	}

	const enzymeWrapper = mount(<IndexationResult {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe('components', () => {
	describe('IndexationResult', () => {
		it('should render self and subcomponents', () => {
			const { enzymeWrapper } = setup()

			expect(enzymeWrapper.find('div').exists()).toBe(true)
			expect(enzymeWrapper.find('p').exists()).toBe(true)

		})
	})
})