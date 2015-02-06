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
  var childObject = new Tree(input);
  this.children[this.children.length] = childObject;
  childObject['value'] = input;

};

treeMethods.contains = function(target, current, result){
  var result ;
  if (result === undefined){
    result = false;
  }
  else {
    result = false || result;
  }
  var current = current || this;

  if (current['value'] === target){
    result = true;
  }

  if(current.children.length>0){
    for (var i = 0; i<current.children.length; i++){
      console.log(current.children[i]);
      result = this.contains(target, current.children[i], result);
      console.log(result);
    }
  }

  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
