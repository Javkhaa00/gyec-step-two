import 'bulma/css/bulma.min.css';

import Navigation from '@/components/Navigation';
import ProfileCard from '@/components/ProfileCard';
import { groupByCount } from '@/utils/array';

export function getInitialProps() {
  return {
    profiles: Array(5)
      .fill()
      .map(() => ({
        name: 'B.Ezenbaatar',
        school: 'Olonlog Academy',
        picture: 'https://nani-tech.web.app/assets/members/ezka.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
      })),
  };
}

function StudentProfilesPage({ profiles }) {
  return (
    <>
      <head>
        <title>Student profiles</title>
      </head>
      <Navigation />
      <section class="section">
        <h1 class="title">Student profiles</h1>
        {groupByCount(profiles, 3).map((row) => (
          <div class="columns">
            {row.map((profile) => (
              <div class="column is-one-third">
                <ProfileCard profile={profile} />
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export default StudentProfilesPage;
