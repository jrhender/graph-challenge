fetch("http://localhost:3000")
  .then(response => response.json())
  .then(body => {
    const tree = JSON.parse(body)
    console.log(tree)
    createNode(tree, "root")
  })

setupToggleSidebar()
    
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
    node.parent.forEach(child => createNode(child, node.name))
  }
}

function setupToggleSidebar() {
  // Catch all the `[data-toggle-sidebar]` elements on the document.
  document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
    // Add an event listener on those elements "click" event
    toggle.addEventListener('click', e => {
      // get the sidebar ID from the current element data attribute
      const sidebarID = toggle.dataset.toggleSidebar;
      // check if there is an element on the doc with the id
      const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
      // if there is a sidebar with the passed id (data-toggle-sidebar)
      if (sidebarElement) {
        // toggle the aria-hidden state of the given sidebar
        let sidebarState = sidebarElement.getAttribute('aria-hidden');
        sidebarElement.setAttribute('aria-hidden', sidebarState == 'true' ? false : true);
      }
    });
  });
}