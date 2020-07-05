<template>
<div class="cover-page">
  <picture>
    <img :src="src"/>
  </picture>
  <main>
    <h1>
      {{heading}}
    </h1>
    <p>
      {{name}}
    </p>
  </main>
</div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    heading: {
      type: String,
      default: "test"
    },
    name: {
      type: String,
      default: "Example Name"
    }
  },
}
</script>
<style scoped>
.cover-page{
  width: 100%;
  height: 100%;
  padding: 1in;
  position: relative;
}
picture{
  position: absolute;
  top: 3.5in;
  left: 50%;
  transform: translate(-50%, -50%);
}
picture img{
  width: 3in;
  height: auto;
}
main{
  position: absolute;
  bottom: 2in;
}
</style>