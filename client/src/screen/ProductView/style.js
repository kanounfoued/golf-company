import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    overflow: 'auto',
    height: 'calc(100vh - 64px)',
    minHeight: 'calc(100vh - 64px)',
  },
  productMainSection: {},
}));

export default useStyles;
