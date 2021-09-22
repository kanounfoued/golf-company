import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 340,
    height: 490,
  },
  productAvatar: {
    height: 375,
    width: '100%',
  },
  productSamples: {
    padding: '18px 12px 0',
  },
  productImg: {
    backgroundColor: '#f4f4f4',
    backgroundClip: 'content-box',
    padding: 4,
    cursor: 'pointer',

    '& + &': {
      marginLeft: 12,
    },
  },
}));

export default useStyles;
