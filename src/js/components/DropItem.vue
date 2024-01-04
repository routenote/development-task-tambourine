<template>
  <!----------list element------------>
<div class=" border-2 w-80 mt-2" v-if="isOpen">
  
      <div v-for="(item, i) in items" :key="i" class="hover:bg-gray-mid hover:bg-opacity-12 py-2 flex flex-row">
        <div class=" font-CeraProRegular text-base text-left flex flex-row">
          <!-----------icon------------->
          <div v-if="icon" class="basis-1/6 pl-2 ">
            <Fillericon colour="fill-black"> </Fillericon>
          </div>
          <div class="basis-1/6 p-1">
            <a :href="item.link">{{ item.title }}</a>
          </div>
      </div>
      </div>
</div>
</template>

<script>
import eventBus from './eventBus.js';
import Fillericon from './Fillericon.vue';

export default {
    name: 'dropitem',
    props: ['title','icon'],
    components:{
      Fillericon,
    },
    data () {
      return {
        isOpen: false,
        items: [
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
    },
    mounted() {
        eventBus.$on('custom-event',() => {
          this.isOpen = !this.isOpen;
          console.log('Custom event is on')});
    },
    beforeDestroy() {
    // removing eventBus listener
    eventBus.$off('custom-event')
  },
}
</script>
