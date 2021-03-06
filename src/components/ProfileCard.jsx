function ProfileCard({ profile: { picture, name, school, description } }) {
  return (
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src={picture} alt={`${name}'s picture`} />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{name}</strong>
              <br />
              <small>{school}</small>
              <br />
              {description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProfileCard;
