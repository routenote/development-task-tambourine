<template>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M14.4167 8C14.4167 11.5438 11.5438 14.4167 8 14.4167C4.45617 14.4167 1.58333 11.5438 1.58333 8C1.58333 4.45617 4.45617 1.58333 8 1.58333C11.5438 1.58333 14.4167 4.45617 14.4167 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM7.7085 11.5V8.29165H4.5V7.70831H7.7085V4.5H8.29183V7.70831H11.5V8.29165H8.29183V11.5H7.7085Z" 
            :style="{ fill: iconBackgroundColor }"
        />
    </svg>
</template>

<script>
const colors = {
    white: 'var(--white)',
    grey: 'var(--mid-grey)',
}

export default {
    name: 'plus-icon',

    props: {
        status: {
            type: String,
            default: '',
            validator(status) {
              return colors[status] || status === ''
            }
        }
    },

    computed: {
        iconBackgroundColor() {
            return colors[this.status]
        }
    }
}
</script>

<style scoped>
</style>