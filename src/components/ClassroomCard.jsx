import '@/styles/util.css';

function ClassroomCard({
  classroom: { title, link, subtitle, description, teacher, cover, picture },
}) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image with-overlay">
          <img src={cover} alt={`${title} classroom cover picture`} />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                class="is-rounded"
                src={picture}
                alt={`${title} classroom picture`}
              />
            </figure>
          </div>
          <div class="media-content">
            <a href={link} class="with-underline-on-hover">
              <p class="title is-4">{title}</p>
              <p class="subtitle is-6">{subtitle}</p>
            </a>
          </div>
        </div>
        <div class="content">{description}</div>
      </div>
    </div>
  );
}

export default ClassroomCard;
