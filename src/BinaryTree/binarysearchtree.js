var BinarySearchTree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(val){
  var root = this.root;
  if(!root) {
    this.root = new BinarySearchTree(val);
  }
  var currentNode = this.root;

  while(currentNode){
    if(val < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = new BinarySearchTree(val)
      } else {
        currentNode = currentNode.left
      }
    } else {
      if(!currentNode.right){
        currentNode.right = new BinarySearchTree(val)
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

BinarySearchTree.prototype.breadthFirstSearch = function(val){
  var root = this.root;
  var queue = [];
  if(!root){
    return null
  }
  queue.push(root);
  while(queue.length !== 0){
    var currentNode = queue.shift();
    if(currentNode.value === val){
      return currentNode;
    }
    else if(currentNode.left){
      queue.push(currentNode.left);
    }
    else if(currentNode.right){
      queue.push(currentNode.right);
    }
  }
  return false
}

BinarySearchTree.prototype.depthFirstSearch = function(val){
  if(this.value === val){
    return this;
  }
  else if(this.left && this.left.value < this.value){
    this.left.DepthFirstSearch(val);
  }
  else if(this.right && this.right.value > this.value){
    this.right.DepthFirstSearch(val)
  } else {
    return false
  }
}
