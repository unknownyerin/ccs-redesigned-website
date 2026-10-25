<template>
  <div class="page">
    <header class="navbar">
      <a href="/" class="brand">
        <span class="brand-mark">CCS</span>
        <span class="brand-name">
          CENTRAL PHILIPPINE UNIVERSITY
          <small>COLLEGE OF COMPUTER STUDIES</small>
        </span>
      </a>

      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/programs/bsit">Programs</a>
        <a href="/faculty">Faculty & Staff</a>
        <a href="/news">News & Events</a>
        <a href="/contact">Contact Us ↗</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <p class="eyebrow">CENTRAL PHILIPPINE UNIVERSITY · CCS</p>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <a href="/" class="button">Back to Home ↗</a>
      </section>

      <section class="content">
        <p class="eyebrow">DISCOVER CCS</p>
        <h2>{{ heading }}</h2>
        <p>{{ details }}</p>
      </section>
    </main>

    <footer>
      <span>CCS · CENTRAL PHILIPPINE UNIVERSITY</span>
      <a href="/contact">Contact CCS ↗</a>
    </footer>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  heading: String,
  details: String,
})
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #f7f8f4;
  color: #183033;
  font-family: 'DM Sans', Arial, sans-serif;
}

.navbar {
  padding: 22px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 22px;
  background: white;
  border-bottom: 1px solid #e6eae2;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.brand-mark {
  padding: 14px;
  border-radius: 10px;
  background: #102729;
  color: #91ce45;
  font-weight: 800;
}

.brand-name {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

.brand-name small {
  display: block;
  margin-top: 5px;
  color: #71807c;
  font-size: 9px;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

nav a {
  color: #183033;
  text-decoration: none;
  font-size: 12px;
}

nav a:hover {
  color: #619a29;
}

.hero {
  padding: 90px 10%;
  background: #102729;
  color: white;
}

.eyebrow {
  color: #91ce45;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.hero h1 {
  max-width: 850px;
  margin: 25px 0;
  font-size: clamp(38px, 6vw, 68px);
  line-height: 1.1;
}

.hero p:not(.eyebrow) {
  max-width: 650px;
  color: #c2cfca;
  line-height: 1.9;
}

.button {
  display: inline-block;
  margin-top: 20px;
  padding: 14px 20px;
  border-radius: 5px;
  background: #ffb52e;
  color: #102729;
  text-decoration: none;
  font-weight: 800;
}

.content {
  max-width: 950px;
  min-height: 300px;
  margin: auto;
  padding: 70px 7%;
}

.content h2 {
  font-size: clamp(27px, 4vw, 40px);
}

.content > p:last-child {
  color: #65736f;
  line-height: 2;
}

footer {
  padding: 25px 7%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  background: #102729;
  color: white;
  font-size: 11px;
}

footer a {
  color: #91ce45;
}

@media (max-width: 650px) {
  .navbar {
    align-items: flex-start;
    flex-direction: column;
  }

  nav {
    gap: 14px;
  }

  .hero {
    padding: 60px 7%;
  }
}
</style>
