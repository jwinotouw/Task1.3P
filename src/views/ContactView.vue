<template>
  <div id="app">
    <h1>Contact Me</h1>
    <p>This is a brief description of myself and my portfolio. You can write anything you want here to introduce yourself and your work.</p>
    <p>You can also follow me on Instagram: <a href="https://www.instagram.com/setyaki_3d/" target="_blank">@setyaki_3d</a></p>
    <form @submit.prevent="submitForm" class="form">
      <div class="input-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Add your logic to handle the form submission here
      alert("Form submitted!");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 5px solid rgb(55, 216, 228);
  background-color: rgb(25, 40, 80);
}

h1 {
  text-align: center;
}

p {
  margin-bottom: 10px;
}

.form {
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid black;
}

.input-group {
  margin-bottom: 10px;
}

.input-group label {
  display: block;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 10px;
}

.input-group textarea {
  height: 200px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
}
</style>
