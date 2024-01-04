<script setup>
import { ref, watchEffect } from "vue";
import CustomButton from "./CustomButton.vue";
import DropdownMenu from "./DropdownMenu.vue";

const isOpen = ref(false);
const isDisabled = ref(false);
const selectedId = ref(null);
const options = ref([
  {
    id: 0,
    title: "Option 1",
    icon: "/assets/icons/leading-icon.svg",
  },
  {
    id: 1,
    title: "Option 2",
    icon: "/assets/icons/leading-icon.svg",
  },
  {
    id: 2,
    title: "Option 3",
    icon: "/assets/icons/leading-icon.svg",
  },
  {
    id: 3,
    title: "Option 4",
    icon: "/assets/icons/leading-icon.svg",
  },
  {
    id: 4,
    title: "Option 5",
    icon: "/assets/icons/leading-icon.svg",
  },
]);

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};

const setSelectedId = (id) => {
  selectedId.value = id;
  toggleIsOpen();
};

const closeDropdownOnClickOutside = (event) => {
  if (!event.target.closest(".dropdown")) {
    isOpen.value = false;
  }
};

watchEffect(() => {
  window.addEventListener("click", closeDropdownOnClickOutside);

  return () => {
    window.removeEventListener("click", closeDropdownOnClickOutside);
  };
});
</script>

<template>
  <div class="dropdown">
    <CustomButton
      :isDisabled="isDisabled"
      :title="selectedId != null ? options[selectedId].title : 'Button'"
      :containerStyles="`${isDisabled && 'bg-grey-200'} rounded-sm bg-grey-400`"
      textStyles="font-cerapro font-medium text-base text-white"
      leftIcon="/assets/icons/filler.svg"
      :rightIcon="
        isOpen
          ? '/assets/icons/icon-arrow-reverse.svg'
          : '/assets/icons/icon-arrow.svg'
      "
      @handleClick="toggleIsOpen"
    />
    <div
      v-if="isOpen"
      class="absolute inset-0 bg-grey-300 md:hidden"
      @click="toggleIsOpen"
    />
    <DropdownMenu
      v-if="isOpen"
      :options="options"
      containerStyles="bg-white border-t-2 border-grey-400 fixed left-0 right-0 bottom-0 md:relative md:mt-2 md:w-[280px] md:border-2 md:rounded-sm"
      textStyles="font-cerapro font-normal text-base text-charcoal"
      @handleSelect="setSelectedId"
    />
  </div>
</template>
