import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import LogoLight from "../../assets/images/Logo-light.png";
import LogoDark from "../../assets/images/Logo-dark.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./style";

// import classes from "./style.css";

import { useCart, CartProvider } from "../../context/cart";

function CartBtn() {
  const state = useCart();

  return (
    <IconButton
      aria-label="user cart"
      aria-controls="cart-btn"
      aria-haspopup="true"
      color="inherit"
    >
      <Badge
        badgeContent={state.count}
        color="secondary"
        data-testid="cart-badge"
      >
        <ShoppingCartIcon fontSize="small" />
      </Badge>
    </IconButton>
  );
}

function Navbar(props) {
  const { isDark } = props;
  const classes = useStyles();
  const brandLogo = isDark ? LogoDark : LogoLight;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            variant="square"
            src={brandLogo}
            alt="Golf company brand"
            className={classes.brandAvatar}
            role="img"
          />
          <Grid container justifyContent="flex-end" alignItems="center">
            <IconButton
              aria-label="user search bar"
              aria-controls="search-bar-btn"
              aria-haspopup="true"
              color="inherit"
            >
              <SearchIcon fontSize="small" />
            </IconButton>
            <CartProvider>
              <CartBtn />
            </CartProvider>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  isDark: PropTypes.bool,
};

Navbar.defaultProps = {
  isDark: false,
};

export default Navbar;
