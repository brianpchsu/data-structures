// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.position =0;
  _.extend(storage, Stack.stackMethods);
  return storage;
};



Stack.stackMethods = {};

Stack.stackMethods.push = function(value){
  console.log(this);
  this[this.position] = value;
  this.position++;
};

Stack.stackMethods.pop = function(){
  this.position && this.position--;
  var result = this[this.position];
  delete this[this.position];
  return result;
};

Stack.stackMethods.size = function(){
  return this.position;
};


