<script setup>
import John from '../assets/images/john.jpg';

</script>

<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <main>
    <h1 id="title">About Me</h1>
    <p>As a detail-oriented and organized individual, I consistently strive for excellence in all aspects of my work. 
      Equipped with the ability of both leadership and teamwork,  I am committed to being a hardworking and dependable 
      member of the team. Through my experience in adapting to new environments and working under pressure, I have 
      developed a problem-solving attitude that prepared me to tackle any challenges in the future.</p>
    <img class="John" :src="John" alt="John Setyaki" >

  <div class="row">
    <!-- left block -->
    <div class="column"> 
      <div id="language">
        <h2 id="skill">Skills</h2>
        <h3 class="subject">3D Modelling</h3>
        <div class="w3-light-grey w3-round" id="bar">
          <div class="w3-container w3-blue w3-round" style="width:85%">85%</div>
        </div>
        
        <h3 class="subject">Texturing</h3>
        <div class="w3-light-grey w3-round" id="bar">
          <div class="w3-container w3-blue w3-round" style="width:90%">90%</div>
        </div>

        <h3 class="subject">Animation</h3>
        <div class="w3-light-grey w3-round" id="bar">
          <div class="w3-container w3-blue w3-round" style="width:75%">75%</div>
        </div>

        <h3 class="subject">Video Editing</h3>
        <div class="w3-light-grey w3-round" id="bar">
          <div class="w3-container w3-blue w3-round" style="width:70%">70%</div>
        </div>
      </div>
    </div> 

    <div class="column"> 
      <div id="language">
        <h2 id="skill">Capabilities</h2>
        <h3 class="subject">Teamwork</h3>
        <div class="w3-light-grey w3-round" id="bar">
          <div class="w3-container w3-blue w3-round" style="width:90%">90%</div>
        </div>
        
        <h3 class="subject">Communication</h3>
        <div class="w3-light-grey w3-round" id="bar">
          <div class="w3-container w3-blue w3-round" style="width:85%">85%</div>
        </div>

        <h3 class="subject">Attention to Detail</h3>
        <div class="w3-light-grey w3-round" id="bar">
          <div class="w3-container w3-blue w3-round" style="width:100%">100%</div>
        </div>

        <h3 class="subject">Creativity</h3>
        <div class="w3-light-grey w3-round" id="bar">
          <div class="w3-container w3-blue w3-round" style="width:80%">80%</div>
        </div>
      </div>
    </div>

    <!-- right block -->
    <div>
      <h2>Software</h2>
      
      <table>
        <tr>
          <th>Blender</th>
          <td><img class ="imagesize" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png"></td>
          <th>After Effects</th>
          <td><img class ="imagesize" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png"></td>
          <th>InDesign</th>
          <td><img class ="imagesize" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png"></td>
        </tr>
      </table>
    </div>
  </div>
  </main>
</template>

<style scoped>

p {
  padding: 10px; /* Adds space inside the element */
  margin: 10px; /* Adds space outside the element */
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
.subject{
  margin-left: 70px;
}
#bar{
  width: 80%;
  margin-left: 70px;
}

.column {
  float: left;
  width: 50%;
  padding: 10px;
  /* height: 300px; Should be removed. Only for demonstration */
}

.row:after {
  content: "";
  display: table;
  clear: both;
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

.imagesize{
  width: 100px;
}
  
</style>
