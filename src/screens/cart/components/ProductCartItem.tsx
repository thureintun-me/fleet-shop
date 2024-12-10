import {Product} from "../../../types/ProductType";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {Minus, Plus, Trash2} from "lucide-react-native";
import useFleetAppStore from "@store/store";


const ProductCartItem: React.FC<Product> = (product: Product) => {
    const {colors, fonts} = useTheme();
    const cart = useFleetAppStore((state) => state.cart);
    const {images,id,price,title} = product;
    const selectedProduct = cart.filter(product => product.id == id)[0];
    const addToCart = useFleetAppStore((state) => state.addToCart);
    const removeFromCart = useFleetAppStore((state) => state.removeFromCart);
    const clearProductFromCart = useFleetAppStore((state) => state.clearProductFromCart);

    console.log("selected Product ", selectedProduct);

    const onIncreasePress = () =>{
        addToCart(product)
    }

   const  onDecreasePress = () =>{
        removeFromCart(id)
   }

   const clearItemFromCart = () =>{
       clearProductFromCart(id)
   }
    return (
        <View style={{flexDirection: 'row', width: "100%",justifyContent:"space-between"}}>
            <View style={{flexDirection: 'row',flex:1,}}>
                <View style={{
                    borderWidth: 1,
                    borderColor: colors.border,
                    borderRadius: 5,
                    padding: 5
                }}>
                    <Image source={{uri: images[0]}} style={{
                        width: 70,
                        height: 70,
                    }}/>
                </View>

                <View style={{
                    flexDirection: "column",
                    justifyContent: 'center',
                    paddingHorizontal: 15,
                    gap: 3,
                    flex:1
                }}>
                    <Text style={{...fonts.medium, color: colors.text}}>{title}</Text>
                    <Text style={{...fonts.medium, color: colors.primary}}>{price}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'column',justifyContent:'space-around',}}>
                <View style={{flexDirection: 'row',alignItems:'center'}}>

                    <TouchableOpacity onPress={onDecreasePress}>
                        <Minus color={colors.text} size={20}/>
                    </TouchableOpacity>


                    <Text style={{...fonts.bold,color:colors.primary,paddingLeft:5,paddingRight:8}}> {selectedProduct.quantity}</Text>
                    <TouchableOpacity onPress={onIncreasePress}>
                        <Plus color={colors.text} size={18}/>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={clearItemFromCart} style={{alignSelf:'flex-end'}}>
                    <Trash2 color={colors.text} size={20}/>
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default ProductCartItem;
