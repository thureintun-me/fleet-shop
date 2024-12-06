import {create} from 'zustand'
import {ThemeType} from "../types/AppThemeType";


export interface FleetAppSate {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void;
}

const useFleetAppStore = create<FleetAppSate>()((set) => ({
    theme: "default",
    setTheme: (theme: ThemeType) => set({theme}),
}))

export default useFleetAppStore;
