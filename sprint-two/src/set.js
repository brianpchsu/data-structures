var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this.storage[this.storage.length] = item;
};

setPrototype.contains = function(item){
  return _.contains(this.storage, item);
};

setPrototype.remove = function(item){
  delete this.storage[_.indexOf(this.storage, item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
