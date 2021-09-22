<template>
  <div class="anim">
        <h5 class="card-title">Bienvenue </h5>
        <svg viewBox="0 0 1800 600">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="35%" class="webcoderskull"> Welcome  </text>
          <text text-anchor="middle" x="50%" y="68%" class="text--line"> Sound Gen  </text>
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
        <button class="btn btn-primary">cliquez pour commencer </button>
        


  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.webcoderskull-1 {
  fill: none;
  stroke: white;
  stroke-dasharray: 7% 28%;
  stroke-width: 3px;
  -webkit-animation: stroke-offset 7s infinite linear;
          animation: stroke-offset 7s infinite linear;
}
.webcoderskull-1:nth-child(1) {
  stroke: #360745;
  stroke-dashoffset: 7%;
}
.webcoderskull-1:nth-child(2) {
  stroke: #d61c59;
  stroke-dashoffset: 14%;
}
.webcoderskull-1:nth-child(3) {
  stroke: #e7d84b;
  stroke-dashoffset: 21%;
}
.webcoderskull-1:nth-child(4) {
  stroke: #efeac5;
  stroke-dashoffset: 28%;
}
.webcoderskull-1:nth-child(5) {
  stroke: #1b8798;
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
