<template lang="">
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-ight">{{ year }}, {{ weekDay }}</span>
            </div>
            <div>
                <button v-if="entry.id" class="btn btn-danger mx-2" @click="onDeleteEntry">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <input type="file" 
                    @change="onSelectedImage" 
                    ref="imageSelector"
                    v-show="false"
                    accept="image/png image/jgp"
                    >
                <button class="btn btn-primary" @click="onSelectImage">
                    Subir fotografia
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75">
             <textarea placeholder="Que sucedio hoy?" v-model="entry.text"></textarea>
        </div>
        <fab icon="fa-save" @on:click="saveEntry"></fab>
        <img v-if="entry.picture && !localImage"
        :src="entry.picture" 
        alt="entry-picture"
        class="img-thumbnail"
        >
        <img v-if="localImage"
        :src="localImage" 
        alt=''
        class="img-thumbnail"
        >
    </template>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

import getDayMonthYear from '@/modules/daybook/helpers/getDayMonthYear'
import uploadImages from '@/modules/daybook/helpers/uploadImages'


export default {
    name: 'EntryView',
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
            entry: null,
            localImage: null,
            file: null,
        }
    },
    methods: {
        ...mapActions( 'journal', ['updateEntry', 'createEntry', 'deleteEntry'] ),
        loadEntry() {
            let entry
            if (this.id === 'new'){
                entry = {
                    date: new Date().toString(),
                    text: ''
                }
            }else{
                entry = this.getEntryById(this.id)
                if (!entry) return this.$router.push({ name: 'no-entry' })
            }
            this.entry = entry
            this.localImage = null
            this.file = null
        },
        async saveEntry() {
            new Swal({
                title: 'Espere porfavor',
                allowOutsideClick:true
            })
            Swal.showLoading()
            this.entry.picture = await uploadImages(this.file)
            if ( this.entry.id ) {
                this.updateEntry(this.entry)
            } else {
                const id = await this.createEntry(this.entry)
                this.$router.push({ name: 'entry', params:{ id }})
            }
            Swal.fire('Guardado','Entrada registrada exitosamente','success')
        },
        async onDeleteEntry() {
            const { isConfirmed } = await Swal.fire({
                title:'¿Esta seguro de borrar esta entrada?',
                text: 'Una vez borrada no se puede recuperar',
                showDenyButton:true,
                confirmButtonText:'Si, estoy seguro'
            })
            if (!isConfirmed) return 
            Swal.fire({
                title: 'Espere porfavor',
                allowOutsideClick:true
            })
            Swal.showLoading()

            const id = await this.deleteEntry(this.entry.id)
            console.log(`La entrada ${id} fue eliminada`);
            this.$router.push({ name:'no-entry'})
            this.file = null
            Swal.fire('Eliminacion exitos','Entrada registrada exitosamente','success')  
        },
        onSelectedImage($event){
            const file = $event.target.files[0]
            if(!file){
                this.localImage = null
                this.file = null
                return
            }
            this.file = file
            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL(file)  
        },
        onSelectImage(){
            this.$refs.imageSelector.click();
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