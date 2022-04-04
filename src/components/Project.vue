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
    <h2>Learning Hub</h2>
   <p>Looking to the right you will the Learning Hub building, this is the largest teaching building on campus featuring the university library, it is also home to the student helpdesk and IT services to assist with all your needs as a student. The Learning Hub ground floor also features the ‘Owls Nest’, this area is commonly used by guest speakers adding even more value for the students. </p>
  <p>Across the open courtyard you will see the 2 rear access doorways, following the green arrow will take you around to the main front entrance.</p>
  <a href="#canvasBox">Click here to go back to the Tour!</a>
  </div>

  <div class="informationBlocks" id="2">
    <h2>Creative Hub</h2>
    <p>Here is the entrance to the Creative Hub, as the name suggests, this building houses the majority of the more creating subjects ranging from fashion design to video games development, it has lots of workshops accessible to the students allowing them to use advanced tools such as 3D printers or industry standard digital art hardware.</p>
    <p>The creative hub too has a large open area suited to guest speakers, this area’s talks are mainly aimed at the creative students however all students are welcome to come and enjoy.</p>
  <a href="#canvasBox">Click here to go back to the Tour!</a>
  </div>

  <div class="informationBlocks" id="3">
    <h2>Security and McColls</h2>
   <p>On the left here you will find the security office, and on the right, you will see the McColls local shop.</p>
   <p>The security office is the first port of call for any security issues you may have, from new passes to reporting incidents, the office is also used by several police officers who works alongside the University to ensure the campus is a safe and enjoyable environment, free of crime and antisocial behaviour.</p>
    <p>The McColls shop is the perfect place to grab a morning coffee before your lectures or a quick pot noodle on those late study nights, nice and local, filled with friendly faces, McColls is very dependable to everyone enjoying the campus.</p>
    <a href="#canvasBox">Click here to go back to the Tour!</a>
  </div>

  <div class="informationBlocks" id="4">
    <h2>Students flats and Carpark 4</h2>
    <p>To the left you will see the student accommodations flats, a mixture of multiple dorm flats with a shared living space as well as studio flats although they all have individual on-suite bathrooms, protected through state-of-the-art key card technology, ensuring only the correct people can access the appropriate blocks, flats and rooms. </p>
    <p>Behind you, you will find Car Park 4, the largest and most used carpark on campus, this is the carpark you will most likely use on moving in day so it’s a good idea to take note of the access points for when you arrive.</p>
    <a href="#canvasBox">Click here to go back to the Tour!</a>
  </div>

  <div class="informationBlocks" id="5">
    <h2>Town houses</h2>
    <p>There are plenty of town houses on campus if you’d rather enjoy the additional space when compared with the flats, behind you are the 3 houses that make up village way and in front is the dozens of houses that make up Park Ave, the town houses generally have larger bedrooms, living rooms and kitchens as well as ground access however the larger bathrooms are shared between two rooms.</p>
    <a href="#canvasBox">Click here to go back to the Tour!</a>
  </div>

  <div class="informationBlocks" id="6">
    <h2>Engine shed and mail room</h2>
    <p>Here you will find the Engine Shed, this building provides a space to the student union, who you can approach for any sort of advice relating to any sort of problems or queries you may have during your time as a student. From joining societies to voicing problems to seeking guidance on how to receive help on matters such as personal finance to mental health. Even if they cannot answer your question on the spot, they will be able to guide you to the appropriate people/ place.</p>
    <p>Behind you is the Mail Room, all packages and letters sent to you during your time on campus will be deposited here, once it has arrived you can come here and collect your items during the opening hours.</p>
    <a href="#canvasBox">Click here to go back to the Tour!</a>
  </div>

  <div class="informationBlocks" id="7">
    <h2>Senate Building and Power</h2>
    <p>To the left you will see the third lecture building, like the learning hub, the senate has lots of lecture rooms for students to receive their courses, the university believes in classroom-based teaching, generally in groups of around 30 students max at a time, however for certain modules or topics, a lecture hall-based approach is still better, the senate features the universities only lecture hall.</p>
    <p>To the right you will see The Energy Centre, this amazing building is a biomass energy centre. Through environmentally friendly, low carbon methods this building reliably provides all of the heating required for all academic, residential and sports buildings through a district heating network.</p>
    <a href="#canvasBox">Click here to go back to the Tour!</a>
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
