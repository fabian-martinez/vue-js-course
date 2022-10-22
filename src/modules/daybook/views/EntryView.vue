<template lang="">
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-ight">{{ year }}, {{ weekDay }}</span>
            </div>
            <div>
                <button class="btn btn-danger mx-2">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary">
                    Subir fotografia
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
             <textarea placeholder="Que sucedio hoy?" v-model="entry.text"></textarea>
        </div>
        <fab icon="fa-save"></fab>
        <img 
        src="https://images.unsplash.com/photo-1666208148881-1de44c9b2631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80" 
        alt="entry-picture"
        class="img-thumbnail"
        >
    </template>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapGetters } from 'vuex'
import getDayMonthYear from '@/modules/daybook/helpers/getDayMonthYear'


export default {
    props:{
        id:{
            type: String,
            require: true,
        }
    },
    computed: {
        ...mapGetters( 'journal', ['getEntryById']  ),
        weekDay(){
            const { weekDay } = getDayMonthYear( this.entry.date )
            return weekDay
        },
        day(){
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month(){
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        year(){
            const { year } = getDayMonthYear( this.entry.date )
            return year
        }
    },
    components:{
        Fab: defineAsyncComponent(() => import(/* webpackChunkName: "daybook" */ '../components/Fab.vue'))
    },
    data() {
        return {
            entry: null
        }
    },
    methods: {
        loadEntry() {
            const entry = this.getEntryById(this.id)
            if (!entry) return this.$router.push({ name: 'no-entry' })
            this.entry = entry
        } 
    },
    created() {
        this.loadEntry()
    },
    watch: {
        id( value, oldValue ){
            this.loadEntry()
        }
    }
}
</script>
<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}
img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.3);
}
</style>