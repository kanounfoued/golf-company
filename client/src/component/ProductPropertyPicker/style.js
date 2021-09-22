import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 18,

    '& .MuiButtonGroup-groupedTextHorizontal': {
      borderRight: 'none',
      borderRadius: 2,
    },

    '& button + button': {
      marginLeft: (props) => (props.orientation === 'horizontal' ? 6 : 0),
      marginTop: (props) => (props.orientation === 'horizontal' ? 0 : 6),
    },
  },
  titleSection: {
    marginBottom: 12,

    '& h6:first-child': {
      fontSize: 12,
      fontWeight: 'bold',
      marginRight: 12,
    },

    '& h6:last-child': {
      fontSize: 12,
    },
  },
}));

export default useStyles;
