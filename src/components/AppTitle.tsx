import {StyleSheet, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";

const AppTitle = () => {
    const {colors,fonts} = useTheme();
    return (
        <View style={styles.titleContainer}>
            <Text style={{color:colors.primary,...fonts.bold,fontSize:30}}>Fleet</Text>
            <Text style={{color:colors.text,...styles.textShopStyle,...fonts.bold,fontSize:30}}>Shop</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        titleContainer: {
            flexDirection: "row",
        },
        textShopStyle:{
            marginLeft:5,
        }

    }
)

export default AppTitle;
