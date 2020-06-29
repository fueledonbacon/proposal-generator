<template>
   <div id="generated-proposal">
     <page-container>
        {{content.title}}
        {{content.logo}}
        {{content.name}}
        Fueled on Bacon
     </page-container>
     <page-container>
        Table of Contents
        Proposed services
        Cost and Timeline
        Invitation to start
     </page-container>
     <page-container>
        <div v-repeat="service in content.services">
            {{service.name}}
        </div>
     </page-container>
     <page-container>
        The cost of this project will be
        {{serviceCost}}
        It will take approximately {{content.weeks}} weeks
        At the {{content.level}} level
     </page-container>
     <page-container>
         Thanks for reviewing our proposal.
         If you decide to pursue building this with Fueled on Bacon, you can continue by going to our site and subscribing at the {{content.level}} level, using the {{content.discountCode}} discount code for {{content.discountAmount}} off over the proposed ((content.weeks)) of the project.
     </page-container>
   </div>
</template>
<script>
import PageContainer from '@/components/PageContainer.vue'
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
                services: [{name: 'Service 1'}],
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
    }
}
</script>