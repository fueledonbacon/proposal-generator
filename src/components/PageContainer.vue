<template>
  <div class="proposal-page" :style="{ backgroundImage: `url(${src})` }">
    <slot/>
  </div>
</template>
<script>
import test from "@/assets/cover-page.png";
export default {
  props: {
    src: {
      type: String,
      default: test
    }
  }
};
</script>
<style scoped>
.proposal-page {
  background-size: cover;
  height: 11in;
  width: 8.5in;
  margin: 0.5in auto;
}
@media not print{
  @media (max-width: 768px) {
    .proposal-page {
      transform: scale(.45);
      transform-origin: top left;
      margin-left: 5vw;
    }
  }
}
@media print{
  .proposal-page{
    margin: 0;
  }
}
</style>
