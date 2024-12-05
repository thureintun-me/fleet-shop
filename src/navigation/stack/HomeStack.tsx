import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "@screens/home/Home";
import {HomeStackParamsList, options} from "@navigation/types";

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () =>{
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
export default HomeStack;
