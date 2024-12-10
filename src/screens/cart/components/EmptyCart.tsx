import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useNavigation, useTheme} from "@react-navigation/native";
import AppButton from "@components/AppButton";
import {AppTabsParamList, CartScreenNavigationProp, CartStackScreenProps} from "@navigation/types";


const EmptyCart = () =>{
    const {colors, fonts} = useTheme();

    const navigation = useNavigation<CartScreenNavigationProp>();
    const navigateToHome = () => {
        navigation.navigate('HomeTab')
    }

    return (
        <SafeAreaView style={{...styles.container, backgroundColor:colors.background}} >
            <View style={{
                paddingHorizontal:16,
                marginVertical:50,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text style={{...fonts.bold,color:colors.primary}}>Cart</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:50}}>
                <Text style={{...fonts.medium,color:colors.text}}>No products in cart yet</Text>
                <Text style={{...fonts.medium,color:colors.text,textAlign:'center'}}>Start by purchasing in a product and enjoy it.</Text>
                <View style={{
                    marginTop: 30
                }}>
                    <AppButton title={"Buy Your Products"} onPress={navigateToHome} />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:16
    }
})

export default EmptyCart;
