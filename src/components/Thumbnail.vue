<template>
    <div class = "mx-4">
        <v-row  >
            

            
            <v-col
                
                v-for= "(video, index) in allVideos"
                :key = "index"
                cols = "6"
                md='3' 
                lg='2.5' 
                xl = '2'
                class = "flex-grow-0 flex-shrink-0 pb-0"
                sm3 >
                    <v-sheet
                    color="grey darken-4"
                    class="pa-0 ma-0"
                    v-show = "!loading"
                    >
                <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                height ="280"
                type="image, list-item-two-line"
                ></v-skeleton-loader>
                </v-sheet>
                <v-card 
                max-width= "450" 
                flat
                class= "mt-4"
                color = "transparent"
                v-show = "loading"
                
                >
                <v-responsive>
                    <iframe 
                        width= 100%
                        :src="video.link"
                        frameborder="0" 
                        allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>

                </v-responsive>
                
                
                <v-card-text  >
                    <v-row class="pr-0 text--white" >
                        <div class="font-weight-bold d-inline-block text-truncate link text-grey lighten-5"  contain role= 'link' @click = "handleSelectItem(video)"><v-btn plain class = "px-0 ">{{video.title}}</v-btn></div>
                    </v-row >
                    <v-row>
                        <div class="font-weight-light text-left pl-0 d-inline-block text-truncate"><v-btn plain class="pl-0">{{video.channelname}}</v-btn></div>
                    </v-row>
                    <v-row>
                        <div class="font-weight text-left d-inline-block text-truncate">{{video.views}} views     ●      {{video.date}}</div>
                    </v-row>
                    
                </v-card-text>

                </v-card>

            </v-col>
            
        </v-row>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    
    data() {
     return{
        videos: [
            

        ],
        loading: false

        
        
    }},
    computed: mapGetters(['allVideos']),
    mounted(){
        setTimeout(() => {
            this.setLoadingState(true)
        },3000)
        
    },
    methods: {
        setLoadingState(value) {
            this.loading = value
        },
        handleSelectItem(value) {
            console.log(value.id);
            this.$router.push({ path: `/watch/${value.id}`})
            // you can also handle toggle action here manually to open and close dropdown
        },
    },
    
}
</script>