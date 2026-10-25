<script setup>
import blisLogo from '../assets/blis-logo.jpg'

const objectives = [
  'Exhibit skills, knowledge and leadership to excel in their professional careers and related disciplines.',
  'Exhibit a high standard of professionalism and become effective members of multidisciplinary teams.',
  'Participate in scholarly activities, research and outreach that contribute to the improvement and transformation of society.',
  'Demonstrate ethical, professional and spiritual values, as well as social responsibility associated with their professions.',
  'Apply information and communication technologies to organize, manage, access, and deliver information services.',
]

const programOutcomes = [
  'Articulate and discuss the latest developments in their specific field of practice.',
  'Communicate effectively, orally and in writing, using both English and Filipino.',
  'Work effectively and independently in multidisciplinary and multicultural teams.',
  'Act with professional, social and ethical responsibility.',
  'Preserve and promote Filipino historical and cultural heritage.',
]

const graduateOutcomes = [
  { code: 'LIS01', text: 'Select, evaluate, organize, and disseminate print, multimedia, electronic, and digital information resources.' },
  { code: 'LIS02', text: 'Communicate orally and in writing using methods that help the intended audience understand the message.' },
  { code: 'LIS03', text: 'Demonstrate logical and systematic approaches to tasks.' },
  { code: 'LIS04', text: 'Formulate objectives, policies, and processes and manage resources while anticipating changes.' },
  { code: 'LIS05', text: 'Recognize, analyze, and solve problems, provide direction and assistance, and overcome barriers.' },
  { code: 'LIS06', text: 'Identify user needs through reference interviews, surveys, complaint logs, and other methods to evaluate and improve services.' },
  { code: 'LIS07', text: 'Work effectively in groups and contribute to team efforts.' },
  { code: 'LIS08', text: 'Understand library automation, computer hardware and software, peripherals, the internet, the web, and social networks.' },
  { code: 'LIS09', text: 'Develop information technology solutions such as library automation systems, websites, and email services.' },
  { code: 'LIS10', text: 'Conduct significant research projects that benefit a library or organization.' },
  { code: 'LIS11', text: 'Evaluate and discuss information policies, including copyright, plagiarism, cybercrimes, and ethical issues.' },
  { code: 'LIS12', text: 'Participate in continuing education and professional development activities.' },
]

const sections = [
  { id: 'objectives', label: 'Educational Objectives' },
  { id: 'outcomes', label: 'Program Outcomes' },
  { id: 'rationale', label: 'Curriculum Rationale' },
  { id: 'curriculum', label: 'Curriculum Description' },
  { id: 'skills', label: 'Core Skills' },
  { id: 'organization', label: 'Student Community' },
  { id: 'graduates', label: 'Graduate Outcomes' },
]

const knowledgeAreas = [
  'Information Resources and Services',
  'Collection Development',
  'Organization of Information',
  'Reference and Information Services',
  'Library Management',
  'Library Automation',
  'Database and Information Retrieval',
  'Web and Digital Information Services',
  'Research Methods',
  'Information Ethics and Policy',
]

const skills = [
  'Organizing and cataloging information resources',
  'Evaluating print and digital information',
  'Assisting users with information needs',
  'Managing library and information services',
  'Using library automation systems',
  'Developing websites and digital services',
  'Conducting research and evaluating information',
  'Promoting ethical information use',
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
          <img :src="blisLogo" alt="BLIS logo" />
        </div>
        <h1>Bachelor of Library and <span>Information Science</span></h1>
        <p class="hero-subtitle">BLIS</p>
        <p class="hero-description">
          The program trains students to apply information technology
          to basic library operations and functions.
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
          The program prepares students to organize and provide access to
          information resources, support users, and respond to changing
          information needs in libraries and other information environments.
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
          and lifelong learning skills needed to work with information and users.
        </p>
        <div class="outcome-list">
          <article v-for="(item, index) in programOutcomes" :key="item" class="outcome-card">
            <span class="outcome-letter">{{ String.fromCharCode(97 + index) }}</span>
            <p>{{ item }}</p>
          </article>
        </div>
        <p class="source-note">
          These general outcomes are based on the shared outcomes in the
          supplied academic program material.
        </p>
      </section>

      <section id="rationale" class="content-section">
        <p class="eyebrow">WHY THIS PROGRAM</p>
        <h2>Curriculum <span>Rationale</span></h2>
        <p>
          The supplied curriculum material describes an outcomes-based
          approach to Library and Information Science education. It identifies
          core competencies expected of graduates while allowing institutions
          to develop programs suited to their context and mission.
        </p>
        <p>
          Quality information services play an important role in helping
          library and information center users find, evaluate, and use
          information effectively.
        </p>
        <p>
          As technology and information needs continue to change, the
          program aims to prepare graduates to respond to evolving user
          expectations and the demands of an increasingly connected world.
        </p>
        <div class="highlight-banner">
          <h3>Connecting people with information</h3>
          <p>
            Develop the knowledge and skills to organize resources,
            support information discovery, and improve access to knowledge.
          </p>
        </div>
      </section>

      <section id="curriculum" class="content-section tinted">
        <p class="eyebrow">WHAT YOU WILL STUDY</p>
        <h2>Curriculum <span>Description</span></h2>
        <p>
          The LIS curriculum equips future professionals with the knowledge,
          skills, attitudes, and tools needed to respond to changing
          information needs in society.
        </p>
        <p>
          Its focus includes information resources, information organization,
          user services, management, research, and the use of technology
          to support library and information functions.
        </p>
        <div class="knowledge-grid">
          <article v-for="(area, index) in knowledgeAreas" :key="area" class="knowledge-card">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ area }}</p>
          </article>
        </div>
      </section>

      <section id="skills" class="content-section">
        <p class="eyebrow">KNOWLEDGE IN PRACTICE</p>
        <h2>Core <span>Skills</span></h2>
        <p class="section-intro">
          The supplied graduate outcomes emphasize information organization,
          user support, technology, research, and professional responsibility.
        </p>
        <div class="career-grid">
          <article v-for="skill in skills" :key="skill" class="career-card">
            <span class="career-symbol">✦</span>
            <h3>{{ skill }}</h3>
          </article>
        </div>
      </section>

      <section id="organization" class="content-section tinted">
        <p class="eyebrow">LEARN TOGETHER</p>
        <h2>Student <span>Community</span></h2>
        <p>
          Students can build their professional interests through collaborative
          activities, research, outreach, and participation in college and
          university events. These experiences can help develop teamwork,
          communication, and a commitment to serving information users.
        </p>
        <div class="organization-banner">
          <span class="organization-symbol">LIS</span>
          <div>
            <h3>Organize. Discover. Share.</h3>
            <p>
              Learn to connect people with reliable information and support
              access to knowledge through library and digital services.
            </p>
          </div>
        </div>
        <p class="source-note">
          The supplied material's student-organization description refers to
          the Computer Science Society. It does not confirm the official BLIS
          student organization's name, so one is not assigned here.
        </p>
      </section>

      <section id="graduates" class="content-section tinted">
        <p class="eyebrow">THE SKILLS YOU BUILD</p>
        <h2>Graduate <span>Outcomes</span></h2>
        <p class="section-intro">
          These outcomes are taken from the supplied Library and Information
          Science graduate-outcome list.
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
        <h2>Your future in information starts here.</h2>
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
  min-width: 58px;
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
