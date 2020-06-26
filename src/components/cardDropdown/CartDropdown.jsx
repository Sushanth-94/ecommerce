import React from 'react';
import CustomButton from '../customButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown'>
            <div className='class-items'>
                list of items
            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
}

export default CartDropdown;