<template>
    <div @click="select" class="option hover:bg-light-grey active:bg-light-grey focus:bg-light-grey flex justify-start gap-2 pl-2 pt-2 pb-2 cursor-pointer">
        <img v-if="icon" src="../../assets/option-icon.svg" alt="option icon" class="text-mid-grey">
        {{ option }}
    </div>
</template>

<script>
export default {
    name: 'Option',
    props: {
        option: {
            type: String,
            required: true
        },
        icon: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        select() {
            this.$emit('select', this.option);
        }
    }
};
</script>