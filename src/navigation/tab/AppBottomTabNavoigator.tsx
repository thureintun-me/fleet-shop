import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "@navigation/stack/HomeStack";
import AccountStack from "@navigation/stack/AccountStack";
import CartStack from "@navigation/stack/CartStack";
import {House, ShoppingCart, User} from "lucide-react-native";


const Tab = createBottomTabNavigator();
const AppBottomTabNavigator = () => {

    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {


                if (route.name === 'Home') {
                    return <House color={color} size={size}/>
                } else if (route.name === 'Cart') {
                    return <ShoppingCart color={color} size={size}/>
                } else {
                    return <User color={color} size={size}/>
                }


            },

            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "grey",
            headerShown: false,
            tabBarStyle:{
                height:60,
            },

            tabBarLabelStyle: {
                fontSize: 14, // Font size of tab labels
                fontFamily: 'Roboto-Medium', // Font family of tab labels
                fontWeight: 'normal', // Optional: makes the label bold
            },

        })}>
            <Tab.Screen name="Home" component={HomeStack}/>
            <Tab.Screen name="Cart" component={CartStack}  listeners={({ navigation }) => ({
                tabPress: (e) => {
                    if (true) {
                        // Prevent default navigation
                        e.preventDefault();
                        // Navigate to Login screen
                        navigation.navigate('Unauthorized', { screen: 'Login' });
                    }
                },
            })}/>
            <Tab.Screen name="Account" component={AccountStack}/>
        </Tab.Navigator>
    )
}

export default AppBottomTabNavigator

