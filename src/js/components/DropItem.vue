<template>
  <!----for list element and its icon colour------>
    <div class=" font-CeraProRegular text-base text-left flex flex-row">
        <div class="basis-1/6 pl-2 ">
          <Filler_Icon colour="fill-black"> </Filler_Icon>
        </div>
        <div class="basis-1/6 p-1">
          <a :href="link">{{ title }}</a>
        </div>
      </div>
</template>

<script>

import Filler_Icon from './Filler_Icon.vue';

export default {
    name:"DropItem",
    props: ['link', 'title','icon'],
    components:{
      Filler_Icon,
    }
}
</script>
