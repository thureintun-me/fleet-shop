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
                    fontFamily: 'Inter 18pt',
                    fontWeight: 'normal',
                },
                medium: {
                    fontFamily: 'Inter 18pt',
                    fontWeight: 'normal',
                },
                bold: {
                    fontFamily: 'Inter 18pt',
                    fontWeight: '600',
                },
                heavy: {
                    fontFamily: 'Inter 18pt',
                    fontWeight: '700',
                },
            }
        }
    )
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
                fontFamily: 'Inter 18pt',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'Inter 18pt',
                fontWeight: 'normal',
            },
            bold: {
                fontFamily: 'Inter 18pt',
                fontWeight: '600',
            },
            heavy: {
                fontFamily: 'Inter 18pt',
                fontWeight: '700',
            },
        }
    })
}
