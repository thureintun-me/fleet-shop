import {NativeStackNavigationOptions, NativeStackScreenProps,} from "@react-navigation/native-stack";
import HeaderLeft from "@components/HeaderLeft";
import React from "react";
import ThemeScreen from "@screens/theme/ThemeScreen";
import {NavigatorScreenParams} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
 MainTabs:  NavigatorScreenParams<AppTabsParamList>;
 Unauthorized: NavigatorScreenParams<UnAuthorizeStackParamsList>;
};

export type AppTabsParamList = {
 HomeTab: undefined;
 CartTab: undefined;
 AccountTab: undefined;
};

export type HomeStackParamsList = {
 HomeScreen : undefined,
 DetailsScreen : {productId : number}
}
export type AccountStackParamsList = {
 AccountScreen : undefined,
 ThemeScreen : undefined
}

export type CartStackParamsList = {
 CartScreen : undefined,
}


export type UnAuthorizeStackParamsList = {
 SignInScreen : undefined,
 SignUpScreen : undefined,
}

export type CartScreenNavigationProp = BottomTabNavigationProp<AppTabsParamList, "CartTab">;

export type AccountStackScreenProps<T extends keyof AccountStackParamsList> =
    NativeStackScreenProps<AccountStackParamsList, T>;

export type CartStackScreenProps<T extends keyof CartStackParamsList> =
    NativeStackScreenProps<CartStackParamsList, T>;

export type HomeStackScreenProps<T extends keyof HomeStackParamsList> =
    NativeStackScreenProps<HomeStackParamsList, T>;

export type UnAuthorizeStackScreenProps<T extends keyof UnAuthorizeStackParamsList> =
    NativeStackScreenProps<UnAuthorizeStackParamsList, T>;

export const options: NativeStackNavigationOptions = {
 headerShown: true,
 headerTitleAlign: "center",
 headerLeft : (props) => <HeaderLeft {...props} />,


};
