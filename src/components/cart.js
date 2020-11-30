import React from 'react';
import { connect } from 'react-redux';

function Cart(props){
  return(
    <>
      <ul>
        CART ({props.cart.cartItems})
        {props.cart.cart.map((item)=>{
          return(<li>{item.name}</li>)
        })}
      </ul>
    </>
  )
}


const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Cart);
