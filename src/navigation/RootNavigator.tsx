import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomeStack from "@navigation/stack/HomeStack";


const RootNavigator = () => {

    return (
        <NavigationContainer>
            <HomeStack/>
        </NavigationContainer>
    )
}

export default RootNavigator;
