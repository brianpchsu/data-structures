var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var remove = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[remove];
    remove++;
    return result;
  };

  someInstance.size = function(){
    return size - remove > 0 ? size - remove: 0;
  };

  return someInstance;
};
