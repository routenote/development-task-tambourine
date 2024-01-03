<template>
    <div class=" font-CeraProRegular text-base text-left flex flex-row">
        <div class="basis-1/6 pl-2 ">
          <fillerB v-bind:icon_flag="icon_flag"></fillerB>
        </div>
        <div class="basis-1/6 p-1">
          <a :href="link">{{ title }}</a>
        </div>
      </div>
</template>

<script>

import fillerB from './fillerB.vue';

export default {
    name:"DropItem",
    props: ['link', 'title','icon_flag'],
    components:{
        fillerB,
    }
}
</script>
