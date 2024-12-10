import  React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AccountStackParamsList, options} from "@navigation/types";
import AccountScreen from "@screens/account/AccountScreen";
import ThemeScreen from "@screens/theme/ThemeScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator<AccountStackParamsList>();
const AccountStack =() =>{
    return(
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{
                headerShown: false,
                title: "Account",
            }} />
            <Stack.Screen name="ThemeScreen" component={ThemeScreen} options={{
               title : "Theme"
            }} />
        </Stack.Navigator>
    )
}

export default AccountStack;
