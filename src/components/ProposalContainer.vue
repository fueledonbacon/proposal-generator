<template>
   <div id="generated-proposal">
     <page-container>
        Test
     </page-container>
     <page-container>
        Thing
     </page-container>
     <page-container>
        Stuff
     </page-container>
     <page-container>
        Now
     </page-container>
     <page-container>
        Please
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
        proposalData: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>