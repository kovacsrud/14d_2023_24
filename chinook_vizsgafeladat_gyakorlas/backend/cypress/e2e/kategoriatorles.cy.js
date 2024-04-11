describe('Kategória törlés teszt', () => {
  it('Kategória törlés', () => {
    cy.request({
      method:'DELETE',
      url:'http://localhost:8000/genres/47'
    }).as('delreq');
    cy.get('@delreq').then(
      res=>{
        expect(res.status).to.eq(200);
        expect(res.body).has.property('message','Nincs ilyen Id');
      }
    )

  })
})