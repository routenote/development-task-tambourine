<script setup>
import { ref } from "vue";

const props = defineProps({
  options: Array,
  containerStyles: String,
  textStyles: String,
  isError: Boolean,
});
</script>

<template>
  <div
    :class="`dropdown-menu ${containerStyles} ${textStyles} ${
      isError && 'error'
    }`"
  >
    <a
      v-for="item in options"
      :key="item.id"
      class="dropdown-options"
      href="#"
      @click="$emit('handleSelect', item.title)"
    >
      <img v-if="item.icon" class="mr-1" :src="item.icon" alt="option icon" />
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>
