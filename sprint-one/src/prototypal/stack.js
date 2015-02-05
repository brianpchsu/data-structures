var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.position =0;
  return storage;
};



var stackMethods = {};

stackMethods.push = function(value){
  this[this.position] = value;
  this.position++;
};

stackMethods.pop = function(){
  this.position && this.position--;
  var result = this[this.position];
  delete this[this.position];
  return result;
};

stackMethods.size = function(){
  return this.position;
};

