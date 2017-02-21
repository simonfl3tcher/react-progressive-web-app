/* eslint-env mocha */

// Dependecies
import React from 'React';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should have the string \'404 - not found :(\' ', () => {
    const wrapper = shallow(<NotFound />);
    expect(
      wrapper.contains('404 - not found :('),
    ).to.equal(true);
  });
});
