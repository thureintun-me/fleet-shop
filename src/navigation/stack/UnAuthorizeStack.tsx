import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {options, UnAuthorizeStackParamsList} from "@navigation/types";
import SignIn from "@screens/signIn/SignInScreen";
import SignUp from "@screens/signUp/SignUpScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator<UnAuthorizeStackParamsList>();
const UnAuthorizeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
           ...options
        }}>
            <Stack.Screen name="SignInScreen" component={SignIn} options={{
                title: "",
            }}/>
            <Stack.Screen name="SignUpScreen" component={SignUp} options={{
                title: "",
            }}/>
        </Stack.Navigator>
    )
}

export default UnAuthorizeStack;
