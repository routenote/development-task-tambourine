<template>
   <div class="space-y-2 w-32">
    <div>
      Icon
    </div>
   <div class="text-white bg-gray-dark font-CeraPro text-base text-center w-36" @click="isOpen = !isOpen">
      <a href="#">
        {{ title }} 
      </a>  
      
    </div>
    <div>
      <img class="float-right pr-1 py-2" src="../assets/icons/icon-arrow.svg" width="15" height="15" alt="">
    </div>
    <transition name="fade" appear>
    <div class=" border-2 font-CeraPro text-base text-left w-64" v-if="isOpen">
      <div v-for="(item, i) in items" :key="i" class=" hover:bg-gray-mid hover:bg-opacity-12 py-2">
            <a :href="item.link">{{ item.title }}</a>
      </div>
    </div>
    </transition> 
    </div>

  </template>
  
  <script>
//<img src="../assets/icons/icon-arrow.svg" width="5" height="5" alt="">
import arrow from '../assets/icons/icon-arrow.svg'

  export default {
    name: 'dropdown',
    props: ['title', 'items'],
    data () {
      return {
        isOpen: false
      }
    },
    components : {
      arrow,
    },
  }
  </script>
  
  <style>
  /*
  nav .menu-item svg {
    width: 10px;
    margin-left: 10px;
  }
  
  nav .menu-item .sub-menu {
    position: absolute;
    background-color: #222;
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease-out;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  */
  </style>