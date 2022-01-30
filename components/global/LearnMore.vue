<template>
  <div :class="{active:showUI}" class="info--wrapper">
    <button :class="{active:showInfo}" class="button--show-more" @click="showModal">
      +
    </button>
    <div :class="{active:showInfo}" class="modal">
      <p><strong>Even from afar</strong> is the digital sketchbook of <a href="https://www.richardegil.com">Richard Gil</a><p>
      <p>Feel free to check out the <a href="/archives">archives</a> if you missed a sketch</p>
      <button class="button--hide-ui" @click="showInfoUI">Press "H" to hide the UI</button>
      <button class="button--hide-ui" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data: () => {
      return {
        show: false,
        showInfo: true,
      }
    },
    computed: {
      ...mapState([
          "showUI",
      ]),
    },
    created() {

    },
    mounted() {
      window.addEventListener('keyup', function(event) {
        if (event.key === 'h') { 
          // this.$methods.showInfoUI();
        }
      });
    },
    methods: {
      ...mapActions([
        "toggleUIState"
      ]),
      showModal() {
        this.showInfo = !this.showInfo;
      },
      closeModal() {
        this.showInfo = false;
      },
      showInfoUI() {
        console.log('showui');
        this.toggleUIState();
        
      }
    }
  }
</script>

<style lang="scss">
  .info--wrapper {
    opacity: 0;
    transition: $transition;

    &.active {
      opacity: 1;
    }
  }

  button.button--show-more {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: grey;
    color: white;
    height: 20px;
    width: 20px;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    border: none;
    outline: none;
    appearance: none;
    right: 1rem;
    bottom: 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: $transition;

    &.active {
      transform: rotate(45deg);
    }
  }

  button.button--hide-ui {
    padding: 0.5rem;
    outline: 0;
    border: 0;
    border-radius: 0.5rem;;
    font-family: $accent-font;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: $transition;

    &:hover {
      background-color: lightpink;
    }
  }

  .modal {
    position: absolute;
    background: #333;
    width: 100%;
    max-width: 300px;
    height: auto;
    padding: 2rem;
    top: 50%;
    right: 2rem;
    opacity: 0;
    transition: $transition;
    color: white;

    &.active {
      opacity: 1;
    }

  }

  p {
    margin-bottom: 1rem;
    font-family: $accent-font;

    a {
      color: cyan;
      transition: $transition;

      &:hover {
        color: lightpink;
      }
    }
  }
</style>