'use strict'

import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme';
import Main from './'
import React from 'react'
import Store from 'Store'
import { shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme())

const jExpect = global.expect

const main = (
  <Main store={Store} />
)

const wrapper = shallow(main)

describe('Main should:', () => {
  it('match shapshot', () => { jExpect(wrapper).toMatchSnapshot() })

  describe('sum', () => {
    it('1 + 1 = 2', () => {
      expect(1 + 1).to.be.equal(2)
    })
  })
})
