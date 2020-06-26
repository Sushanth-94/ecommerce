import React from "react";
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/actions/CartAction';
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";

import "./CartIcon.scss";

const CartIcon = (props) => {
  return (
    <div onClick={props.toggleCartHidden} className='cart-icon'>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
}) 

export default connect(null, mapDispatchToProps)(CartIcon);
