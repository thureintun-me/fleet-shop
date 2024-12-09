import {Appearance, useColorScheme} from "react-native";
import useFleetAppStore from "@store/store";
import {AppTheme, ThemeType} from "../types/AppThemeType";
import {AppDarkTheme, AppLightTheme} from "../theme/AppTheme";


const useAppTheme = () =>{

     const colorScheme = Appearance.getColorScheme();
     console.log("colorScheme",colorScheme);
     const selectedThemeType : ThemeType  = useFleetAppStore(state=>state.theme)

     let selectedTheme : AppTheme;

     if (selectedThemeType === "default") {
          selectedTheme = colorScheme === "light" ? AppLightTheme : AppDarkTheme;
     } else {
          selectedTheme = selectedThemeType === "light" ? AppLightTheme : AppDarkTheme;
     }
     return selectedTheme;
}


export default useAppTheme;
