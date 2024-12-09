import {Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";


const AccountWelcome = () =>{

    const {colors,fonts} = useTheme();
    return(
        <View style={{justifyContent:"center",alignItems:'center',paddingHorizontal:30,paddingTop:50}}>
            <Text style={{...fonts.regular,color:colors.text}}>
                Hello, Welcome to Fleet Shop
            </Text>

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:20, marginTop:15}}>
                <TouchableOpacity style={{
                    paddingHorizontal:30,
                    paddingVertical:10,
                    borderWidth:1,
                    borderColor:colors.primary,
                    backgroundColor:colors.primary,
                    borderRadius:8,
                }}>
                    <Text style={{...fonts.regular,color:colors.text}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingHorizontal:30,
                    paddingVertical:10,
                    borderWidth:1,
                    borderColor:colors.card,
                    backgroundColor:colors.card,
                    borderRadius:8,
                }}>
                    <Text style={{...fonts.regular,color:colors.primary}}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AccountWelcome;
