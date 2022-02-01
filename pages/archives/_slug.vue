<template>
  <div>
    <component :is="compName" /> 
  </div>
</template>

<script>
  export default {
    
    data: () => {
      return {
        // slug: this.$route.path,
      };
    },
    computed: {
      compName() {
        return "entry-" + this.$route.params.slug; 
      }
    }, 
  }
</script>

<style lang="scss" scoped>

</style>