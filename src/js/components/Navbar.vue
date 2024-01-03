<template>
  
    <div class="flex items-center justify-center">
      <!--to make the button Disabled and to show the button with or without icon-->
     <Dropdown title="Button" :items="services" :icon="true" :isEnable="true"/>     
    </div>
  </template>
  
  <script>
  import Dropdown from './Dropdown.vue';
  
  export default {
    name: 'navbar',
    components: {
      Dropdown
    },
    data () {
      return {
        services: [
          {
            title: 'Option',
            link: '#'
          },
          {
            title: 'Option',
            link:'#'
          },
          {
            title: 'Option',
            link: '#'
          },
          {
            title: 'Option',
            link: '#'
          },
          {
            title: 'Option',
            link: '#'
          }
        ]
      }
    }
  }
  </script>
  