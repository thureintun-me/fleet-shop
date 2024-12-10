import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CartStackParamsList, options} from "@navigation/types";
import CartScreen from "@screens/cart/CartScreen";
import DeliveryInfo from "@screens/deliveryInfo/DeliveryInfo";
import {createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator<CartStackParamsList>();
const CartStack = () => {

    return (
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name={"CartScreen"} component={CartScreen} options={{
                headerShown: false,
                title: "Cart",
            }}/>
            <Stack.Screen name={"DeliveryScreen"} component={DeliveryInfo} options={{

                title: "Delivery Info",
            }}/>
        </Stack.Navigator>
    )
}

export default CartStack;
