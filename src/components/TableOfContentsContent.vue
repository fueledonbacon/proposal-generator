<template>
<div class="container">
  <main>
    <ol>
      <li v-for="(item, index) in pages" :key="index">
        {{item}}
      </li>
    </ol>
  </main>
</div>
</template>
<script>
export default {
  props: {
    pages: {
      type: Array,
      default(){
        return [
          'Example 1',
          'Example 2',
          'Example 3'
        ]
      } 
    }
  },
}
</script>
<style scoped>
.container{
  width: 100%;
  height: 100%;
  padding: 1in;
  position: relative;
}
main{
  position: absolute;
  top: 3in;
  left: 2in;
}
</style>