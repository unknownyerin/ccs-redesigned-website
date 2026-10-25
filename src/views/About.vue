
<script setup>
import ccsLogo from '../assets/ccs-logo.png'
import warriorLogo from '../assets/warrior-logo.jpg'
</script>

<template>
  <div class="about-page">
    <!-- Navigation -->
    <header class="navbar">
      <RouterLink to="/" class="brand">
        <img :src="ccsLogo" alt="CCS logo" />
        <span>COLLEGE OF<br />COMPUTER STUDIES</span>
      </RouterLink>

      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about" class="active">About Us</RouterLink>
        <RouterLink to="/programs">Academic Programs</RouterLink>
        <RouterLink to="/faculty">Faculty and Staff</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
        <RouterLink to="/event-calendar">Event Calendar</RouterLink>
      </nav>
    </header>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">CENTRAL PHILIPPINE UNIVERSITY</p>
        <h1>ABOUT <span>OUR COLLEGE</span></h1>
        <p>
          Discover the history, purpose, and community of the
          College of Computer Studies.
        </p>
        <a href="#history" class="gold-button">
          Explore Our History <span>→</span>
        </a>
      </div>

      <div class="hero-art">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="orbit orbit-three"></div>
        <img :src="warriorLogo" alt="CCS Warriors emblem" />
        <p>REMEMBER. CONNECT. ENGAGE. BUILD. SHARE.</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="intro section">
      <div class="section-label">WHO WE ARE</div>

      <div class="intro-grid">
        <h2>
          Different People.
          <span>One Goal.</span>
        </h2>

        <div>
          <p>
            The College of Computer Studies at Central Philippine
            University has a history rooted in the development
            of computer science and information-related education.
          </p>
          <p>
            From its beginnings as a Computer Science program in
            1995, the college grew through the introduction of
            new degree programs, organizational changes, and
            developments in academic facilities and accreditation.
          </p>
        </div>
      </div>
    </section>

    <!-- History Timeline -->
    <section id="history" class="history section">
      <div class="section-heading">
        <p class="eyebrow">OUR JOURNEY</p>
        <h2>A History of Growth</h2>
        <p>
          Explore the milestones that shaped the College of
          Computer Studies through the years.
        </p>
      </div>

      <div class="timeline">
        <article class="timeline-item">
          <div class="year">1995</div>
          <div class="timeline-card">
            <h3>The Beginning of Computer Science</h3>
            <p>
              The Bachelor of Science in Computer Science (BSCS)
              program began under the College of Commerce.
              Its first batch had two sections with approximately
              100 students, headed by Prof. Mary O' T. Penetrante.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2001–2002</div>
          <div class="timeline-card">
            <h3>A New Academic Home</h3>
            <p>
              During the first semester, the Computer Science
              Department transferred to the College of Engineering
              alongside the newly offered Bachelor of Science
              in Software Engineering (BSSE). It became the
              Software Engineering and Computer Science Department,
              headed by Engr. Cirilo C. Calibjo, PEE.
              Meanwhile, the Bachelor in Information Science
              and Management (BISM), developed by Prof. Aquiles
              Sansing, was offered under the College of Commerce.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2002–2003</div>
          <div class="timeline-card">
            <h3>The College of Computer Studies Is Established</h3>
            <p>
              A proposal to bring BSCS, BSISM, and the new
              Bachelor of Science in Information Technology
              (BSIT) under one college was approved by the
              university. The College of Computer Studies began.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2003–2004</div>
          <div class="timeline-card">
            <h3>First Dean and New Home</h3>
            <p>
              Engr. Cirilo C. Calibjo became the first Dean.
              The new college was housed in the Mary Thomas Building.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2004</div>
          <div class="timeline-card">
            <h3>Graduate Studies Expand</h3>
            <p>
              The Master in Computer Science (MCS) and Master
              of Science in Computer Science (MSCS) programs
              were approved for offering.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2006–2007</div>
          <div class="timeline-card">
            <h3>Leadership Transition</h3>
            <p>
              When Engr. Calibjo went to the University of the
              Philippines Diliman to pursue doctoral studies
              in Electrical Engineering, Prof. Rodney A. Gicana
              was appointed Officer-in-Charge.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2011</div>
          <div class="timeline-card">
            <h3>Accreditation Journey Begins</h3>
            <p>
              The college applied for PAASCU accreditation and
              underwent a preliminary visit. Improvements to
              facilities and educational standards followed.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2014</div>
          <div class="timeline-card">
            <h3>New Program and Accreditation Preparation</h3>
            <p>
              A PAASCU consultancy visit was conducted in
              preparation for a formal accreditation visit.
              The Bachelor of Science in Digital Media and
              Interactive Arts (BSDMIA) was also established.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2015</div>
          <div class="timeline-card">
            <h3>Level 1 Accreditation</h3>
            <p>
              Following a formal PAASCU visit in March,
              the BSCS, BSIT, and BSIS programs were granted
              Level 1 status in June.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2016</div>
          <div class="timeline-card">
            <h3>New Officer-in-Charge</h3>
            <p>
              Prof. Rea P. Balontong was appointed
              Officer-in-Charge of the College of Computer Studies.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2018</div>
          <div class="timeline-card">
            <h3>BLIS Joins the College</h3>
            <p>
              The Bachelor of Science in Library and Information
              Science (BLIS) program moved to the College of
              Computer Studies.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2018–2019</div>
          <div class="timeline-card">
            <h3>Leadership and Continued Development</h3>
            <p>
              Prof. Ma. Christina A. Quijano was appointed
              Officer-in-Charge at the beginning of the academic
              year and was identified in the supplied history
              as Acting Dean for AY 2021–2022.
            </p>
          </div>
        </article>

        <article class="timeline-item">
          <div class="year">2019</div>
          <div class="timeline-card">
            <h3>Re-accreditation Milestone</h3>
            <p>
              A PAASCU re-survey visit took place on
              September 16–18. The BSCS, BSIT, and BSIS
              programs were granted five-year Level 1
              re-accredited status. The BLIS program also
              underwent a PACUCOA accreditation orientation
              in October.
            </p>
          </div>
        </article>
      </div>

      <p class="history-note">
        This timeline is based on the historical information
        supplied for this website. The original material also
        described a BLIS preliminary survey as planned for 2020;
        it did not confirm its eventual outcome.
      </p>
    </section>

    <!-- Vision and Mission -->
    <section class="purpose section">
      <div class="section-heading">
        <p class="eyebrow">OUR DIRECTION</p>
        <h2>Vision and Mission</h2>
        <p>
          The vision and mission that guide the College of
          Computer Studies.
        </p>
      </div>

      <div class="purpose-grid">
        <article class="purpose-card vision-card">
          <div class="card-symbol">◎</div>
          <p class="card-label">OUR VISION</p>
          <h3>Academic Excellence</h3>
          <p>
            The College of Computer Studies is founded on the
            vision of academic excellence in Information
            Technology Education and responsive to the needs
            of the total person and the world.
          </p>
        </article>

        <article class="purpose-card mission-card">
          <div class="card-symbol">✦</div>
          <p class="card-label">OUR MISSION</p>
          <h3>Education for the Future</h3>
          <p>
            A College of the future with a mission to educate
            students with the Christian principles and practices
            of computer studies, preparing them to advance studies,
            careers in software development, computing systems
            technology, information management, and for a
            lifetime learning.
          </p>
        </article>
      </div>
    </section>

    <!-- Quality Policy -->
    <section class="quality section">
      <div class="quality-mark">CCS</div>

      <div class="quality-content">
        <p class="eyebrow">OUR COMMITMENT</p>
        <h2>Quality Policy</h2>
        <p>
          To fulfill the mission and realize the vision of
          Central Philippine University, we commit to consistently
          provide superior quality services by integrating
          Christian values, academic excellence, highest level
          of professionalism, and quality consideration in every
          aspect of our operations.
        </p>
        <p>
          We maintain a quality management system that complies
          with international quality management system standards.
          We continually improve to achieve global excellence
          that satisfies the expectations of the university
          community, partner institutions, and the general public.
        </p>
      </div>
    </section>

    <!-- Dean's Message -->
    <section class="dean-section section">
      <div class="dean-heading">
        <p class="eyebrow">A MESSAGE TO OUR STUDENTS</p>
        <h2>Message from the Dean</h2>
      </div>

      <div class="dean-message">
        <span class="quote-mark">“</span>

        <p>
          In every school year for the College of Computer Studies,
          we look forward with great anticipation to the
          contributions the new class will make to campus life.
          In both the aspect of academic and non academic, each
          students is unique enough to achieve whatever they want
          to reach for in our college.
        </p>

        <p>
          The primary focus of CCS is teaching and learning.
          Our undergraduates are encouraged to think about their
          education as a whole, rather than just a term taken one
          thing at a time, and the different faculty members work
          with them not only during the start of the school year,
          but throughout the whole as well.
        </p>

        <p>
          Learning and growth with us does not always come in
          classroom and academic experiences. Other kinds of
          opportunities abound, not the least of them the daily
          occasions for friendship and fellowship with people
          from many different backgrounds and with a wide variety
          of interests. In addition, students participate in rich
          and varied extracurricular activities that the College
          and University has got to offer.
        </p>

        <p>
          As another year starts, a new challenge comes for each
          and everyone with us. Take this into your mind and hearts
          and be able to reach the dream that you have ever dreamt
          to succeed. Welcome dear students and have a great
          school year ahead of you.
        </p>

        <div class="dean-signature">
          <strong>Ma. Christina A. Quijano, MSCS</strong>
          <span>Dean</span>
        </div>
      </div>
    </section>

    <!-- Academic Programs -->
    <section id="programs" class="programs">
      <p class="eyebrow">EXPLORE YOUR POSSIBILITIES</p>
      <h2>Your Future Begins Here.</h2>
      <p>Discover the academic programs of the college.</p>

      <div class="program-links">
        <RouterLink to="/programs/bsit">BSIT <span>↗</span></RouterLink>
        <RouterLink to="/programs/bscs">BSCS <span>↗</span></RouterLink>
        <RouterLink to="/programs/bsdmia">BSDMIA <span>↗</span></RouterLink>
        <RouterLink to="/programs/blis">BLIS <span>↗</span></RouterLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <RouterLink to="/" class="footer-brand">
        COLLEGE OF COMPUTER STUDIES
      </RouterLink>
      <p>REMEMBER. CONNECT. ENGAGE. BUILD. SHARE.</p>
      <RouterLink to="/" class="back-home">Back to Home ↑</RouterLink>
    </footer>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.about-page {
  font-family: Arial, Helvetica, sans-serif;
  color: #183b36;
  background: #f3f4ef;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Navigation */
.navbar {
  position: relative;
  z-index: 5;
  min-height: 94px;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  color: #f7f7f2;
  background: #002c2b;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 12px;
  border: 1px solid rgb(255 255 255 / 60%);
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

.nav-links a:hover,
.nav-links .active {
  color: #c9a64f;
}

/* Hero */
.hero {
  position: relative;
  overflow: hidden;
  min-height: 470px;
  padding: 75px 8%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 35px;
  color: #f7f7f2;
  background:
    radial-gradient(ellipse at 78% 48%, rgb(16 88 81 / 60%), transparent 50%),
    linear-gradient(110deg, #002322, #003d3b);
}

.hero-copy,
.hero-art {
  position: relative;
  z-index: 1;
}

.eyebrow {
  color: #c9a64f;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 1.8;
}

.hero h1 {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 20px 0;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1.05;
  letter-spacing: -2px;
}

.hero h1 span {
  color: #c9a64f;
}

.hero-copy > p:not(.eyebrow) {
  max-width: 440px;
  color: #dce7e1;
  font-size: 14px;
  line-height: 1.9;
}

.gold-button {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  padding: 15px 22px;
  border-radius: 4px;
  color: #183b36;
  background: #c9a64f;
  font-size: 13px;
  font-weight: 700;
  transition: transform 0.2s;
}

.gold-button:hover {
  transform: translateY(-3px);
}

.gold-button span {
  font-size: 19px;
}

.hero-art {
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
}

.hero-art img {
  position: relative;
  z-index: 1;
  width: min(85%, 330px);
  max-height: 320px;
  object-fit: contain;
  filter: drop-shadow(0 0 25px rgb(25 103 94 / 25%));
}

.hero-art > p {
  position: relative;
  z-index: 1;
  color: #d8c17f;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.8;
}

.orbit {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px solid rgb(201 166 79 / 30%);
  border-radius: 50%;
}

.orbit-two {
  width: 360px;
  height: 360px;
  border-color: rgb(255 255 255 / 15%);
}

.orbit-three {
  width: 420px;
  height: 420px;
  border-color: rgb(201 166 79 / 12%);
}

/* Shared sections */
.section {
  padding: 85px 9%;
}

.section-label {
  margin-bottom: 30px;
  color: #a98432;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.section-heading {
  max-width: 650px;
  margin: 0 auto 50px;
  text-align: center;
}

.section-heading h2,
.quality h2,
.dean-heading h2,
.programs h2 {
  margin: 12px 0;
  font-size: clamp(30px, 4vw, 43px);
  letter-spacing: -1px;
  line-height: 1.2;
}

.section-heading > p:last-child {
  color: #64716a;
  font-size: 14px;
  line-height: 1.8;
}

/* Introduction */
.intro {
  background: #f3f4ef;
}

.intro-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 65px;
}

.intro-grid h2 {
  margin: 0;
  color: #123b35;
  font-size: clamp(33px, 4vw, 48px);
  line-height: 1.2;
  letter-spacing: -1.5px;
}

.intro-grid h2 span {
  display: block;
  color: #a98432;
}

.intro-grid p {
  margin-top: 0;
  margin-bottom: 18px;
  color: #5d6d66;
  font-size: 14px;
  line-height: 1.9;
}

/* History Timeline */
.history {
  background: #e8ece5;
}

.timeline {
  position: relative;
  max-width: 850px;
  margin: 0 auto;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 15px;
  bottom: 15px;
  left: 91px;
  width: 2px;
  background: #c9a64f;
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  gap: 35px;
  margin-bottom: 25px;
}

.year {
  padding-top: 24px;
  color: #987629;
  font-size: 13px;
  font-weight: 800;
  text-align: right;
}

.timeline-card {
  position: relative;
  padding: 25px 28px;
  border: 1px solid #d9dfd5;
  border-radius: 5px;
  background: #fffefa;
  box-shadow: 0 5px 18px rgb(0 0 0 / 3%);
}

.timeline-card::before {
  content: "";
  position: absolute;
  top: 28px;
  left: -43px;
  width: 13px;
  height: 13px;
  border: 3px solid #e8ece5;
  border-radius: 50%;
  background: #a98432;
}

.timeline-card h3 {
  margin: 0 0 12px;
  color: #123b35;
  font-size: 18px;
  line-height: 1.5;
}

.timeline-card p {
  margin: 0;
  color: #5d6d66;
  font-size: 13px;
  line-height: 1.9;
}

.history-note {
  max-width: 850px;
  margin: 35px auto 0;
  color: #64716a;
  font-size: 11px;
  line-height: 1.8;
}

/* Vision and Mission */
.purpose {
  background: #f8f8f3;
}

.purpose-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.purpose-card {
  min-height: 310px;
  padding: 35px;
  border-radius: 5px;
}

.vision-card {
  color: #183b36;
  background: #e8ece5;
  border-top: 4px solid #c9a64f;
}

.mission-card {
  color: #f7f7f2;
  background: #003532;
  border-top: 4px solid #c9a64f;
}

.card-symbol {
  margin-bottom: 20px;
  color: #c9a64f;
  font-size: 34px;
}

.card-label {
  color: #b08e3e;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.purpose-card h3 {
  margin: 12px 0;
  font-size: 23px;
}

.purpose-card > p:last-child {
  font-size: 13px;
  line-height: 2;
  opacity: 0.9;
}

/* Quality Policy */
.quality {
  display: grid;
  grid-template-columns: 0.35fr 1.65fr;
  align-items: start;
  gap: 45px;
  color: #f7f7f2;
  background: #002c2b;
}

.quality-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 1px solid rgb(201 166 79 / 60%);
  border-radius: 50%;
  color: #c9a64f;
  font-size: 27px;
  font-weight: 900;
  letter-spacing: 2px;
}

.quality h2 {
  color: #f7f7f2;
}

.quality-content > p:not(.eyebrow) {
  color: #d2ded7;
  font-size: 14px;
  line-height: 2;
}

/* Dean's Message */
.dean-section {
  background: #f3f4ef;
}

.dean-heading {
  margin-bottom: 35px;
  text-align: center;
}

.dean-message {
  position: relative;
  max-width: 850px;
  margin: 0 auto;
  padding: 45px;
  border: 1px solid #ded9c7;
  border-radius: 5px;
  background: #fffefa;
  box-shadow: 0 8px 30px rgb(0 0 0 / 4%);
}

.quote-mark {
  display: block;
  height: 45px;
  color: #c9a64f;
  font-family: Georgia, serif;
  font-size: 75px;
  line-height: 1;
}

.dean-message > p {
  color: #53645c;
  font-size: 13px;
  line-height: 2;
}

.dean-signature {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ded9c7;
}

.dean-signature strong {
  color: #123b35;
  font-size: 14px;
}

.dean-signature span {
  color: #a98432;
  font-size: 12px;
}

/* Programs */
.programs {
  padding: 70px 9%;
  text-align: center;
  color: #f7f7f2;
  background:
    radial-gradient(ellipse at 50% 100%, rgb(18 96 90 / 40%), transparent 65%),
    #003532;
}

.programs h2 {
  color: #fff;
}

.programs > p:not(.eyebrow) {
  color: #d2ded7;
  font-size: 14px;
}

.program-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 13px;
  max-width: 850px;
  margin: 35px auto 0;
}

