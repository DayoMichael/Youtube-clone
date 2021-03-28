<template>
  <v-app dark>
    <Navbar/>
    <Sidebar/>

    <v-main class= "pl-18">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  

  components: {
    Navbar,
    Sidebar
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
::-webkit-scrollbar{
  width: 7px !important;
}

::-webkit-scrollbar-track {
  background: #202020 !important;
}

::-webkit-scrollbar-thumb {
  background: #383838 !important;
  border-radius: 3px !important
}
</style>