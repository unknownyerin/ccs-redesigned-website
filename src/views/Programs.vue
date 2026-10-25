
<script setup>
import itsoLogo from '../assets/itso-logo.jpg'
import cssLogo from '../assets/css-logo.jpg'
import dmiaLogo from '../assets/dmia-logo.jpg'
import blisLogo from '../assets/blis-logo.jpg'

const programs = [
  {
    code: 'BSIT',
    name: 'Bachelor of Science in Information Technology',
    description: 'Explore information technology, computing systems, and practical technology solutions.',
    logo: itsoLogo,
    path: '/programs/bsit',
  },
  {
    code: 'BSCS',
    name: 'Bachelor of Science in Computer Science',
    description: 'Discover programming, algorithms, and the foundations of computer science.',
    logo: cssLogo,
    path: '/programs/bscs',
  },
  {
    code: 'BSDMIA',
    name: 'Bachelor of Science in Digital Media and Interactive Arts',
    description: 'Combine digital creativity, interactive media, and technology.',
    logo: dmiaLogo,
    path: '/programs/bsdmia',
  },
  {
    code: 'BLIS',
    name: 'Bachelor of Library and Information Science',
    description: 'Learn about organizing, managing, and providing access to information.',
    logo: blisLogo,
    path: '/programs/blis',
  },
]
</script>

<template>
  <div class="programs-page">
    <header class="navbar">
      <RouterLink to="/" class="brand">
        <img src="../assets/ccs-logo.png" alt="CCS Logo" />
        <span>COLLEGE OF COMPUTER STUDIES</span>
      </RouterLink>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/programs" class="active">Academic Programs</RouterLink>
        <RouterLink to="/faculty">Faculty and Staff</RouterLink>
        <RouterLink to="/news">Event Calendar</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
      </nav>
    </header>

    <main>
      <section class="programs-hero">
        <div class="hero-decoration decoration-one"></div>
        <div class="hero-decoration decoration-two"></div>

        <div class="hero-content">
          <p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p>
          <h1>ACADEMIC <span>PROGRAMS</span></h1>
          <p class="hero-description">
            Find your path. Build your future.
          </p>
          <p class="hero-text">
            Explore our degree programs and discover where your interests
            can take you.
          </p>
          <a href="#program-list" class="hero-button">EXPLORE PROGRAMS</a>
        </div>
      </section>

      <section id="program-list" class="program-section">
        <div class="section-heading">
          <p class="eyebrow">YOUR FUTURE STARTS HERE</p>
          <h2>Choose Your <span>Program</span></h2>
          <p>
            Discover the different fields of study offered by the College
            of Computer Studies.
          </p>
        </div>

        <div class="program-grid">
          <article
            v-for="program in programs"
            :key="program.code"
            class="program-card"
          >
            <div class="program-logo">
              <img :src="program.logo" :alt="program.code + ' logo'" />
            </div>

            <p class="program-code">{{ program.code }}</p>
            <h3>{{ program.name }}</h3>
            <p class="program-description">{{ program.description }}</p>

            <RouterLink :to="program.path" class="program-button">
              Explore Program <span>→</span>
            </RouterLink>
          </article>
        </div>
      </section>
    </main>

    <footer class="program-footer">
      <img src="../assets/ccs-logo.png" alt="CCS Logo" />
      <p>College of Computer Studies</p>
      <span>Learn. Create. Innovate.</span>
    </footer>
  </div>
</template>

<style scoped>
.programs-page {
  min-height: 100vh;
  color: #183b35;
  background: #f7f7f2;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  min-height: 82px;
  padding: 14px 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: #fff;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #06463e;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
}

.brand img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.navbar nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 22px;
  flex-wrap: wrap;
}

.navbar nav a {
  color: #29443e;
  font-size: 13px;
  text-decoration: none;
}

.navbar nav a:hover,
.navbar nav a.active {
  color: #b18a36;
}

.programs-hero {
  min-height: 370px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 70px 9%;
  color: white;
  background: #063d36;
}

.hero-content {
  max-width: 700px;
  position: relative;
  z-index: 1;
}

.eyebrow {
  margin: 0 0 14px;
  color: #c8a653;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.programs-hero h1 {
  margin: 0;
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1.1;
  font-weight: 900;
}

.programs-hero h1 span,
.section-heading h2 span {
  color: #c8a653;
}

.hero-description {
  margin: 20px 0 8px;
  font-size: 22px;
  font-weight: 700;
}

.hero-text {
  max-width: 520px;
  color: #e0e9e4;
  line-height: 1.7;
}

.hero-button {
  display: inline-block;
  margin-top: 16px;
  padding: 14px 22px;
  color: #153d35;
  background: #c8a653;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  transition: 0.2s;
}

.hero-button:hover {
  background: #e1c477;
  transform: translateY(-2px);
}

.hero-decoration {
  position: absolute;
  border: 1px solid rgba(200, 166, 83, 0.35);
  border-radius: 50%;
}

.decoration-one {
  width: 330px;
  height: 330px;
  right: 8%;
  top: -90px;
}

.decoration-two {
  width: 230px;
  height: 230px;
  right: 12%;
  bottom: -120px;
}

.program-section {
  padding: 75px 8% 90px;
}

.section-heading {
  max-width: 650px;
  margin: 0 auto 42px;
  text-align: center;
}

.section-heading h2 {
  margin: 0 0 14px;
  color: #123f36;
  font-size: clamp(28px, 4vw, 40px);
}

.section-heading h2 span {
  color: #b18a36;
}

.section-heading > p:last-child {
  color: #65736c;
  line-height: 1.7;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
  max-width: 1050px;
  margin: 0 auto;
}

.program-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  background: white;
  border: 1px solid #e8e7de;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(15, 53, 44, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.program-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 30px rgba(15, 53, 44, 0.12);
}

.program-logo {
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  padding: 12px;
  background: #f7f7f2;
  border-radius: 8px;
}

.program-logo img {
  max-width: 100%;
  max-height: 115px;
  object-fit: contain;
}

.program-code {
  margin: 0 0 8px;
  color: #b18a36;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1px;
}

.program-card h3 {
  margin: 0 0 12px;
  color: #123f36;
  font-size: 20px;
  line-height: 1.4;
}

.program-description {
  margin: 0 0 24px;
  color: #65736c;
  font-size: 14px;
  line-height: 1.7;
}

.program-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding: 12px 16px;
  color: white;
  background: #06463e;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: 0.2s;
}

.program-button:hover {
  background: #b18a36;
  color: #123f36;
}

.program-button span {
  font-size: 18px;
}

.program-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 20px;
  color: white;
  background: #063d36;
  text-align: center;
}

.program-footer img {
  width: 55px;
  height: 55px;
  object-fit: contain;
  margin-bottom: 8px;
}

.program-footer p {
  margin: 4px 0;
  font-weight: 700;
}

.program-footer span {
  margin-top: 4px;
  color: #c8a653;
  font-size: 12px;
}

@media (max-width: 900px) {
  .navbar {
    flex-direction: column;
  }

  .navbar nav {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .programs-hero {
    min-height: 330px;
    padding: 55px 7%;
  }

  .program-section {
    padding: 55px 6%;
  }

  .program-grid {
    grid-template-columns: 1fr;
  }

  .program-card {
    padding: 24px;
  }

  .navbar nav {
    gap: 14px;
  }
}
</style>
