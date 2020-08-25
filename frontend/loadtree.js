Vue.component('node', {
    props: ['node'],
    template: '<li><span>{{ node.name }}</span></li>'
  })

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