import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Button, Typography, CardActionArea, CardActions, CardContent } from "@material-ui/core";
import { connect } from 'react-redux';
import { ChangeCategory } from '../store/reducers/categories.js';
import { addToCart } from '../store/reducers/cart.js'
import { reduceStock } from '../store/reducers/products.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    maxWidth: 345,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: '1%'
  },
}));

function Products(props) {
  const classes = useStyles();
  return (
    <section className={classes.root} >

      {props.products.products.map((item) => {
        return (

          <Card 
          className={classes.card} 
          variant="outlined" 
          key={item.name}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.image}
                title={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" 
              onClick={()=>{
                props.addToCart(item)
                props.reduceStock(item)
                }}>
                Add to Cart
        </Button>
              <Button size="small" color="primary">
                View Details
        </Button>
            </CardActions>
          </Card>

        );
      })}
    </section>
  );
}


const mapStateToProps = (state) => {
  return { products: state.products };
};
const mapDispatchToProps = { ChangeCategory , addToCart, reduceStock };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
