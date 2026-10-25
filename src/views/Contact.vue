
<script setup>
import { ref } from 'vue'
import ccsLogo from '../assets/ccs-logo.png'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

function submitMessage() {
  submitted.value = true
}
</script>

<template>
  <div class="contact-page">
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
        <RouterLink to="/faculty">Faculty</RouterLink>
        <RouterLink to="/contact" class="active">Contact</RouterLink>
      </nav>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-circle circle-one"></div>
      <div class="hero-circle circle-two"></div>

      <div class="hero-content">
        <span class="eyebrow">WE'RE HERE TO HELP</span>
        <h1>Get in <span>Touch</span></h1>
        <p>
          Have questions about our programs or the College of Computer
          Studies? Reach out to us and let us know how we can help.
        </p>

        <a href="#contact-details" class="hero-button">
          Contact Us <span>→</span>
        </a>
      </div>
    </section>

    <!-- INTRODUCTION -->
    <section class="intro-section">
      <span class="section-label">CONTACT THE COLLEGE</span>
      <h2>Let's Start a <span>Conversation</span></h2>
      <p>
        Whether you are a prospective student, a current Centralian,
        or someone interested in our college, we're glad to help you
        find the information you need.
      </p>
    </section>

    <!-- CONTACT DETAILS -->
    <section id="contact-details" class="contact-section">
      <div class="contact-layout">
        <div class="contact-information">
          <span class="section-label">CONTACT INFORMATION</span>
          <h2>We'd Love to <span>Hear From You</span></h2>

          <p class="contact-description">
            Have questions about the College of Computer Studies?
            Contact us through our official communication channels.
          </p>

          <!-- TELEPHONE -->
          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                  19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  19.79 19.79 0 0 1-3.07-8.67
                  A2 2 0 0 1 4.11 2h3
                  a2 2 0 0 1 2 1.72
                  c.12.96.36 1.9.7 2.8
                  a2 2 0 0 1-.45 2.11L8.09 9.91
                  a16 16 0 0 0 6 6l1.27-1.27
                  a2 2 0 0 1 2.11-.45
                  c.9.34 1.84.58 2.8.7
                  A2 2 0 0 1 22 16.92Z" />
              </svg>
            </div>

            <div>
              <h3>Telephone</h3>
              <p>329-1971 local 1094</p>
              <a class="contact-link" href="tel:3291971">
                Call the University
              </a>
            </div>
          </div>

          <!-- EMAIL -->
          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <div>
              <h3>CPU Mail</h3>
              <p>ccssec@cpu.edu.ph</p>
              <a class="contact-link" href="mailto:ccssec@cpu.edu.ph">
                Send an Email
              </a>
            </div>
          </div>

          <!-- FACEBOOK -->
          <div class="contact-item">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7
                  a1 1 0 0 1 1-1h3Z" />
              </svg>
            </div>

            <div>
              <h3>Social Media</h3>
              <p>College of Computer Studies - CPU</p>
              <a
                class="contact-link"
                href="https://www.facebook.com/groups/cpuccs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Facebook Group ↗
              </a>
            </div>
          </div>

          <div class="contact-note">
            <span class="note-mark">i</span>
            <p>
              For inquiries about programs, admissions, and other
              college-related concerns, please contact the College
              of Computer Studies directly.
            </p>
          </div>
        </div>

        <!-- MESSAGE FORM -->
        <div class="contact-form-card">
          <span class="section-label">SEND AN INQUIRY</span>
          <h2>Send Us a Message</h2>
          <p class="form-description">
            Fill out the form below to prepare your inquiry.
          </p>

          <form @submit.prevent="submitMessage">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="What is your inquiry about?"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-button">
              Prepare Message <span>→</span>
            </button>

            <p v-if="submitted" class="form-notice" role="status">
              Your message has been filled out, but this demo form
              does not send messages. Please email ccssec@cpu.edu.ph
              to submit your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- LOCATION -->
    <section class="location-section">
      <div class="location-heading">
        <span class="section-label">FIND US</span>
        <h2>Visit <span>Central Philippine University</span></h2>
        <p>
          Find the College of Computer Studies at Mary Thomas Hall,
          Central Philippine University, Jaro, Iloilo City.
        </p>
      </div>

      <div class="map-card">
        <div class="map-symbol">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        </div>

        <h3>College of Computer Studies - CPU</h3>
        <p>
          Mary Thomas Hall, Central Philippine University,
          Lopez Jaena St., Jaro, Iloilo City
        </p>

        <a
          href="https://www.google.com/maps/search/Mary+Thomas+Hall+Central+Philippine+University+Lopez+Jaena,+St.,+Jaro,+Iloilo+City/@10.732186,122.547843,18z?hl=en-US&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          class="map-button"
        >
          Get Directions on Google Maps ↗
        </a>
      </div>
    </section>

    <!-- CLOSING SECTION -->
    <section class="closing-section">
      <span class="eyebrow">CENTRAL PHILIPPINE UNIVERSITY</span>
      <h2>Ready to Explore Your Future?</h2>
      <p>
        Discover the programs offered by the College of Computer Studies
        and take the next step toward your academic goals.
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

