import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// components
import ProductRating from '../../component/ProductRating';
import ProductSample from '../../component/ProductSample';
import ProductDetailsPicker from '../../component/ProductDetailsPicker';
import useStyles from './style';

// product view tests
function ProductView() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Container maxWidth="lg">
        <Grid container className={classes.productMainSection} justifyContent="space-evenly" alignItems="center">
          <ProductRating />
          <ProductSample />
          <ProductDetailsPicker />
        </Grid>
      </Container>
    </Grid>
  );
}

export default ProductView;
