function removeNodes(listHead, x) {
    // Write your code here
    if(x == 0){ return listHead.next }
    var newNode = listHead
    for(var i = 1; i <= x; i++){ newNode = newNode.next }
    newNode.next = newNode.next.next
    return listHead
}