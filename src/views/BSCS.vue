<script setup>
import cssLogo from '../assets/css-logo.jpg'

const objectives = [
  'Exhibit skills, knowledge and leadership to excel in their computing careers and related disciplines.',
  'Exhibit a high standard of professionalism and become effective members of multidisciplinary development teams.',
  'Participate in scholarly activities, research and outreach that contribute to the improvement and transformation of society.',
  'Demonstrate ethical, professional and spiritual values, as well as social responsibility associated with their computing careers.',
  'Develop knowledge and skills in computing, software design, algorithms, and emerging technologies.',
]

const programOutcomes = [
  'Articulate and discuss the latest developments in their specific field of practice.',
  'Communicate effectively, orally and in writing, using both English and Filipino.',
  'Work effectively and independently in multidisciplinary and multicultural teams.',
  'Act with professional, social and ethical responsibility.',
  'Preserve and promote Filipino historical and cultural heritage.',
]

const computingOutcomes = [
  'Analyze complex problems and identify the computing requirements needed to design appropriate solutions.',
  'Apply computing and other knowledge domains to address real-world problems.',
  'Design and develop computing solutions using a system-level perspective.',
  'Utilize modern computing tools.',
]

const knowledgeAreas = [
  'Algorithms and Complexity',
  'Architecture and Organization',
  'Discrete Structures',
  'Human Computer Interaction',
  'Information Assurance and Security',
  'Networks and Communications',
  'Operating Systems',
  'Programming Languages: Design and Implementation',
  'Software Development Fundamentals',
  'Software Engineering',
  'Social Issues and Professional Practice',
]

const graduateOutcomes = [
  { code: 'CS01', text: 'Apply computing fundamentals, specialization knowledge, mathematics, science, and domain knowledge to abstract and conceptualize computing models from problems and requirements.' },
  { code: 'CS02', text: 'Identify, analyze, formulate, research, and solve complex computing problems using mathematical and computing principles.' },
  { code: 'CS03', text: 'Apply mathematical foundations, algorithmic principles, and computer science theory in modeling and designing computer systems while understanding trade-offs.' },
  { code: 'CS04', text: 'Understand information security issues in the design, development, and use of information systems.' },
  { code: 'CS05', text: 'Design and evaluate solutions to complex computing problems, systems, components, and processes while considering public health, safety, cultural, societal, and environmental factors.' },
  { code: 'CS06', text: 'Create, select, adapt, and apply techniques, resources, and modern computing tools to complex computing activities while understanding their limitations.' },
  { code: 'CS07', text: 'Function effectively individually and as a member or leader of diverse multidisciplinary teams.' },
  { code: 'CS08', text: 'Communicate complex computing activities effectively through reports, documentation, presentations, and clear instructions.' },
  { code: 'CS09', text: 'Recognize legal, social, ethical, and professional issues in computer technology and apply appropriate practices.' },
  { code: 'CS10', text: 'Recognize the need and ability for independent lifelong learning.' },
]

