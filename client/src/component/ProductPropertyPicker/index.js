import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CustomButtonGroup from "../CustomButtonGroup";
import useStyles from "./style";
// import classes from "./style.css";

function ProductPropertyPicker(props) {
  const {
    buttons,
    activeText,
    label,
    orientation,
    variant,
    ariaLabel,
    fullWidth,
  } = props;
  const classes = useStyles({ orientation });

  const root = orientation === "vertical" ? classes.rootV : classes.rootH;

  return (
    <>
      <Grid className={classes.titleSection} container wrap="nowrap">
        <Typography variant="subtitle1">{label} :</Typography>
        <Typography variant="subtitle1">{activeText}</Typography>
      </Grid>

      <CustomButtonGroup
        className={root}
        variant={variant}
        aria-label={ariaLabel}
        orientation={orientation}
        fullWidth={fullWidth}
        buttons={buttons}
        activeText={activeText}
      />
    </>
  );
}

ProductPropertyPicker.propTypes = {
  buttons: PropTypes.instanceOf(Array),
  activeText: PropTypes.string.isRequired,
  label: PropTypes.string,
  variant: PropTypes.string,
  ariaLabel: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  fullWidth: PropTypes.bool,
};

ProductPropertyPicker.defaultProps = {
  buttons: [],
  label: "",
  variant: "text",
  ariaLabel: "",
  orientation: "horizontal",
  fullWidth: false,
};

export default ProductPropertyPicker;
