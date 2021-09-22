import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProductPropertyPicker from '../ProductPropertyPicker';
import img3 from '../../assets/images/3.png';
import img4 from '../../assets/images/4.png';
import useStyles from './style';

function ProductDetailsPicker() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <ProductPropertyPicker
        buttons={[{ label: 'Left' }, { label: 'Right' }]}
        activeText="Right"
        label="Hand"
        ariaLabel="product property hand"
      />

      <ProductPropertyPicker
        buttons={[{ label: '9.0°' }, { label: '10.5°' }]}
        activeText="10.5°"
        label="Loft"
        ariaLabel="product property loft"
      />

      <ProductPropertyPicker
        buttons={[{ label: 'Regular' }, { label: 'Stiff' }, { label: 'X-Stiff' }]}
        activeText="Regular"
        label="Flex"
        ariaLabel="product property flex"
      />

      <ProductPropertyPicker
        orientation="vertical"
        buttons={[
          { label: 'Mitsubishi Tensei AV Raw Blue 60 Graphite', icon: img3 },
          { label: 'Project X HZRDUS Smoke RDX Black 70 Graphite', icon: img4 },
        ]}
        activeText="Mitsubishi Tensei AV Raw Blue 60 Graphite"
        label="Shaft"
        ariaLabel="product property shaft"
      />

      <Grid className={classes.detailAction} container justifyContent="center" alignItems="center">
        <Button variant="contained">Quantity</Button>
        <Button variant="contained" color="secondary">
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
}

export default ProductDetailsPicker;
