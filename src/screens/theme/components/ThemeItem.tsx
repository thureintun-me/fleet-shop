import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {ThemeType} from "../../../types/AppThemeType";


interface ThemeItemProps {
    title: string;
    value: ThemeType;
    onPress: (val : ThemeType) => void;
    isActive : boolean
}
const ThemeItem : React.FC<ThemeItemProps> = ({title,onPress,isActive,value}) =>{

    const {colors,fonts} = useTheme();

    const backgroundColor = isActive ? colors.primary : colors.background;

    const onThemeChangePress = () => {
        onPress(value);
    }
    return (
        <TouchableOpacity onPress={onThemeChangePress} style={styles.container}>
            <Text style={{...fonts.medium,color:colors.text}}>{title}</Text>
            <View style={[styles.circle,{backgroundColor:backgroundColor,borderColor:colors.primary}]}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },

    circle :{
        width:20,
        height:20,
        borderRadius:40,
        borderWidth:1
    }

})

export  default  ThemeItem;
