import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "@screens/home/Home";
import {HomeStackParamsList} from "@navigation/types";

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
export default HomeStack;
