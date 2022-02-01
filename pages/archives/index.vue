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
    font-family: $body-font;
  }

  ul {
    list-style: none;
    margin: 2rem 1.5rem;
    
    li {
      &:before {
        content: '\2014';
        position: absolute;
        margin-left: -20px;
      }

      a {
        position: relative;
        text-decoration: none;
        color: #333;
        font-weight: 700;
        padding: 0.5rem;

        &:before {
          content: '';
          position: absolute;
          width: 0;
          height: 40%;
          background-color: cyan;
          z-index: -1;
          top: 50%;
          left: 0.25rem;
          transition: $transition;
        }

        &:hover {

          &:before {
            width: 100%;
          }
        }
      }
    }
  }
</style>