import {makeStyles} from "@material-ui/styles";
import {IHomeTheme} from "./_theme";
import {Button, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: IHomeTheme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));
const Header = (props: any) => {
  const classes = useStyles();
  const {title} = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
    </>
  );
}
export default Header