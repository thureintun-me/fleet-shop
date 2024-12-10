import {Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useTheme} from "@react-navigation/native";
import {UnAuthorizeStackScreenProps} from "@navigation/types";
import AppTitle from "@components/AppTitle";
import PasswordInput from "@components/PasswordInput";
import NameInput from "@components/NameInput";
import {Controller, useForm} from "react-hook-form";
import AppButton from "@components/AppButton";
import ErrorMessage from "@components/ErrorMessage";
import React, {useState} from "react";
import {validateEmailOrPhone} from "../../utils/validator";
import {supabase} from "../../libs/supabase";
import Loading from "@screens/loading/Loading";
import {resetToHome} from "@utils/navigationRef";

type FormData = {
    emailOrPhone: string;
    password: string;
};

const SignIn = ({navigation, route}: UnAuthorizeStackScreenProps<"SignInScreen">) => {
    const {colors, fonts} = useTheme();
    const { control, handleSubmit, formState :{errors} } = useForm<FormData>();
    const [loading, setLoading] = useState(false)
    const goToSignUp = () => {
        navigation.navigate("SignUpScreen");

    }


    const onSubmit = async (data: FormData) => {
        console.log('Form Data:', data);
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: data.emailOrPhone,
            password: data.password,
        })

        if (error) Alert.alert(error.message)


        setLoading(false)
        if(!error) resetToHome();
    };

    if(loading){
        return (
            <Loading />
        )
    }

    return (<SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
        <View style={styles.titleContainer}>
            <AppTitle/>
            <View style={{paddingHorizontal: 80, paddingVertical: 30}}>
                <Text style={{
                    color: colors.text, ...fonts.medium,
                    textAlign: 'center',
                    textTransform: "uppercase",
                    lineHeight: 24
                }}>
                    Shop Over 400,000 Products at unbeatable prices
                </Text>
            </View>
        </View>

        <View style={{...styles.formContainer,}}>

            <View style={{gap:20}}>
                <Controller
                    name="emailOrPhone"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Email  is required',validate: validateEmailOrPhone }}
                    render={({ field: { onChange, value } }) => (
                     <>
                         <NameInput placeholder="email" value={value} onChangeText={onChange} />
                         {errors.emailOrPhone &&  <ErrorMessage message={errors.emailOrPhone.message} />}
                     </>

                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Password is required' }}
                    render={({ field: { onChange, value } }) => (
                    <>
                        <PasswordInput
                            placeholder="password"
                            value={value}
                            onChangeText={onChange}

                        />
                        {errors.password &&  <ErrorMessage message={errors.password.message} />}
                    </>

                    )}
                />
                <AppButton title={"Login"} onPress={handleSubmit(onSubmit)}/>
            </View>

            <View style={{...styles.signUpContainer}}>
                <Text style={{...fonts.regular, color: colors.text}}>
                    Haven't Signed Up Yet ?
                </Text>

                <TouchableOpacity onPress={goToSignUp}>
                    <Text style={{...fonts.regular, marginTop: 5, color: colors.primary}}>
                        Sign Up Now
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, marginHorizontal: 16,
    }, titleContainer: {
        flex: 0.7, justifyContent: "flex-end", alignItems: "center",
    },

    formContainer: {
        flex: 1, marginVertical: 60,

    }, signUpContainer: {
        flex: 1, paddingHorizontal: 15, justifyContent: "flex-end", alignItems: "center",

    }

})

export default SignIn;
