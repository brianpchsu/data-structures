var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);


  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(input){
  var childObject = {value: null};
  this.children[this.children.length] = childObject;
  childObject['value'] = input;
};

treeMethods.contains = function(target){
  var result = false;
  for (var i = 0; i<this.children.length; i++){
    if (this.children[i]['value'] ===target){
      result = true;
    }
  }
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
