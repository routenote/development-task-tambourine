<template>
    <div :class="['dropdown-box', isOpen ? 'dropdown-box__show' : '']">
        <DropdownItem :has-plus-icon="hasPlusIcon"></DropdownItem>
        <DropdownItem :has-plus-icon="hasPlusIcon"></DropdownItem>
        <DropdownItem :has-plus-icon="hasPlusIcon"></DropdownItem>
        <DropdownItem :has-plus-icon="hasPlusIcon"></DropdownItem>
        <DropdownItem :has-plus-icon="hasPlusIcon"></DropdownItem>
    </div>
</template>

<script>
    import DropdownItem from './DropdownItem.vue';

    export default {
        name : 'dropdown',
        components: {
          DropdownItem
        },
        props: {
            isOpen: {
                type: Boolean,
                default: false,
            },
            hasPlusIcon: {
                type: Boolean,
                default: true,
            },
        }
    };
</script>

<style>
.dropdown-box{
    display: none;
    width: 14.6vw;
    min-width: 280px;
    max-width: 400px;
    height: fit-content;
    padding: 16px 0 14px 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
    border-radius: 2px;
    border: 2px solid  #AEAEBA;
    background-color:  #ffffff;
}

.dropdown-box__show{
    display: flex;
}

@media only screen and (max-width: 720px){
  .dropdown-box{
    width: 100vw;
    max-width: unset;
    min-width: unset;
    border: none;
    border-top: 2px solid  #AEAEBA;
  }
}

</style>