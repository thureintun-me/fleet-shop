import React, {useEffect, useState} from "react";
import {CommonActions, NavigationContainer, useNavigation, useTheme,} from "@react-navigation/native";
import HomeStack from "@navigation/stack/HomeStack";
import useAppTheme from "@hooks/useAppTheme";
import UnAuthorizeStack from "@navigation/stack/UnAuthorizeStack";
import AppBottomTabNavigator from "@navigation/tab/AppBottomTabNavoigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {supabase} from "../libs/supabase";
import {Session} from "@supabase/supabase-js";
import useFleetAppStore from "@store/store";
import {navigationRef} from "@utils/navigationRef";

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {


    const theme = useAppTheme();





    return (
        <NavigationContainer theme={theme} ref={navigationRef}>
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
