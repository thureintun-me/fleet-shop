import {AppTheme} from "../types/AppThemeType";
import {Platform} from "react-native";


export const AppLightTheme: AppTheme = {
    dark: false,
    colors: {
        primary: 'rgb(255, 99, 71)', // Tomato for accents
        background: 'rgb(250, 250, 250)', // Very light background
        card: 'rgb(255, 255, 255)', // White for card elements
        text: 'rgb(33, 33, 33)', // Dark gray for readability
        border: 'rgb(220, 220, 220)', // Soft gray for borders
        notification: 'rgb(255, 140, 105)', // Lighter tomato for notifications
        error: 'rgb(255, 69, 58)',
    },
    fonts: Platform.select({
        default: {
            regular: {
                fontFamily: 'Roboto-Medium',
                fontWeight: 'normal',
                fontSize:13,
            },
            medium: {
                fontFamily: 'Roboto-Medium',
                fontWeight: 'normal',
                fontSize:16,
            },
            bold: {
                fontFamily: 'Roboto-Bold',
                fontWeight: '600',
                fontSize:23,
                letterSpacing:0.8
            },
            heavy: {
                fontFamily: 'Roboto-Regular',
                fontWeight: '700',
                fontSize:26,
            },
        }
    })
}

export const AppDarkTheme: AppTheme = {
    dark: true,
    colors: {
        primary: 'rgb(255, 99, 71)', // Tomato for accents
        background: 'rgb(20, 20, 20)', // Very dark gray background
        card: 'rgb(30, 30, 30)', // Slightly lighter for cards
        text: 'rgb(220, 220, 220)', // Light gray for readability
        border: 'rgb(60, 60, 60)', // Darker borders
        notification: 'rgb(255, 120, 90)', // Softer, muted tomato for notifications
        error: 'rgb(255, 69, 58)',
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
                fontFamily: 'YujiMai-Regular',
                fontWeight: '600',
            },
            heavy: {
                fontFamily: 'Roboto-Regular',
                fontWeight: '700',
            },
        }
    })
}
