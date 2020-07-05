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
  top: 2.5in;
  left: 3.1in;
  width: 4.5in;
}
</style>