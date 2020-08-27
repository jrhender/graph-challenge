<template>
  <li v-on:click.stop="nodeClicked">
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
  },
  methods: {
    nodeClicked() {
      this.$root.$emit('node clicked', this.node.name, this.node.description)
    }
  }
};
</script>