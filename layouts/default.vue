<template>
  <div class="wrapper"> 
    <Nuxt />
    <LearnMore></LearnMore>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DefaultPage',
  scrollToTop: true,
  mounted() {
    document.onkeydown = this.onkeydown;
  },
  methods: {
    ...mapActions([
      "toggleUIState"
    ]),
    onkeydown(e) {
      const key = String.fromCharCode(e.which);
      if ( key === 'H' ) {
        this.toggleUIState();
      }
      
    }
  },
}
</script>
