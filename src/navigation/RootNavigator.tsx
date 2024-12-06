import React from "react";
import {NavigationContainer, useTheme,} from "@react-navigation/native";
import HomeStack from "@navigation/stack/HomeStack";
import useAppTheme from "@hooks/useAppTheme";
import UnAuthorizeStack from "@navigation/stack/UnAuthorizeStack";


const RootNavigator = () => {


    const theme = useAppTheme();

    return (
        <NavigationContainer theme={theme}>
            <UnAuthorizeStack/>
        </NavigationContainer>
    )
}

export default RootNavigator;
