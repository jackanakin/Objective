import { COLOR } from 'react-native-material-ui';
import { uiTheme } from './theme';
import { StyleSheet } from 'react-native';

export const navBarStyle = {
    navigationBarStyle: {
        backgroundColor: uiTheme.palette.primaryColor,
    },
    titleStyle: {
        color: uiTheme.palette.secondaryTextColor,
    },
    leftButtonTextStyle: {
        color: uiTheme.palette.secondaryTextColor,
    },
    backButtonTintColor: uiTheme.palette.secondaryTextColor
};