<template>
    <svg :class="this.isOpen ? 'arrow-up' : 'arrow-down'" width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_103_927)">
            <path fill="white" fill-rule="evenodd" clip-rule="evenodd"
                d="M8.37832 3.52545L15.1349 10.1921L14.1984 11.1412L7.91644 4.94283L1.80793 11.1349L0.85874 10.1985L7.43549 3.53181C7.55967 3.40593 7.72877 3.33454 7.90559 3.33335C8.0824 3.33216 8.25245 3.40126 8.37832 3.52545Z" />
        </g>
        <defs>
            <clipPath id="clip0_103_927">
                <rect fill="white" width="16" height="16" />
            </clipPath>
        </defs>
    </svg>
</template>

<script>
export default {
    name: 'arrow-icon',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.arrow-down {
    transform: rotate(180deg);
    transition: all 0.3s ease;
}

.arrow-up {
    transform: rotate(0deg);
    transition: all 0.3s ease;
}
</style>