describe('bejelentkezés teszt', () => {

  beforeEach('Oldal betöltés',()=>{
    cy.visit('http://localhost:5173')
    
  })
  it('Login menüpont kattintás teszt', () => {
    cy.get('ul.flex > li:nth-child(2) > a:nth-child(1)').should('have.text','Login').click()
    cy.get('#username').type('user1')
    cy.get('#password').type('titok_23')
    cy.get('.bg-blue-500').click()
    
  })
  
})