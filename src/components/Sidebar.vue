<template>
 <v-navigation-drawer class ="scroller" 
 :temporary = "videoIsPlaying"
 :mini-variant.sync = "showFullDrawer"
 dark 
 clipped
 app
 width= "240"
 color= "primary"
 mini-variant-width= "72" >
 <v-list :dense = "showFullDrawer">
     
    <div v-show = "!videoIsPlaying ">
         
        <div   v-for = "youtube in youtubes" :key = "youtube.name">
            <v-list-item link  class = "px-5-5" @click="$router.push({ path: youtube.path })">
                <v-list-item-icon>
                        <v-icon dark color = "subtitle" > {{youtube.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content class = "" v-show = "!showFullDrawer" >
                    <v-list-item-title> {{youtube.name}} </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

        </div>
         
         
        <v-divider v-if = "!showFullDrawer"></v-divider>
        <div v-for = "personal in personals" :key = "personal.name">
            <v-list-item link v-show = "!showFullDrawer" class = "px-5-5">
             <v-list-item-icon>
                 <v-icon dark color = "subtitle"> {{personal.icon}}</v-icon>
             </v-list-item-icon>
             <v-list-item-content>
                 <v-list-item-title> {{personal.name}} </v-list-item-title>
             </v-list-item-content>
         </v-list-item>

        </div>
        <v-divider v-if = "!showFullDrawer"></v-divider>
        <div v-for = "youtubemore in youtubemore" :key = "youtubemore.name">
            <v-list-item link v-show = "!showFullDrawer" class = "px-5-5">
             <v-list-item-icon>
                 <v-icon dark color = "subtitle"> {{youtubemore.icon}}</v-icon>
             </v-list-item-icon>
             <v-list-item-content>
                 <v-list-item-title> {{youtubemore.name}} </v-list-item-title>
             </v-list-item-content>
         </v-list-item>

        </div>
        <v-divider v-if = "!showFullDrawer"></v-divider>
        <div v-for = "functions in functions" :key = "functions.name">
            <v-list-item link v-if = "!showFullDrawer" class = "px-5-5">
             <v-list-item-icon>
                 <v-icon dark color = "subtitle"> {{functions.icon}}</v-icon>
             </v-list-item-icon>
             <v-list-item-content>
                 <v-list-item-title> {{functions.name}} </v-list-item-title>
             </v-list-item-content>
         </v-list-item>

        </div>
         
     </div>
 </v-list>

 </v-navigation-drawer>
    
</template>

<script>
import { mapState } from 'vuex';
export default {
    data (){
        return{
        
        youtubes: [
            {name: "Home", icon: "mdi-home", path: '/'},
            {name: "Trending", icon:"mdi-fire", path: '/trending'},
            {name: "Subscriptions", icon:"mdi-youtube-subscription", path:'/subscriptions'}
        ],
        personals: [
            {name:"Library", icon: "mdi-play-box-multiple"},
            {name: "History", icon: "mdi-history"},
            {name: "Your videos", icon: "mdi-play-box-outline"},
            {name: "Watch Later", icon: "mdi-clock-time-four"},
            {name: "Liked", icon: "mdi-thumb-up"},
            {name: "Show more", icon: "mdi-chevron-down"}
        ],
        youtubemore: [
            {name: "Youtube Premium", icon: "mdi-youtube"},
            {name:"Gaming", icon: "mdi-google-controller"},
            {name: "Live", icon: "mdi-access-point"},
            {name: "Sport", icon:"mdi-trophy"}
        ],
        functions: [
            {name: "Settings", icon: "mdi-cog"},
            {name: "Report History", icon: "mdi-flag"},
            {name:"Help", icon: "mdi-help-circle"},
            {name: "Send feedback", icon: "mdi-message-alert"}
        ]

        
        }
    },
    computed: {
        ...mapState({
            videoIsPlaying: (state) => state.youtube.videoIsPlaying,
            showFullDrawer: (state) => state.youtube.showFullDrawer,
            //showDrawer:(state) => state.youtube.showDrawer
        }),
        showDrawer: {
            get() {
                return this.$store.youtube.showDrawer;
            },
            set(value) {
                this.$store.commit('toggleShowDrawer', value)
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>