.contact-page {
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
  min-height: 390px;
  padding: 80px 8%;
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
.contact-information h2 span,
.location-heading h2 span {
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
.closing-button:hover,
.map-button:hover {
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
  padding: 75px 20px;
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
.contact-information h2,
.location-heading h2 {
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

/* CONTACT SECTION */

.contact-section {
  padding: 75px 7%;
  background: var(--cream);
}

.contact-layout {
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: start;
  gap: 65px;
}

.contact-information {
  padding-top: 12px;
}

.contact-information h2 {
  font-size: clamp(28px, 3vw, 36px);
}

.contact-description {
  margin-bottom: 32px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 17px;
  margin-bottom: 26px;
}

.contact-icon {
  width: 46px;
  height: 46px;
  flex: 0 0 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-green);
  color: var(--gold);
}

.contact-icon svg {
  width: 22px;
  height: 22px;
}

.contact-item h3 {
  margin: 2px 0 8px;
  color: var(--dark-green);
  font-size: 15px;
}

.contact-item p {
  margin: 0 0 5px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.8;
}

.contact-link {
  display: inline-block;
  margin-top: 7px;
  color: #a17e39;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #123c35;
}

.contact-note {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 32px;
  padding: 17px;
  border-left: 3px solid var(--gold);
  background: white;
}

.note-mark {
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gold);
  border-radius: 50%;
  color: #a17e39;
  font-size: 12px;
  font-weight: 700;
}

.contact-note p {
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.8;
}

/* FORM */

.contact-form-card {
  padding: 35px;
  background: white;
  border: 1px solid #e9e5da;
  box-shadow: 0 12px 35px rgba(18, 60, 53, 0.04);
}

.contact-form-card h2 {
  margin: 0 0 10px;
  color: var(--dark-green);
  font-size: 26px;
}

.form-description {
  margin: 0 0 27px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 17px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 20px;
}

.form-group label {
  color: var(--dark-green);
  font-size: 12px;
  font-weight: 700;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #dedfd7;
  border-radius: 0;
  outline: none;
  background: #fcfcfa;
  color: var(--text);
  font: inherit;
  font-size: 12px;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(199, 164, 92, 0.12);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9ba39e;
}

.form-group textarea {
  min-height: 130px;
  resize: vertical;
}

.submit-button {
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: var(--dark-green);
  color: white;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-button:hover {
  background: var(--deep-green);
}

.submit-button span {
  color: var(--gold);
  font-size: 19px;
}

.form-notice {
  margin: 18px 0 0;
  padding: 13px;
  background: var(--cream);
  color: var(--dark-green);
  font-size: 12px;
  line-height: 1.8;
}

/* LOCATION */

.location-section {
  padding: 75px 7%;
}

.location-heading {
  max-width: 750px;
  margin: 0 auto 35px;
  text-align: center;
}

.location-heading > p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.8;
}

.map-card {
  max-width: 1000px;
  min-height: 280px;
  margin: 0 auto;
  padding: 45px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background:
    linear-gradient(rgba(18, 60, 53, 0.92), rgba(11, 41, 37, 0.95)),
    repeating-linear-gradient(
      45deg,
      #234d43,
      #234d43 1px,
      #173d34 1px,
      #173d34 20px
    );
  color: white;
}

.map-symbol {
  width: 55px;
  height: 55px;
  margin-bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gold);
  border-radius: 50%;
  color: var(--gold);
}

.map-symbol svg {
  width: 26px;
  height: 26px;
}

.map-card h3 {
  margin: 0 0 10px;
  font-size: 21px;
}

.map-card > p {
  max-width: 650px;
  margin: 0 0 22px;
  color: #d3dfda;
  font-size: 13px;
  line-height: 1.8;
}

.map-button {
  display: inline-block;
  padding: 13px 19px;
  background: var(--gold);
  color: var(--deep-green);
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  transition: background 0.2s;
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

  .contact-section,
  .location-section {
    padding: 60px 5%;
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 40px;
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
    min-height: 350px;
    padding: 60px 7%;
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
    padding: 60px 7%;
  }

  .contact-section,
  .location-section {
    padding: 55px 6%;
  }

  .contact-form-card {
    padding: 23px 18px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .contact-item {
    gap: 13px;
  }

  .map-card {
    min-height: 250px;
    padding: 35px 18px;
  }

  .map-card h3 {
    font-size: 18px;
  }

  .footer-main {
    flex-direction: column;
  }

  .closing-section {
    padding: 60px 7%;
  }
}
</style>
