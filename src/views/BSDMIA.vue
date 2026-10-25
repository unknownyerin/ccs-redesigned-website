<script setup>
import dmiaLogo from '../assets/dmia-logo.jpg'

const objectives = [
  'Exhibit skills, knowledge and leadership to excel in their careers and related disciplines.',
  'Exhibit a high standard of professionalism and become effective members of multidisciplinary development teams.',
  'Participate in scholarly activities, research and outreach that contribute to the improvement and transformation of society.',
  'Demonstrate ethical, professional and spiritual values, as well as social responsibility associated with their careers.',
  'Exhibit proficiency in traditional and digital media arts, designing, developing and implementing digital media solutions for entertainment and corporate environments.',
]

const programOutcomes = [
  'Articulate and discuss the latest developments in their specific field of practice.',
  'Communicate effectively, orally and in writing, using both English and Filipino.',
  'Work effectively and independently in multidisciplinary and multicultural teams.',
  'Act with professional, social and ethical responsibility.',
  'Preserve and promote Filipino historical and cultural heritage.',
]

const computingOutcomes = [
  'Analyze complex problems and identify computing requirements for appropriate solutions.',
  'Apply computing and other knowledge domains to real-world problems.',
  'Design and develop computing solutions using a system-level perspective.',
  'Utilize modern computing tools.',
]

const graduateOutcomes = [
  { code: 'DMIA01', text: 'Apply knowledge of mathematics, digital media arts, exhibit and management, and media creation, delivery, and consumption according to field standards.' },
  { code: 'DMIA02', text: 'Identify user requirements and design, select, create, evaluate, and deliver digital-media and interactive-art solutions.' },
  { code: 'DMIA03', text: 'Design, merge, and bridge traditional arts with digital media.' },
  { code: 'DMIA04', text: 'Deliver and implement creative works and evaluate media consumption in entertainment and corporate environments.' },
  { code: 'DMIA05', text: 'Demonstrate current techniques, skills, tools, and practices.' },
  { code: 'DMIA06', text: 'Function effectively individually and as a member or leader of diverse teams.' },
  { code: 'DMIA07', text: 'Recognize professional, ethical, legal, security, and social issues and responsibilities.' },
  { code: 'DMIA08', text: 'Communicate effectively with diverse audiences.' },
  { code: 'DMIA09', text: 'Identify contemporary practices and issues in digital media arts.' },
  { code: 'DMIA10', text: 'Recognize the need for self-learning and continuous improvement.' },
]

const sections = [
  { id: 'objectives', label: 'Educational Objectives' },
  { id: 'outcomes', label: 'Program Outcomes' },
  { id: 'rationale', label: 'Curriculum Rationale' },
  { id: 'curriculum', label: 'Curriculum Description' },
  { id: 'careers', label: 'Career Opportunities' },
  { id: 'organization', label: 'Student Organization' },
  { id: 'graduates', label: 'Graduate Outcomes' },
]

const knowledgeAreas = [
  'Digital Art and Design',
  'Graphic Design',
  'Digital Storytelling',
  'Photography',
  'Video Editing and Production',
  'Animation',
  '3D Modeling',
  'Video Game Design',
  'Interactive Media',
  'Virtual Reality',
  'Digital Media Applications',
]

const careers = [
  'Multimedia Artist',
  'Graphic Designer',
  'Animator',
  'Game Designer',
  'Web Designer',
  'Digital Artist',
  'Art Director',
  'Advertising Executive',
  'Video and Film Production Artist',
  'Freelance Artist',
]
</script>

