import {Text, View} from "react-native";
import {AccountStackScreenProps} from "@navigation/types";

const AccountScreen = ({navigation: route} :AccountStackScreenProps<"AccountScreen">) =>{

    return(
        <View>
            <Text>Account</Text>
        </View>
    )
}

export default AccountScreen;
