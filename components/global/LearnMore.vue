<template>
  <div :class="{active:showInfo}" class="info--wrapper">
    <button class="button--show-more" @click="showModal">
      +
    </button>
    <div :class="{active:show}" class="modal">
      this is some content
      <button @click="showInfoUI">Hide UI</button>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        show: false,
        showInfo: true,
      }
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
      showModal() {
        this.show = !this.show;
      },
      showInfoUI() {
        console.log('showui');
        this.showInfo = !this.showInfo;
        
      }
    }
  }
</script>

<style lang="scss">
  .info--wrapper {
    opacity: 0;

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
  }

    button.button--hide-ui {

    }

  .modal {
    position: absolute;
    background: black;
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
</style>