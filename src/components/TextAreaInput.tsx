
import {TextInput, View} from "react-native";
import {useTheme} from "@react-navigation/native";

type TextAreaInputProps = {
    placeholder: string,
    value?: string;
    onChangeText?: (text: string) => void;
}
const TextAreaInput : React.FC<TextAreaInputProps> = ({placeholder,value,onChangeText}) =>{
    const {colors,fonts} = useTheme()
    return(
        <View style={{
            alignItems:'flex-start'
        }}>
        <TextInput
            style={{
                width: "100%",
                borderWidth: 1,
                borderColor: colors.primary,
                height: 80,
                paddingHorizontal: 16,
                borderRadius: 10,
                ...fonts.regular,
                color:colors.text,
                textAlignVertical:'top',
                paddingTop:10

            }}
            multiline
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={colors.border}
            placeholder={placeholder}
        />
        </View>
    )
}

export default TextAreaInput;
