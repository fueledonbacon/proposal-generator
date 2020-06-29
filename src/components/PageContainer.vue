<template>
  <div class="proposal-page" :style='{backgroundImage: src}'>
    <slot/>
  </div>
</template>
<script>
export default {
   props: {
       src: {
           type: String,
           default: ''
       }
   } 
}
</script>
<style scoped>
.proposal-page{
    background-size: cover;
    height: 11in;
    width: 8.5in;
}
</style>
