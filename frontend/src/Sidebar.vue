<template>
    <div class="sidebar" :aria-hidden="isHidden">
        <button v-on:click="closeSidebar">X</button>
        <div class="sidebar__content">
            <h2>{{name}}</h2>
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    isHidden: Boolean,
  },
  methods: {
    closeSidebar() {
      this.$emit('closeSidebar');
    },
  },
};
</script>

<style scoped>
button {
  margin: 1em;
}

.sidebar {
  background-color: #f1f1f1;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  min-width: 300px;
}

.sidebar__content {
  margin: 1em;
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
