<template>
    <div class="pl-1 py-2"  v-if=icon_flag v-html="require(`../assets/icons/filler_b.svg`)"></div>
</template>

<script>

export default {
    name: 'fillerB',
    props: ['icon_flag'],
}
//"float-right pr-1 py-2"
</script>