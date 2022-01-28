<template>
  <div id="grid--wrapper">
    <div id="even" class="standard">even</div>
    <div id="fro" class="accent" >fro</div><div id="m" class="standard">m</div>
    <div id="afar" class="standard">afar</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;1,300&display=swap');

  #grid--wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 
      "one two three"
      "four five six"
      "seven eight nine";
    gap: 2rem;
    width: 100vw;
    height: 100vh;
  }

  .standard, .accent {
    display: flex;
    font-size: 2rem;
  }

  .standard {
    font-family: 'IBM Plex Serif', serif;
    font-weight: 100;
    letter-spacing: 0.25rem;
  }

  .accent {
    font-family: 'IBM Plex Serif', serif;
    font-style: italic;
    font-weight: 300;
  }

  #even {
    grid-area: two;
    align-items: flex-end;
    justify-content: flex-end;
  }

  #fro {
    grid-area: five;
    justify-content: flex-end;
  }

  #m {
    grid-area: six;
  }

  #afar {
    grid-area: nine;
  }
</style>