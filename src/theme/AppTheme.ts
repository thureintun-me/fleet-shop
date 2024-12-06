import {AppTheme} from "../types/AppThemeType";
import {Platform} from "react-native";


export const AppLightTheme: AppTheme = {
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
    fonts: Platform.select({
        default: {
            regular: {
                fontFamily: 'Roboto-Regular',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'Roboto-Medium',
                fontWeight: 'normal',
            },
            bold: {
                fontFamily: 'Roboto-Bold',
                fontWeight: '600',
            },
            heavy: {
                fontFamily: 'Roboto-Regular',
                fontWeight: '700',
            },
        }
    })
}

export const AppDarkTheme: AppTheme = {
    dark: true,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
    fonts: Platform.select({
        default: {
            regular: {
                fontFamily: 'Roboto-Regular',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'Roboto-Medium',
                fontWeight: 'normal',
            },
            bold: {
                fontFamily: 'Roboto-Bold',
                fontWeight: '600',
            },
            heavy: {
                fontFamily: 'Roboto-Regular',
                fontWeight: '700',
            },
        }
    })
}
