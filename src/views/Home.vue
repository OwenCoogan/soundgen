<template>
  <div class="anim">
        <svg viewBox="0 0 1800 600">
        <symbol id="s-text">
          <router-link to='/videoplayer' v-on:click="startSoundTrack">
          <text text-anchor="middle" x="50%" y="35%" class="webcoderskull"> Welcome  </text>
          <text text-anchor="middle" x="50%" y="68%" class="text--line"> Sound Gen  </text>
          </router-link>
         </symbol>
  
            <g class="g-ants">
              <use xlink:href="#s-text"
                class="webcoderskull-1"></use>     
              <use xlink:href="#s-text"
                class="webcoderskull-1"></use>     
              <use xlink:href="#s-text"
                class="webcoderskull-1"></use>     
              <use xlink:href="#s-text"
                class="webcoderskull-1"></use>     
              <use xlink:href="#s-text"
                class="webcoderskull-1"></use>     
            </g>
        </svg>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  
  },
  methods:{
    startSoundTrack(){

    },
  }
}
</script>

<style scoped>
div .anim{
  height: 80%;
}

.webcoderskull {
  font-size: 0.5em;
}
svg {
  position: absolute;
  width: 100%;
  height: 100%;
   background: #000;
  background-size: 0.12em 100%;
  font: 16em/1 Arial;
}

a {
  text-decoration: none;
}

.webcoderskull-1 {
  fill: none;
  stroke: white;
  stroke-dasharray: 7% 28%;
  stroke-width: 3px;
  -webkit-animation: stroke-offset 7s infinite linear;
          animation: stroke-offset 7s infinite linear;
}
.webcoderskull-1:nth-child(1) {
  stroke: #090979;
  stroke-dashoffset: 7%;
}
.webcoderskull-1:nth-child(2) {
  stroke: #d61c59;
  stroke-dashoffset: 14%;
}
.webcoderskull-1:nth-child(3) {
  stroke: #ee7752;
  stroke-dashoffset: 21%;
}
.webcoderskull-1:nth-child(4) {
  stroke: #23a6d5;
  stroke-dashoffset: 28%;
}
.webcoderskull-1:nth-child(5) {
  stroke: #23d5ab;
  stroke-dashoffset: 35%;
}

@-webkit-keyframes stroke-offset {
  50% {
    stroke-dashoffset: 35%;
    stroke-dasharray: 0 87.5%;
  }
}

@keyframes stroke-offset {
  50% {
    stroke-dashoffset: 35%;
    stroke-dasharray: 0 87.5%;
  }
}
</style>
