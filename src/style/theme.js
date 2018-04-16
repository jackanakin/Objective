import { COLOR } from 'react-native-material-ui';
import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('screen').width;
const primaryTextColor = '#212121';
const primaryColor = '#18227c';
const secondaryTextColor = COLOR.white;
const errorTextColor = COLOR.redA700;
export const validationColor = '#FFEB3B';

export const uiTheme = {
    fontFamily: 'Iowan Old Style',//Roboto',
    palette: {
        // main theme colors
        primaryColor: primaryColor,
        primaryLightColor: '#514aac',
        primaryDarkColor: '#00004f',
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
        errorTextColor: errorTextColor,

    },
    placeholderTextColor: primaryTextColor,
    statusBarColor: primaryColor,
    inputText: {
        marginTop: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: primaryTextColor,
        color: 'black'
    },
    button: {
        container: {
            marginTop: 20,
            height: 40,
            width: deviceWidth * 0.8
        }
    },
    inputTextValidation: {
        borderBottomColor: validationColor
    }
};