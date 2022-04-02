<template>

<span id="warn">Student Dissertation Project</span>

  <div id="first">
  <h1>Welcome to the University of Northampton Virtual Tour!</h1>
  <br>
  <p><b> Click canvas for mouse lock and camera control, WASD Movement, ESC or Middle Mouse to escape window.</b></p>
  <br>
  <p>Feel free to explore the campus your own way, If you would like the tour, follow the arrows on screen and scroll to the corresponding number below for information about the locations along the way</p>
</div>
<div id="canvasBox">
  <canvas></canvas>
  <ul>
    <li><a href="#1">1</a></li>
    <li><a href="#2">2</a></li>
    <li><a href="#3">3</a></li>
    <li><a href="#4">4</a></li>
    <li><a href="#5">5</a></li>
    <li><a href="#6">6</a></li>
    <li><a href="#7">7</a></li>
  </ul>
</div>


  <!-- <a href="#canvasBox">first div</a> -->
<div id="blocks">
  <div class="informationBlocks" id="1">
    <h2>Test 1</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore molestias omnis reprehenderit sed numquam officiis cum accusantium doloremque, in minus voluptates. Voluptatibus numquam repellat quod atque tempore accusantium sapiente!</p>
  <a href="#canvasBox">Click here to go back to the Tour!</a>
  </div>

  <div class="informationBlocks" id="2">
    <h2>Test 2</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore molestias omnis reprehenderit sed numquam officiis cum accusantium doloremque, in minus voluptates. Voluptatibus numquam repellat quod atque tempore accusantium sapiente!</p>

  </div>

  <div class="informationBlocks" id="3">
    <h2>Test</h2>
  </div>

  <div class="informationBlocks" id="4">
    <h2>Test</h2>
  </div>

  <div class="informationBlocks" id="5">
    <h2>Test</h2>
  </div>

  <div class="informationBlocks" id="6">
    <h2>Test</h2>
  </div>

  <div class="informationBlocks" id="7">
    <h2>Test</h2>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {FirstPersonController} from "../BabylonLogic/FirstPersonController";

export default defineComponent({
  name: 'FinalProject',
  mounted(){
    const canvas = document.querySelector('canvas')!;
    new FirstPersonController(canvas);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

canvas{
  width:80%;
  height:80%;
  border: 3em solid #2c2d30;
}

#first{
  padding: 50px;
  text-align: center;
    background-color:#0d0d0d;
  color: #ebebeb;
}

#canvasBox{
  width: 100%;
  background-color: #2c2d30;
  height: 100vh;
}

#canvasBox h1{
  color: aliceblue;
}

ul > li {
    display: inline-block;
    /* You can also add some margins here to make it look prettier */
    margin-right:10%;
    color: aliceblue;
    font-size: 1.5em;
}
a{
  text-decoration: none;
  color: aliceblue;
  font-size: 1.5em;
}

#warn{
  color: red;
  font-style: italic;
  border: 4px dotted red;
  font-size: 2em;
  padding: 5px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.informationBlocks{
  height: 110vh;
  margin-bottom: 50px;
  background-color:#0d0d0d;
  color: #ebebeb;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}
.informationBlocks p{
  width: 60%;
}

</style>
