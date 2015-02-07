var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined){
    bucket = [];
    bucket.push([k, v]);
    this._storage.set(i, bucket);
  } else {
    bucket.push([k, v]);
    //this._storage.set(i, bucket);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result;
  for (var j = 0; j < (_.size(bucket)); j++) {
    if (bucket[j][0] === k) {
      result = bucket[j][1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < (_.size(bucket)); j++) {
    if (bucket[j][0] === k) {
      bucket[j][1] = null;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
