/* eslint-env mocha */

// Dependecies
import React from 'React';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import Home from './Home';

describe('<Home />', () => {
  it('should have the string \'Welcome to React PWA\' ', () => {
    const wrapper = shallow(<Home />);
    expect(
      wrapper.contains('Welcome to React PWA'),
    ).to.equal(true);
  });
});
