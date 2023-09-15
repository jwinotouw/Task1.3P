<script setup>

</script>

<template>
  <head>
    <title>My Portfolio</title>
    <link rel="icon" type="image/x-icon" href="">
  </head>
  <header>
    <div>
      <nav>
        <ul>
          <li class="title">Portfolio</li>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/AboutView">About</RouterLink></li>
          <li><RouterLink to="/ContactView">Contacts</RouterLink></li>
          <!-- <li><RouterLink to="/contact">Contact</RouterLink></li> -->
        </ul> 
      </nav>
    </div>
  </header>
  <footer>
      &copy; 2023 John Setyaki Portfolio
  </footer>
  <RouterView />
</template>

<style scoped>

.title{
  font-family: Bradley Hand, cursive;
  color: azure;
  text-align: center;
  display: block;
  padding: 20px 25px;
}

nav {
  font-family: Monospace, serif;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #5283dd;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 20px 25px;
  text-decoration: none;
}

li a:hover {
  background-color: #044563;
}


footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(33, 120, 252);
  color: white;
  text-align: center;
}


</style>
