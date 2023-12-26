
<template>
    <div class="relative inline-block text-left">
        <div>
            <button @click="toggleDropdown"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="options-menu" aria-haspopup="true" :aria-expanded="showDropdown">
                <span v-if="icon" class="mr-2"><img src="../../assets/option-icon.svg" alt="Option Icon"
                        class="h-5 w-5 fill-black"></span>
                Button
                <svg :class="{ 'rotate-180': !showDropdown }" class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div v-if="showDropdown" class="mt-2 w-100% rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a v-for="option in options" :key="option" href="#"
                    class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center"
                    role="menuitem">
                    <span v-if="icon" class="mr-2"><img src="../../assets/option-icon.svg" alt="Option Icon"
                            class="h-5 w-5 fill-black"></span>
                    <span>{{ option }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'dropdown',
    props: {
        icon: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showDropdown: false,
            options: ['Option', 'Option', 'Option', 'Option', 'Option', 'Option']
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
            console.log('Dropdown toggled:', this.showDropdown);
        }
    }
}
</script>

<style scoped></style>