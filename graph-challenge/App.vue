<template>
  <div>
    <tree :tree-data="tree"></tree>
  </div>
</template>

<script>
import Tree from "./Tree";

export default {
  data: () => ({
    tree: {}
  }),
  components: {
    Tree
  },
  created: function () {
    const self = this
    fetch("http://localhost:3000")
    .then(response => response.json())
    .then(body => {
      const tree = JSON.parse(body)
      console.log(tree)
      self.tree = tree
    })
  }
};
</script>