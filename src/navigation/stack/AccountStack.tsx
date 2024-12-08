import  React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AccountStackParamsList, options} from "@navigation/types";
import AccountScreen from "@screens/account/AccountScreen";

const Stack = createNativeStackNavigator<AccountStackParamsList>();
const AccountStack =() =>{
    return(
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
}

export default AccountStack;
