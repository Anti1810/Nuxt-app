<!--Name: Alexander Potgieter | Student Number: 25003209--> 
<template>
    <div class="home">
        <img src="/ME.jpeg" alt="My Photo" class="profile-photo"/>
        <h1>Alexander Potgieter</h1>
        <p class="bio">
            I am a BSc IKS student at the University of Pretoria. I like coding and development.
            I enjoy problem-solving and gaming.
        </p>
    </div>
 </template>   

 <style scoped>

 .home {
  max-width: 700px;
  margin: 4rem auto;
  text-align: center;
  padding: 2rem;
}

.profile-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.bio {
  color: #aaaaaa;
  line-height: 1.8;
  font-size: 1.1rem;
}

a {
  display: inline-block;
  margin: 0.5rem;
  color: #7eb8f7;
  text-decoration: none;
}
</style>