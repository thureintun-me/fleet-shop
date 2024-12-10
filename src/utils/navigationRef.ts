import {CommonActions, createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from "@navigation/types";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function resetToHome() {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index: 0, // Set the index to 0 to navigate to the first screen
                routes: [{name: 'MainTabs'}], // Navigate to 'HomeTab' (replace with actual screen name)
            })
        )
    }
}
