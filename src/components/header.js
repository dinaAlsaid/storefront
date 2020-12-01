import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Cart from './cart.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Store
    </Typography>
          <Cart />
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;