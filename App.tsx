import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import RootNavigator from "@navigation/RootNavigator";
import './gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from "react";

const queryClient = new QueryClient()

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
    duration: 1000,
    fade: true,
});

export default function App() {

    useEffect(()=>{
        setTimeout(()=>{
            SplashScreen.hide();
        },3000)
    },[])

    return (
        <QueryClientProvider client={queryClient}>
            <RootNavigator />
            <StatusBar />
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
