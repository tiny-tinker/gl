import React from 'react';
import { IndexLink, Link } from 'react-router';
import * as styles from './styles.css';

const UnauthorizedNav = function UnauthorizedNav() {
  return (
    <ul className="nav navbar-nav">
      <li className="lp">
        <Link to="/login">Sign In</Link>
      </li>
      <li className="lp">
        <Link to="/signup">Create Account</Link>
      </li>
    </ul>
  );
};

const AuthorizedNav = function AuthorizedNav({ user, logout }) {
  return (
    <ul className="nav navbar-nav">
      <li className="lp">
        <div className={styles.greeting}>Signed in as <b className="text-capitalize">{user.firstName}</b></div>
      </li>
      <li className="lp">
        <button onClick={logout} className={styles.logout}>Logout</button>
      </li>
    </ul>
  );
};

const HeaderComponent = function HeaderComponent({ user, logout }) {
  return (
    <nav className={`ci ma yw mh pw app-navbar ${styles.header__nav}`}>
      <IndexLink to="/" className="lv">Greenlines</IndexLink>
      <div className="collapse lx" id="navbarCollapse">
        <ul className="nav navbar-nav act">
          <li className="lp active">&nbsp;</li>
        </ul>
        { user && user.isAuthorized ? <AuthorizedNav {...({ user, logout })} /> : <UnauthorizedNav /> }
      </div>
    </nav>
  );
};

HeaderComponent.propTypes = {
  user: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.bool]),
  logout: React.PropTypes.func.isRequired,
};

AuthorizedNav.propTypes = Object.assign({}, HeaderComponent.propTypes);

export default HeaderComponent;

