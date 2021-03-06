import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cardDropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
