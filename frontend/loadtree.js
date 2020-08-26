fetch("http://localhost:3000")
  .then(response => response.json())
  .then(body => {
    const tree = JSON.parse(body)
    console.log(tree)
    createNode(tree, "root")
  })

setupCloseSidebar()

function createNode(node, parentID) {
  // add node
  const newLi = document.createElement("li");
  newLi.onclick = (event) => {
    event.stopPropagation()
    setSidebarVisibility(false)
    setSidebarText(node.description)
  }
  const newSpan = document.createElement("span");
  newLi.appendChild(newSpan);

  const nodeName = document.createTextNode(node.name);
  newSpan.appendChild(nodeName);

  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById(parentID);
  currentDiv.appendChild(newLi);

  // recurse through tree
  if (node.parent) {
    const newUL = document.createElement("ul");
    newUL.setAttribute("id", node.name)
    newLi.appendChild(newUL);
    node.parent.forEach(child => createNode(child, node.name))
  }
}

function setSidebarText(text) {
  document.getElementById("sidebar_text").textContent = text;
}

function setSidebarVisibility(isHidden) {
  const sidebarElement = document.getElementById("sidebar1");
  if (sidebarElement) {
    sidebarElement.setAttribute('aria-hidden', isHidden);
  }
}

function setupCloseSidebar() {
  const closeSideBarButton = document.getElementById("sidebar_close");
  closeSideBarButton.onclick = () => setSidebarVisibility(true)
}