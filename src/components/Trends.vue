<template>
    <v-container class= "pt-14">
        <v-row 
        class= "pt-4"
        v-for= "(video, index) in allVideos"
        :key = "index"
        
        style="flex-wrap: nowrap;"

        >
            <v-col
              cols ="3.5"
              class = "flex-grow-0 flex-shrink-0"
            >

                <v-card
                outlined
                tile
                color ="transparent"
                >
                    <iframe 
                        :src="video.link"
                        frameborder="0" 
                        allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </v-card>
            
            </v-col>

            <v-col
                cols="6"
                style="min-width: 50px; max-width: 50%;"
                
            >
                <v-card
                    class="py-2 pt-0 mt-0"
                    outlined
                    tile
                    color= 'transparent'
                    
                >
                <div class='d-block mb-0 pb-0'>
                    <div plain class="pl-0  text-subtitle font-weight-normal " style="cursor: pointer;" role= 'link' @click = "handleSelectItem(video)">{{video.title}}</div>
                    
                    

                </div>
                <div class = 'd-block pt-0 mt-0'>
                    <v-btn plain class="pl-0 text-caption text-capitalize" >{{video.channelname}} --- {{video.views}} views ● {{video.date}}</v-btn>
                    
                </div>
                <div class = 'd-block text-caption grey--text'>
                        {{video.description}}
                </div>
                </v-card>
            </v-col> 

        
        
        </v-row>
        
        
    </v-container>
    
</template>
<script>
import {mapGetters} from 'vuex'
import moment from 'moment'
export default {
    data() {
        return{
            videos: [
                

            ],
        }
    },
    computed: mapGetters(['allVideos']),
    mounted(){
        this.allVideos.sort(function(a,b){
            
            return b.views - a.views
        }),
        this.allVideos.forEach(function abbreviateNumber(item){
            let o = Intl.NumberFormat('en', { notation: 'compact' });
            
            item.views = o.format(item.views)
        }),
        this.allVideos.forEach(function(item) {
            item.date = moment(item.date, "DDMMYYYY").fromNow()
            
        })
        
        
        
    },
    methods: {
     handleSelectItem(value) {
       console.log(value.id);
       this.$router.push({ path: `/watch/${value.id}`})
       // you can also handle toggle action here manually to open and close dropdown
    },
        saysomething: function () {
            console.log('hiiii')
        }
    }

}
</script>