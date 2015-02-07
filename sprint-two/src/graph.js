var Graph = function(){
  this.nodes = [];
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[this.nodes.length] = node;
};

Graph.prototype.contains = function(node){
  return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[_.indexOf(this.nodes, node)];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this.edges[fromNode], toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.edges[fromNode] === undefined){
    this.edges[fromNode] = [];
  }
  this.edges[fromNode][this.edges[fromNode].length] = toNode;

  if (this.edges[toNode] === undefined){
    this.edges[toNode] = [];
  }
  this.edges[toNode][this.edges[toNode].length] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.edges[fromNode][_.indexOf(this.edges[fromNode], toNode)];
};

Graph.prototype.forEachNode = function(cb){
  return _.each(this.nodes, function(elem){
    cb(elem);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */



