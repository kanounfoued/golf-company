import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import classes from "./style.css";
import { Typography } from "@material-ui/core";

// add ProductRating tests

function ProductRating(props) {
  const { average, nbrRating, text } = props;
  // const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid container justifyContent="flex-start" alignItems="center">
        <Rating
          name="product-feedback"
          value={average}
          precision={1}
          max={5}
          readOnly
        />
        <Typography variant="caption">{average}</Typography>
        <Typography variant="caption">({nbrRating})</Typography>
      </Grid>
      <Typography variant="body2">{text}</Typography>
    </Grid>
  );
}

ProductRating.propTypes = {
  average: PropTypes.number,
  nbrRating: PropTypes.number,
  text: PropTypes.string,
};

ProductRating.defaultProps = {
  average: 4.7,
  nbrRating: 160,
  text: "First we reshaped the driver, then we reconstructed it. Completely rebuilding the driver from the ground up to give you both forgiveness and distance.",
};

export default ProductRating;
