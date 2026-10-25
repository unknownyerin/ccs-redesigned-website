
<script setup>
import ccsLogo from '../assets/ccs-logo.png'
import deanPhoto from '../assets/dean.png'

import dh1 from '../assets/dh1.jpg'
import dh2 from '../assets/dh2.jpg'
import dh3 from '../assets/dh3.jpg'
import dh4 from '../assets/dh4.jpg'

import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'
import f4 from '../assets/f4.jpg'
import f5 from '../assets/f5.jpg'
import f6 from '../assets/f6.jpg'
import f7 from '../assets/f7.jpg'
import f8 from '../assets/f8.jpg'

import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.png'

const departmentHeads = [
  {
    image: dh1,
    name: 'Rea P. Balontong, MBA',
    position: 'Department Head',
    department: 'IT and IS'
  },
  {
    image: dh2,
    name: 'Marjee Rose B. Parreño, MSCS, MBA',
    position: 'Program Coordinator',
    department: 'BSCS, BSDMIA, and MSCS'
  },
  {
    image: dh3,
    name: 'Ana Mae B. Cantel, MLIS',
    position: 'Program Coordinator',
    department: 'BLIS and MLIS'
  },
  {
    image: dh4,
    name: 'Lennon D. Pajar',
    position: 'Computer Laboratory Coordinator',
    department: 'Computer Laboratories'
  }
]

const facultyMembers = [
  {
    image: f1,
    name: 'Leo Paulo B. Beldia',
    program: 'BSIT and BSIS Program'
  },
  {
    image: f2,
    name: 'Pedro Peter Rhys B. Cambronero, MSCS',
    program: 'BSCS Program'
  },
  {
    image: f3,
    name: 'Lesley Joy L. Dignadice, MBA',
    program: 'BSIT and BSIS Program'
  },
  {
    image: f4,
    name: 'Rodolfo C. Eregia, Jr.',
    program: 'BSIT and BSIS Program'
  },
  {
    image: f5,
    name: 'Donie S. Jardeleza, MSCS',
    program: 'BSIT and BSIS Program'
  },
  {
    image: f6,
    name: 'Antonio M. Montaño, Jr.',
    program: 'BSIT and BSIS Program'
  },
  {
    image: f7,
    name: 'Rose Leah Joy A. Ojacastro, MSCS',
    program: 'BSIT and BSIS Program'
  },
  {
    image: f8,
    name: 'Ma. Sheila C. Sapul, Ph. D.',
    program: 'BSCS Program'
  }
]

const staffMembers = [
  {
    image: s1,
    name: 'Chrislyn C. Castaño',
    position: 'Secretary'
  },
  {
    image: s2,
    name: 'A.M.P. Latter P. Taasan',
    position: 'Computer Laboratory Technician'
  },
  {
    image: s3,
    name: 'Chriselda Elaine Ador',
    position: 'Guidance Counselor'
  },
  {
    image: s4,
    name: 'Donna May Rivera',
    position: 'Library Liaison Officer'
  }
]
</script>