<template>
  <div class="program-page">
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

    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p>
        <div class="hero-logo">
          <img :src="dmiaLogo" alt="BSDMIA logo" />
        </div>
        <h1>Bachelor of Science in <span>Digital Media and Interactive Arts</span></h1>
        <p class="hero-subtitle">BSDMIA</p>
        <p class="hero-description">
          An academic program with a talent-centric curriculum for the
          high-end digital media industry.
        </p>
        <a href="#objectives" class="gold-button">EXPLORE THE PROGRAM ↓</a>
      </div>
      <div class="hero-circle circle-one"></div>
      <div class="hero-circle circle-two"></div>
    </section>

    <div class="section-navigation">
      <a v-for="section in sections" :key="section.id" :href="'#' + section.id">
        {{ section.label }}
      </a>
    </div>

    <main>
      <section id="objectives" class="content-section">
        <p class="eyebrow">OUR GOALS</p>
        <h2>Program Educational <span>Objectives</span></h2>
        <p class="section-intro">
          The program develops creative and responsible professionals who
          can combine artistic skills with digital technologies and
          contribute to the media and interactive arts industries.
        </p>
        <div class="objective-list">
          <article v-for="(item, index) in objectives" :key="item" class="objective-card">
            <span class="number">{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ item }}</p>
          </article>
        </div>
      </section>

      <section id="outcomes" class="content-section tinted">
        <p class="eyebrow">WHAT GRADUATES CAN DO</p>
        <h2>Program <span>Outcomes</span></h2>
        <p class="section-intro">
          Students develop communication, teamwork, professional responsibility,
          problem-solving, and computing abilities alongside their creative skills.
        </p>

        <h3>General Graduate Outcomes</h3>
        <div class="outcome-list">
          <article v-for="(item, index) in programOutcomes" :key="item" class="outcome-card">
            <span class="outcome-letter">{{ String.fromCharCode(97 + index) }}</span>
            <p>{{ item }}</p>
          </article>
        </div>

        <h3>Computing-Specific Outcomes</h3>
        <div class="outcome-list">
          <article v-for="(item, index) in computingOutcomes" :key="item" class="outcome-card">
            <span class="outcome-letter">{{ String.fromCharCode(97 + index) }}</span>
            <p>{{ item }}</p>
          </article>
        </div>
      </section>

      <section id="rationale" class="content-section">
        <p class="eyebrow">WHY THIS PROGRAM</p>
        <h2>Curriculum <span>Rationale</span></h2>
        <p>
          Technology continues to transform the arts and create new career
          opportunities. Digital media and interactive arts combine artistic
          expression, design, and technology to produce engaging visual and
          interactive experiences.
        </p>
        <p>
          The program introduces students to digital storytelling, visual
          design, time-based media, interactive experiences, animation,
          mobile communications, and video games.
        </p>
        <p>
          Students are introduced to industry-standard applications used
          in video editing, animation, 3D modeling, photography, graphic
          design, game design, and virtual reality. These skills can be
          applied across creative, commercial, and entertainment industries.
        </p>
        <div class="highlight-banner">
          <h3>Where art meets technology</h3>
          <p>
            Develop creative ideas into digital works that communicate,
            entertain, inform, and engage audiences.
          </p>
        </div>
      </section>

      <section id="curriculum" class="content-section tinted">
        <p class="eyebrow">WHAT YOU WILL EXPLORE</p>
        <h2>Curriculum <span>Description</span></h2>
        <p>
          The curriculum focuses on creativity, applied arts, and digital
          media technologies. It develops creative talents for industries
          such as entertainment, education, advertising, film, and corporate
          communications.
        </p>
        <p>
          Collaborative projects and practical creative work help students
          build the skills needed in the digital media industry.
        </p>
        <div class="knowledge-grid">
          <article v-for="(area, index) in knowledgeAreas" :key="area" class="knowledge-card">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ area }}</p>
          </article>
        </div>
      </section>

      <section id="careers" class="content-section">
        <p class="eyebrow">TURN CREATIVITY INTO A CAREER</p>
        <h2>Career <span>Opportunities</span></h2>
        <p class="section-intro">
          Digital media and interactive arts skills can be applied to a variety
          of creative and technology-related careers.
        </p>
        <div class="career-grid">
          <article v-for="career in careers" :key="career" class="career-card">
            <span class="career-symbol">✦</span>
            <h3>{{ career }}</h3>
          </article>
        </div>
        <p class="source-note">
          These are potential career paths listed or suggested by the supplied
          program material; actual opportunities depend on experience and qualifications.
        </p>
      </section>

      <section id="organization" class="content-section tinted">
        <p class="eyebrow">CREATE TOGETHER</p>
        <h2>Student <span>Organization</span></h2>
        <p>
          The Modern Interactive Digital Artists Society (MIDAS) is identified
          in the supplied program material as the organization for BSDMIA
          students. Its stated purpose is to help students develop their
          artistic identity, support exhibits and outreach activities, and
          increase public awareness of technology's impact on society.
        </p>
        <div class="organization-banner">
          <span class="organization-symbol">M</span>
          <div>
            <h3>Create. Collaborate. Inspire.</h3>
            <p>
              Share ideas, explore artistic expression, showcase creative work,
              and learn with fellow digital media artists.
            </p>
          </div>
        </div>
      </section>

      <section id="graduates" class="content-section tinted">
        <p class="eyebrow">THE SKILLS YOU BUILD</p>
        <h2>Graduate <span>Outcomes</span></h2>
        <p class="section-intro">
          These outcomes describe the creative, technical, communication,
          and professional abilities expected of BSDMIA graduates.
        </p>
        <div class="graduate-list">
          <article v-for="item in graduateOutcomes" :key="item.code" class="graduate-card">
            <span class="graduate-code">{{ item.code }}</span>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="next-step">
        <p class="eyebrow">EXPLORE MORE</p>
        <h2>Bring your creative ideas to life.</h2>
        <p>Explore the other academic programs offered by the College of Computer Studies.</p>
        <RouterLink to="/programs" class="gold-button">VIEW ALL PROGRAMS →</RouterLink>
      </section>
    </main>

    <footer class="footer">
      <img src="../assets/ccs-logo.png" alt="CCS Logo" />
      <p>College of Computer Studies</p>
      <span>Learn. Create. Innovate.</span>
    </footer>
  </div>
