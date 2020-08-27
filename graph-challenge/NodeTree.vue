<template>
  <li class="node-tree">
    <span class="label">{{ node.name }}</span>

    <ul v-if="node.parent && node.parent.length">
      <node v-for="child in node.parent" :node="child" v-bind:key="child.label"></node>
    </ul>
  </li>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object
  }
};
</script>