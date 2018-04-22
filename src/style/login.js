import { COLOR } from 'react-native-material-ui';
import { uiTheme } from './theme'
import { StyleSheet } from 'react-native';

export const loginScreenStyle = {
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