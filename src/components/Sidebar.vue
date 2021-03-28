<template>
 <v-navigation-drawer class ="scroller" 
 app
 :mini-variant.sync = "drawerstate"
 dark
 :permanent = $vuetify.breakpoint.smAndUp
 clipped
 hide-overlay
 v-model="drawerstate"

 :width= "$vuetify.breakpoint.xs 
            ? '100px' 
            : ($vuetify.breakpoint.sm
                ? '19%' 
                : ($vuetify.breakpoint.md
                    ? '15%'
                    : ($vuetify.breakpoint.lg
                        ? '12%' 
                        :($vuetify.breakpoint.xl
                        ? '12%'
                        : '200px'
                        )
                        
                    )
                )
            )"
 color= "primary"
 :mini-variant-width= "$vuetify.breakpoint.xs 
            ? '18%' 
            : ($vuetify.breakpoint.sm
                ? '15%' 
                : ($vuetify.breakpoint.md
                    ? '7%'
                    : ($vuetify.breakpoint.lg
                        ? '5%' 
                        :($vuetify.breakpoint.xl
                        ? '4%'
                        : '200px'
                        )
                        
                    )
                )
            )" >
 <v-list :dense = "drawerstate">
     
    <div class= "mt-10 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 pt-0 ">
         
        <div   v-for = "youtube in youtubes" :key = "youtube.name">
            <v-divider v-if = "drawerstate" :x-small="$vuetify.breakpoint.smAndDown" ></v-divider>
            <v-list-item link  class = "my-md-2 my-4" @click="$router.push({ path: youtube.path })">
                <v-list-item-icon class="mr-sm-2">
                        <v-icon :small="$vuetify.breakpoint.smAndDown "  dark color = "subtitle" >{{youtube.icon}} </v-icon>
                </v-list-item-icon>
                
                <v-list-item-content  v-show = "!drawerstate" >
                    <v-list-item-title class = "text-caption"> {{youtube.name}} </v-list-item-title>
                </v-list-item-content>

            </v-list-item>
            <v-divider v-if = "drawerstate"></v-divider>
        </div>
         
         
        <v-divider v-if = "!drawerstate"></v-divider>
        <div v-for = "personal in personals" :key = "personal.name">
            <v-list-item link v-show = "!drawerstate" class = "px-5-5">
             <v-list-item-icon class="mr-sm-2">
                 <v-icon dark color = "subtitle"> {{personal.icon}}</v-icon>
             </v-list-item-icon>
             <v-list-item-content>
                 <v-list-item-title class = "text-caption"> {{personal.name}} </v-list-item-title>
             </v-list-item-content>
         </v-list-item>

        </div>
        <v-divider v-if = "!drawerstate"></v-divider>
        <div v-for = "youtubemore in youtubemore" :key = "youtubemore.name">
            <v-list-item link v-show = "!drawerstate" class = "px-5-5">
             <v-list-item-icon class="mr-sm-2">
                 <v-icon dark color = "subtitle"> {{youtubemore.icon}}</v-icon>
             </v-list-item-icon >
             <v-list-item-content>
                 <v-list-item-title class = "text-caption"> {{youtubemore.name}} </v-list-item-title>
             </v-list-item-content>
         </v-list-item>

        </div>
        <v-divider v-if = "!drawerstate"></v-divider>
        <div v-for = "functions in functions" :key = "functions.name">
            <v-list-item link v-if = "!drawerstate" class = "px-5-5">
             <v-list-item-icon>
                 <v-icon dark color = "subtitle"> {{functions.icon}}</v-icon>
             </v-list-item-icon>
             <v-list-item-content class="mr-sm-2">
                 <v-list-item-title class = "text-caption"> {{functions.name}} </v-list-item-title>
             </v-list-item-content>
         </v-list-item>

        </div>
         
     </div>
 </v-list>

 </v-navigation-drawer>
    
</template>

<script>
import { mapState, mapGetters } from 'vuex';
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
        },
        ...mapGetters(["allVideos", "drawerstate"]),
    },
    methods: {
        onClick(){
            this.$store.commit('toggleShowDrawer',!this.drawerstate)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>