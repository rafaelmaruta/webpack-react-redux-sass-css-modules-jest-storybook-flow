'use strict'

import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Main from './'
import React from 'react'
import Store from 'Store';

chai.use(chaiEnzyme())

const jExpect = global.expect

const main = (
  <Main store={Store} />
)

const wrapper = shallow(main);

describe('Main should:', () => {

  it('match shapshot', () => { jExpect(wrapper).toMatchSnapshot(); })

  describe('sum', () => {
    it('1 + 1 = 2', () => {
      expect(1 + 1).to.be.equal(2);
    })
  })
})