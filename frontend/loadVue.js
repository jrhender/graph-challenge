Vue.component('todo-item', {
    props: ['node']
    template: `<div class="tree">
                    <ul class="tree-list">
                    <node-tree :node="treeData"></node-tree>
                    </ul>
               </div>`
  })

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})