</template>

<style scoped>
.program-page {
  min-height: 100vh;
  color: #23433c;
  background: #f8f8f3;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 15px 6%;
  background: white;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #06463e;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
}

.brand img {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

.navbar nav {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 20px;
}

.navbar nav a {
  color: #29443e;
  font-size: 12px;
  text-decoration: none;
}

.navbar nav a:hover,
.navbar nav a.active {
  color: #b18a36;
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 65px 9%;
  color: white;
  background: #063d36;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 13px;
  color: #b18a36;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.hero-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  margin: 22px 0;
}

.hero-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.hero h1 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(32px, 5vw, 54px);
  line-height: 1.2;
}

.hero h1 span {
  color: #c8a653;
}

.hero-subtitle {
  color: #c8a653;
  font-size: 22px;
  font-weight: 800;
}

.hero-description {
  max-width: 570px;
  color: #e0e9e4;
  line-height: 1.8;
}

.gold-button {
  display: inline-block;
  margin-top: 18px;
  padding: 14px 20px;
  border: none;
  color: #123d35;
  background: #c8a653;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
}

.gold-button:hover {
  background: #e3c879;
}

.hero-circle {
  position: absolute;
  border: 1px solid rgba(200, 166, 83, 0.35);
  border-radius: 50%;
}

.circle-one {
  top: -110px;
  right: 5%;
  width: 360px;
  height: 360px;
}

.circle-two {
  right: 12%;
  bottom: -150px;
  width: 270px;
  height: 270px;
}

.section-navigation {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px 22px;
  padding: 18px 5%;
  background: white;
  border-bottom: 1px solid #e9e6dc;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.section-navigation a {
  color: #29483f;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.section-navigation a:hover {
  color: #b18a36;
}

.content-section {
  max-width: 1100px;
  margin: auto;
  padding: 75px 7%;
  scroll-margin-top: 90px;
}

.content-section h2,
.next-step h2 {
  margin: 0 0 20px;
  color: #123f36;
  font-size: clamp(27px, 4vw, 39px);
  line-height: 1.25;
}

.content-section h2 span {
  color: #b18a36;
}

.content-section h3 {
  margin: 30px 0 18px;
  color: #123f36;
  font-size: 20px;
}

.content-section > p:not(.eyebrow):not(.section-intro):not(.source-note) {
  color: #566b63;
  line-height: 1.9;
}

