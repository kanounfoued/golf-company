import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    maxWidth: 300,
    maxHeight: 488,
  },
  detailAction: {
    '& button': {
      fontSize: 10,
      textTransform: 'capitalize',
    },

    '& button + button': {
      marginLeft: 6,
    },

    '& button:first-child': {
      height: 50,
      width: 90,
    },

    '& button:last-child': {
      height: 50,
      width: 200,
      backgoundColor: '#FFFFFF',
    },
  },
}));

export default useStyles;
