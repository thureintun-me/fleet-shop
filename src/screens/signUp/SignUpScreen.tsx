
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {UnAuthorizeStackScreenProps} from "@navigation/types";
import AppTitle from "@components/AppTitle";
import {useTheme} from "@react-navigation/native";
import NameInput from "@components/NameInput";
import AppButton from "@components/AppButton";
import PasswordInput from "@components/PasswordInput";
import {Controller, useForm} from "react-hook-form";
import React from "react";
import ErrorMessage from "@components/ErrorMessage";
import {validateEmailOrPhone} from "../../utils/validator";

type FormData = {
    emailOrPhone: string;
    username: string;
    password: string;
    confirmPassword: string;
};
const SignUp = ({navigation, route} : UnAuthorizeStackScreenProps<"SignUpScreen">) => {
    const {colors,fonts} = useTheme();
    const { control, handleSubmit,   formState: { errors }, } = useForm<FormData>();
    const goToSignIn = () =>{
        navigation.navigate("SignInScreen");
    }

    const onRegister = () => {
        console.log("On Register");
    }

    const onSubmit = (data: FormData) => {
        console.log('Form Data:', data);
    };



    return (
        <SafeAreaView style={{...styles.container,backgroundColor:colors.background}}>
            <View style={styles.titleContainer}>
                <AppTitle />

            </View>

            <View style={{...styles.formContainer}}>
                <View style={{gap:20}}>
                    <Controller
                        name="emailOrPhone"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Email or Phone is required',validate:validateEmailOrPhone }}
                        render={({ field: { onChange, value } }) => (
                         <>
                             <NameInput placeholder="email or phone" value={value} onChangeText={onChange} />
                             {errors.emailOrPhone &&  <ErrorMessage message={errors.emailOrPhone.message} />}
                         </>

                        )}
                    />
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Username is required' }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <NameInput placeholder="username" value={value} onChangeText={onChange} />
                                {errors.username &&  <ErrorMessage message={errors.username.message} />}
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
                                <PasswordInput placeholder={"password"} value={value} onChangeText={onChange} />
                                {errors.password &&  <ErrorMessage message={errors.password.message} />}
                            </>

                        )}
                    />

                    <Controller
                        name="confirmPassword"
                        rules={{ required: 'Confirm Password is required' }}
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                            <>
                                <PasswordInput placeholder={"confirm password"} value={value} onChangeText={onChange} />
                                {errors.confirmPassword &&  <ErrorMessage message={errors.confirmPassword.message} />}
                            </>

                        )}
                    />



                    <AppButton title="Register" onPress={handleSubmit(onSubmit)} />
                </View>
                <View style={{...styles.signInContainer}}>
                    <Text style={{...fonts.regular,color:colors.text}}>
                      Already have an account ?
                    </Text>

                    <TouchableOpacity onPress={goToSignIn}>
                        <Text style={{...fonts.regular,marginTop:5,color:colors.primary}}>
                           Login Now
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginHorizontal: 16,
        },
        titleContainer: {
            flex: 0.2,
            justifyContent: "flex-end",
            alignItems: "center",
        },

        formContainer: {
            flex: 1,
            marginVertical:60,

        },
        signInContainer: {
            flex: 1, paddingHorizontal: 15, justifyContent: "flex-end", alignItems: "center",

        }
    }
)

export default SignUp;
