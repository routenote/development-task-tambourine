<template>
    <div>
        <input type="checkbox" :checked="toggleBoolean" @change="toggle" >
        <label>{{ refName }}</label>
    </div>
</template>
</template>

<script>
export default {
    props: {
        toggleBoolean: {
            type: Boolean,
            required: true
        },
        refName: {
            type: String,
            required: true
        }
    },
    methods: {
        toggle() {
            this.$emit('update:toggleBoolean', !this.toggleBoolean);
        }
    }
}
</script>
