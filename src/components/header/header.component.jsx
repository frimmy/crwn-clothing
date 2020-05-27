import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser }from '../../redux/user/user.selectors.js';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import styles from "./header.module.scss";

const Header = ({ currentUser, hidden }) => (
  <div className={styles.header}>
    <Link className={styles['logo-container']} to="/" >
      <Logo className="logo" />
    </Link>
    <div className={styles.options}>
      <Link className={styles.option} to="/shop">
        SHOP
      </Link>
      <Link className={styles.option} to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className={styles.option} onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className={styles.option} to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    { !hidden && <CartDropdown /> }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
