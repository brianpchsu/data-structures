var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.position = 0;
};

Stack.prototype.push = function (value) {
  this[this.position] = value;
  this.position++;
};

Stack.prototype.pop = function () {
  this.position && this.position--;
  var result = this[this.position];
  delete this[this.position];
  return result;
};

Stack.prototype.size = function () {
  return this.position;
};



