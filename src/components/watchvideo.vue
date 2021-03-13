<template>
    <v-container class= "pt-14">
        <v-row 
        class= "pt-4"
        style="flex-wrap: nowrap;"

        >
            <v-col
            cols ="9"
            class = "flex-grow-0 flex-shrink-0"
            >

                <v-card
                outlined
                tile
                color ="transparent"
                >
                    <iframe 
                        width= 100%  
                        height= 400vh
                        :src= video.link
                        frameborder="0" 
                        allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </v-card>
                <div class='d-block mb-0 pb-0'>
                    <div class='d-block mb-0 mt-4 caption font-italic blue--text pb-0'>
                        # TRENDING
                    </div>
                    <div class='d-block mb-0 pb-0'>
                        <div plain class="pl-0  text-h6 font-weight-normal " style="cursor: pointer;" role= 'link' >{{video.title}}</div>
                    </div>
                    <div class = 'd-flex justify-space-between pt-0 mt-0'>
                        <div class = 'd-inline text-caption text-capitalize' >
                            <v-btn plain class="pl-0 " > 
                                 {{video.channelname}} 
                                 <v-icon size= "13" class = " ml-1 mr-4"> mdi-checkbox-marked-circle</v-icon>   
                            </v-btn>  
                                {{video.views}} views  ●  premiered on - {{video.date}} 
                        
                        </div>
                       
                        <div class = 'd-inline'>
                            <v-btn
                            plain
                            color="blue"
                            class= ""
                            @click = "increaselikes"
                            >
                                <v-icon class="mr-1" >mdi-thumb-up </v-icon>{{video.likes}}
                            </v-btn>

                            <v-btn
                            plain
                            color="blue"
                            class= "mr-8"
                            
                            >
                                <v-icon class = "mr-1 ">mdi-thumb-down</v-icon> {{video.dislikes}}
                            </v-btn>

                            <v-btn
                            icon
                            color="grey"
                            class= "mr-14 "
                            >
                                <v-icon >mdi-share</v-icon>
                                Share
                            </v-btn>

                            <v-btn
                            icon
                            color="grey"
                            class = "mr-4"
                            >
                                <v-icon >mdi-playlist-plus</v-icon>
                                Share
                            </v-btn>
                            
                        </div>
                        
                    
                    </div>
                    
                    <v-divider></v-divider>
                    <v-row
                    style="flex-wrap: nowrap;"
                    >
                        <v-col cols= "1"
                        class = "flex-grow-0 flex-shrink-0"
                        >
                            <div class = "d-inline ml-0 pl-0 ">
                                <v-avatar class= "ml-0 mt-5" color ="grey" size= "48" >
                                    <v-icon size = "48">
                                        mdi-account-circle
                                    </v-icon>
                                </v-avatar>
                            </div>

                        </v-col >
                        <v-col cols= "9" 
                        class = "flex-grow-0 flex-shrink-0 mt-5"
                        >
                            <div class ="d-block">
                                name
                            </div>
                            <div class ="d-block">
                                sub
                            </div>
                            <div class ="d-block">
                                desc
                            </div>


                        </v-col>
                        <v-col cols = "2" class = "flex-grow-0 flex-shrink-0 mt-5">
                            <v-btn depressed color= "red accent-4" class= "ml-1">
                                    SUBSCRIBE
                            </v-btn>

                        </v-col>

                    </v-row>
                    <v-divider></v-divider>
                    <v-row style="flex-wrap: nowrap;" class = "mt-5">
                        <v-col cols = "2" class = " flex-grow-0 flex-shrink mt-2">
                            542 Comments
                        </v-col>
                        <v-col cols = "1">
                            <v-btn plain>
                                <v-icon class= "mr-2">
                                    mdi-sort-variant
                                </v-icon>
                                Sort-By
                            </v-btn>
                        </v-col>
                        
                    </v-row>
                    <v-row
                    style="flex-wrap: nowrap;"
                    >
                        <v-col cols= "1"
                        class = "flex-grow-0 flex-shrink-0"
                        >
                            <div class = "d-inline ml-0 pl-0 ">
                                <v-avatar class= "ml-0 mt-5" color ="grey" size= "32" >
                                    <v-icon  size = "32">
                                        mdi-account-circle
                                    </v-icon>
                                </v-avatar>
                            </div>

                        </v-col >
                        <v-col cols= "9" 
                        class = "flex-grow-0 flex-shrink-0 mt-5"
                        >
                            <div class ="d-block ">
                                name
                            </div>
                            <div class ="d-block">
                                sub
                            </div>
                            <div class ="d-block">
                                comment
                            </div>


                        </v-col>
                        

                    </v-row>
                    
                    
                    
                </div>
                
        
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            id: '',
            video:[],
        }
    },
    computed: mapGetters(['allVideos']),
    methods: {
        increaselikes(){
           this.video.likes = ++this.video.likes
            
            console.log('hi',this.video)

        }
    },
    mounted (){
        this.id = this.$route.params.id
        console.log('the id is', this.id)
        this.video = this.allVideos.find(videos => {
            console.log(videos.id)
            return videos.id == this.id
        })
        console.log('the video', this.video.likes)
    }
    
    
}
</script>