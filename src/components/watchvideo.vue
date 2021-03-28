<template>
    <v-container class= "pt-4 ml-0 ml-md-8 ">
        <v-row 
        class= "pt-4 d-flex  flex-md-nowrap flex-sm-wrap "
        style=""

        >
            <v-col
            xl= "9"
            lg ="8"
            md= "8"
            sm= "11"
            cols = "12"
            class = "flex-grow-0 flex-shrink-1"
            
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
                    <div class = ' d-inline d-sm-block md-text-caption text-capitalize' >
                            <v-btn plain class="pl-0" > 
                                 {{video.channelname}} 
                                 <v-icon size= "13" class = " ml-1 mr-4"> mdi-checkbox-marked-circle</v-icon>   
                            </v-btn>  
                                
                        
                    </div>
                    <div class = 'd-flex  justify-space-between pt-0 mt-0'>
                        
                        
                        <div class = '  d-inline  text-caption '>
                            {{video.views}} views
                            <div class = '  d-block text-caption '>
                            Premiered - {{video.date}} 
                            </div>
                        </div>
                       
                        <div class = 'd-inline d-flex flex-xs-nowrap' >
                            <v-btn
                            plain
                            color="blue"
                            class= "mr-0"
                            @click = "increaselikes"
                            :x-small="$vuetify.breakpoint.smAndDown" 
                            >
                                <v-icon size= "18" class="mr-1" >mdi-thumb-up </v-icon>{{video.likes}}
                            </v-btn>

                            <v-btn
                            plain
                            color="blue"
                            class= "px-0 ml-0"
                            @click = "increasedislikes"
                            :x-small="$vuetify.breakpoint.smAndDown"
                            >
                                <v-icon size= "18" class = "mr-1 ">mdi-thumb-down</v-icon> {{video.dislikes}}
                            </v-btn>

                            <v-btn
                            
                            plain
                            color="grey"
                            class= "mr-4 px-0"
                            :x-small="$vuetify.breakpoint.smAndDown"
                            >
                                <v-icon >mdi-share</v-icon>
                                Share
                            </v-btn>

                            <v-btn
                            plain
                            color="grey"
                            class = " px-0"
                            :x-small="$vuetify.breakpoint.smAndDown"
                            >
                                <v-icon >mdi-playlist-plus</v-icon>
                                Save
                            </v-btn>
                            
                        </div>
                        
                    
                    </div>
                    
                    <v-divider></v-divider>
                    <v-row
                    
                    style="flex-wrap: nowrap;"
                    >
                        <v-col cols= "1" xl = ""
                        class = "flex-grow-0 flex-shrink-0 "
                        >
                            <div class = "d-inline ml-0 pl-0 ">
                                <v-avatar  class= "ml-0 mt-5 " color ="grey" size= "" >
                                    <v-icon :medium="$vuetify.breakpoint.smAndDown" size = "36 ">
                                        mdi-account-circle
                                    </v-icon>
                                </v-avatar>
                            </div>

                        </v-col >
                        <v-col 
                        cols= "7"
                        sm="8"
                        md= "8"
                        lg= "9"
                        xl = "10" 
                        class = "flex-grow-0 flex-shrink-0 ml-2 mt-5"
                        
                        >
                            <div class ="d-block text-caption text-md-body-2">
                                {{video.channelname}}
                            </div>
                            <div class ="d-block text-caption">
                                sub
                            </div>
                            <div class ="d-block text-caption font-weight-thin">
                                {{video.description}}
                            </div>


                        </v-col>
                        <v-col cols="1" xl = "1" sm= "1" class = "flex-grow-0 flex-shrink-0 mt-5 ">
                            <v-btn :x-small="$vuetify.breakpoint.smAndDown" depressed color= "red accent-4" class= "ml-md-1 ml-4">
                                    SUBSCRIBE
                            </v-btn>

                        </v-col>

                    </v-row>
                    <v-divider></v-divider>
                    <v-row style="flex-wrap: nowrap;" class = "mt-1 ">
                        <v-col  cols = "4" class = "d-flex flex-wrap: nowrap; text-caption text-md-body-1 grey--text flex-grow-0 flex-shrink-0 mt-2">
                            {{comments.length}} Comments
                        </v-col>
                        <v-col cols = "1" class= "mt-2">
                            <v-btn :x-small="$vuetify.breakpoint.smAndDown" plain class="">
                                <v-icon class= "mr-2">
                                    mdi-sort-variant
                                </v-icon>
                                Sort-By
                            </v-btn>
                        </v-col>
                        
                    </v-row>
                    <v-row>
                        <v-col 
                        cols="1" 
                        class = "d-inline ml-0 pl-3 mt-4 ">
                            <v-avatar 
                            class= "ml-0 mt-1" 
                            color ="grey" 
                            size= "32" >
                                <span>
                                    M
                                </span>
                            </v-avatar>
                            
                        </v-col>
                        <v-col class= "ml-2">
                            <v-text-field 
                            :x-small="$vuetify.breakpoint.smAndDown"
                            color = "white"
                            
                            style="font-size:0.8em"
                            placeholder = "Add a Public Comment" 
                            v-model="usercomment"></v-text-field>
                        </v-col>
                                              
                    </v-row>
                    <div class="d-flex justify-end  ">
                        <v-btn
                        :x-small="$vuetify.breakpoint.smAndDown"
                        class ="d-inline" 
                        @click = "cancelComment"
                        plain> Cancel
                        </v-btn>
                        <v-btn 
                        :small="$vuetify.breakpoint.smAndDown"
                        class ="d-inline "
                        color = "blue"
                        
                        v-bind:disabled= "usercomment === ''"
                        @click = "submitComment" >
                            Submit
                        </v-btn>
                    </div>  
                    <v-row
                    v-show ="comments.length > 0"
                    style="flex-wrap: nowrap;"
                    v-for ="comment in comments" :key = "comment.name"
                    >
                   

                    
                        <v-col cols= "1"
                        class = "flex-grow-0 flex-shrink-0"
                        
                        >
                            <div class = "d-inline ml-0 pl-0 ">
                                <v-avatar class= "ml-0 mt-5" color ="grey" size= "32" >
                                    <span>
                                        {{comment.name.charAt(0).toUpperCase()}}
                                    </span>
                                </v-avatar>
                            </div>

                        </v-col >
                        <v-col cols= "9" 
                        style="font-size:0.8em"
                        class = "flex-grow-0 flex-shrink-0 mt-5 ml-2"
                        >
                            <div class ="d-block" style="font-size:1.0em" >
                                {{comment.name.toUpperCase()}}
                                <span class= "text-caption grey--text">
                                    {{comment.time}}
                                </span> 
                            </div>
                            
                            <div class ="d-block">
                                {{comment.comment}}
                            </div>

                            <div class ="d-block ml-0">
                                <v-btn plain :x-small="$vuetify.breakpoint.smAndDown" class= "pl-0" @click = "commentlikes(comment.comment)"> 
                                    <v-icon size= "18" class="mr-1 " >mdi-thumb-up </v-icon>{{comment.likes}}
                                </v-btn>
                                <v-btn plain :x-small="$vuetify.breakpoint.smAndDown">
                                    <v-icon size= "18" class="mr-1"> mdi-thumb-down</v-icon> {{comment.dislikes}}
                                </v-btn>
                                
                            </div>

                            


                        </v-col>
                     
                        

                    </v-row>
                    
                    
                    
                </div>
                
        
            </v-col>
            

            
            <v-col  
            lg= "4"
            xl = "4"
            md= "5" 
            sm= "11"
            xs = "11"
            class ="mt-0 pt-0 ml-md-2 ml-0"
            >
           
                
                    <Chips/>
                    
                        
                    <v-row
                    
                    class= " mt-2  "
                    style="flex-wrap: nowrap;"
                    v-for= "(video, index) in allVideos"
                    :key = "index"
                    >
                        <v-col 
                        class = " flex-grow-0 flex-shrink-0 "
                        md= ""
                        >
                            <v-card class = "ml-2 ">
                                <iframe 
                                width= "150"
                                height= "100"
                                :src="video.link"
                                frameborder="0" 
                                allow="accelerometer; 
                                autoplay; clipboard-write; encrypted-media; 
                                gyroscope; picture-in-picture" 
                                >
                                </iframe>

                            </v-card>
                        

                        </v-col >
                        
                        <v-col  class= " d-flex flex-row"
                        md="8">
                            
                            
                            <div class = " col-10text-truncate ">
                            
                            <div class='d-block mb-0 pb-0 mr-6 '>
                                <div plain class="pl-0   text-subtitle-2 font-weight-normal  d-inline-block" style="cursor: pointer;" role= 'link' @click = "handleSelectItem(video)">{{video.title}}</div>
                            </div>
                            <div class = 'd-block pt-0 mt-0'>
                                <v-btn plain class="pl-0 text-caption text-capitalize " >{{video.channelname}} --- </v-btn>

                            </div>
                            <div class = 'd-block text-caption grey--text'>
                                {{video.views}} views ● {{video.date}}
                            </div>
                            
                            </div>
                            
                            
                        </v-col>
                        

                    </v-row>
                
                
                
            </v-col>
            
        </v-row>
        
    </v-container>
    
