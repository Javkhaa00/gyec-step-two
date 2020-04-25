import 'bulma/css/bulma.min.css';

import Navigation from '@/components/Navigation';

const title = css`
  margin: 10px 0 0 20px;
`;

function HomePage() {
  return (
    <>
      <Navigation />
      <h1 class={['title', title]}>Welcome to the Nomt academy!</h1>
      <section class="section">
        <div class="container">
          <h1 class="title">Executive Summary</h1>
          <p>
            NOMT /Nani-Tech/, headquartered at Ulaanbaatar is a creative mobile
            application that helps and provides equal opportunities to every
            student, even those in rural areas, those who are hospitalized, and
            unable to take classes. It’s a unique guide based on an individual
            student’s knowledge and skills in specific areas of the course. In
            addition, it automatically analyzes the psychology of all the
            students by simple tests to help them find future professions that
            are an optimal fit for them. The target audience ranges from
            8th-grade students to 12th-grade students.
          </p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h1 class="title">Company Summary</h1>
          <p>
            Nani-Tech was founded by high-schools from all around the country in
            March 2020. Total of 8 members specified in their own
            fields/purposes: Natural science, programming, app developing,
            researching/ making the team more productive and more strong.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
