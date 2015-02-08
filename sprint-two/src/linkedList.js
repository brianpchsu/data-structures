var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var currentEnd = {};

  list.addToTail = function(value){

    var newNode = Treenode(value);

    //Empty condition
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
      currentEnd = newNode;
    } else {
      currentEnd.next= newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;

  };

  list.contains = function(target){
    var result = false;
    var current = list.head;
    while (current !==null) {
      console.log(current);
      if (current["value"] === target) {
        result = true;
      }
      current = current.next;
    }
    return result;
  };


  return list;
};

var Treenode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
