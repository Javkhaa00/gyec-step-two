import 'bulma/css/bulma.min.css';

import Navigation from '@/components/Navigation';
import ProfileCard from '@/components/ProfileCard';

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
      <Navigation />
      <section class="section">
        <h1 class="title">Student profiles</h1>
        {profiles
          .map((_, i, arr) => {
            if (i % 3 !== 0) return null;
            if (i + 3 >= arr.length) return arr.slice(i);
            return arr.slice(i, i + 3);
          })
          .filter(Boolean)
          .map((row) => (
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