<template>
  <div class="faculty-page">
    <!-- NAVBAR -->
    <header class="navbar">
      <RouterLink to="/" class="brand">
        <img :src="ccsLogo" alt="CCS Logo" class="brand-logo" />

        <div class="brand-text">
          <span class="brand-title">CENTRAL PHILIPPINE UNIVERSITY</span>
          <span class="brand-subtitle">COLLEGE OF COMPUTER STUDIES</span>
        </div>
      </RouterLink>

      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/programs">Programs</RouterLink>
        <RouterLink to="/faculty" class="active">Faculty</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-circle circle-one"></div>
      <div class="hero-circle circle-two"></div>

      <div class="hero-content">
        <span class="eyebrow">OUR PEOPLE</span>
        <h1>Meet Our <span>Faculty</span></h1>
        <p>
          Meet the educators, academic leaders, and dedicated staff
          who support the learning community of the Central Philippine
          University College of Computer Studies.
        </p>

        <a href="#dean" class="hero-button">
          Meet Our Team <span>→</span>
        </a>
      </div>
    </section>

    <!-- INTRODUCTION -->
    <section class="intro-section">
      <span class="section-label">THE PEOPLE BEHIND THE LEARNING</span>
      <h2>Dedicated to <span>Learning and Growth</span></h2>
      <p>
        The College of Computer Studies brings together academic
        leaders, faculty members, and support personnel who contribute
        to students' learning experiences and the daily operations
        of the college.
      </p>
    </section>

    <!-- DEAN -->
    <section id="dean" class="dean-section">
      <div class="dean-card">
        <div class="dean-photo">
          <img
            :src="deanPhoto"
            alt="Ma. Christina A. Quijano, MSCS"
          />
        </div>

        <div class="dean-info">
          <span class="section-label">COLLEGE LEADERSHIP</span>
          <h2>Meet the <span>Dean</span></h2>
          <div class="gold-line"></div>
          <h3>Ma. Christina A. Quijano, MSCS</h3>
          <p class="dean-position">Dean, College of Computer Studies</p>
          <p>
            Providing leadership and guidance for the College of
            Computer Studies.
          </p>
        </div>
      </div>
    </section>

    <!-- DEPARTMENT HEADS -->
    <section class="people-section">
      <div class="section-heading">
        <div>
          <span class="section-label">ACADEMIC LEADERSHIP</span>
          <h2>Department Heads</h2>
        </div>

        <p>
          Academic leaders and coordinators who help oversee
          departments, programs, and laboratory operations.
        </p>
      </div>

      <div class="people-grid">
        <article
          v-for="person in departmentHeads"
          :key="person.name"
          class="person-card"
        >
          <div class="person-photo">
            <img :src="person.image" :alt="person.name" />
          </div>

          <div class="person-info">
            <span class="person-number">{{ person.position }}</span>
            <h3>{{ person.name }}</h3>
            <div class="gold-line"></div>
            <p class="person-department">{{ person.department }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- FACULTY MEMBERS -->
    <section class="people-section alternate-section">
      <div class="section-heading">
        <div>
          <span class="section-label">TEACHING AND LEARNING</span>
          <h2>Faculty Members</h2>
        </div>

        <p>
          Meet the faculty members supporting the college's
          undergraduate programs.
        </p>
      </div>

      <div class="people-grid">
        <article
          v-for="person in facultyMembers"
          :key="person.name"
          class="person-card"
        >
          <div class="person-photo">
            <img :src="person.image" :alt="person.name" />
          </div>

          <div class="person-info">
            <span class="person-number">FACULTY MEMBER</span>
            <h3>{{ person.name }}</h3>
            <div class="gold-line"></div>
            <p class="person-department">{{ person.program }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- STAFF -->
    <section class="people-section">
      <div class="section-heading">
        <div>
          <span class="section-label">COLLEGE SUPPORT</span>
          <h2>Our Staff</h2>
        </div>

        <p>
          Meet the staff members who support the college's
          administrative, laboratory, guidance, and library-related
          services.
        </p>
      </div>

      <div class="people-grid">
        <article
          v-for="person in staffMembers"
          :key="person.name"
          class="person-card"
        >
          <div class="person-photo">
            <img :src="person.image" :alt="person.name" />
          </div>

          <div class="person-info">
            <span class="person-number">COLLEGE STAFF</span>
            <h3>{{ person.name }}</h3>
            <div class="gold-line"></div>
            <p class="person-department">{{ person.position }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- CLOSING SECTION -->
    <section class="closing-section">
      <span class="eyebrow">YOUR FUTURE STARTS HERE</span>
      <h2>Learn. Create. Innovate.</h2>
      <p>
        Explore the academic programs offered by the College of
        Computer Studies and discover the path that fits your goals.
      </p>

      <RouterLink to="/programs" class="closing-button">
        Explore Our Programs →
      </RouterLink>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-main">
        <div class="footer-brand">
          <img :src="ccsLogo" alt="CCS Logo" class="footer-logo" />

          <div>
            <h3>College of Computer Studies</h3>
            <p>Central Philippine University</p>
          </div>
        </div>

        <div class="footer-links">
          <h4>Quick Links</h4>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/programs">Programs</RouterLink>
          <RouterLink to="/faculty">Faculty</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          © {{ new Date().getFullYear() }} Central Philippine University
          College of Computer Studies.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

:global(body) {
  margin: 0;
}

* {
  box-sizing: border-box;
}

.faculty-page {
  --dark-green: #123c35;
  --deep-green: #0b2925;
  --gold: #c7a45c;
  --light-gold: #e4d1a1;
  --cream: #f7f5ef;
  --text: #263b36;
  --muted: #6d7974;

  background: white;
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

/* NAVBAR */

.navbar {
  min-height: 88px;
  padding: 16px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  background: white;
  position: relative;
  z-index: 5;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--dark-green);
  text-decoration: none;
}

.brand-logo {
  width: 51px;
  height: 51px;
  object-fit: contain;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.brand-title {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

.brand-subtitle {
  color: #a17e39;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 29px;
}

.nav-links a {
  color: #4e5b56;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #a17e39;
}

/* HERO */

.hero {
  min-height: 400px;
  padding: 85px 8%;
  background: var(--deep-green);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 720px;
  position: relative;
  z-index: 1;
}

.eyebrow {
  color: var(--gold);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
}

.hero h1 {
  color: white;
  font-size: clamp(38px, 5vw, 62px);
  line-height: 1.12;
  margin: 20px 0;
  letter-spacing: -1.5px;
}

.hero h1 span,
.intro-section h2 span,
.dean-info h2 span {
  color: var(--gold);
}

.hero-content > p {
  max-width: 610px;
  margin-bottom: 28px;
  color: #d3dfda;
  font-size: 15px;
  line-height: 1.9;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  gap: 22px;
  padding: 14px 21px;
  background: var(--gold);
  color: var(--deep-green);
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  transition: background 0.2s;
}

.hero-button:hover,
.closing-button:hover {
  background: var(--light-gold);
}

.hero-button span {
  font-size: 19px;
}

.hero-circle {
  position: absolute;
  border: 1px solid rgba(199, 164, 92, 0.3);
  border-radius: 50%;
  pointer-events: none;
}

.circle-one {
  width: 370px;
  height: 370px;
  right: 7%;
  top: -95px;
}

.circle-two {
  width: 240px;
  height: 240px;
  right: 13%;
  bottom: -120px;
}

/* INTRODUCTION */

.intro-section {
  max-width: 850px;
  margin: 0 auto;
  padding: 85px 20px;
  text-align: center;
}

.section-label {
  display: block;
  margin-bottom: 15px;
  color: #a17e39;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2.5px;
}

.intro-section h2,
.dean-info h2,
.section-heading h2 {
  margin: 0 0 22px;
  color: var(--dark-green);
  font-size: clamp(28px, 3.5vw, 39px);
  line-height: 1.25;
  letter-spacing: -0.7px;
}

.intro-section > p {
  max-width: 740px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 14px;
  line-height: 2;
}

/* DEAN */

.dean-section {
  padding: 65px 7%;
  background: var(--cream);
}

.dean-card {
  max-width: 950px;
  margin: 0 auto;
  padding: 30px;
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) 1.2fr;
  align-items: center;
  gap: 45px;
  background: white;
  border: 1px solid #e9e5da;
}

.dean-photo {
  height: 330px;
  overflow: hidden;
  background: #e8e9df;
}

.dean-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.dean-info h2 {
  margin-bottom: 18px;
}

.dean-info h3 {
  margin: 0 0 12px;
  color: var(--dark-green);
  font-size: 21px;
  line-height: 1.5;
}

.dean-position {
  margin: 0 0 12px;
  color: #a17e39;
  font-size: 13px;
  font-weight: 700;
}

.dean-info > p:last-child {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.gold-line {
  width: 40px;
  height: 3px;
  margin: 18px 0;
  background: var(--gold);
}

/* PEOPLE SECTIONS */

.people-section {
  padding: 80px 7%;
}

.alternate-section {
  background: var(--cream);
}

.section-heading {
  max-width: 1200px;
  margin: 0 auto 38px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
}

.section-heading h2 {
  margin-bottom: 0;
}

.section-heading > p {
  max-width: 370px;
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.people-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.person-card {
  min-width: 0;
  overflow: hidden;
  background: white;
  border: 1px solid #e9e5da;
  transition:
    transform 0.25s,
    box-shadow 0.25s;
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(18, 60, 53, 0.09);
}

.person-photo {
  height: 235px;
  overflow: hidden;
  background: #e8e9df;
}

.person-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.3s;
}

.person-card:hover .person-photo img {
  transform: scale(1.04);
}

.person-info {
  padding: 21px;
}

.person-number {
  color: #a17e39;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1.2px;
  line-height: 1.6;
}

.person-info h3 {
  margin: 12px 0 0;
  color: var(--dark-green);
  font-size: 16px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.person-info .gold-line {
  margin: 15px 0;
}

.person-department {
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

/* CLOSING SECTION */

.closing-section {
  padding: 75px 8%;
  background: var(--dark-green);
  text-align: center;
}

.closing-section h2 {
  margin: 18px 0;
  color: white;
  font-size: clamp(30px, 4vw, 43px);
}

.closing-section > p {
  max-width: 600px;
  margin: 0 auto 27px;
  color: #d3dfda;
  font-size: 14px;
  line-height: 1.9;
}

.closing-button {
  display: inline-block;
  padding: 15px 22px;
  background: var(--gold);
  color: var(--deep-green);
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  transition: background 0.2s;
}

/* FOOTER */

.footer {
  padding: 42px 7% 0;
  background: #081f1c;
  color: #d3dfda;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 35px;
}

.footer-brand {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.footer-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.footer-brand h3 {
  margin: 3px 0 9px;
  color: white;
  font-size: 14px;
}

.footer-brand p {
  margin: 0;
  color: #aab9b2;
  font-size: 12px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.footer-links h4 {
  margin: 0 0 4px;
  color: var(--gold);
  font-size: 12px;
}

.footer-links a {
  color: #d3dfda;
  font-size: 12px;
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--gold);
}

.footer-bottom {
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: #aab9b2;
  font-size: 11px;
  line-height: 1.7;
}

/* RESPONSIVE DESIGN */

@media (max-width: 1000px) {
  .navbar {
    padding: 16px 5%;
    flex-wrap: wrap;
  }

  .nav-links {
    gap: 19px;
    flex-wrap: wrap;
  }

  .people-section,
  .dean-section {
    padding: 65px 5%;
  }

  .people-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 600px) {
  .navbar {
    justify-content: center;
  }

  .brand {
    width: 100%;
    justify-content: center;
  }

  .brand-title {
    font-size: 10px;
  }

  .brand-subtitle {
    font-size: 9px;
  }

  .nav-links {
    justify-content: center;
    gap: 14px;
  }

  .nav-links a {
    font-size: 12px;
  }

  .hero {
    min-height: 360px;
    padding: 65px 7%;
  }

  .hero-content > p {
    font-size: 13px;
  }

  .circle-one {
    right: -220px;
  }

  .circle-two {
    right: -100px;
  }

  .intro-section {
    padding: 65px 7%;
  }

  .dean-section,
  .people-section {
    padding: 55px 6%;
  }

  .dean-card {
    padding: 20px;
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .dean-photo {
    height: 300px;
  }

  .people-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .person-photo {
    height: 300px;
  }

  .footer-main {
    flex-direction: column;
  }

  .closing-section {
    padding: 60px 7%;
  }
}
</style>
