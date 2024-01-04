<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  containerStyles: String,
  textStyles: String,
  leftIcon: String,
  rightIcon: String,
  isDisabled: Boolean,
  isError: Boolean,
});
</script>

<template>
  <button
    type="button"
    :class="`custom-btn ${containerStyles} ${textStyles} ${isError && 'error'}`"
    @click="$emit('handleClick')"
    :disabled="isDisabled"
  >
    <img v-if="leftIcon" class="w-4 h-4 mr-2" :src="leftIcon" alt="left icon" />
    <span class="flex-1">{{ title }}</span>
    <img
      v-if="rightIcon"
      class="w-4 h-4 ml-2"
      :src="rightIcon"
      alt="right icon"
    />
  </button>
</template>
