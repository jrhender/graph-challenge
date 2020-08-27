<template>
  <div>
    <tree :tree-data="tree"></tree>
  </div>
</template>

<script>
import Tree from "./Tree";

export default {
  data: () => ({
    tree: {
      label: "A cool folder",
      children: [
        {
          label: "A cool sub-folder 1",
          children: [
            { label: "A cool sub-sub-folder 1" },
            { label: "A cool sub-sub-folder 2" }
          ]
        },
        { label: "This one is not that cool" }
      ]
    }
  }),
  components: {
    Tree
  }
};
</script>