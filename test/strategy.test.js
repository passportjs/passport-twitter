var chai = require('chai')
  , TwitterStrategy = require('../lib/strategy');


describe('Strategy', function() {
  
  describe('constructed', function() {
    var strategy = new TwitterStrategy({
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      }, function(){});
    
    it('should be named twitter', function() {
      expect(strategy.name).to.equal('twitter');
    });
  })
  
  describe('constructed with undefined options', function() {
    it('should throw', function() {
      expect(function() {
        var strategy = new TwitterStrategy(undefined, function(){});
      }).to.throw(Error);
    });
  })
});
