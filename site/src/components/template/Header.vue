<template>
  <header class="header">
    <button class="toggle" @click="toggleMenu" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </button>
    <h1 class="title">
      {{title}}
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    hideToggle: Boolean,
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible ? `fa-times` : `fa-bars`
    }
  }
}
</script>

<style>
  .header {
    grid-area: header;
    background-image: var(--linear-blue);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 1.5rem;
    color: var(--color-white);
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
  }

  .toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--color-white);
    width: 60px;
    height: 100%;
    outline: none;
    transition: 0.5s ease;
  }

  .toggle:hover {
    background-color: var(--color-black-rgba);
  }
</style>