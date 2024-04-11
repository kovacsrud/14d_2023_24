describe('új kategória felvitel teszt', () => {
  it('új kategória felvitel', () => {
    cy.request({
      method:'POST',
      url:'http://localhost:8000/genres',
      body:{name:"Teszt kategória"}
    }).as('tesztreq')
    cy.get('@tesztreq').then(
      res=>{
        expect(res.status).to.eq(201);
        expect(res.body).has.property('message','Beszúrás rendben');
      }
    )
  })
})