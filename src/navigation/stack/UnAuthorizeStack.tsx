import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { options, UnAuthorizeStackParamsList} from "@navigation/types";
import Login from "@screens/login/Login";

const Stack = createNativeStackNavigator<UnAuthorizeStackParamsList>();
const UnAuthorizeStack = () =>{
    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default UnAuthorizeStack;
