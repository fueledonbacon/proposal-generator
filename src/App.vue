<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h2>Proposal Generator</h2>
        <v-spacer></v-spacer>
      </div>
    </v-app-bar>

    <v-content>
      <v-container id="proposal-form">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field v-model="content.title" label="Proposal title"/>
          <v-text-field v-model="content.name" label="Client name"/>
          <logo-uploader @cropped="content.logo = $event"/>
          <v-select v-model="content.services" label="Service selection"
            :items="services"
            multiple
          />
          <v-select v-model="content.level" :items="levels" label="Subscription level"/>
          <v-slider
            min="1"
            max="20"
            v-model="content.weeks"
            :label="`Estimated timeline ${content.weeks} weeks`"
          />
        </v-form>
        <v-btn @click="makePdf">Make pdf</v-btn>
      </v-container>
      <proposal-container :content="content" />
    </v-content>
  </v-app>
</template>

<script>
import LogoUploader from '@/components/LogoUploader.vue';
import ProposalContainer from "@/components/ProposalContainer.vue";
import * as html2pdf from "html2pdf.js";

export default {
  name: "App",

  components: {
    ProposalContainer,
    LogoUploader
  },

  data: () => ({
    //
    content: {
      title: "Website Proposal",
      logo: "Prospect Logo source",
      name: "John Doe",
      services: [{ text: "Service 1" }],
      weeks: 1,
      level: {
        name: "Priority",
        price: 1699
      },
      discountCode: "new-client",
      discountAmount: "10%"
    },
    services: [
      { text: "E-Commerce" },
      { text: "Brand Development"},
      { text: "Marketing Strategy"},
    ],
    levels: [
      {
        text: "Economy",
        value: {
          name: "Economy",
          price: 169
        }
      },
      {
        text: "Standard",
        value: {
          name: "Standard",
          price: 699
        }
      },
      {
        text: "Priority",
        value: {
          name: "Priority",
          price: 1699
        }
      }
    ]
  }),
  methods: {
    async makePdf() {
      var element = document.getElementById("generated-proposal");
      var opt = {
        margin: 0,
        filename: "test.pdf",
        image: { type: "png" },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
      };

      // New Promise-based usage:
      await html2pdf()
        .set(opt)
        .from(element)
        .save();
    }
  }
};
</script>
<style>
@media print{
  header, #proposal-form{
    display: none !important;
  }
  main.v-main{
    padding: 0 !important;
  }
}
</style>