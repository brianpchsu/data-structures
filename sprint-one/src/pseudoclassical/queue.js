var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.position = 0;
  this.removePosition = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.position] = value;
  this.position++;
}

Queue.prototype.dequeue = function(){
  var result = this[this.removePosition];
  this.removePosition++;
  return result;
}

Queue.prototype.size = function(){
  return this.position - this.removePosition>0? this.position - this.removePosition : 0;
}

