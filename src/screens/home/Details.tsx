import {HomeStackScreenProps} from "@navigation/types";
import {View,Text} from "react-native";
import useFetchProductById from "@screens/home/hooks/useFetchProductById";


const ProductDetails  = ({navigation,route} : HomeStackScreenProps<"DetailsScreen">) => {

    const {data : product} = useFetchProductById(route.params.productId);

    return (
        <View>
            <Text>{product?.brand}</Text>
        </View>
    )
}

export default  ProductDetails;
