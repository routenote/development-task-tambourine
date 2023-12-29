<template>
    <div class="relative inline-block text-left">
        <button @click="toggleDropdown"
            class="bg-mid-grey flex justify-between items-center pt-2 pb-2 pl-3 pr-3 text-white gap-3 rounded-sm cursor-pointer w-auto">
            <img v-if="iconRef" src="../../assets/option-icon-white.svg" alt="button icon"
                class="w-4 h-4 ">
            Button
            <img src="../../assets/arrow.svg" alt="arrow" class="w-4 h-4"
                :style="{ transform: showDropdown ? 'rotate(180deg)' : '' }">
        </button>
        <div v-if="showDropdown" class="absolute top-full bottom-auto translate-y-2 left-0 w-72 bg-white z-1 border-2 border-solid border-mid-grey rounded-sm">
            <Option v-for="(option, index) in options" :key="index" :option="option" :icon="iconRef"
                @select="selectOption" />
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

        return {
            iconRef
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
        selectOption(option) {
            this.showDropdown = false;
        }
    }
};
</script>