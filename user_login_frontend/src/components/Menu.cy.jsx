import React from 'react'
import Menu from './Menu'
import { UserProvider } from '../context/UserContext'
import { ImageProvider } from '../context/ImageContext'
import { BrowserRouter } from 'react-router-dom'

describe('<Menu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    <UserProvider>
      <ImageProvider>
        <BrowserRouter>
    cy.mount(<Menu />)
        </BrowserRouter>
    </ImageProvider>
    </UserProvider>
  })
})