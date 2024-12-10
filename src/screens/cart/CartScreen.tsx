import {View, Text, SafeAreaView, StyleSheet, FlatList} from "react-native";
import {CartStackScreenProps} from "@navigation/types";
import useFleetAppStore from "@store/store";
import CardItem from "@components/CardItem";
import ProductCartItem from "@screens/cart/components/ProductCartItem";
import {useTheme} from "@react-navigation/native";
import AppButton from "@components/AppButton";
import EmptyCart from "@screens/cart/components/EmptyCart";


const CartScreen = ({} : CartStackScreenProps<"CartScreen">) =>{
    const cart = useFleetAppStore((state) => state.cart);
    const {colors,fonts} = useTheme();
    const { totalQuantity, totalPrice } = cart.reduce(
        (totals, item) => {
            totals.totalQuantity += item.quantity;
            totals.totalPrice += item.price * item.quantity;
            totals.totalPrice = parseFloat(totals.totalPrice.toFixed(2));
            return totals;
        },
        { totalQuantity: 0, totalPrice: 0 } // Initial values for totalQuantity and totalPrice
    );


    if(cart.length == 0){
        return (
            <EmptyCart />
        )
    }
    return (
        <SafeAreaView style={styles.container}>
                <View style={{
                    paddingHorizontal:16,
                    marginVertical:50,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text style={{...fonts.bold,color:colors.primary}}>Cart</Text>
                </View>
               <FlatList
                   data={cart}
                   contentContainerStyle={{
                       gap:30
                   }}
                   renderItem={({ item }) =><ProductCartItem {...item} />}
                   />

            <View style={{
                marginTop:20,
                width:"100%",
                height:1,
                backgroundColor:colors.card
            }}>

            </View>

            <View style={{
                marginVertical:50,
                marginHorizontal:10,
                gap:10
            }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <Text style={{...fonts.bold,color:colors.text}}>Total Quantity </Text>
                    <Text style={{...fonts.bold,color:colors.primary}}>{totalQuantity}</Text>
                </View>
               <View style={{
                   flexDirection:'row',
                   justifyContent:'space-between'
               }}>
                   <Text style={{...fonts.bold,color:colors.text}}>Total Price </Text>
                   <Text style={{...fonts.bold,color:colors.primary}}> $ {totalPrice}</Text>
               </View>
                <View style={{
                    marginTop:30
                }}>
                    <AppButton title={"Checkout"} onPress={()=>{}} />
                </View>


            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:16
    }
})

export default CartScreen;
