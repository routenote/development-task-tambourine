/**
 * Dropdown component for displaying a button that toggles a dropdown menu.
 *
 * @description The Dropdown component displays a button that, when clicked, toggles a dropdown menu. The dropdown menu contains a list of options that can be selected.
 *
 * @prop {boolean} iconRef - A boolean value that controls whether to show an icon in the button or not.
 * @prop {boolean} error - A boolean value that controls whether to show an error/disabled button or not.
 * @prop {Array} options - An array of options to be displayed in the dropdown menu.
 *
 * @event select - Emitted when an option is selected from the dropdown menu. Returns the selected option and its index.
 **/

<template>
    <div class="relative inline-block text-left">
        <button @click="toggleDropdown" :disabled="error" :class="{ 'bg-disabled': error }"
            class="btn bg-mid-grey flex justify-between items-center pt-2 pb-2 pl-3 pr-3 text-white gap-3 rounded-sm cursor-pointer w-auto h-10 mw">
            <img v-if="iconRef" src="../../assets/option-icon-white.svg" alt="button icon" class="w-4 h-4 ">
            Button
            <img src="../../assets/arrow.svg" alt="arrow" class="w-4 h-4"
                :style="{ transform: showDropdown ? 'rotate(180deg)' : '' }">
        </button>
        <div v-if="showDropdown"
            class="fixed bottom-0 left-0 w-full md:absolute md:top-full md:bottom-auto md:translate-y-2 md:left-0 md:w-72 pt-3 pb-3 bg-white z-1 border-t-2 md:border-2 border-solid border-mid-grey rounded-sm">
            <Option v-for="(option, index) in options" :key="index" :option="option" :icon="iconRef"
                @select="selectOption(option, index)" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Option from './option.vue';

export default {
    name: 'Dropdown',
    components: {
        Option
    },
    setup() {
        const iconRef = ref(true); // boolean to control whether to show icon or not
        const error = ref(false); // boolean to control whether to show error button or not

        return {
            iconRef,
            error
        };
    },
    data() {
        return {
            showDropdown: false,
            options: ['Option', 'Option', 'Option', 'Option', 'Option', 'Option']
        };
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        selectOption(option, index) {
            this.showDropdown = false;
            console.log(`You selected ${option} at index ${index}`);
        }
    }
};
</script>