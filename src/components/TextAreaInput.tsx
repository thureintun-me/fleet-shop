
import {TextInput} from "react-native";
import {useTheme} from "@react-navigation/native";

type TextAreaInputProps = {
    placeholder: string,
    value?: string;
    onChangeText?: (text: string) => void;
}
const TextAreaInput : React.FC<TextAreaInputProps> = ({placeholder,value,onChangeText}) =>{
    const {colors,fonts} = useTheme()
    return(
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
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={colors.border}
            placeholder={placeholder}
        />
    )
}

export default TextAreaInput;
