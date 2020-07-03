<template>
  <div id="generated-proposal">
    <page-container :src="images.cover">
      <cover-page-content :heading="content.title" :src="content.logo" :name="content.name" />
    </page-container>
    <page-container :src="images.toc">
      <table-of-contents-content :pages="pages" />
    </page-container>
    <page-container :src="images.document">
      <document-content heading="Cool stuff">
        <p>Here's some stuff I want people to know.</p>
      </document-content>
    </page-container>
    <page-container :src="images.delivery">
      <delivery-timeline-content>
        <p>
          The cost of this project will be
          {{ serviceCost }}
        </p>
        <p>It will take approximately {{ content.weeks }} weeks at the {{ content.level.name }} level.</p>
      </delivery-timeline-content>
    </page-container>
    <page-container :src="images.nextSteps">
      <next-steps-content>
        Thanks for reviewing our proposal.
        If you decide to pursue building this with Fueled on Bacon, you can continue by going to our site and subscribing at the {{content.level.name}} level, using the "{{content.discountCode}}" discount code for {{content.discountAmount}} off over the proposed timeline of the project.
      </next-steps-content>
    </page-container>
  </div>
</template>
<script>
import PageContainer from "@/components/PageContainer.vue";
import CoverPageContent from "@/components/CoverPageContent.vue";
import TableOfContentsContent from "@/components/TableOfContentsContent.vue";
import DeliveryTimelineContent from "@/components/DeliveryTimelineContent.vue";
import NextStepsContent from "@/components/NextStepsContent.vue";
import DocumentContent from "@/components/DocumentContent.vue";

/* Images */
import coverImg from "@/assets/cover-page.png";
import deliveryImg from "@/assets/delivery-timeline.png";
import documentImg from "@/assets/document.png";
import introImg from "@/assets/intro.png";
import tocImg from "@/assets/TOC.png";
import pricingImg from "@/assets/pricing.png";
import nextStepsImg from "@/assets/next-steps.png";

export default {
  components: {
    PageContainer,
    CoverPageContent,
    TableOfContentsContent,
    DeliveryTimelineContent,
    NextStepsContent,
    DocumentContent
  },
  props: {
    content: {
      type: Object,
      default: () => ({
        title: "Proposal title",
        logo: "Prospect Logo source",
        name: "Name of client",
        services: [{ name: "Service 1" }],
        weeks: 0,
        level: "Priority",
        discountCode: "new-client",
        discountAmount: "10%"
      })
    }
  },
  computed: {
    serviceCost() {
      return Number(
        this.content.level.price * this.content.weeks
      ).toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
  },
  data() {
    return {
      images: {
        cover: coverImg,
        delivery: deliveryImg,
        document: documentImg,
        intro: introImg,
        toc: tocImg,
        pricing: pricingImg,
        nextSteps: nextStepsImg
      },
      pages: ["Proposed services", "Cost and Timeline", "Invitation to start"]
    };
  }
};
</script>