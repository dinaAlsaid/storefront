import React from 'react';
import { connect } from 'react-redux';
import { Button, Menu, MenuItem } from "@material-ui/core";

function Cart(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        CART ({props.cart.cartItems})
</Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.cart.cart.map((item) => {
          return (
            <MenuItem 
            onClick={handleClose} 
            key={item.name}>{item.name}</MenuItem>

          )
        })}

      </Menu>
      <ul>

      </ul>
    </>
  )
}


const mapStateToProps = (state) => {
  return { cart: state.cart };
};
export default connect(mapStateToProps)(Cart);
