import {Product} from "../types/ProductType";
import {Image, StyleSheet, Text, View} from "react-native";
import {Star} from "lucide-react-native";
import React from "react";
import {useTheme} from "@react-navigation/native";


const CardItem : React.FC<Product> = (product:Product) =>{
    const {colors,fonts} = useTheme();
    return (
        <View key={product.id} style={{
            width: "48%",


        }}>
            <View style={{
                backgroundColor: colors.card,
                elevation: 1,
                paddingHorizontal: 16,
                paddingVertical: 25,
                borderRadius: 8,
            }}>
                <Image source={{
                    uri: product.images[0],
                }}
                       resizeMode={'contain'}
                       style={{
                           width: "100%",
                           height: 200,
                       }}/>
                <View style={styles.itemInfoContainer}>
                    <Text numberOfLines={3} style={{...fonts.regular}}>{product.title}</Text>
                    <Text style={{...fonts.regular, color: colors.primary}}>$ {product.price}</Text>

                    <View
                        style={{flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center'}}>
                        <View style={{flexDirection: "row", alignItems: 'center'}}>
                            <Star size={14} color={"gold"}/>
                            <Text style={{...fonts.regular,}}> {product.rating}</Text>
                        </View>
                        <View style={{
                            height: 15,
                            width: 0.6,
                            backgroundColor: colors.text,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 8,
                            marginRight: 5
                        }}>

                        </View>
                        <View style={{}}>
                            <Text style={{...fonts.regular,}}> {product.stock} left</Text>
                        </View>

                    </View>
                </View>


            </View>


        </View>
    )
}

const styles = StyleSheet.create(
    {
        itemInfoContainer: {
            marginTop: 8,
            height: 60,
            gap: 6
        }
    }
)

export default CardItem;
