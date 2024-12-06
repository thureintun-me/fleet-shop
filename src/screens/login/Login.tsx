import {View, SafeAreaView, Text, StyleSheet} from "react-native";
import {UnAuthorizeStackScreenProps} from "@navigation/types";
import {useTheme} from "@react-navigation/native";


const Login = ({navigation, route}: UnAuthorizeStackScreenProps<"Login">) => {

    const {colors, fonts} = useTheme();
    console.log("FONTS ===>",fonts.bold)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{color: colors.primary, ...fonts.bold}}>Login</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }
    }
)
export default Login;
