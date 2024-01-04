<template>
    <div :class="['main-container']">
        <label class="toggle">Button with icon
            <input ref="buttonCheck" type="checkbox" v-model="hasPlusIcon">
            <span class="toggle_checkmark"></span>
        </label>
        <PrimaryButton :has-plus-icon="hasPlusIcon" :toggle-dropdown="toggleDropdown" :is-open="isOpen"></PrimaryButton>
        <Dropdown :has-plus-icon="hasPlusIcon" :is-open="isOpen"></Dropdown>
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
        data() {
           return{
            isMobileDevice: false,
            isOpen: false,
            hasPlusIcon: true,
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

.main-container{
    font-family: Cera PRO;
    width: 100vw;
    height: auto;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    padding: 2vw;
}

.toggle {
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 1rem;
  color: #202020;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.toggle input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.toggle_checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

.toggle:hover input ~ .toggle_checkmark {
  background-color: #ccc;
}

.toggle input:checked ~ .toggle_checkmark {
  background-color: #2196F3;
}

.toggle_checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.toggle input:checked ~ .toggle_checkmark:after {
  display: block;
}

.toggle .toggle_checkmark:after {
  left: 8px;
  top: 4px;
  width: 8px;
  height: 14px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media only screen and (max-width: 720px){
  .main-container{
    height: 100vh;
    justify-content: space-between;
    gap: unset;
    background-color: rgba(160, 160, 171, 0.16);
    padding: 0;
  }
}

@media only screen and (max-width: 720px){
  .toggle{
    display: none;
  }
}
</style>