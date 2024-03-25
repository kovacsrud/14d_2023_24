import React from 'react'
import Image from './Image'
import { UserProvider } from '../context/UserContext'
import { ImageProvider } from '../context/ImageContext'

let image={
  path:"utvonal",
  _id:1,
  imageName:"valami.jpg"
}

describe('<Image />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    <UserProvider>
      <ImageProvider>
    cy.mount(<Image path={image.path} imagename={image.imageName} imageid={image._id} />)
    </ImageProvider>
    </UserProvider>
    
  })
})