import {NativeStackNavigationOptions, NativeStackScreenProps} from "@react-navigation/native-stack";

export type HomeStackParamsList = {
 Home : undefined,
}

export type UnAuthorizeStackParamsList = {
 Login : undefined,
}

export type HomeStackScreenProps<T extends keyof HomeStackParamsList> =
    NativeStackScreenProps<HomeStackParamsList, T>;

export type UnAuthorizeStackScreenProps<T extends keyof UnAuthorizeStackParamsList> =
    NativeStackScreenProps<UnAuthorizeStackParamsList, T>;

export const options: NativeStackNavigationOptions = {
 headerShown: false,
};
