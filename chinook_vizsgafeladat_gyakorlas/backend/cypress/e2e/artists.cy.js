describe('artists végpont teszt', () => {
  it('adatok fetchelése', () => {
    cy.request('http://localhost:8000/artists').as('artistsfetch');
    cy.get('@artistsfetch').then(
      res=>{
        expect(res.status).to.eq(200);
        assert.isArray(res.body,'Tömb/lista Ok');
      }
    )
  })
})