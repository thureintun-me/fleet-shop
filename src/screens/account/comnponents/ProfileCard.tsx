import {View, Text} from "react-native";
import useFleetAppStore from "@store/store";
import {useTheme} from "@react-navigation/native";
import {User} from "lucide-react-native";


const ProfileCard = () =>{
    const session = useFleetAppStore((state) => state.session);
    const {colors,fonts} = useTheme();

    return (
        <View style={{
            marginVertical:50,
            flexDirection:'row',
           // justifyContent:'center',
            alignItems:'center'
        }}>
            <View style={{
                width : 70,
                height : 70,
                borderWidth:1,
                borderRadius:70,
                borderColor:colors.border,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <User color={colors.text} size={40}  />
            </View>
            <View style={{
                paddingLeft:20
            }}>
                <Text style={{color:colors.text,...fonts.regular}}>{session?.user?.user_metadata.username}</Text>
                <Text style={{color:colors.text,...fonts.regular}}>{session?.user?.email}</Text>
            </View>

        </View>
    )
}

export  default ProfileCard;
