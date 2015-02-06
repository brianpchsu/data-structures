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
  childObject["value"] = input;
  console.log(this.children);

};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
