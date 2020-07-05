<template>
  <v-app>
    <v-app-bar app dark>
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
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="makePdf">Print Proposal</v-btn>
    </v-app-bar>

    <v-content>
      <v-container id="proposal-form" class="py-4">
        <v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field v-model="content.title" label="Proposal title" />
              <v-text-field v-model="content.name" label="Client name" />
              <v-select
                v-model="content.services"
                label="Service selection"
                :items="services"
                multiple
              />
              <v-select v-model="content.level" :items="levels" label="Subscription level" />
              <v-slider
                min="1"
                max="20"
                v-model="content.weeks"
                :label="`Estimated timeline ${content.weeks} weeks`"
              />
              <v-checkbox v-model="content.flags.showToc"
                label="Show table of contents"
              />
              <h4>Intro page content</h4>
              <ckeditor :editor="editor" v-model="content.introContent" :config="editorConfig"/>
              <h4>Next steps content</h4>
              <ckeditor :editor="editor" v-model="content.nextStepsContent" :config="editorConfig"/>
            </v-col>
            <v-col cols="12" sm="6">
              <h4>Cover page logo</h4>
              <logo-uploader @cropped="content.logo = $event" />
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <proposal-container :content="content" />
    </v-content>
  </v-app>
</template>

<script>
import LogoUploader from "@/components/LogoUploader.vue";
import ProposalContainer from "@/components/ProposalContainer.vue";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default {
  name: "App",

  components: {
    ProposalContainer,
    LogoUploader
  },

  data: () => ({
    //
    content: {
      flags: {
        showToc: false,
      },
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
      discountAmount: "10%",
      introContent: '<p>Content of the editor.</p>',
      nextStepsContent: `<p>Content of the editor.</p>`
    },
    editor: ClassicEditor,
    editorConfig: {
        // The configuration of the editor.
    },
    services: [
      { text: "E-Commerce" },
      { text: "Brand Development" },
      { text: "Marketing Strategy" }
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
    makePdf() {
      print()
    }
  }
};
</script>
<style>
@media print {
  header,
  #proposal-form {
    display: none !important;
  }
  main.v-main {
    padding: 0 !important;
  }
}
</style>