var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var removePosition = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[removePosition];
    removePosition++;
    return result;
  };

  someInstance.size = function(){
    return size - removePosition > 0 ? size - removePosition: 0;
  };

  return someInstance;
};
