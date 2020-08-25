Vue.component('node', {
    props: ['node'],
    template: '<li><span>{{ node.name }}</span></li>'
  })

fetch("http://localhost:3000").then(response => {
    console.log(response)})
var app = new Vue({
    el: '#app',
    data: {
      nodes: [
        { name: 'Learn JavaScript' },
        { name: 'Learn Vue' },
        { name: 'Build something awesome' }
      ]
    }
  })

async function getTree() {
    let response = await fetch("http://localhost:3000")
    return response
}