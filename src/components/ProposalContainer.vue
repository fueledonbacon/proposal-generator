<template>
   <div id="generated-proposal">
     <page-container :src="images.cover">
        {{ content.title }}
        {{ content.logo }}
        {{ content.name }}
        Fueled on Bacon
     </page-container>
     <page-container :src="images.toc">
        Table of Contents
        Proposed services
        Cost and Timeline
        Invitation to start
     </page-container>
     <page-container :src="images.document">
        <div v-for="(service, index) in content.services" :key="index">
            {{ service.name }}
        </div>
     </page-container>
     <page-container :src="images.delivery">
        The cost of this project will be
        {{ serviceCost }}
        It will take approximately {{ content.weeks }} weeks
        At the {{ content.level }} level
     </page-container>
     <page-container :src="images.nextSteps">
         Thanks for reviewing our proposal.
         If you decide to pursue building this with Fueled on Bacon, you can continue by going to our site and subscribing at the {{content.level}} level, using the {{content.discountCode}} discount code for {{content.discountAmount}} off over the proposed ((content.weeks)) of the project.
     </page-container>
   </div>
</template>
<script>
import PageContainer from '@/components/PageContainer.vue'
import coverImg from '@/assets/cover-page.png'
import deliveryImg from '@/assets/delivery-timeline.png'
import documentImg from '@/assets/document.png'
import introImg from '@/assets/intro.png'
import tocImg from '@/assets/TOC.png'
import pricingImg from '@/assets/pricing.png'
import nextStepsImg from '@/assets/next-steps.png'

export default {
    components: {
        PageContainer
    },
    props: {
        content: {
            type: Object,
            default: () => ({
                title: 'Proposal title',
                logo: 'Prospect Logo source',
                name: 'Name of client',
                services: [{ name: 'Service 1'}],
                weeks: 0,
                level: 159,
                discountCode: 'CODE',
                discountAmount: '10%',
            })
        }
    },
    computed: {
        serviceCost() {
            return Number(this.content.level * this.content.weeks).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    },
    data(){
      return {
        images: {
          cover: coverImg,
          delivery: deliveryImg,
          document: documentImg,
          intro: introImg,
          toc: tocImg,
          pricing: pricingImg,
          nextSteps: nextStepsImg,
        }
      }
    }
}
</script>