import {View, StyleSheet} from "react-native";
import LottieView from "lottie-react-native";
import {useTheme} from "@react-navigation/native";


const Loading = () =>{

    const {colors} = useTheme();
    return(
        <View style={{...styles.animationContainer,backgroundColor:colors.background}}>
            <LottieView
                autoPlay
                loop
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: colors.background,
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../../../assets/lotties/loading.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

});

export default Loading;
