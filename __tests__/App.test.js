import React from 'react';
import { shallow } from 'enzyme';
import App from './src/App';

it("Renders the App without failure.", function () {
  expect( wrapper.find(".App-header").exists()).toBe(true)
})
