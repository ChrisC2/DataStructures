var BinaryTree = function (val){
  this.value = val;
  this.children = [];
}

BinaryTree.prototype.addChild = function(val){
  var newChild = new BinaryTree(val);
  this.children.push(newChild);
}

BinaryTree.prototype.depthFirstSearch = function(target){
  if(this.value === target){
    return this;
  } else {
    for(var i = 0; i < node.children.length; i++){
      this.children[i].depthFirstSearch(target);
    }
  }
  return null;
}

BinaryTree.prototype.breadthFirstSearch = function(target, root){
  var queue = [];
  if(!root){
    return false
  }
  queue.push(root);

  while(queue.length){
    var currentNode = queue.shift();
    if(currentNode.value === target){
      return currentNode;
    } else if(currentNode.children.length){
      for(var i = 0; i < currentNode.children.length; i++){
        queue.push(currentNode.children[i]);
      }
    }
  }
  return null;
}

BinaryTree.prototype.removeChild = function(target){
  if(this.children.length){
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].value === target){
        var removed = this.children.splice(i, 1);
        return removed
      }
    }
  }
  return null;
}
