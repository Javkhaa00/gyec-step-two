import { useRef } from 'nicessr';

function Navigation() {
  const menuRef = useRef();
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src={require('@/assets/logo.png')} />
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          click={(event) => {
            menuRef.current.classList.toggle('is-active');
            event.target.toggleAttribute('aria-expanded');
            event.preventDefault();
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar" class="navbar-menu" ref={menuRef}>
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Online classes</a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">AR/VR experiments</a>
              <a href="/student/profiles" class="navbar-item">
                Student profiles
              </a>
              <a class="navbar-item">Ranking</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Donation/Foundation</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
