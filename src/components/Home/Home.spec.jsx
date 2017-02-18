/* eslint-env mocha */

// Dependecies
import React from 'React';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import Home from './Home';

describe('<Home />', () => {
  it('should have the string \'Hello world\' ', () => {
    const wrapper = shallow(<Home />);
    expect(
      wrapper.contains('Hello world'),
    ).to.equal(true);
  });
});
