import {Alert, SafeAreaView, ScrollView, View} from "react-native";
import {CommonActions, useNavigation, useTheme} from "@react-navigation/native";
import {CartScreenNavigationProp, CartStackScreenProps} from "@navigation/types";
import {Controller, useForm} from "react-hook-form";
import {validateEmailOrPhone} from "@utils/validator";
import NameInput from "@components/NameInput";
import ErrorMessage from "@components/ErrorMessage";
import React from "react";
import TextAreaInput from "@components/TextAreaInput";
import AppButton from "@components/AppButton";
import useFleetAppStore from "@store/store";

type FormData = {
    name: string;
    phone: string;
    address: string,
    notes: string,

};

const DeliveryInfo = ({route}: CartStackScreenProps<"DeliveryScreen">) => {
    const {colors, fonts} = useTheme();
    const {control, handleSubmit, formState: {errors}} = useForm<FormData>();
    const navigation = useNavigation<CartScreenNavigationProp>();
    const clearCart = useFleetAppStore((state) => state.clearCart);


      const onSubmit = (data: FormData) => {
        console.log('Form Data:', data);
        if (data) {
            Alert.alert(
                "Order Confirm",
                "Are you sure you want to order?",
                [
                    {
                        text: "Cancel", // Text for the Cancel button
                        onPress: () => console.log("Cancel Pressed"), // Action when Cancel is pressed
                        style: "cancel", // Style of the Cancel button
                    },
                    {
                        text: "OK", // Text for the OK button
                        onPress: onConfirm, // Action when OK is pressed
                    },
                ],
                {cancelable: true}
            )
        }
    };


    const onConfirm = () => {
        Alert.alert(
            "Order Successful",
            "Your order has been successfully placed!",
            [

                {
                    text: "OK", // Text for the OK button
                    onPress: () => {
                        clearCart()
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0, // Set the index to 0 to navigate to the first screen
                                routes: [{name: 'HomeTab'}], // Navigate to 'HomeTab' (replace with actual screen name)
                            })
                        )
                        // navigation.navigate('HomeTab')
                    }, // Action when OK is pressed
                },
            ]
        )
    }


    return (
        <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>

            <ScrollView contentContainerStyle={{
                marginTop: 30,
                gap: 30
            }}>


                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{required: 'Name is required',}}
                    render={({field: {onChange, value}}) => (
                        <>
                            <NameInput placeholder="name" value={value} onChangeText={onChange}/>
                            {errors.name && <ErrorMessage message={errors.name.message}/>}
                        </>

                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{required: 'Phone is required', validate: validateEmailOrPhone}}
                    render={({field: {onChange, value}}) => (
                        <>
                            <NameInput inputType={"phone"} placeholder="phone" value={value} onChangeText={onChange}/>
                            {errors.phone && <ErrorMessage message={errors.phone.message}/>}
                        </>

                    )}
                />
                <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    rules={{required: 'address is required',}}
                    render={({field: {onChange, value}}) => (
                        <>
                            <TextAreaInput placeholder="address" value={value} onChangeText={onChange}/>
                            {errors.address && <ErrorMessage message={errors.address.message}/>}
                        </>

                    )}
                />
                <Controller
                    name="notes"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}}) => (
                        <>
                            <TextAreaInput placeholder="notes" value={value} onChangeText={onChange}/>

                        </>

                    )}
                />

            </ScrollView>

            <View style={{
                marginVertical: 30,
                marginHorizontal: 30
            }}>
                <AppButton title={"Order"} onPress={handleSubmit(onSubmit)}/>
            </View>
        </SafeAreaView>
    )
}

const styles = {
    container: {
        flex: 1,
        marginHorizontal: 16,

    }
}

export default DeliveryInfo;
