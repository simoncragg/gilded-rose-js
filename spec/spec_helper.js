var given = function(description, callback) {
  describe('GIVEN '.concat(description), callback);
};

var and = function(description, callback) {
  describe('AND '.concat(description), callback);
};

var when = function(description, callback) {
  describe('WHEN '.concat(description), callback);
};

var then = function(description, callback) {
  it('THEN '.concat(description), callback);
};
