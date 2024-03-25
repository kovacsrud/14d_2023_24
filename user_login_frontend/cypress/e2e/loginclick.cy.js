describe('Navigáció a login oldalra', () => {

  beforeEach('Oldal betöltés',()=>{
    cy.visit('http://localhost:5173')
    
  })
  it('Login menüpont kattintás teszt', () => {
    cy.get('ul.flex > li:nth-child(2) > a:nth-child(1)').should('have.text','Login').click()
    cy.get('.text-2xl').should('have.text','User Login')
    cy.get('p.text-gray-700').should('have.text','Kérjük lépjen be.')
  })
})