.program-links a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid rgb(201 166 79 / 55%);
  border-radius: 4px;
  color: #f7f7f2;
  font-size: 13px;
  font-weight: 800;
  transition: background 0.2s, color 0.2s;
}

.program-links a span {
  color: #c9a64f;
  font-size: 18px;
}

.program-links a:hover {
  color: #123b35;
  background: #c9a64f;
}

.program-links a:hover span {
  color: #123b35;
}

/* Footer */
.footer {
  padding: 28px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  color: #e4eae5;
  background: #001f1e;
}

.footer-brand {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
}

.footer > p {
  color: #c9a64f;
  font-size: 9px;
  letter-spacing: 1px;
}

.back-home {
  font-size: 12px;
}

.back-home:hover {
  color: #c9a64f;
}

/* Responsive */
@media (max-width: 900px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    gap: 15px;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .hero-art {
    min-height: 280px;
  }

  .intro-grid {
    gap: 35px;
  }

  .quality {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .quality-mark {
    width: 85px;
    height: 85px;
  }

  .program-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .nav-links {
    gap: 12px;
    font-size: 11px;
  }

  .hero {
    padding: 60px 7%;
  }

  .hero h1 {
    font-size: 42px;
  }

  .section {
    padding: 60px 7%;
  }

  .intro-grid,
  .purpose-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .timeline::before {
    left: 0;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-left: 22px;
  }

  .year {
    padding-top: 0;
    text-align: left;
  }

  .timeline-card::before {
    top: -28px;
    left: -28px;
  }

  .timeline-card {
    padding: 22px;
  }

  .purpose-card {
    padding: 28px;
  }

  .dean-message {
    padding: 25px;
  }

  .program-links {
    grid-template-columns: 1fr 1fr;
  }

  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
