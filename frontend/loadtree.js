Vue.component('node', {
    props: ['node'],
    template: `<li class="node-tree">
                <span class="label">{{ node.name }}</span>

                <ul v-if="node.parent && node.parent.length">
                  <node v-for="child in node.parent" :node="child"></node>
                </ul>
              </li>`
  })

fetch("http://localhost:3000")
  .then(response => response.json())
  .then(body => {
    console.log(body)
    var app = new Vue({
        el: '#app',
        data: {
          nodes: body
        }
      })
  })