import {ToastAndroid, Platform} from 'react-native';

export function short(message){
    const platform = Platform.OS;
    if (platform === 'ios'){
        console.warn('not supported')
    }else if (platform === 'android'){
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }else{
        console.warn('not supported')
    }
}