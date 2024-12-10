import {HomeStackScreenProps} from "@navigation/types";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import useFetchProductById from "@screens/home/hooks/useFetchProductById";
import {useTheme} from "@react-navigation/native";
import ProductPager from "@screens/home/components/ProductPager";
import AppButton from "@components/AppButton";
import Loading from "@screens/loading/Loading";
import useFleetAppStore from "@store/store";


const ProductDetails = ({navigation, route}: HomeStackScreenProps<"DetailsScreen">) => {

    const {data: product, isLoading} = useFetchProductById(route.params.productId);
    const {colors, fonts} = useTheme();

    const addToCart = useFleetAppStore((state) => state.addToCart);

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    const addProductToCart = () =>{
        if (product) {
           addToCart(product)
        }
    }

    return (
        <View style={{...styles.container}}>
            <ScrollView style={{flex: 1}}>
                <View style={styles.pagerWrapper}>
                    <ProductPager images={product?.images}/>
                </View>

                <View style={{gap: 5}}>
                    <Text style={{...fonts.bold, color: colors.text}}>{product?.title}</Text>
                    <Text style={{...fonts.medium, color: colors.primary}}>$ {product?.price}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: "center",
                        width: "60%",
                        gap: 10
                    }}>

                        <View style={{
                            paddingHorizontal: 8,
                            paddingVertical: 8,
                            backgroundColor: colors.primary,
                            borderRadius: 8,
                        }}>
                            <Text style={{color: colors.text, ...fonts.regular}}>{product?.category}</Text>
                        </View>

                    </View>

                    <Text style={{color: colors.text, ...fonts.regular, marginTop: 8}}>{product?.description}</Text>
                </View>
            </ScrollView>


            <View style={{
                justifyContent: 'flex-end',
                marginBottom: 30
            }}>
                <AppButton onPress={addProductToCart} title={"Add to Cart"}/>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },
    pagerWrapper: {
        marginTop: 30
    }

});
export default ProductDetails;
