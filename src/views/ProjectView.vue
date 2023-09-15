<template>
  <div id="app">
    <h1>My Portfolio</h1>
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="images">
          <img v-for="image in project.images" :key="image" :src="image" alt="Project image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "This is a brief description of project 1.",
          images: [
            "image1.jpg",
            "image2.jpg",
            "image3.jpg",
            "image4.jpg"
          ],
        },
        {
          id: 2,
          title: "Project 2",
          description: "This is a brief description of project 2.",
          images: [
            "image5.jpg",
            "image6.jpg",
            "image7.jpg",
            "image8.jpg"
          ],
        },
        // Add more projects here
      ]
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

h1 {
  text-align: center;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project {
  width: 600px;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
}

.images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.images img {
  width: 100%;
}

.video {
  margin-top: 10px;
}

.video iframe {
  width: 100%;
  height: 400px;
}
</style>
