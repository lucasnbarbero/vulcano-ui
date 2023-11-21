<template>
  <button
    type="button"
    class="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors duration-300"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'VulcanoButton',
  emits: ['handleClick'],
  methods: {
    handleClick() {
      this.$emit('handleClick');
    },
  },
};
</script>
