<template>
   <div>
    <div class="text-white font-CeraProMedium text-base text-center w-36 h-10 flex flex-row py-1" :class="[ isEnable ? 'bg-gray-dark' :'pointer-events-none bg-gray-mid bg-opacity-12 ']" @click="isOpen = !isOpen">
      <div v-if=icon class="basis-1/4">
      <Filler_Icon colour="fill-white"> </Filler_Icon>
    
      </div>
      <div class="basis-1/2 p-1">
          <a href="#">
            {{ title }} 
          </a>  
     
      </div>
      <div class="border-1  pr-2 pt-2 basis-1/4 " v-if="isOpen">
          <icon_arrow icon_rotate="true" />

      </div>
      <div class="border-1 pr-2 pt-3 basis-1/4 " v-else="isOpen">
          <icon_arrow icon_rotate="false" />
  
      </div>

    </div>
    <transition name="fade" appear>
    <div class=" border-2 w-64" v-if="isOpen">
      <div v-for="(item, i) in items" :key="i" class="hover:bg-gray-mid hover:bg-opacity-12 py-2 flex flex-row">
        <DropItem :link="item.link" :title="item.title" v-bind:icon="icon"></DropItem>
      </div>
    </div>
    </transition> 
    </div>

  </template>
  
  <script>

import Filler_Icon from './Filler_Icon.vue';
import icon_arrow from './icon-arrow.vue';
import DropItem from './DropItem.vue';


  export default {
    name: 'dropdown', 
    props: ['title', 'items','icon', 'isEnable'],
    data () {
      return {
        isOpen: false,
        isEnable: true,
      }
    },
    components: {
      Filler_Icon,
      icon_arrow,
      DropItem,
    },
}
  </script>
  
  <style>
  
  </style>