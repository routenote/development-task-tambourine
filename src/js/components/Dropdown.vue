<template>
    <div>

    </div>
</template>

<script>
    import PlusIcon from './PlusIcon.vue';

    export default {
        name : 'dropdown',
        components: {
          PlusIcon
        },
        props: {
            isOpen: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {
                name: 'Button',
                isOpen: false,
            }
        },
        methods: {
            toggleDropdown(){
                this.isOpen = !this.isOpen;
            }
        }
    };
</script>

<style>


</style>