
  
window.onload=function(event) {
  mocha.setup('bdd');
  window.expect = chai.expect;
  
  

  describe('Load', function () {
       describe('Load validateFormHTML5', function () {
          it('Create class validate', function () {
            console.log(typeof validate);
            expect(typeof validate).to.equal('object');
          })
      })
  })


  mocha.run();

};



