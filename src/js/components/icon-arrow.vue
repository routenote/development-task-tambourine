<template>    
    <div>
    <div class=" fill-white w-3 h-3" :class="[icon_rotate == 'true'?'rotate-180':'']" v-html="require('../assets/icons/icon-arrow.svg')">
    </div>

</div>

</template>

<script>

export default {

    name: 'icon_arrow',
    props: ['icon_rotate'],
   
}

</script>