<template>
    <div :class="{'dropdown-background' : isDropdownVisible}" >
  <div class="dropdown" v-if="isDropdownVisible">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item" v-for="(option, index) in options" :key="index">
        <img v-if="viewIcon" :src="fillerSvgUrl" alt="filler-svg" />  {{ option }}
        </a>
    </div>
  </div>
  </div>
</template>

<script>
const pageList = ["Option", "Option", "Option", "Option", "Option"];
export default {
  name: "PageList",
  props: {
    isDropdownVisible: Boolean,
    viewIcon: Boolean,
    buttonDisabled: Boolean
  },
  data() {
    return {
      buttonText: "Button",
      options: pageList,
      fillerSvgUrl: "/filler-grey.svg",
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../css/tailwind";
</style>
