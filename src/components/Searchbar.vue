<template>
<v-row class="mt-4">
    <v-text-field class="input-search"
        placeholder="Search"
        solo
        dense
        background-color="primaryDarker"
    >
    </v-text-field>
    <v-btn depressed height= "40" class="btn-search">
        <v-icon> mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon  >
        <v-icon>mdi-microphone</v-icon>
    </v-btn>

</v-row>
    
</template>
<script>
export default {

    
}
</script>
<style lang="scss" scoped>
.btn-search {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;

}
.input-search {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;

}

</style>
