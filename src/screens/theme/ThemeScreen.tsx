import {SafeAreaView, StyleSheet, View} from "react-native";
import {AccountStackScreenProps} from "@navigation/types";
import {useTheme} from "@react-navigation/native";
import ThemeItem from "@screens/theme/components/ThemeItem";
import useAppTheme from "@hooks/useAppTheme";
import {ThemeType} from "../../types/AppThemeType";
import useFleetAppStore from "@store/store";



const ThemeScreen = ({navigation: route} : AccountStackScreenProps<"ThemeScreen">) =>{
    const {colors, fonts} = useTheme();
    const selectedThemeType : ThemeType  = useFleetAppStore(state=>state.theme)
    const setSelectedThemeType = useFleetAppStore((state) => state.setTheme);

    const isLight = selectedThemeType === "light";
    const isDark = selectedThemeType === "dark";
    const isSystem = selectedThemeType === "default";


    return (
       <SafeAreaView style={{...styles.container,backgroundColor:colors.background}}>

           <View style={{gap:30,marginTop:30}}>
               <ThemeItem value={"light"} title={"Light Theme"} onPress={setSelectedThemeType} isActive={isLight}  />
               <ThemeItem value={"dark"} title={"Dark Theme"} onPress={setSelectedThemeType} isActive={isDark}/>
               <ThemeItem value={"default"} title={"System Theme"} onPress={setSelectedThemeType} isActive={isSystem} />
           </View>

       </SafeAreaView>
    )
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         marginHorizontal:16,
     }
 })
 export  default  ThemeScreen
