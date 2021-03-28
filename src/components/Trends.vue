<template>
    <v-container class= "">
        <v-row 
        class= "pt-4 d-flex   flex-md-nowrap  flex-sm-wrap"
        v-for= "(video, index) in allVideos"
        :key = "index"
        
        style="flex-wrap: nowrap;"

        >
            <v-col
              lg = "4"
              md ="3.5"
              cols ="5"
              class = "flex-grow-0 flex-shrink-0 pb-0"
              style="max-height: 50%;"
            >

                <v-card
                
                outlined
                tile
                color ="transparent"
                >
                    <iframe 
                        
                        :height ="$vuetify.breakpoint.xs 
                                ? '100px' 
                                : ($vuetify.breakpoint.sm
                                    ? '150px' 
                                    : ($vuetify.breakpoint.md
                                        ? '150px'
                                        : ($vuetify.breakpoint.lg
                                            ? '200px' 
                                            : '200px'
                                        )
                                    )
                                )"
                        width = 100%
                        
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
                class= " pb-0"
                lg = "6"
                md = "6"
                cols="10"
                style="min-width: 50px; max-width: 50%;"
                
            >
                <v-card
                    class="py-2 pt-0 mt-0"
                    outlined
                    tile
                    color= 'transparent'
                    
                >
               
                <div plain class="pl-0 d-block mb-0 pb-0  text-subtitle-2 d-inline-block text-truncate 
                text-md-h6 font-weight-normal flex-md-nowrap  text-no-wrap" style="cursor: pointer;" role= 'link' @click = "handleSelectItem(video)">{{video.title}}</div>
        
                
                <div class = 'd-block pt-0 mt-4 mb-0 pb-0'>
                    <div plain class="pl-0 text-caption  text-capitalize grey--text" role= 'link' >{{video.channelname}} </div>
                    <div plain class="pl-0 text-caption  text-capitalize grey--text" role= 'link' >{{video.views}} views ● {{video.date}}</div>
                    
                </div>
        
                <div class = 'd-block text-caption d-inline-block text-truncate grey--text'>
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
            height: 200
            
            
            
           
        }
    },
    computed:{ 
        ...mapGetters(['allVideos']),
       
        
       
        
    },
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
        },

       

        
        
        
        
    },
    watch: {
        

    }

}
</script>