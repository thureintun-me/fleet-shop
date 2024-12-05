import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {HomeStackScreenProps} from "@navigation/types";
import useBearStore, {BearState} from "@store/store";

const Home = ({ navigation, route} : HomeStackScreenProps<'Home'>) => {

    const bears = useBearStore((state: BearState )=>state.bears);
    const increasePopulation = useBearStore((state) => state.increase)
    return (
        <View>
            <Text>{bears} around here</Text>
            <TouchableOpacity onPress={()=>increasePopulation(1)}>
                <Text>Press Me</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home;
