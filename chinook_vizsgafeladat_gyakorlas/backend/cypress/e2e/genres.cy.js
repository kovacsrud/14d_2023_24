describe('genres végpont teszt', () => {
  it('kategóriák fetchelése', () => {
    cy.request('http://localhost:8000/genres').as('genresfetch');
    cy.get('@genresfetch').then(
      res=>{
        expect(res.status).to.eq(200);
        assert.isArray(res.body,'Genres lista OK');
      }
    );

  })
})