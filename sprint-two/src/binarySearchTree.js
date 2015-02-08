var BinarySearchTree = function(value){
  var tree = {};
  tree = Node(value);
  tree.storage = [];
  tree.storage[0] = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(value){
    var current = tree;
    var inserted = false;
    while (!inserted){
      if (value < current.value){
        if (current.left ===null){
          current.left = Node(value);
          tree.storage[tree.storage.length] = value;
          inserted = true;
        }
        else {
          current = current.left;
        }
      } else {
        if (current.right ===null){
          current.right = Node(value);
           tree.storage[tree.storage.length] = value;
          inserted = true;
        }
        else {
          current = current.right;
        }
      }
    }
    //compare values with cuurent node
      //if value is smaller than node
          //if node's left is null
            //root's left will be value
          //else if left is not null
            //repeate using the root's left
      //else if value is larger than root
        //if node's right is null
          //root's right will be value
        //else if right is not null
          //repeate using the root's right
  };

  tree.contains = function(value){
    return _.contains(tree.storage, value);
  };

  tree.depthFirstLog = function(func){
    _.each(tree.storage, function(elem){
      func(elem);
    });
  };
  return tree;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
