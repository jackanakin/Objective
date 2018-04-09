import { COLOR } from 'react-native-material-ui';
import { uiTheme } from './theme'

export const navBarStyle = {
    navigationBarStyle: {
        backgroundColor: uiTheme.palette.primaryColor,
    },
    titleStyle: {
        color: uiTheme.palette.primaryTextColor,
    },
    leftButtonTextStyle: {
        color: uiTheme.palette.primaryTextColor,
    },
    backButtonTintColor: uiTheme.palette.primaryTextColor
};