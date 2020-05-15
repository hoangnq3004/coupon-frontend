import { createMuiTheme, Theme as MuiTheme } from '@material-ui/core/styles';

export interface IHomeTheme extends MuiTheme {
}

const baseHomeTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const homeTheme = {};

export const HomeTheme: IHomeTheme = {
  ...baseHomeTheme,
  ...homeTheme,
};
