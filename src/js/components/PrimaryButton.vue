<template>
    <button @click="toggleDropdown" :class="['button-box', this.isOpen ? 'button-box__clicked' : '']">
        <PlusIcon v-if="this.option" status="white"></PlusIcon>
        <p class="button-name">{{ name }}</p>
        <ArrowIcon :isOpen="this.isOpen"></ArrowIcon>
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
            option: {
                type: Boolean,
                default: true,
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

<style scoped>
.button-box{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: var(--mid-grey);
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-box__clicked{
  background-color: var(--dark-grey); 
  transition: background-color 0.3s ease;
}

.button-box:disabled{
  background-color: var(--mid-grey-light);
  cursor: not-allowed;
}

.button-name{
  color: var(--white);
  /* font-feature-settings: 'clig' off, 'liga' off; */
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
}

</style>