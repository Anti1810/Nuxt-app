<!--Name: Alexander Potgieter | Student Number: 25003209--> 

<template>
    <div class="projects">
        <h1>My Projects</h1>
        <div class="project-card" v-for="project in projects" :key="project.id">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
    </div>
</template>

<script setup>
const projects = [
    {
        id: 1,
        title: "Sorting Algorithm Tester",
        description: "Small project that takes an array and test different sorting algorithms, returns which is fastest",
        tags: ["C++"]
    },
    {
        id:2,
        title: "Basic Student archive",
        description: "Web Application that Contains a list of students and a link button for each that takes you to a brief biography.",
        tags: ["HTML", "CSS", "MVC"]
    },
    {
        id:3,
        title: "Desktop Idle Game",
        description: "Early in development game on unity that sits open in the background while you complete other tasks",
        tags: ["Unity", "C#"]
    }
]
</script>

<style scoped>
.projects {
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.project-card {
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.project-card h2 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.project-card p {
  color: #aaaaaa;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tag {
  display: inline-block;
  background-color: #2a2a2a;
  border: 1px solid #444;
  color: #7eb8f7;
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-right: 0.5rem;
}
</style>
