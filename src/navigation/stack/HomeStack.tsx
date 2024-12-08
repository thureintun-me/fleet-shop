import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "@screens/home/HomeScreen";
import {HomeStackParamsList, options} from "@navigation/types";
import HomeScreen from "@screens/home/HomeScreen";
import HeaderLeft from "@components/HeaderLeft";
import Details from "@screens/home/Details";

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () =>{
    return (
        <Stack.Navigator screenOptions={{
            ...options,

        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="DetailsScreen"  component={Details} options={{
                title : "Details",
            }} />
        </Stack.Navigator>
    );
}
export default HomeStack;
