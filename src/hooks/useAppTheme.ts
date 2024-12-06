import {useColorScheme} from "react-native";
import useFleetAppStore from "@store/store";
import {AppTheme, ThemeType} from "../types/AppThemeType";
import {AppDarkTheme, AppLightTheme} from "../theme/AppTheme";


const useAppTheme = () =>{

     const colorScheme = useColorScheme();
     const selectedThemeType : ThemeType  = useFleetAppStore(state=>state.theme)

     let selectedTheme : AppTheme = selectedThemeType == "default" ? AppLightTheme : AppDarkTheme;

     return selectedTheme;
}


export default useAppTheme;
