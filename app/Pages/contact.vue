<!-- Name: Alexander Potgieter | Student Number: 25003209 -->
<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      
      <div>
        <label>Name</label>
        <input type="text" name="name" placeholder="Your name" required />
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" placeholder="Your email" required />
      </div>

      <div>
        <label>Message</label>
        <textarea name="message" placeholder="Your message" rows="5" required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<style scoped>
.contact {
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

div {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.4rem;
  color: #aaaaaa;
  font-size: 0.95rem;
}

input, textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
}

input:focus, textarea:focus {
  border-color: #7eb8f7;
}

button {
  margin-top: 0.5rem;
  padding: 0.8rem 2rem;
  background-color: #7eb8f7;
  color: #0f0f0f;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #5aa0e0;
}
</style>