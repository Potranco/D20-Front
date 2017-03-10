
  
window.onload=function(event) {
  mocha.setup('bdd');
  window.expect = chai.expect;
  
  describe('Load class User', function () {
      describe('Init', function () {
          it('Create class', function () {
            expect(typeof user).to.equal('object');
          })
      })
      
      describe('Config', function () {
          it('Create events', function () {
            expect(typeof user.events).to.equal('object');
          })
          it('Create is login', function () {
            expect(typeof user.events.isLogin).to.equal('function');
          })
          it('Create on Load User', function () {
            expect(typeof user.events.onLoadUser).to.equal('function');
          })
          it('Create on new user', function () {
            expect(typeof user.events.onNewUser).to.equal('function');
          })
          it('Create on Load Campaigns', function () {
            expect(typeof user.events.onLoadCampaigns).to.equal('function');
          })
          it('Create on Load Chars', function () {
            expect(typeof user.events.onLoadChars).to.equal('function');
          })
          
      })
  })


  mocha.run();

};



