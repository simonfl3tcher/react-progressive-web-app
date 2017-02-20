/* eslint-env mocha */

// Dependecies
import React from 'React';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import About from './About';

describe('<About />', () => {
  it('should have the string \'About React PWA\' ', () => {
    const wrapper = shallow(<About />);
    expect(
      wrapper.contains('About React PWA'),
    ).to.equal(true);
  });
});
