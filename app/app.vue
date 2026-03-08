<!--Name: Alexander Potgieter | Student Number: 25003209--> 
<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/weather">Weather</NuxtLink>
      <NuxtLink to="/facts">Animal Facts</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background-color: #0f0f0f;
  color: #ffffff;
}

nav {
  display: flex;
  gap: 2rem;
  padding: 1.2rem 2rem;
  background-color: #1a1a1a;
  border-bottom: 2px solid #333;
}

nav a {
  color: #aaaaaa;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}

nav a:hover, nav a.router-link-active {
  color: #ffffff;
}
</style>
