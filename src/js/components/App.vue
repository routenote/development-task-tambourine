<script setup>
import { ref } from "vue";
import Dropdown from "./Dropdown.vue";
import { options, optionsWithoutTags } from "../data.js";

const disable = ref(true);
const error = ref(true);

/** 
Usage of Dropdown component:
  <Dropdown
    btnIcon="imageURL"
    :options="[{option1}, {option2}, ...]"
    :isDisabled="Boolean"
    :isError="Boolean"
  />
**/
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <p>Button with default text input</p>
      <Dropdown :options="options" />
    </div>

    <div>
      <p>Button and page list with icon</p>
      <Dropdown btnIcon="/assets/icons/filler.svg" :options="options" />
    </div>

    <div>
      <p>Button with icon, page list without icon</p>
      <Dropdown
        btnIcon="/assets/icons/filler.svg"
        :options="optionsWithoutTags"
      />
    </div>

    <div>
      <p>Button with disable state</p>
      <Dropdown :isDisabled="disable" />
    </div>

    <div>
      <p>Button with error state</p>
      <Dropdown :isError="error" />
    </div>

    <div>
      <p>Dropdown button is using a reusable custom-button component</p>
      <custom-button
        title="Custom Button"
        containerStyles="bg-blue-400 rounded-lg hover:bg-blue-500 active:bg-blue-600"
        textStyles="text-white"
      />
    </div>
  </div>
</template>
