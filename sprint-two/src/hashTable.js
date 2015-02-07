var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i<this._limit; i++){
      this._storage[i] = [];
  }
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this._storage[i] = [];
  var arrlength = this._storage.storage[i].length;
  //this._storage[i][arrlength] = [k, v];
  this._storage.set([i][arrlength], [k, v]);

  // if (this._storage[i][arrlength] === undefined){
  //   this._storage.set([i][this._storage[i].length], [k, v]);
  // } else {
  //   this._storage.set([i][arrlength], [k, v]);
  //   //console.log("else");
  // }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i)[1] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
