<template>
  <!------------Responsive design----------->
   <div class="md:w-80 md:h-80 md:bg-gray-mid md:bg-opacity-12">
    <!--Make a flex components, add click event and controls the colour of button -->
      <div class="text-white font-CeraProMedium text-base text-center w-36 h-10 flex flex-row py-1" :class="[ isenable ? 'bg-gray-dark' :'pointer-events-none bg-gray-mid bg-opacity-12 ']" @click="sendCustomEvent()">
          <div v-if=icon class="basis-1/4">
            <!---for button icon colour-------->
          <Fillericon colour="fill-white"> </Fillericon>

          </div>
          <!--------title----->
          <div class="basis-1/2 p-1">
              <a href="#">
                {{ title }} 
              </a>  
        <!-------Rotate the arrow icon------>
          </div>
          <div class="pr-2 pt-2 basis-1/4 " v-if="isOpen">
              <Iconarrow icon_rotate="true" />

          </div>
          <div class="pr-2 pt-3 basis-1/4 " v-else="isOpen">
              <Iconarrow icon_rotate="false" />
          </div>

      </div>

    </div>
 
  </template>
  
<script>

    import Fillericon from './Fillericon.vue'; // SVG icon import component
    import Iconarrow from './Iconarrow.vue'; // SVG icon import component
    import eventBus from './eventBus'; // Event handler to communicate between parent and child component


  export default {
    name: 'Dropbutton', 
    props: ['title','icon', 'isenable'],
    data () {
      return {
        isOpen: false,
      }
    },
    components: {
      Fillericon,
      Iconarrow,
    },
    methods: {  
      sendCustomEvent() {
      // sending the event to Chile Component (List Items)
      this.isOpen = !this.isOpen
      eventBus.$emit('custom-event')
    },
    },
    
}
  </script>
