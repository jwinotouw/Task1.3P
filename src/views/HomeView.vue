<script setup>
import giantworld1 from '../assets/images/giantworld1.png';
import giantworld2 from '../assets/images/giantworld2.png';
import giantworld3 from '../assets/images/giantworld3.png';
import giantworld4 from '../assets/images/giantworld4.png';
import arrivealive1 from '../assets/images/arrivealive1.png';
import arrivealive2 from '../assets/images/arrivealive2.png';
import arrivealive3 from '../assets/images/arrivealive3.png';
import arrivealive4 from '../assets/images/arrivealive4.png';
import solarpunk1 from '../assets/images/solarpunk1.png';
import solarpunk2 from '../assets/images/solarpunk2.png';
import solarpunk3 from '../assets/images/solarpunk3.png';
import solarpunk4 from '../assets/images/solarpunk4.png';
import abandonedmotel1 from '../assets/images/abandonedmotel1.png';
import abandonedmotel2 from '../assets/images/abandonedmotel2.png';
import abandonedmotel3 from '../assets/images/abandonedmotel3.png';
import abandonedmotel4 from '../assets/images/abandonedmotel4.png';

</script>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <main>
    <h1 id="title">John Setyaki</h1>
    <h3>Giant World</h3>
    <button @click="toggleShow">Show/Hide Description</button>
    <p v-if="show">Giant World is a creative 3D Animation without any 
    context or direction. The purpose of this animation is to 
    train my skill to be better at modelling 3D models and 
    creating animated environments. It was developed as 
    an individual project in an assignment of a unit called 
    Designing 3D Animated Environments (ADA102) taking 
    place in Deakin University at the start of 2023. It took 
    around 1 month to finish since I re-used some of my 
    previous 3D model assets that I created. 
    The assignment brief is to create an animated environment in any context that I want using my imagination, 
    with no restrictions or directions. The only thing that I 
    must follow is all my 3D models that I created need to 
    look like they belong in one world, which means that 
    I cannot create realistic characters together with cartoon-looking cars. The animation is a seamless looping 
    animation of a train passing around the city continue 
    and become a toy train that passes around a bedroom.</p>
    <img class="" :src="giantworld1" alt="Giant World" >
    <img class="" :src="giantworld2" alt="Giant World" >
    <img class="" :src="giantworld3" alt="Giant World" >
    <img class="" :src="giantworld4" alt="Giant World" >
    <h3>Arrive Alive</h3>
    <button @click="toggleShow">Show/Hide Description</button>
    <p v-if="show">
      Arrive Alive is a 3D Animation for an online campaign 
    dedicated to promoting safe driving practices. The mission is to raise awareness about the life-threatening dangers of texting and driving. It was developed as an individual project in an assignment of a unit called Creative 
    Design Studio (ADD304) taking place in Deakin University at the start of 2023. This 3D Animation takes around 
    2 months to finish, because I modelled everything from 
    scratch before I put it on the scene and animated it. 
    The animation shows a car driving in the city at night. 
    Through the perspective of the driver, his phone notification rang a few times, the driver grabs his phone to 
    check his phone. He notices the traffic light ahead of 
    him, which is green, but quickly turns red when his eyes 
    are on the phone. In a couple of seconds, a truck hit the 
    car and wrecked his car into pieces.</p>
    <img class="" :src="arrivealive1" alt="Arrive Alive" >
    <img class="" :src="arrivealive2" alt="Arrive Alive" >
    <img class="" :src="arrivealive3" alt="Arrive Alive" >
    <img class="" :src="arrivealive4" alt="Arrive Alive" >
    <h3>Solarpunk</h3>
    <button @click="toggleShow">Show/Hide Description</button>
    <p v-if="show">
        The Solarpunk Office Building is my personal 3D model project, designed entirely from scratch, 
      including the building's interior. It emphasizes sustainability with its solar-powered features 
      and green surroundings, showcasing a future where technology and eco-friendliness come together. 
      It's a testament to my commitment to creating a greener world through design.</p>
    <img class="" :src="solarpunk1" alt="Solarpunk" >
    <img class="" :src="solarpunk2" alt="Solarpunk" >
    <img class="" :src="solarpunk3" alt="Solarpunk" >
    <img class="" :src="solarpunk4" alt="Solarpunk" >
    <h3>Abandoned Motel</h3>
    <button @click="toggleShow">Show/Hide Description</button>
    <p v-if="show">
        The purpose of this animation is to enhance my 3D modelling and animation skills. 
      It was creatively made to depict the horror of an abandoned motel. This is my first time creating a 
      paranormal themed animation, and to create a realistic feel, i have focused on the texturing aspect. 
      All the textures in the animations were made from scratch, as it is a procedural texture.</p>
    <img class="" :src="abandonedmotel1" alt="Abandoned Motel" >
    <img class="" :src="abandonedmotel2" alt="Abandoned Motel" >
    <img class="" :src="abandonedmotel3" alt="Abandoned Motel" >
    <img class="" :src="abandonedmotel4" alt="Abandoned Motel" >
  </main>
</template>

<style scoped>

h3 {
  padding: 2px; /* Adds space inside the element */
  margin: 20px; /* Adds space outside the element */
}

p {
  padding: 10px; /* Adds space inside the element */
  margin: 10px; /* Adds space outside the element */
}

#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

#title{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  font-size: 50px;
  padding: 20px;
}
#profile{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#skill{
  margin-left: 50px;
}

#bar{
  width: 80%;
  margin-left: 70px;
}

table, td, th{
  border: 1px solid #ddd;
  text-align: center;
  border-collapse: collapse;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}



#software{
  text-align: center;
  
}

</style>
