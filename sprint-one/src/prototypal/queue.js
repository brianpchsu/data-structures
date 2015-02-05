var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  storage.position = 0;
  storage.removePosition = 0;
  return storage;

};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.position] = value;
  this.position++;
};

queueMethods.dequeue = function (){
  var result = this[this.removePosition];
  this.removePosition++;
  return result;
};

queueMethods.size = function () {
  return this.position - this.removePosition > 0 ? this.position - this.removePosition : 0;
}