</template>

<script>
import {mapGetters} from 'vuex'
import moment from 'moment'
import Chips from '@/components/chips.vue'
export default {
    data() {
        return {
            id: '',
            video:[],
            liked: false,
            disliked: false,
            usercomment:'',
            comments: [],
            time: "",
            
        }
    },
    components: {
        Chips,
    },
    computed: mapGetters(['allVideos']),
    methods: {
        increaselikes(){
            if (this.disliked){
                if(!this.liked){
                this.video.likes = ++this.video.likes
                this.video.dislikes = --this.video.dislikes
                this.liked = true
                this.disliked = false
                return
                } 
               // console.log('hi',this.video)
            } else{
                this.video.likes = ++this.video.likes
                this.liked = true
            
            }

        },
        increasedislikes(){
            if(this.liked){
                if(!this.disliked){
                    this.video.dislikes = ++this.video.dislikes
                    this.video.likes = --this.video.likes
                    this.disliked = true
                    this.liked = false
                } 
            }else {
                    this.video.dislikes = ++this.video.dislikes
                    this.disliked = true
                    this.liked = false
            }
        },
        commentlikes(commenta) {
            let index = this.comments.findIndex(x =>
               x.comment === commenta
            )
            this.comments[index].likes = ++this.comments[index].likes
            console.log("comment", commenta)
            console.log( "comment", index)
           // hi = ""
        },
        submitComment(){
            this.time = moment()
            this.comments.unshift({name:"user 1", comment: this.usercomment, time: moment(this.time, "DDMMYYYY").fromNow(), likes: '', dislikes: ''})
            console.log(this.usercomment, this.comments)
            this.usercomment = ""
        },
        cancelComment(){
            this.usercomment= ""
        }

    },
    mounted (){
        this.id = this.$route.params.id
        console.log('the id is', this.id)
        this.video = this.allVideos.find(videos => {
            console.log(videos.id)
            return videos.id == this.id
        })
        this.allVideos.forEach(function abbreviateNumber(item){
            let o = Intl.NumberFormat('en', { notation: 'compact' });
            
            item.views = o.format(item.views)
        }),
        this.allVideos.forEach(function(item) {
            
            item.date = moment(item.date, "DDMMYYYY").fromNow()
            
        })
        
        console.log('the video', this.video.likes)
    }
    
    
}
</script>