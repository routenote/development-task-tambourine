<template>
    <button class="item-box" >
        <PlusIcon v-if="hasPlusIcon" status="grey"></PlusIcon>
        <p class="item-name">{{ name }}</p>
    </button>
</template>

<script>
    import PlusIcon from './PlusIcon.vue';

    export default {
        name : 'dropdown-item',
        components: {
          PlusIcon
        },
        props: {
            hasPlusIcon: {
                type: Boolean,
                default: true,
            },
            name: {
                type: String,
                default: 'Option'
            }
        },
        data(){
            return{
                itemClicked: false,
            }
        },
        methods: {
            onClick(){
                if(window.innerWidth < 720){
                    this.itemClicked != this.itemClicked;
                }
            }
        }
    };
</script>

<style>
.item-box{
    display: flex;
    width: 100%;
    padding: 8px 12px;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.item-box:hover{
    background-color: rgba(160, 160, 171, 0.12);
}

.item-name{
    color:#202020;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; 
}

@media only screen and (max-width: 720px){
    .item-box:hover{
        background-color: unset;
    }

    .item-box:active{
        background-color: rgba(160, 160, 171, 0.12);
    }
}

</style>