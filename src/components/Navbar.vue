
<template>

    <v-app-bar
      class = "justify-space-between "
      app
      color="primary"  dense dark fixed flat
      height = "56"
      width = "100vw" clipped-left 
    >
      <v-app-bar-nav-icon class="mr-2 text--white" @click = "onClick" :x-small="$vuetify.breakpoint.smAndDown" ></v-app-bar-nav-icon>
      <v-col cols=""  >
        <v-btn plain  :x-small="$vuetify.breakpoint.smAndDown" class= "ml-md-15 ml-4 mr-2  text-no-wrap text--white" icon>
        
          <v-icon color= "red">
            mdi-youtube
          </v-icon>
        <span class= "text--white">YouTube</span>
        </v-btn>
      
      
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="6" md="5" xs="6"  class= " d-flex flex-nowrap ml-2 ml-md-0 d-flex flex-nowrap">
        <Searchbar/>
      </v-col>
      
      <v-spacer></v-spacer>
      <v-col class= "d-flex justify-end flex-nowrap mr mr-md-n8" :small="$vuetify.breakpoint.smAndDown" cols="2" xl="2">
        <v-menu
        transition="slide-y-transition"
        bottom
        offset-y
        
      >
          <template v-slot:activator="{ on,attrs }">
            <v-btn
            v-on = "on" 
            v-bind = "attrs" 
            icon :x-small="$vuetify.breakpoint.smAndDown" 
            class= "ml-2" >
              <v-icon>mdi-video-plus</v-icon>
            </v-btn>
          </template>
          <v-list >
            <v-dialog
            v-model="dialog"
            width= '80%'
            
            >
              <template 
              v-slot:activator="{on, attrs}"
              >
                <v-list-item
            
                v-bind="attrs"
                v-on="on"
                link
                :x-small="$vuetify.breakpoint.smAndDown"
                >
                
                  <v-list-item-title style="font-size:0.9em">
                    <v-icon>
                      mdi-youtube
                    </v-icon>
                    Upload Video
                  </v-list-item-title> 
                </v-list-item>
              </template>

              <v-card>
                <v-card-title>
                  <span class="headline">Upload Video</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="videotitle"
                          label="Video Title*"
                          color = "white"
                        required
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="videodesc"
                          label="Video Description*"
                          color = "white"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="videolink"
                          label="Video Link*"
                          color = "white"
                          required
                        ></v-text-field>
                      </v-col>



                    </v-row>
                  </v-container>

                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="grey darken-1"
                    text
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                  color="blue darken-1"
                  text
                  @click="saveVideo"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
       
          </v-list>
        </v-menu>
      
      
      
      <v-btn 
      icon 
      :x-small="$vuetify.breakpoint.smAndDown" 
      class= "ml-2 d-none d-sm-flex"
      v-show="$vuetify.breakpoint.md"
      >
        <v-icon>mdi-dots-grid</v-icon>
      </v-btn>


      <v-btn 
      icon :x-small="$vuetify.breakpoint.smAndDown" class= "ml-2 d-none d-sm-flex">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
            
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon :x-small="$vuetify.breakpoint.smAndDown" 
          v-bind="attrs"
          v-on="on" class="ml-2">
            <v-avatar size="32px">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-btn>
        </template>
      </v-menu>
      </v-col>
    </v-app-bar>

</template>

<script  >

/* 
<v-list>         
  <v-list-item>
    <v-btn @click = "register">
      Sign in with Google

    </v-btn>
  </v-list-item>
</v-list>
  */

import { mapState, mapGetters, mapActions } from "vuex";
import Searchbar from "@/components/Searchbar.vue";
import { v4 as uuid } from "uuid";
import moment from "moment";
//import {GoogleLogin} from 'vue-google-login'
import firebase from "firebase";


export default {
  name: "Navbar",
  components: { Searchbar},
  //showFullDrawer: true,
  data() {
    return {
      dialog: false,
      name: "",
      videotitle: "",
      videodesc: "",
      videolink: "",
      newvideo: "",
    };
  },
  
  computed: {
    //showFullDrawer: true,
    ...mapState({
      showFullDrawer: (state) => {
        state.showFullDrawer;
      },
      showDrawer: (state) => state.showDrawer,
      videoIsPlaying: (state) => state.videoIsPlaying,
    }),
    ...mapGetters(["allVideos", "drawerstate"]),
  },
  methods: {
     onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() 
      console.log(profile)// etc etc
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },

    register(){

      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
            console.log('token',token) // Token
            console.log('user',user) // User that was authenticated
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });

    },

    onClick() {
      this.$store.commit('toggleShowDrawer',!this.drawerstate)
      console.log(this.drawerstate)
        
      
    },

    ...mapActions(["addVideo"]),
    saveVideo() {
      this.newvideo = {
        id: uuid(),
        link: this.videolink,
        title: this.videotitle,
        channelname: "Woli Agba",
        date: moment().format("DD/MM/YYYY"),
        views: 1,
        likes: 1,
        dislikes: 1,
        description: this.videodesc,
        //time: moment(this.time, "DDMMYYYY").fromNow(),
      };

      console.log("hi", this.videolink, this.videotitle, this.videodesc);
      this.addVideo(this.newvideo);
      this.videolink = "";
      this.videotitle = "";
      this.videodesc = "";
      this.dialog = false;
    },
  },
};
</script>

<style>
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style> 
