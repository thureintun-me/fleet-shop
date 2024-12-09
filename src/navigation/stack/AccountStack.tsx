import  React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AccountStackParamsList, options} from "@navigation/types";
import AccountScreen from "@screens/account/AccountScreen";
import ThemeScreen from "@screens/theme/ThemeScreen";

const Stack = createNativeStackNavigator<AccountStackParamsList>();
const AccountStack =() =>{
    return(
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="ThemeScreen" component={ThemeScreen} options={{
               title : "Theme"
            }} />
        </Stack.Navigator>
    )
}

export default AccountStack;
