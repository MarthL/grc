import React from 'react'
import Test from './../../src/components/Test';

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Test />)
  })
})