.section-intro {
  max-width: 720px;
  margin-bottom: 28px;
  color: #65736c;
  line-height: 1.8;
}

.tinted {
  max-width: none;
  padding-right: max(7%, calc((100% - 946px) / 2));
  padding-left: max(7%, calc((100% - 946px) / 2));
  background: #eeefe8;
}

.objective-list,
.outcome-list,
.graduate-list {
  display: grid;
  gap: 13px;
}

.objective-card,
.outcome-card,
.graduate-card {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 21px;
  background: white;
  border: 1px solid #e9e7de;
  border-radius: 8px;
}

.objective-card p,
.outcome-card p,
.graduate-card p {
  margin: 0;
  color: #566b63;
  font-size: 14px;
  line-height: 1.8;
}

.number,
.outcome-letter {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: #123f36;
  background: #eee2bd;
  border-radius: 50%;
  font-weight: 800;
}

.knowledge-grid,
.career-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 28px;
}

.knowledge-card {
  display: flex;
  align-items: center;
  gap: 15px;
  min-height: 82px;
  padding: 18px;
  background: white;
  border-radius: 8px;
}

.knowledge-card span {
  color: #b18a36;
  font-size: 18px;
  font-weight: 800;
}

.knowledge-card p {
  margin: 0;
  color: #29483f;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
}

.career-card {
  padding: 22px;
  background: white;
  border: 1px solid #e9e7de;
  border-radius: 8px;
}

.career-symbol {
  color: #b18a36;
  font-size: 24px;
}

.career-card h3 {
  margin: 12px 0 0;
  font-size: 16px;
}

.source-note {
  margin-top: 25px;
  color: #6b756e;
  font-size: 12px;
  line-height: 1.7;
}

.highlight-banner,
.organization-banner {
  margin-top: 28px;
  padding: 28px;
  color: white;
  background: #063d36;
  border-radius: 10px;
}

.highlight-banner h3 {
  margin: 0 0 12px;
  color: #c8a653;
}

.highlight-banner p {
  margin: 0;
  color: #e0e9e4;
  line-height: 1.8;
}

.organization-banner {
  display: flex;
  align-items: center;
  gap: 22px;
}

.organization-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  color: #123f36;
  background: #c8a653;
  border-radius: 50%;
  font-size: 24px;
  font-weight: 900;
}

.organization-banner h3 {
  margin: 0 0 10px;
  color: white;
}

.organization-banner p {
  margin: 0;
  color: #e0e9e4;
  font-size: 14px;
  line-height: 1.8;
}

.graduate-code {
  flex-shrink: 0;
  min-width: 65px;
  padding: 9px 8px;
  color: #123f36;
  background: #eee2bd;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 800;
  text-align: center;
}

.next-step {
  padding: 70px 8%;
  color: white;
  background: #0a463d;
  text-align: center;
}

.next-step h2 {
  color: white;
}

.next-step > p:not(.eyebrow) {
  max-width: 600px;
  margin: 0 auto;
  color: #e0e9e4;
  line-height: 1.8;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  color: white;
  background: #032f2a;
  text-align: center;
}

.footer img {
  width: 55px;
  height: 55px;
  object-fit: contain;
}

.footer p {
  margin: 10px 0 5px;
  font-weight: 700;
}

.footer span {
  color: #c8a653;
  font-size: 12px;
}

@media (max-width: 800px) {
  .navbar {
    flex-direction: column;
  }

  .navbar nav {
    justify-content: center;
  }

  .section-navigation {
    position: static;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 45px 7%;
  }

  .content-section {
    padding: 52px 6%;
  }

  .tinted {
    padding-right: 6%;
    padding-left: 6%;
  }

  .knowledge-grid,
  .career-grid {
    grid-template-columns: 1fr;
  }

  .objective-card,
  .outcome-card,
  .graduate-card {
    gap: 12px;
    padding: 16px;
  }

  .organization-banner {
    align-items: flex-start;
    flex-direction: column;
    padding: 22px;
  }

  .section-navigation {
    gap: 14px;
  }
}
</style>
