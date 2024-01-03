<template>
    <div>
    <div class="float-right pr-1 py-2" v-if=icon_flag v-html="require(`../assets/icons/filler.svg`)">
    </div>
    </div>
</template>

<script>

export default {
    name: 'logo',
    props:[
        'icon_flag'],
  }

</script>

