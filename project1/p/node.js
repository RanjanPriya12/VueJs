// class node{
//     constructor(){
//         this.root=root;
//     }
//     insert(data);
//     depth(root);
//     isRoot(node);
//     children(node);
//     root();
// }

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }

    insert(data);
}

function insert(data){
    var newNode=new Node(data);
    if(this.root){
        this.root=newNode;
    }
    else{
        this.insertNode(this.root, newNode);
    }
}

function insertNode(node, newNode){
    if(newNode.data<node>data){
        if(node.left===null){
            node.left=newNode;
        }
        else{
            this.insertNode(node.left,newNode);
        }
    }
    else{
        if(node.right===null){
            node.right=newNode;
        }else{
            this.insertNode(node.right,newNode);
        }
    }
}


var node=new Node();
node.insert(1);
console.log(node);