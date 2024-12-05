import {NativeStackNavigationOptions, NativeStackScreenProps} from "@react-navigation/native-stack";

export type HomeStackParamsList = {
 Home : undefined,
}

export type HomeStackScreenProps<T extends keyof HomeStackParamsList> =
    NativeStackScreenProps<HomeStackParamsList, T>;

export const options: NativeStackNavigationOptions = {
 headerShown: false,
};
