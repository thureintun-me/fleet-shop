import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CartStackParamsList, options} from "@navigation/types";
import CartScreen from "@screens/cart/CartScreen";


const Stack = createNativeStackNavigator<CartStackParamsList>();
const CartStack = () => {

    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={"CartScreen"} component={CartScreen} options={{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}

export default CartStack;
