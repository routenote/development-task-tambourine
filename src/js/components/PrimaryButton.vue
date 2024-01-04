<template>
    <button @click="toggleDropdown" :class="['button-box', isOpen ? 'button-box__clicked' : '']">
        <PlusIcon v-if="hasPlusIcon" status="white"></PlusIcon>
        <p class="button-name">{{ name }}</p>
        <ArrowIcon :isOpen="isOpen"></ArrowIcon>
    </button>
</template>

<script>
    import ArrowIcon from './ArrowIcon.vue';
    import PlusIcon from './PlusIcon.vue';

    export default {
        name : 'primary-button',
        components: {
          ArrowIcon,
          PlusIcon
        },
        props: {
            hasPlusIcon: {
                type: Boolean,
                default: false,
            },
            toggleDropdown: {
                type: Function,
                default: () => {}
            },
            isOpen: {
              type: Boolean,
              default: false,
            }
        },
        data() {
            return {
                name: 'Button'
            }
        }
    };
</script>

<style>
:root{
    --mid-grey: var(#AEAEBA);
    --mid-grey-light: var(rgba(160, 160, 171, 0.16));
    --white: var(#ffffff);
    --dark-grey: var(#9898A3);
    --charcoal: var(#202020);
}
.button-box{
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #AEAEBA;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

@media only screen and (max-width: 720px){
  .button-box{
    margin: 5vw;
  }
}

.button-box__clicked{
  background-color: #9898A3; 
  transition: background-color 0.3s ease;
}

.button-box:disabled{
  background-color: rgba(160, 160, 171, 0.16);
  cursor: not-allowed;
}

.button-name{
  color: #ffffff;
  /* font-feature-settings: 'clig' off, 'liga' off; */
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
}

</style>