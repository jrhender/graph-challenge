<template>
    <div class="sidebar" aria-label="sidebar with node information"
        :aria-hidden="isHidden">
        <button v-on:click="closeSidebar">X</button>
        <div class="sidebar__content">
            <span>{{name}}</span>
            <span>{{description}}</span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    isHidden: Boolean
  },
  methods: {
    closeSidebar() {
      this.$emit('closeSidebar')
    }
  }
};
</script>

<style>
.sidebar {
    background-color: #f1f1f1;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    min-width: 300px;
  }
  .sidebar__content {
    padding: 8px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

/* SIDEBAR HIDDEN STATE */
.sidebar[aria-hidden="true"] {
    transition: 200ms;
    transform: translateX(100%);
}

/* SIDEBAR VISIBLE STATE */
.sidebar:not([aria-hidden]),
.sidebar[aria-hidden="false"] {
    transition: 200ms;
    transform: translateX(0);
}
</style>