<script setup>
import { ref } from "vue";

const props = defineProps({
  options: Array,
  containerStyles: String,
  textStyles: String,
});
</script>

<template>
  <div :class="['dropdown-menu', containerStyles, textStyles]">
    <a
      v-for="item in options"
      :key="item.id"
      class="dropdown-options"
      href="#"
      @click="$emit('handleSelect', item.id)"
    >
      <img v-if="item.icon" class="mr-1" :src="item.icon" alt="option icon" />
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>
