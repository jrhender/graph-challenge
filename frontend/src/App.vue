<template>
  <div>
    <tree :tree-data="tree" :selectedNode="selectedNode"></tree>
    <sidebar v-on:closeSidebar="hideSidebar"
      :name="name" :description="description"
      :is-hidden="isHidden"/>
  </div>
</template>

<script>
import Tree from './Tree.vue';
import Sidebar from './Sidebar.vue';

export default {
  data: () => ({
    tree: {},
    name: 'testName',
    description: 'testDescription',
    selectedNode: '',
    isHidden: true,
  }),
  components: {
    Tree,
    Sidebar,
  },
  async created() {
    const response = await fetch('http://localhost:3000');
    const body = await response.json();
    const tree = JSON.parse(body);
    this.tree = tree;
  },
  mounted() {
    this.$root.$on('node clicked', (name, description) => {
      this.name = name;
      this.description = description;
      this.selectedNode = name;
      this.isHidden = false;
    });
  },
  methods: {
    hideSidebar() {
      this.isHidden = true;
      this.selectedNode = '';
    },
  },
};
</script>
