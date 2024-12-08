import React from "react";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {HomeStackScreenProps} from "@navigation/types";
import {useTheme} from "@react-navigation/native";


const HomeScreen = ({ navigation, route} : HomeStackScreenProps<'HomeScreen'>) => {

   const {colors} = useTheme();
    return (
        <SafeAreaView style={{...styles.container,backgroundColor:colors.background}}>
            <Text>{} around here</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
)
export default HomeScreen;
