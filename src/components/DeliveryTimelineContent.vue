<template>
<div class="container">
  <main>
    <slot/>
  </main>
</div>
</template>
<script>
export default {
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
  left: 50%; 
  width: 6in;
  transform: translateX(-50%);
  background-color: white;
  padding: .4in .65in;
}
</style>