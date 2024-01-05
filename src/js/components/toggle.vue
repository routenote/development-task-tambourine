/**
 * A toggle component that displays a checkbox and a label.
 *
 * @prop {Boolean} toggleBoolean - The boolean value to determine the checked state of the checkbox.
 * @prop {String} refName - The name to be displayed as the label.
 *
 * @emits update:toggleBoolean - Event emitted when the checkbox is toggled. It passes the updated boolean value as the payload.
 *
 */
<template>
    <div>
        <input type="checkbox" :checked="toggleBoolean" @change="toggle" >
        <label>{{ refName }}</label>
    </div>
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
