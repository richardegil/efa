<template>
  <div class="wrapper">
    <h1>My Archives</h1>
    <ul>
      <li>
        <nuxt-link to="/archives/one">One</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ArchivePage',
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 4rem;
  }

  h1 {
    font-family: $accent-font;
  }

  ul {
    list-style: disc;
  }
</style>