<template>
  <div>
    <v-file-input
      v-model="file"
      @change="croppie"
      accept="image/*"
      label="File input"
    />
    <vue-croppie
      ref="croppieRef"
      v-if="file"
      :enableOrientation="true"
      :enableResize="false"
      :boundary="{ width: 400, height: 400 }"
      :viewport="{ width: 400, height: 400 }"
    ></vue-croppie>
    <!-- the result -->
    <v-btn block @click="crop">Crop</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null
    };
  },
  methods: {
    croppie() {
      if (!this.file) return;

      var reader = new FileReader();
      reader.onload = e => {
        this.$refs.croppieRef.bind({
          url: e.target.result
        });
      };

      reader.readAsDataURL(this.file);
    },
    crop() {
      // Options can be updated.
      // Current option will return a base64 version of the uploaded image with a size of 600px X 450px.
      let options = {
        type: "base64",
        size: { width: 600, height: 600 },
        format: "png"
      };
      this.$refs.croppieRef.result(options, output => {
        this.$emit("cropped", output);
      });
    }
  }
};
</script>