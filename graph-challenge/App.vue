<template>
  <div>
    <tree :tree-data="tree"></tree>
    <sidebar :name="name" :description="description" :is-hidden="isHidden"/>
  </div>
</template>

<script>
import Tree from "./Tree";
import Sidebar from "./Sidebar"

export default {
  data: () => ({
    tree: {},
    name: "testName",
    description: "testDescription",
    isHidden: true
  }),
  components: {
    Tree,
    Sidebar
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