import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import productImage from "../../assets/images/product-image.webp";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import classes from "./style.css";

const data = [img1, img2, img3, img4, img5];

function ProductSample() {
  // const classes = useStyles();

  const [itemActive, setItemActive] = React.useState(0);

  const onChangeImage = (index) => () => {
    setItemActive(index);
  };

  return (
    <Grid className={classes.root}>
      <Grid container>
        <Avatar
          className={classes.productAvatar}
          src={productImage}
          alt=""
          imgProps={{
            height: 375,
            width: 272,
          }}
        />
      </Grid>
      <Grid
        className={classes.productSamples}
        container
        justifyContent="flex-start"
        alignItems="center"
      >
        {data.map((img, index) => {
          return (
            <Avatar
              style={{
                border: itemActive === index ? "2px solid #ccd602" : "none",
              }}
              className={classes.productImg}
              key={img}
              src={img}
              alt="product image"
              onClick={onChangeImage(index)}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

export default ProductSample;
