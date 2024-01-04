<script setup>
import { ref, watchEffect } from "vue";
import CustomButton from "./CustomButton.vue";
import DropdownMenu from "./DropdownMenu.vue";

const props = defineProps({
  btnIcon: String,
  options: Array,
  isDisabled: Boolean,
  isError: Boolean,
});

const isOpen = ref(false);
const selectedOption = ref("Button");

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};

const setSelectedOption = (title) => {
  selectedOption.value = title;
  toggleIsOpen();
};
</script>

<template>
  <div class="relative">
    <CustomButton
      :title="selectedOption"
      :containerStyles="`${
        isDisabled ? 'bg-grey-200' : 'bg-grey-400'
      } rounded-sm`"
      textStyles="font-cerapro font-medium text-base text-white"
      :leftIcon="btnIcon"
      :rightIcon="
        isOpen
          ? '/assets/icons/icon-arrow-reverse.svg'
          : '/assets/icons/icon-arrow.svg'
      "
      :isDisabled="isDisabled"
      :isError="isError"
      @handleClick="toggleIsOpen"
    />

    <div
      v-if="isOpen"
      class="fixed inset-0 bg-grey-300 md:bg-transparent z-50"
      @click="toggleIsOpen"
    />

    <DropdownMenu
      v-if="isOpen"
      :options="options"
      containerStyles="bg-white border-t-2 border-grey-400 fixed left-0 right-0 bottom-0 md:absolute md:inset-auto md:mt-2 md:w-[280px] md:border-2 md:rounded-sm z-50"
      textStyles="font-cerapro font-normal text-base text-charcoal"
      @handleSelect="setSelectedOption"
    />
  </div>
</template>
