<template>
    <div class="mt-6">
        <v-divider class = "mx-5"></v-divider>
        <v-chip-group 
        class = "mx-5" 
        mandatory 
        outline
        
        
        >
            <v-chip
            text-color = "white" 
            active-class = "grey lighten-2 grey--text"
            v-for = "category in categories"
            :key = "category">
            {{category}}

            </v-chip>
        </v-chip-group>
        <v-divider class = "mx-5"></v-divider>
    </div>
</template>
<script>
export default {
    data(){
        return {
            categories: [
                'All',
                'Comedy',
                'Vuejs',
                'Arsenal F.C.',
                'Wizkid',
                'BTS',
                'Microsoft',
                'Food',
                'Music',
                'Dance',
                'Skits',
                'Node js',
                'Flutterwave',
                'Paystack',
                'Iphone 12',
                'Unicorn',
                'Afrobeat',
                'Kizz Daniel',
                'Kilofeshe',
                'Coding',
                'Skilashi',
                'Twitter',
                'ClubHouse',

                
            ]
        }
    }
}
</script>