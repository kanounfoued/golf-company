import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 340,
    padding: 32,

    '& > div': {
      marginBottom: 54,

      '& > *': {
        marginRight: 6,
      },
    },
  },
}));

export default useStyles;
