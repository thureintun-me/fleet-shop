import {
 NativeStackNavigationOptions,
 NativeStackNavigationProp,
 NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HeaderLeft from "@components/HeaderLeft";
import React from "react";
import ThemeScreen from "@screens/theme/ThemeScreen";
import {NavigatorScreenParams} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {StackNavigationOptions, StackScreenProps} from "@react-navigation/stack";
import {ChevronLeft} from "lucide-react-native";

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
 DeliveryScreen : undefined
}


export type UnAuthorizeStackParamsList = {
 SignInScreen : undefined,
 SignUpScreen : undefined,
}

export type CartScreenNavigationProp = BottomTabNavigationProp<AppTabsParamList, "CartTab">;

export type AccountStackScreenProps<T extends keyof AccountStackParamsList> =
    StackScreenProps<AccountStackParamsList, T>;

export type CartStackScreenProps<T extends keyof CartStackParamsList> =
    StackScreenProps<CartStackParamsList, T>;

export type HomeStackScreenProps<T extends keyof HomeStackParamsList> =
    StackScreenProps<HomeStackParamsList, T>;

export type UnAuthorizeStackScreenProps<T extends keyof UnAuthorizeStackParamsList> =
    StackScreenProps<UnAuthorizeStackParamsList, T>;

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const options: StackNavigationOptions = {
 headerShown: true,
 headerTitleAlign: "center",
 headerBackImage : (props) => <ChevronLeft color={props.tintColor} size={20} />



 //headerLeft : (props) => <HeaderLeft {...props} />,


};
