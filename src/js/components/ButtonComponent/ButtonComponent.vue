<template>
  <button class="dropdown-button" :class="{'disabled':buttonDisabled,'z-50':isDropdownVisible}" :disabled="buttonDisabled">
    <img v-if="viewIcon" class="button-svg"  :src="fillerSvgUrl" alt="filler-svg" />
    Button
    <img class="button-svg" :class="{ 'rotate-svg': isDropdownVisible }" :src="arrowSvgUrl" alt="arrow-svg" />
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    isDropdownVisible: Boolean,
    viewIcon: Boolean,
    buttonDisabled: Boolean
  },
  data() {
    return {
      fillerSvgUrl: "/filler.svg",
      arrowSvgUrl: "/icon-arrow.svg",
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../../css/tailwind';
</style>

