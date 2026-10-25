<template>
  <main class="event-calendar">
    <section class="hero">
      <p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p>
      <h1>Events & Calendar</h1>
      <p class="intro">
        Stay updated with important academic dates and activities
        at Central Philippine University.
      </p>

      <a
        href="https://cpu.edu.ph/school-calendar/"
        target="_blank"
        rel="noopener noreferrer"
        class="calendar-button"
      >
        <span>View Official School Calendar</span>
        <span aria-hidden="true">↗</span>
      </a>
    </section>

    <section class="calendar-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">ACADEMIC YEAR 2026–2027</p>
          <h2>University Calendar</h2>
          <p class="description">
            Check the official university calendar for academic schedules,
            examinations, holidays, and other important dates.
          </p>
        </div>
      </div>

      <div class="calendar-frame">
        <iframe
          src="https://cpu.edu.ph/school-calendar/"
          title="Central Philippine University School Calendar"
          loading="lazy"
          allowfullscreen
        ></iframe>

        <div class="calendar-fallback">
          <p>
            If the calendar does not appear here, you can view it directly
            on the official CPU website.
          </p>
          <a
            href="https://cpu.edu.ph/school-calendar/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-link"
          >
            Open CPU School Calendar →
          </a>
        </div>
      </div>
    </section>

    <section class="info-section">
      <div class="info-icon" aria-hidden="true">📅</div>
      <div>
        <h2>Stay Informed</h2>
        <p>
          Always check official university announcements for schedule
          changes and updates. College-specific events may have separate
          schedules.
        </p>
        <a
          href="https://ccs.cpu.edu.ph/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
        >
          Visit the official CCS website →
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.event-calendar {
  --green: #174b3a;
  --gold: #c4a85b;
  --text: #24352d;
  --muted: #68746d;
  --surface: #ffffff;
  --soft: #f4f6f1;

  color: var(--text);
  padding-bottom: 60px;
  min-height: 70vh;
}

.hero {
  background: var(--green);
  color: white;
  padding: 70px 8%;
  text-align: center;
}

.eyebrow {
  color: var(--gold);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 14px;
}

.hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  margin: 0 0 18px;
  line-height: 1.15;
}

.intro {
  max-width: 650px;
  margin: 0 auto 28px;
  color: #e1e9e3;
  line-height: 1.8;
}

.calendar-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: var(--gold);
  color: #173c2e;
  padding: 14px 22px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  transition: background 0.2s, transform 0.2s;
}

.calendar-button:hover {
  background: #dfc77e;
  transform: translateY(-2px);
}

.calendar-section {
  max-width: 1150px;
  margin: 55px auto;
  padding: 0 24px;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading h2,
.info-section h2 {
  color: var(--green);
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin: 0 0 12px;
}

.description {
  color: var(--muted);
  line-height: 1.7;
  max-width: 720px;
}

.calendar-frame {
  background: var(--soft);
  border: 1px solid #e1e7df;
  border-radius: 10px;
  overflow: hidden;
}

.calendar-frame iframe {
  display: block;
  width: 100%;
  height: 720px;
  border: 0;
  background: white;
}

.calendar-fallback {
  padding: 22px;
  text-align: center;
  color: var(--muted);
  line-height: 1.7;
}

.text-link {
  color: var(--green);
  font-weight: 700;
  text-decoration: none;
}

.text-link:hover {
  text-decoration: underline;
}

.info-section {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px;
  background: var(--soft);
  border-left: 4px solid var(--gold);
  border-radius: 5px;
}

.info-icon {
  font-size: 2rem;
}

.info-section p {
  color: var(--muted);
  line-height: 1.8;
}

@media (max-width: 600px) {
  .hero {
    padding: 50px 22px;
  }

  .calendar-section {
    padding: 0 16px;
    margin: 38px auto;
  }

  .calendar-frame iframe {
    height: 550px;
  }

  .info-section {
    margin: 0 16px;
    padding: 22px;
  }
}
</style>