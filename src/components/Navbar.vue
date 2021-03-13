
<template>
  <div>
    <v-app-bar
      color="primary"  dense dark fixed flat
      height = "56" clipped-left app
    >
      <v-app-bar-nav-icon @click = "onClick"></v-app-bar-nav-icon>
      <v-btn class= "ml-15" icon>
        <img src = "https://img.icons8.com/fluent/48/000000/youtube-play.png">
        Youtube
      </v-btn>

      <v-spacer></v-spacer>
      <Searchbar/>
       
      <v-spacer></v-spacer>

      <v-btn icon class= "ml-2">
        <v-icon>mdi-video-plus</v-icon>
      </v-btn>

      <v-btn icon class= "ml-2">
        <v-icon>mdi-dots-grid</v-icon>
      </v-btn>


      <v-btn icon class= "ml-2">
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon class = "ml-2">
        <v-avatar size="32px">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      </v-btn>

      <v-menu
        left
        bottom
      >
      

      </v-menu>
    </v-app-bar>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import Searchbar from '@/components/Searchbar.vue'
  export default {
    name: 'Navbar',
    components: {Searchbar},
    //showFullDrawer: true,
    data (){
      return{
        
      } 
     
    },
    computed: {
        //showFullDrawer: true,
       ...mapState({
        showFullDrawer: (state) => {state.showFullDrawer },
        showDrawer: (state) => (state.showDrawer),
        videoIsPlaying: (state) => (state.videoIsPlaying )
      }),

      
    },
    methods: {
      onClick(){
        console.log('menu clicked')
        if(this.videoIsPlaying){
          this.$store.commit('toggleShowDrawer', !this.showDrawer);
        } else {
          this.$store.commit('toggleShowFullDrawer', !this.showFullDrawer)
          console.log('showfulldrawer')
        }
      }
    }

  
  }
</script>
