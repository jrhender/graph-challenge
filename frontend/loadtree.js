fetch("http://localhost:3000")
  .then(response => response.json())
  .then(body => {
    const tree = JSON.parse(body)
    console.log(tree)
    createNode(tree, "root")
  })

function createNode(node, parentID) {
  // add node
  const newDiv = document.createElement("li"); 
  const newSpan = document.createElement("span"); 
  newDiv.appendChild(newSpan);  
  
  const nodeName = document.createTextNode(node.name); 
  newSpan.appendChild(nodeName);  
  
  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById(parentID); 
  currentDiv.appendChild(newDiv);

  // recurse through tree
  if (node.parent != null) {
    const newUL = document.createElement("ul");
    newUL.setAttribute("id", node.name)
    newDiv.appendChild(newUL);
    node.parent.forEach (child => createNode(child, node.name))
  }
}