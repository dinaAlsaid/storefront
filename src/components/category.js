import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Link } from "@material-ui/core";
import { connect } from 'react-redux';
import { ChangeCategory } from '../store/reducers/actions.js';

const useStyles = makeStyles((theme) => ({
  banner:{

  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  link:{
    margin: '2%',
  },
}));

function Category(props){
  const classes = useStyles();

  return(
    <>
    <Typography align='center' className={classes.nav}>
      {props.categories.categories.map((item)=>{
        return(
        <Link 
        onClick={()=>props.ChangeCategory(item.name)} 
        className={classes.link}
        key={item.name}
        >{item.name}</Link>);
      })}
    </Typography>
    <Typography variant='h2' className={classes.banner} align='center'>{props.categories.activeCategory}</Typography>

    </>
  );
}


const mapStateToProps = (state) => {
  return { categories: state.categories };
};
const mapDispatchToProps = { ChangeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Category);
