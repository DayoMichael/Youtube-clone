<template>
 <div class="mt-6">
   <Chips/>
   <Thumbnail />
 </div>
</template>

<script>
// @ is an alias to /src
import Chips from '@/components/chips.vue'
import Thumbnail from '@/components/Thumbnail.vue'

export default {
  name: 'Home',
  components: {
    Chips,
    Thumbnail
  }
}
</script>
