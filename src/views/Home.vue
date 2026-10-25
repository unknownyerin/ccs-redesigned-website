
<script setup>
import ccsLogo from '../assets/ccs-logo.png'
import warriorLogo from '../assets/warrior-logo.jpg'
</script>

<template>
  <div class="hero-page">
    <header class="navbar">
      <RouterLink to="/" class="brand">
        <img :src="ccsLogo" alt="College of Computer Studies logo" />
        <span>COLLEGE OF<br />COMPUTER STUDIES</span>
      </RouterLink>

      <nav class="nav-links">
        <RouterLink to="/" class="active">Home</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <a href="#programs">Academic Programs</a>
        <RouterLink to="/faculty">Faculty and Staff</RouterLink>
        <RouterLink to="/event-calendar">
  Event Calendar
</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
      </nav>
    </header>

    <main class="hero">
      <div class="hero-copy">
        <h1>
          <span>REMEMBER</span>
          <span class="gold">CONNECT</span>
          <span>ENGAGE</span>
          <span class="gold">BUILD</span>
          <span>SHARE</span>
        </h1>

        <p class="tagline">
          Different <strong>People</strong>, One <strong>Goal</strong>.
        </p>

        <a href="#programs" class="hero-button">
          Your <strong>FUTURE</strong> begins HERE
        </a>
      </div>

      <div class="hero-art">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="orbit orbit-three"></div>
        <div class="orbit orbit-four"></div>

        <img
          :src="warriorLogo"
          alt="College of Computer Studies Warriors logo"
          class="warrior-logo"
        />
      </div>

      <a href="#programs" class="scroll-indicator" aria-label="Scroll down">
        ↓
      </a>
    </main>

    <section id="programs" class="next-section">
      <p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p>
      <h2>Different People, One Goal.</h2>
      <p>Remember. Connect. Engage. Build. Share.</p>
    </section>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero-page {
  min-height: 100vh;
  color: #f7f7f2;
  background: #002c2b;
}

.navbar {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 94px;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 12px;
  border: 1px solid rgb(255 255 255 / 70%);
  border-radius: 4px;
  font-size: 11px;
  line-height: 1.5;
  font-weight: 700;
  flex-shrink: 0;
}

.brand img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(12px, 2vw, 27px);
  font-size: 12px;
  color: #e0e7e2;
}

.nav-links a {
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links .active {
  color: #c9a64f;
}

.hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  padding: 130px 6% 90px;
  background:
    radial-gradient(ellipse at 78% 48%, rgb(16 88 81 / 60%), transparent 50%),
    linear-gradient(110deg, #002322, #003d3b);
}

.hero::before,
.hero::after {
  content: "";
  position: absolute;
  width: 450px;
  height: 450px;
  border: 1px solid rgb(190 174 112 / 23%);
  border-radius: 50%;
  pointer-events: none;
}

.hero::before {
  left: -310px;
  bottom: -250px;
}

.hero::after {
  left: -335px;
  bottom: -275px;
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding-left: 1%;
}

.hero-copy h1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  font-size: clamp(38px, 5.1vw, 72px);
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 0.99;
}

.hero-copy h1 span {
  display: block;
}

.gold {
  color: #c9a64f;
}

.tagline {
  margin: 24px 0 28px;
  font-size: clamp(15px, 1.7vw, 21px);
  white-space: nowrap;
}

.tagline strong {
  color: #c9a64f;
}

.hero-button {
  display: inline-block;
  padding: 15px 24px;
  border: 1px solid #e4c76d;
  border-radius: 5px;
  background: linear-gradient(135deg, #d4b45a, #a98432);
  color: #172c27;
  font-size: 13px;
  box-shadow: 0 4px 18px rgb(0 0 0 / 15%);
  transition: transform 0.2s;
}

.hero-button:hover {
  transform: translateY(-3px);
}

.hero-art {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Soft teal glow behind the Warriors logo */
.hero-art::before {
  content: "";
  position: absolute;
  width: 72%;
  height: 72%;
  top: 14%;
  left: 14%;
  border-radius: 50%;
  background: #12605a;
  filter: blur(75px);
  opacity: 0.55;
  z-index: 0;
  pointer-events: none;
}

/* Softer circular decorations */
.orbit {
  position: absolute;
  width: 94%;
  height: 94%;
  border: 1px solid rgb(117 166 151 / 30%);
  border-radius: 50%;
}

.orbit-one {
  width: 100%;
  height: 100%;
}

.orbit-two {
  width: 84%;
  height: 84%;
  border-color: rgb(201 166 79 / 40%);
}

.orbit-three {
  width: 72%;
  height: 72%;
  border-color: rgb(100 157 147 / 30%);
}

.orbit-four {
  width: 60%;
  height: 60%;
  border-style: dashed;
  border-color: rgb(100 157 147 / 35%);
}

/* Blended shadow around the logo */
.warrior-logo {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 650px;
  height: auto;
  object-fit: contain;
  filter:
    drop-shadow(0 0 12px rgb(26 105 96 / 30%))
    drop-shadow(0 0 35px rgb(26 105 96 / 20%));
  mix-blend-mode: normal;
}

.scroll-indicator {
  position: absolute;
  right: 5%;
  bottom: 28px;
  display: flex;
  width: 25px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border: 1px solid #c9a64f;
  border-radius: 20px;
  color: #c9a64f;
  font-size: 20px;
}

.next-section {
  min-height: 260px;
  padding: 70px 20px;
  text-align: center;
  background: #f3f4ef;
  color: #123431;
}

.eyebrow {
  color: #a98432;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.next-section h2 {
  font-size: clamp(26px, 4vw, 40px);
}

.next-section p:last-child {
  color: #61716b;
}

@media (max-width: 850px) {
  .navbar {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 5%;
    background: #002c2b;
  }

  .nav-links {
    justify-content: flex-start;
  }

  .hero {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 65px 7% 75px;
  }

  .hero-copy h1 {
    font-size: clamp(44px, 9vw, 68px);
  }

  .hero-art {
    width: min(100%, 560px);
    margin: 0 auto;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-links {
    gap: 12px;
    font-size: 11px;
  }

  .brand {
    font-size: 10px;
  }

  .hero {
    padding-top: 50px;
  }

  .tagline {
    font-size: 15px;
  }

  .hero-button {
    font-size: 12px;
  }
}
</style>
