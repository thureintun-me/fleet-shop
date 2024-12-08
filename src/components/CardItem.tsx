import {Product} from "../types/ProductType";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Star} from "lucide-react-native";
import React from "react";
import {useNavigation, useTheme} from "@react-navigation/native";

interface CardItemProps extends Product {
    onPress: (id : number) => void; // Define the onPress prop
}

const CardItem : React.FC<CardItemProps> = (props ) =>{
    const {colors,fonts} = useTheme();
    const { id, title, description, price,images,rating,stock, onPress } = props;
    return (
        <View key={id} style={{
            width: "48%",


        }}>
            <TouchableOpacity onPress={()=>onPress(id)} style={{
                backgroundColor: colors.card,
                elevation: 1,
                paddingHorizontal: 16,
                paddingVertical: 25,
                borderRadius: 8,
            }}>
                <Image source={{
                    uri: images[0],
                }}
                       resizeMode={'contain'}
                       style={{
                           width: "100%",
                           height: 200,
                       }}/>
                <View style={styles.itemInfoContainer}>
                    <Text numberOfLines={3} style={{...fonts.regular}}>{title}</Text>
                    <Text style={{...fonts.regular, color: colors.primary}}>$ {price}</Text>

                    <View
                        style={{flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center'}}>
                        <View style={{flexDirection: "row", alignItems: 'center'}}>
                            <Star size={14} color={"gold"}/>
                            <Text style={{...fonts.regular,}}> {rating}</Text>
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
                            <Text style={{...fonts.regular,}}> {stock} left</Text>
                        </View>

                    </View>
                </View>


            </TouchableOpacity>


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
