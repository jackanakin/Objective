import { COLOR } from 'react-native-material-ui';
import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('screen').width;
const primaryTextColor = '#212121';
const primaryColor = '#004d40';
const secondaryTextColor = COLOR.white;

export const uiTheme = {
    fontFamily: 'Iowan Old Style',//Roboto',
    palette: {
        // main theme colors
        primaryColor: primaryColor,
        primaryLightColor: '#39796b',
        primaryDarkColor: '#00251a',
        primaryTextColor: primaryTextColor,
        primaryBackground: '#bdbdbd',

        secondaryColor: '#212121',
        secondaryLightColor: '#484848',
        secondaryDarkColor: '#000000',
        secondaryTextColor: secondaryTextColor,

        accentColor: COLOR.red500,
        alternateColor: COLOR.green500,
        // text color palette
        alternateTextColor: COLOR.grey700,
        // backgournds and borders
        canvasColor: COLOR.white,
        borderColor: COLOR.black,
        disabledColor: COLOR.black,
        disabledTextColor: COLOR.black,
        activeIcon: COLOR.black,
        inactiveIcon: COLOR.black,
        errorTextColor: COLOR.redA700,

    },
    placeholderTextColor: primaryTextColor,
    statusBarColor: primaryColor,
};