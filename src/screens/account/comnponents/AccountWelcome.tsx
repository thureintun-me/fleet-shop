import {Text, TouchableOpacity, View} from "react-native";
import {NavigationProp, useNavigation, useTheme} from "@react-navigation/native";
import {
    AccountStackScreenProps,
    RootStackParamList,
    UnAuthorizeStackParamsList,
    UnAuthorizeStackScreenProps
} from "@navigation/types";


const AccountWelcome = () =>{

    const {colors,fonts} = useTheme();
    const navigation =  useNavigation<NavigationProp<RootStackParamList>>()

    const goToSignIn = () => {
        navigation.navigate('Unauthorized', { screen: "SignInScreen" });
    }

    const goToSignUp = () => {
        navigation.navigate('Unauthorized', { screen: "SignUpScreen" });
    }


    return(
        <View style={{justifyContent:"center",alignItems:'center',paddingHorizontal:30,paddingTop:50}}>
            <Text style={{...fonts.regular,color:colors.primary}}>
                Hello, Welcome to Fleet Shop
            </Text>

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:20, marginTop:15}}>
                <TouchableOpacity
                    onPress={goToSignIn}
                    style={{
                    paddingHorizontal:30,
                    paddingVertical:10,
                    borderWidth:1,
                    borderColor:colors.primary,
                    backgroundColor:colors.primary,
                    borderRadius:8,
                }}>
                    <Text style={{...fonts.regular,color:colors.text}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={goToSignUp}
                    style={{
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
