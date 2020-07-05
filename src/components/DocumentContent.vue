<template>
  <div class="cover-page">
    <h1>{{heading}}</h1>
    <main v-html="html" />
  </div>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
      default: "test"
    },
    html: {
      type: String,
      default: ""
    }
  }
};
</script>
<style scoped>
.cover-page {
  width: 100%;
  height: 100%;
  padding: 0.5in 0.75in 1in;
  position: relative;
}
h1 {
  position: absolute;
}
main {
  position: absolute;
  top: 1.5in;
}
</style>