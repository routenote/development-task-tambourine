<template>
    <div class="float-right pr-1 py-2" :class= "colour" v-html="require(`../assets/icons/filler.svg`)">
    </div>
</template>

<script>

export default {
    name: 'Fillericon',
    props: ['colour'],
  }

</script>

