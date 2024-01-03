<template>
    <div :class="['container', isMobile ? 'container__mobile' : '']">
        <PrimaryButton></PrimaryButton>
        <Dropdown></Dropdown>
    </div>
</template>

<script>
    import PrimaryButton from './PrimaryButton.vue';
    import Dropdown from './Dropdown.vue';

    export default {
        name : 'main-container',
        components: {
          PrimaryButton,
          Dropdown
        },
        methods: {
            isMobile() {
                if(window.innerWidth < 720 ) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
    };
</script>

<style>

.container{
    width: 100%;
    height: auto;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
}

.container__mobile{
    height: 100%;
    justify-content: space-between;
    gap: unset;
    background-color: var(--mid-grey-light);
}

</style>