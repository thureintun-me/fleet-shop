import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStack from "@navigation/stack/HomeStack";
import AccountStack from "@navigation/stack/AccountStack";
import CartStack from "@navigation/stack/CartStack";
import {House, ShoppingCart, User} from "lucide-react-native";
import useFleetAppStore from "@store/store";
import {AppTabsParamList, RootStackParamList} from "@navigation/types";
import {NavigationProp, useNavigation} from "@react-navigation/native";


const Tab = createBottomTabNavigator<AppTabsParamList>();
const AppBottomTabNavigator = () => {

    const cart = useFleetAppStore((state) => state.cart);
    const session = useFleetAppStore((state) => state.session);
    const navigation =  useNavigation<NavigationProp<RootStackParamList>>()
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {


                if (route.name === 'HomeTab') {
                    return <House color={color} size={size}/>
                } else if (route.name === 'CartTab') {
                    return <ShoppingCart color={color} size={size}/>
                } else {
                    return <User color={color} size={size}/>
                }


            },
            tabBarBadge: route.name === 'CartTab' && cart.length > 0 ? cart.length : undefined,
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
            <Tab.Screen name="HomeTab" component={HomeStack} options={{
                title: "Home",
            }}/>
            <Tab.Screen options={{
                title: "Cart",
            }} name="CartTab" component={CartStack}  listeners={({  }) => ({
                tabPress: (e) => {
                    if (!session) {
                        // Prevent default navigation
                        e.preventDefault();
                        // Navigate to Login screen
                        navigation.navigate('Unauthorized', { screen: 'SignInScreen' });
                    }
                },
            })}/>
            <Tab.Screen name="AccountTab" component={AccountStack} options={{
                title: "Account",
            }}/>
        </Tab.Navigator>
    )
}

export default AppBottomTabNavigator

