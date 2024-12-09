import {Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AccountStackScreenProps} from "@navigation/types";
import {useTheme} from "@react-navigation/native";
import AccountWelcome from "@screens/account/comnponents/AccountWelcome";
import AccountMenu from "@screens/account/comnponents/AccountMenu";
import AppInfoMenu from "@screens/account/comnponents/AppInfoMenu";

const AccountScreen = ({navigation, route}:AccountStackScreenProps<"AccountScreen">) =>{

    const {colors,fonts} = useTheme();


    const goToTheme = () =>{
        navigation.navigate("ThemeScreen");
    }

    const goToPhone = () =>{
        const phone = "+95977777777";
        Linking.openURL(`tel:${phone}`)
    }

    const goToEmail = () =>{
        const mail = "thureintun.me@gmail.com";
        Linking.openURL(`mailto:${mail}`)
    }
    return(
        <SafeAreaView style={{...styles.container,backgroundColor:colors.background}}>

            <AccountWelcome />
            <ScrollView
                contentContainerStyle={{
                    gap:20
                }}
                style={{
                marginTop:30,

            }}>
                <AccountMenu title={"Theme"} onPress={goToTheme} />
                <AppInfoMenu title={"Version"} value={"1.0.0"} onPress={()=>{}} />
                <AppInfoMenu title={"Call Us"} value={"09077777777"} onPress={goToPhone} />
                <AppInfoMenu title={"Mail Us"} value={"thureintun.me@gmail.com"} onPress={goToEmail} />
            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
    }
})

export default AccountScreen;
