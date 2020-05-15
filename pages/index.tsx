import { CircularProgress, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  loadingRoot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const IndexPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container className={classes.loadingRoot}>
      <Grid container justify={'center'} alignContent={'center'}>
        <Grid item>
          <CircularProgress size={100} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndexPage;
