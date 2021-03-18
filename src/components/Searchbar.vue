<template>
<v-row class="mt-4">
    <v-col class= "d-flex flex-nowrap"
    style="size:0.6em">

    
    <v-text-field class="input-search"

        placeholder="Search"
        solo
        dense
        height ="0.2em"
        style="font-size:0.6em"
        v-model="search"
        background-color="primaryDarker"
    >
    </v-text-field>
    <v-btn :icon ="$vuetify.breakpoint.smAndDown" :x-small="$vuetify.breakpoint.smAndDown" depressed height= "40" class="btn-search" @click = "searchItem">
        <v-icon> mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon :x-small="$vuetify.breakpoint.smAndDown" height= "40">
        <v-icon>mdi-microphone</v-icon>
    </v-btn>
    </v-col>

</v-row>
    
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            search: ''
            
        }
    },
    computed: mapGetters(['allVideos']),
    methods: {
        searchItem(){
            let video = this.allVideos.find(x =>
               x.channelname == this.search
               
            )
            let index = video.id
            console.log("index",index)
            
            
            this.search = ''
            this.$router.push(  `/watch/${index}`)

        }

    },
    watch: { $route(to, from) { // react to route changes... 
    if(to !== from){ location.reload(); } } }

    
}
</script>
<style lang="scss" scoped>
.btn-search {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;

}
.input-search {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;

}

</style>
