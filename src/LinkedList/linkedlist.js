var LinkedList = function(){
  this.head = null;
}
var Node = function(val){
  this.value = val;
  this.next = null;
}

LinkedList.prototype.addNode = function(val){
  var head = this.head;
  if(!head){
    this.head = new Node(val);
  } else {
    var currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(val);
  }
}

LinkedList.prototype.remove = function (val){
  var head = this.head;
  var previous = head;
  if(!head){
    return null
  }
  if(head.value === val){
    this.head = head.next;
    head.next = null;
  } else {
    var currentNode = head.next;
    while(currentNode){
      if(currentNode.value === val){
        previous.next = currentNode.next;
        return currentNode;
      } else {
        previous = currentNode;
        currentNode = currentNode.next;
      }
    }
  }
  return null;
}

LinkedList.prototype.contains = function(val){
  var currentNode = this.head;
  if(!currentNode){
    return null;
  } else {
    while(currentNode){
      if(currentNode.value === val){
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
  }
  return false
}

LinkedList.prototype.reverse = function (){
  var currentNode = this.head;
  var list = [];
  var result;
  if(!currentNode){
    return null;
  } else {
    //loop through and push every Node into list
    while(currentNode){
      list.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  //establish new List
  var reversed = new LinkedList();
  //Loop through the remaining list and add to reversed
  for(var i = list.length - 1; i >= 0; i--){
    var nodeVal = list[i].value;
    reversed.addNode(nodeVal);
  }
  return reversed;
}

LinkedList.prototype.hasCycle = function(){
  var slow = this.head;
  var fast = this.head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      return true
    }
    return false
  }
}

//partition a new list around any given node value (smaller values to left & larger to right)
LinkedList.prototype.partition = function(value) {
  var currentNode = this.head;
  var storage = [];
  if(!currentNode){
    return null;
  }
  //push all Nodes to storage Array except for same node value
  while(currentNode){
    if(currentNode.value === value){
      continue;
    } else {
      storage.push(currentNode);
    }
    currentNode = currentNode.next;
  }
  //partition array into left & right
  var left = [];
  var right = [];
  for(var i = 0; i < storage.length; i++){
    if(storage[i].value < value){
      storage[i].next = null;
      left.push(storage[i]);
    }
    if(storage[i].value > value){
      storage[i].next = null;
      right.push(storage[i]);
    }
  }

  //Assemble parts
  var partitioned = new LinkedList();
  //Assemble left side
  if(left.length !== 0){
    for(var i = 0; i < left.length; i++){
      partitioned.addNode(left[i].value);
    }
  }
  //Attach input node value
  partitioned.addNode(value);
  //Assemble right side
  if(right.length !== 0){
    for(var i = 0; i < right.length; i++){
      partitioned.addNode(right[i].value)
    }
  }
  return partitioned
}

var List = new LinkedList();
List.addNode(9);
List.addNode(7);
List.addNode(11);
List.addNode(6);
// console.log(List.head)

var partitioned = List.partition(8) //{ head: { value: 6, next: { value: 7, next: [Object] } } }


var List = new LinkedList();
List.addNode(6);
List.addNode(7);
List.addNode(10);
List.addNode(14);
console.log(List) //{ head: { value: 6, next: { value: 7, next: [Object] } } }

List.contains(7) // { value: 7, next: { value: 10, next: null } }
List.contains(12) // false

var reversed = List.reverse();
console.log(reversed) //{ head: { value: 14, next: { value: 10, next: [Object] } } }

List.remove(10) //{ value: 10, next: { value: 14, next: null } }

console.log(List.head) //{ value: 6, next: { value: 7, next: { value: 14, next: null } } }
