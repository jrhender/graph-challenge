<template>
  <li>
    <span>{{ node.name }}</span>

    <ul v-if="node.parent && node.parent.length">
      <node v-for="child in node.parent" :node="child" v-bind:key="child.name"></node>
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