<template>
  
    <div class="flex items-center justify-center">
     <Dropdown title="Button" :items="services" :icon_flag="true" :isEnable="true"/>     
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
  