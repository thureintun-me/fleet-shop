import React from "react";
import {NavigationContainer, useTheme,} from "@react-navigation/native";
import HomeStack from "@navigation/stack/HomeStack";
import useAppTheme from "@hooks/useAppTheme";
import UnAuthorizeStack from "@navigation/stack/UnAuthorizeStack";
import AppBottomTabNavigator from "@navigation/tab/AppBottomTabNavoigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {


    const theme = useAppTheme();

    return (
        <NavigationContainer theme={theme}>
            <RootStack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <RootStack.Screen name="MainTabs" component={AppBottomTabNavigator}/>
                <RootStack.Screen name="Unauthorized" component={UnAuthorizeStack}/>
            </RootStack.Navigator>

        </NavigationContainer>
    )
}

export default RootNavigator;
