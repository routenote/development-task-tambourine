<template>
  <button @click="toggleDropdown" :class="['button', isOpen ? 'button_clicked' : '']">
    <PlusIcon v-if="hasPlusIcon" status="white"></PlusIcon>
    <p class="button__name">{{ name }}</p>
    <ArrowIcon :isOpen="isOpen"></ArrowIcon>
  </button>
</template>

<script>
import ArrowIcon from './ArrowIcon.vue';
import PlusIcon from './PlusIcon.vue';

export default {
  name: 'primary-button',
  components: {
    ArrowIcon,
    PlusIcon
  },
  props: {
    hasPlusIcon: {
      type: Boolean,
      default: false,
    },
    toggleDropdown: {
      type: Function,
      default: () => { }
    },
    isOpen: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      name: 'Button'
    }
  }
};
</script>

<style scoped>
.button {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: var(--mid-grey);
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button_clicked {
  background-color: var(--dark-grey);
  transition: background-color 0.3s ease;
}

.button:disabled {
  background-color: var(--mid-grey-light);
  cursor: default;
}

.button__name {
  color: var(--white);
  /* font-feature-settings: 'clig' off, 'liga' off; */
  font-family: Cera PRO medium;
}

@media only screen and (max-width: 720px) {
  .button {
    margin: 5vw;
  }
}
</style>