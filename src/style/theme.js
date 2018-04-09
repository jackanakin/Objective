import { COLOR } from 'react-native-material-ui';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export const uiTheme = {
    fontFamily: 'Iowan Old Style',//Roboto',
    palette: {
        // main theme colors
        primaryColor: COLOR.teal500,
        accentColor: COLOR.red500,
        alternateColor: COLOR.green500,
        // text color palette
        primaryTextColor: COLOR.white,
        secondaryTextColor: COLOR.white,
        alternateTextColor: COLOR.grey700,
        // backgournds and borders
        canvasColor: COLOR.white,
        borderColor: COLOR.black,
        // https://material.google.com/style/color.html#color-text-background-colors
        disabledColor: COLOR.black,
        disabledTextColor: COLOR.black,
        activeIcon: COLOR.black,
        inactiveIcon: COLOR.black,
        // pickerHeaderColor: cyan500,
        // clockCircleColor: faintBlack,
        // shadowColor: fullBlack,

    },
    myButton: {
        container: {
            marginTop: 20,
            height: 40,
            width: width * 0.8
        }
    },
    myTextInput: {
        marginTop: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: COLOR.grey700
    },
    myTextTitle: {
        fontWeight: 'bold', fontSize: 26
    },
    myForm: {
        width: width * 0.8
    },
    myTextError: {
        marginTop: 15,
        color: COLOR.redA700,
        fontWeight: 'bold'
    }
};