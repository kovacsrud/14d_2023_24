describe('User login kezdőlap tesztek', () => {

  beforeEach('Oldal betöltés',()=>{
    cy.visit('http://localhost:5173')
  })

  it('Main komponens címsor 1 szöveg teszt',()=>{
    cy.get('h1').should('contains.text','User Login')
  })

  it('Menü Főoldal menüpont teszt',()=>{
    cy.get('a.text-white').should('have.text','Főoldal')
  })

  it('Menü Login menüpont teszt',()=>{
    cy.get('ul.flex > li:nth-child(2) > a:nth-child(1)').should('have.text','Login')
  })
  
  it('Menü Register menüpont teszt', () => {             
    cy.get('ul.flex > li:nth-child(3) > a:nth-child(1)').should('have.text','Register')
  })

  it('Menü logó megjelenik',()=>{
    cy.get('a.flex').find('img').should('be.visible')
  })

  it('User Login felirat a menüben',()=>{
    cy.get('a.flex').find('span').should('have.text','User Login')
  })

  it('Start gomb a main oldalon',()=>{
    cy.get('.bg-yellow-400').should('have.text','Start')
  })

  it('Háttérkép látszik',()=>{
    cy.get('.object-cover').should('be.visible')
  })

  it('Háttérkép alt szöveg',()=>{
    cy.get('.object-cover').should('have.attr','alt','Background Image')
  })

})