const sections = [
  { id: 'objectives', label: 'Educational Objectives' },
  { id: 'outcomes', label: 'Program Outcomes' },
  { id: 'rationale', label: 'Curriculum Rationale' },
  { id: 'curriculum', label: 'Curriculum Description' },
  { id: 'organization', label: 'Student Organization' },
  { id: 'graduates', label: 'Graduate Outcomes' },
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
          <img :src="cssLogo" alt="BSCS logo" />
        </div>

        <h1>Bachelor of Science in <span>Computer Science</span></h1>
        <p class="hero-subtitle">BSCS</p>

        <p class="hero-description">
          An academic program focused on computing concepts, algorithms,
          software design, and the development of innovative computing solutions.
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

    <main class="content">
      <section id="objectives" class="content-section">
        <p class="eyebrow">OUR GOALS</p>
        <h2>Program Educational <span>Objectives</span></h2>

        <p class="section-intro">
          The program aims to develop knowledgeable, responsible, and
          skilled computing professionals prepared for teamwork, research,
          professional practice, and lifelong learning.
        </p>

        <div class="objective-list">
          <article
            v-for="(objective, index) in objectives"
            :key="objective"
            class="objective-card"
          >
            <span class="number">{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ objective }}</p>
          </article>
        </div>
      </section>

      <section id="outcomes" class="content-section tinted">
        <p class="eyebrow">WHAT GRADUATES CAN DO</p>
        <h2>Program <span>Outcomes</span></h2>

        <p class="section-intro">
          Computer Science students develop communication, teamwork,
          ethical responsibility, problem-solving, and technical skills.
        </p>

        <h3>General Graduate Outcomes</h3>

        <div class="outcome-list">
          <article
            v-for="(outcome, index) in programOutcomes"
            :key="outcome"
            class="outcome-card"
          >
            <span class="outcome-letter">{{ String.fromCharCode(97 + index) }}</span>
            <p>{{ outcome }}</p>
          </article>
        </div>

        <h3>Computing-Specific Outcomes</h3>

        <div class="outcome-list">
          <article
            v-for="(outcome, index) in computingOutcomes"
            :key="outcome"
            class="outcome-card"
          >
            <span class="outcome-letter">{{ String.fromCharCode(97 + index) }}</span>
            <p>{{ outcome }}</p>
          </article>
        </div>

        <p class="source-note">
          Based on the computing program outcomes provided in the supplied
          academic program material.
        </p>
      </section>

      <section id="rationale" class="content-section">
        <p class="eyebrow">WHY THIS PROGRAM</p>
        <h2>Curriculum <span>Rationale</span></h2>

        <p>
          Computer Science focuses on computing concepts and theories,
          algorithmic foundations, and new developments in the computing field.
          It provides students with the foundation to understand how computers
          process information and how computing solutions can be developed.
        </p>

        <p>
          The program prepares students to design and create software that
          addresses complex problems. It also emphasizes the development
          of effective algorithms, computational thinking, and the use of
          theoretical foundations to solve practical computing challenges.
        </p>

        <p>
          Through the study of algorithms, programming, software development,
          and computer systems, students build the skills needed to analyze
          problems, design solutions, and contribute to the continuing
          development of computing technologies.
        </p>
      </section>

      <section id="curriculum" class="content-section tinted">
        <p class="eyebrow">WHAT YOU WILL STUDY</p>
        <h2>Curriculum <span>Description</span></h2>

        <p>
          The BSCS curriculum provides foundational and professional courses
          covering computing theory, algorithms, software design and
          development, and emerging developments in computer science.
        </p>

        <p>
          The curriculum material identifies eleven knowledge areas that
          support students in developing a strong foundation in computer
          science and professional computing practice.
        </p>

        <div class="knowledge-grid">
          <article
            v-for="(area, index) in knowledgeAreas"
            :key="area"
            class="knowledge-card"
          >
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ area }}</p>
          </article>
        </div>
      </section>

      <section id="organization" class="content-section">
        <p class="eyebrow">LEARN TOGETHER</p>
        <h2>Student <span>Organization</span></h2>

        <p>
          The Computer Science Society supports Computer Science students
          by promoting their academic program, helping them prepare for
          their future careers, and building a strong student community.
          It encourages students to share knowledge, participate in
          activities and outreach initiatives, and use their skills to
          contribute to society.
        </p>

        <p>
          Through collaboration, ethical conduct, and lifelong learning,
          students can strengthen their relationships with fellow students
          while developing both their technical abilities and personal growth.
        </p>

        <div class="organization-banner">
          <span class="organization-symbol">CS</span>
          <div>
            <h3>Think. Solve. Innovate.</h3>
            <p>
              Connect with fellow computing students, exchange ideas,
              collaborate on activities, and continue learning beyond
              the classroom.
            </p>
          </div>
        </div>
      </section>

      <section id="graduates" class="content-section tinted">
        <p class="eyebrow">THE SKILLS YOU BUILD</p>
        <h2>Graduate <span>Outcomes</span></h2>

        <p class="section-intro">
          These outcomes describe the knowledge, technical abilities,
          communication skills, and professional responsibilities expected
          of Computer Science graduates.
        </p>

        <div class="graduate-list">
          <article
            v-for="outcome in graduateOutcomes"
            :key="outcome.code"
            class="graduate-card"
          >
            <span class="graduate-code">{{ outcome.code }}</span>
            <p>{{ outcome.text }}</p>
          </article>
        </div>
      </section>

      <section class="next-step">
        <p class="eyebrow">EXPLORE MORE</p>
        <h2>Your future in computing starts here.</h2>
        <p>
          Explore the other academic programs offered by the
          College of Computer Studies.
        </p>
        <RouterLink to="/programs" class="gold-button">
          VIEW ALL PROGRAMS →
        </RouterLink>
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

/* Logo without a white background or circular frame */
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
  pointer-events: none;
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

.source-note {
  margin-top: 25px;
  color: #6b756e;
  font-size: 12px;
  line-height: 1.7;
}

.knowledge-grid {
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

.organization-banner {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 28px;
  padding: 28px;
  color: white;
  background: #063d36;
  border-radius: 10px;
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

.graduate-card {
  gap: 20px;
}

.graduate-code {
  flex-shrink: 0;
  min-width: 58px;
  padding: 9px 8px;
  color: #123f36;
  background: #eee2bd;
  border-radius: 5px;
  font-size: 13px;
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

  .knowledge-grid {
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
