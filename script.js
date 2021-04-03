// 1

arr = [
    {parent:null,id:0},
    {parent:0,id:1},
    {parent:0,id:2},
    {parent:1,id:3},
    {parent:1,id:4},
    {parent:2,id:5},
    {parent:4,id:6}
]

function treeOfNodes(arr,res = {}, parent = null) {
    for (let node of arr) {
        if (node.parent === parent) {
            res[node.id] = {};
            treeOfNodes(arr,res[node.id], node.id);
        }
    }

    return res;
}

console.log(treeOfNodes(arr),"uuu");

// 2
function printAllSubsets(arr,range, stack = [],res = [],i = 0) {
    if (stack.length === range) {
        res.push([...stack]);
        return res;
    }

    for (; i < arr.length; i++) {
        stack.push(arr[i]);
        printAllSubsets(arr,range,stack,res, i + 1);
        stack.pop();
    }

    return res;
}

console.log(printAllSubsets([1,2],3));

// 3
function ObjMap() {
    
}

ObjMap.prototype.map = function(callback) {
    let res = {};

    for (let key of Object.keys(this)) {
        res[key] = callback(this[key], key, this)
    }

    return res;
}

let obj = new ObjMap();

obj.a = 2;
obj.b = 6;

console.log(obj.map((e,key,o) => o[key] * 3),"lll");






