import 'bulma/css/bulma.min.css';

import Navigation from '@/components/Navigation';
import ClassroomCard from '@/components/ClassroomCard';
import { groupByCount } from '@/utils/array';

export function getInitialProps() {
  return {
    classrooms: Array(5)
      .fill()
      .map(() => ({
        link: '#',
        title: 'GYEC 2020',
        subtitle: 'First Enrollment',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
        cover:
          'https://lh3.googleusercontent.com/-COkPu6e3VzI/XnQclbumG2I/AAAAAAAAAPc/rA-_QaB80mIk2AJcqnQCneJQ1xgyPeGZgCNcBGAsYHQ/s1280-fcrop64=1,00000eacffff81a0/1.png',
        picture:
          'https://lh3.googleusercontent.com/a-/AOh14GhN-MyKwp9D4v2V7SxD7AZCNG7Rr3UsfLKym0wfzA=s75-c',
      })),
  };
}

function ClassroomsPage({ classrooms }) {
  return (
    <>
      <head>
        <title>Classrooms</title>
      </head>
      <Navigation />
      <section class="section">
        <h1 class="title">Classrooms</h1>
        {groupByCount(classrooms, 3).map((classroomGroup) => (
          <div class="columns">
            {classroomGroup.map((classroom) => (
              <div class="column is-one-third">
                <ClassroomCard classroom={classroom} />
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export default ClassroomsPage;
